import { toNormalizedWeights } from '@balancer-labs/sdk';
import {
  Vault__factory,
  WeightedPool__factory,
  WeightedPoolFactory__factory,
} from '@balancer-labs/typechain';
import { defaultAbiCoder } from '@ethersproject/abi';
import { BigNumber as EPBigNumber } from '@ethersproject/bignumber';
import { AddressZero } from '@ethersproject/constants';
import { Contract } from '@ethersproject/contracts';
import {
  JsonRpcProvider,
  TransactionResponse,
  Web3Provider,
} from '@ethersproject/providers';
import BigNumber from 'bignumber.js';
import { formatUnits } from 'ethers/lib/utils';

import { PoolSeedToken } from '@/composables/pools/usePoolCreation';
import { isSameAddress, scale } from '@/lib/utils';
import { sendTransaction } from '@/lib/utils/balancer/web3';
import { configService } from '@/services/config/config.service';

type Address = string;

export interface CreatePoolReturn {
  id: string;
  address: Address;
}

const JOIN_KIND_INIT = 0;

export interface JoinPoolRequest {
  assets: Address[];
  maxAmountsIn: string[];
  userData: any;
  fromInternalBalance: boolean;
}

export default class WeightedPoolService {
  public async create(
    provider: Web3Provider,
    name: string,
    symbol: string,
    swapFee: string,
    tokens: PoolSeedToken[],
    owner: Address
  ): Promise<TransactionResponse> {
    if (!owner.length) return Promise.reject('No pool owner specified');

    const weightedPoolFactoryAddress =
      configService.network.addresses.weightedPoolFactory;

    const tokenAddresses: Address[] = tokens.map((token: PoolSeedToken) => {
      return token.tokenAddress;
    });

    const seedTokens = this.calculateTokenWeights(tokens);
    const swapFeeScaled = scale(new BigNumber(swapFee), 18);

    const params = [
      name,
      symbol,
      tokenAddresses,
      seedTokens,
      swapFeeScaled.toString(),
      owner,
    ];

    return sendTransaction(
      provider,
      weightedPoolFactoryAddress,
      WeightedPoolFactory__factory.abi,
      'create',
      params
    );
  }

  public async retrievePoolIdAndAddress(
    provider: Web3Provider | JsonRpcProvider,
    createHash: string
  ): Promise<CreatePoolReturn | null> {
    const receipt = await provider.getTransactionReceipt(createHash);
    if (!receipt) return null;

    const weightedPoolFactoryAddress =
      configService.network.addresses.weightedPoolFactory;
    const weightedPoolFactoryInterface =
      WeightedPoolFactory__factory.createInterface();

    const poolCreationEvent = receipt.logs
      .filter(log => log.address === weightedPoolFactoryAddress)
      .map(log => {
        try {
          return weightedPoolFactoryInterface.parseLog(log);
        } catch {
          return null;
        }
      })
      .find(parsedLog => parsedLog?.name === 'PoolCreated');

    if (!poolCreationEvent) return null;
    const poolAddress = poolCreationEvent.args.pool;

    const pool = WeightedPool__factory.connect(poolAddress, provider);
    const poolId = await pool.getPoolId();

    return {
      id: poolId,
      address: poolAddress,
    };
  }

  public async retrievePoolDetails(
    provider: Web3Provider | JsonRpcProvider,
    hash: string
  ) {
    if (!hash) return;
    const poolDetails = await this.retrievePoolIdAndAddress(provider, hash);
    if (poolDetails === null) return;

    const pool = WeightedPool__factory.connect(poolDetails?.address, provider);

    const vaultAddress = configService.network.addresses.vault;
    const vault = Vault__factory.connect(vaultAddress, provider);

    const { tokens } = await vault.getPoolTokens(poolDetails.id);

    const details = {
      weights: (await pool.getNormalizedWeights()).map(weight =>
        formatUnits(weight, 18)
      ),
      name: await pool.name(),
      owner: await pool.getOwner(),
      symbol: await pool.symbol(),
      tokens: tokens,
    };
    return details;
  }

  public async initJoin(
    provider: Web3Provider,
    poolId: string,
    sender: Address,
    receiver: Address,
    tokenAddresses: Address[],
    initialBalancesString: string[]
  ): Promise<TransactionResponse> {
    const initUserData = defaultAbiCoder.encode(
      ['uint256', 'uint256[]'],
      [JOIN_KIND_INIT, initialBalancesString]
    );

    const value = this.value(initialBalancesString, tokenAddresses);

    tokenAddresses = this.parseTokensIn(tokenAddresses);

    const joinPoolRequest: JoinPoolRequest = {
      assets: tokenAddresses,
      maxAmountsIn: initialBalancesString,
      userData: initUserData,
      fromInternalBalance: false,
    };

    const vaultAddress = configService.network.addresses.vault;
    return sendTransaction(
      provider,
      vaultAddress,
      Vault__factory.abi,
      'joinPool',
      [poolId, sender, receiver, joinPoolRequest],
      { value }
    );
  }

  public calculateTokenWeights(tokens: PoolSeedToken[]): string[] {
    const weights: EPBigNumber[] = tokens.map((token: PoolSeedToken) => {
      const normalizedWeight = new BigNumber(token.weight).multipliedBy(
        new BigNumber(1e16)
      );
      return EPBigNumber.from(normalizedWeight.toString());
    });
    const normalizedWeights = toNormalizedWeights(weights);
    const weightStrings = normalizedWeights.map((weight: EPBigNumber) => {
      return weight.toString();
    });

    return weightStrings;
  }

  private value(amountsIn: string[], tokensIn: string[]): EPBigNumber {
    let value = '0';
    const nativeAsset = configService.network.nativeAsset;

    amountsIn.forEach((amount, i) => {
      if (tokensIn[i] === nativeAsset.address) {
        value = amount;
      }
    });

    return EPBigNumber.from(value);
  }

  private parseTokensIn(tokensIn: string[]): string[] {
    const nativeAsset = configService.network.nativeAsset;

    return tokensIn.map(address =>
      isSameAddress(address, nativeAsset.address) ? AddressZero : address
    );
  }
}
