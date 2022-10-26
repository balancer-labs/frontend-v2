import { AmountIn } from '@/providers/local/join-pool.provider';
import { TokenPrices } from '@/services/coingecko/api/price.service';
import { GasPriceService } from '@/services/gas-price/gas-price.service';
import { Pool } from '@/services/pool/types';
import { TokenInfoMap } from '@/types/TokenList';
import { BalancerSDK } from '@balancer-labs/sdk';
import { TransactionResponse } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';

export type JoinParams = {
  amountsIn: AmountIn[];
  tokensIn: TokenInfoMap;
  prices: TokenPrices;
  signer: Signer;
  slippageBsp: number;
};

export type QueryOutput = {
  bptOut: string;
  priceImpact: number;
};

export abstract class JoinPoolHandler {
  constructor(
    public readonly pool: Pool,
    public readonly sdk: BalancerSDK,
    public readonly gasPriceService: GasPriceService
  ) {}

  abstract join(params: JoinParams): Promise<TransactionResponse>;

  abstract queryJoin(
    amountsIn: AmountIn[],
    tokensIn: TokenInfoMap,
    prices: TokenPrices
  ): Promise<QueryOutput>;
}
