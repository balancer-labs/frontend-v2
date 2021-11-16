import Service from '../balancer-contracts.service';
import { Vault__factory } from '@balancer-labs/typechain';
import { Multicaller } from '@/lib/utils/balancer/contract';
import { getAddress } from '@ethersproject/address';
import { formatUnits } from '@ethersproject/units';
import { BigNumber } from '@ethersproject/bignumber';
import { OnchainPoolData, PoolType } from '../../subgraph/types';
import ConfigService from '@/services/config/config.service';
import { TokenInfoMap } from '@/types/TokenList';
import {
  isWeightedLike,
  isStableLike,
  isTradingHaltable,
  isPhantomStable
} from '@/composables/usePool';
import { toNormalizedWeights } from '@balancer-labs/balancer-js';
import { pick } from 'lodash';

export default class Vault {
  service: Service;

  constructor(service, private readonly configService = new ConfigService()) {
    this.service = service;
  }

  public async getPoolData(
    id: string,
    type: PoolType,
    tokens: TokenInfoMap
  ): Promise<OnchainPoolData> {
    const poolAddress = getAddress(id.slice(0, 42));
    let result = {} as Record<any, any>;
    const vaultMultiCaller = new Multicaller(
      this.configService.network.key,
      this.service.provider,
      Vault__factory.abi
    );
    const poolMultiCaller = new Multicaller(
      this.configService.network.key,
      this.service.provider,
      this.service.allABIs
    );

    console.log('tokens', tokens);

    vaultMultiCaller.call('poolTokens', this.address, 'getPoolTokens', [id]);
    result = await vaultMultiCaller.execute(result);
    poolMultiCaller.call('totalSupply', poolAddress, 'totalSupply');
    poolMultiCaller.call('decimals', poolAddress, 'decimals');
    poolMultiCaller.call('swapFee', poolAddress, 'getSwapFeePercentage');

    if (isWeightedLike(type)) {
      poolMultiCaller.call('weights', poolAddress, 'getNormalizedWeights', []);

      if (isTradingHaltable(type)) {
        poolMultiCaller.call('swapEnabled', poolAddress, 'getSwapEnabled');
      }
    } else if (isStableLike(type)) {
      poolMultiCaller.call('amp', poolAddress, 'getAmplificationParameter');

      if (isPhantomStable(type)) {
        Object.keys(tokens).forEach(token => {
          poolMultiCaller.call(`subPools.${token}.priceRate`, token, 'getRate');
        });
      }
    }

    result = await poolMultiCaller.execute(result);

    console.log('onchain data', result);

    return this.serializePoolData(result, type, tokens, poolAddress);
  }

  public serializePoolData(
    data,
    type: PoolType,
    tokens: TokenInfoMap,
    poolAddress: string
  ): OnchainPoolData {
    const result = <OnchainPoolData>{};

    // Filter out pre-minted BPT token if exists
    const validTokens = Object.keys(tokens).filter(
      address => address !== poolAddress
    );
    tokens = pick(tokens, validTokens);

    const weights = this.normalizeWeights(data?.weights, type, tokens);
    data.poolTokens.tokens.map((token, i) => {
      const tokenBalance = data.poolTokens.balances[i];
      const tokenDecimals = tokens[token]?.decimals;
      result.tokens[token] = {
        balance: formatUnits(tokenBalance, tokenDecimals),
        weight: weights[i],
        decimals: tokenDecimals,
        symbol: tokens[token]?.symbol,
        name: tokens[token]?.name,
        logoURI: tokens[token]?.logoURI
      };
    });

    delete result.tokens[poolAddress];

    result.amp = '0';
    if (data?.amp) {
      result.amp = data.amp.value.div(data.amp.precision);
    }

    result.swapEnabled = true;
    if (Object.keys(data).includes('swapEnabled')) {
      result.swapEnabled = data.swapEnabled;
    }

    if (data?.subPools) {
      result.subPools = data.subPools;
    }

    result.totalSupply = formatUnits(data.totalSupply, data.decimals);
    result.decimals = data.decimals;
    result.swapFee = formatUnits(data.swapFee, 18);

    return result;
  }

  public normalizeWeights(
    weights: BigNumber[],
    type: PoolType,
    tokens: TokenInfoMap
  ): number[] {
    if (isWeightedLike(type)) {
      // toNormalizedWeights returns weights as 18 decimal fixed point
      return toNormalizedWeights(weights).map(w => Number(formatUnits(w, 18)));
    } else if (isStableLike(type)) {
      const tokensList = Object.values(tokens);
      return tokensList.map(() => 1 / tokensList.length);
    } else {
      return [];
    }
  }

  public get address(): string {
    return this.service.config.addresses.vault;
  }
}
