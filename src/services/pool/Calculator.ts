import { Token } from '@/types';
import { Pool } from '@/utils/balancer/types';
import { parseUnits, formatUnits } from '@ethersproject/units';
import { bnum } from '@/utils';
import BigNumber from 'bignumber.js';
import { BPTForTokensZeroPriceImpact } from '@balancer-labs/sor/dist/solidityHelpers/frontendHelpers/weightedHelpers';
import { _exactTokensInForBPTOut } from '@balancer-labs/sor/dist/solidityHelpers/pools/weighted';
import {
  bnum as fpBnum,
  FixedPoint
} from '@balancer-labs/sor/dist/solidityHelpers/math/FixedPoint';

interface Amounts {
  send: string[];
  receive: string[];
  fixedToken: number;
}

export default class Calculator {
  pool: Pool;
  allTokens: Token[];
  types = ['send', 'receive'];
  action: 'join' | 'exit';

  constructor(pool, allTokens, action) {
    this.pool = pool;
    this.allTokens = allTokens;
    this.action = action;
  }

  public propMax(): Amounts {
    let maxAmounts: Amounts = { send: [], receive: [], fixedToken: 0 };
    const type = this.action === 'join' ? 'send' : 'receive';

    this.pool.tokens.forEach((token, tokenIndex) => {
      let hasBalance = true;
      const balance = this.allTokens[token].balance.toString();
      const amounts = this.propAmountsGiven(balance, tokenIndex, type);

      amounts.send.forEach((amount, amountIndex) => {
        const greaterThanBalance =
          parseFloat(amount) >
          this.allTokens[this.tokenOf(type, amountIndex)].balance;
        if (greaterThanBalance) hasBalance = false;
      });

      if (hasBalance) {
        const currentMaxAmount = parseFloat(maxAmounts.send[tokenIndex] || '0');
        const thisAmount = parseFloat(amounts.send[tokenIndex]);
        if (thisAmount > currentMaxAmount) {
          maxAmounts = amounts;
          maxAmounts.fixedToken = tokenIndex;
        }
      }
    });

    return maxAmounts;
  }

  public propAmountsGiven(
    fixedAmount: string,
    index: number,
    type: 'send' | 'receive'
  ): Amounts {
    if (fixedAmount.trim() === '')
      return { send: [], receive: [], fixedToken: 0 };

    const types = ['send', 'receive'];
    const fixedTokenAddress = this.tokenOf(type, index);
    const fixedToken = this.allTokens[fixedTokenAddress];
    const fixedDenormAmount = parseUnits(fixedAmount, fixedToken.decimals);
    const fixedRatio = this.ratioOf(type, index);
    const amounts = {
      send: this.sendTokens.map(() => ''),
      receive: this.receiveTokens.map(() => ''),
      fixedToken: index
    };

    amounts[type][index] = fixedAmount;

    [this.sendRatios, this.receiveRatios].forEach((ratios, ratioType) => {
      ratios.forEach((ratio, i) => {
        if (i !== index || type !== types[ratioType]) {
          const tokenAddress = this.tokenOf(types[ratioType], i);
          const token = this.allTokens[tokenAddress];
          amounts[types[ratioType]][i] = formatUnits(
            fixedDenormAmount.mul(ratio).div(fixedRatio),
            token.decimals
          );
        }
      });
    });

    return amounts;
  }

  public joinPriceImpact(tokensIn: string[]): BigNumber {
    const bptForExactTokensIn = this.exactTokensInForBPTOut(tokensIn);
    const bptForTokensZeroPriceImpact = this.bptForTokensZeroPriceImpact(
      tokensIn
    );
    return bnum(1).minus(bptForExactTokensIn.div(bptForTokensZeroPriceImpact));
  }

  public exactTokensInForBPTOut(tokenAmounts: string[]): FixedPoint {
    const balances = this.poolTokenBalances.map(b => fpBnum(b.toString()));
    const weights = this.poolTokenWeights.map(w => fpBnum(w.toString()));
    const denormAmounts = this.denormAmounts(
      tokenAmounts,
      this.poolTokenDecimals
    );
    const amounts = denormAmounts.map(a => fpBnum(a));

    return _exactTokensInForBPTOut(
      balances,
      weights,
      amounts,
      fpBnum(this.poolTotalSupply.toString()),
      fpBnum(this.poolSwapFee.toString())
    );
  }

  public bptForTokensZeroPriceImpact(tokenAmounts: string[]): BigNumber {
    const denormAmounts = this.denormAmounts(
      tokenAmounts,
      this.poolTokenDecimals
    );
    const amounts = denormAmounts.map(a => bnum(a));

    return BPTForTokensZeroPriceImpact(
      this.poolTokenBalances,
      this.poolTokenDecimals,
      this.poolTokenWeights,
      amounts,
      this.poolTotalSupply
    );
  }

  public denormAmounts(amounts: string[], decimals: number[]): string[] {
    return amounts.map((a, i) => parseUnits(a, decimals[i]).toString());
  }

  public setAllTokens(tokens: Token[]): void {
    this.allTokens = tokens;
  }

  private tokenOf(type: string, index: number) {
    return this[`${type}Tokens`][index];
  }

  private ratioOf(type: string, index: number) {
    return this[`${type}Ratios`][index];
  }

  private get poolTokenBalances(): BigNumber[] {
    return this.pool.poolTokens.balances.map(b => bnum(b.toString()));
  }

  private get poolTokenDecimals(): number[] {
    return this.pool.tokens.map(t => this.allTokens[t].decimals);
  }

  private get poolTokenWeights(): BigNumber[] {
    return this.pool.weights.map(w => bnum(w.toString()));
  }

  private get poolTotalSupply(): BigNumber {
    return bnum(this.pool.totalSupply.toString());
  }

  private get poolSwapFee(): BigNumber {
    return bnum(this.pool.strategy.swapFee.toString());
  }

  private get poolDecimals(): number {
    return this.allTokens[this.pool.address].decimals;
  }

  private get sendTokens() {
    if (this.action === 'join') return this.pool.tokens;
    return [this.pool.address];
  }

  private get receiveTokens() {
    if (this.action === 'join') return [this.pool.address];
    return this.pool.tokens;
  }

  private get sendRatios() {
    if (this.action === 'join') return this.pool.tokenBalances;
    return [this.pool.totalSupply];
  }

  private get receiveRatios() {
    if (this.action === 'join') return [this.pool.totalSupply];
    return this.pool.tokenBalances;
  }
}
