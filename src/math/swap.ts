import { findMaximalPaths, MaximalPaths } from '@/utils/maximal-paths';
import BigNumber from 'bignumber.js';
import { Price } from '.';
import {
  applyDecimals,
  Pair,
  removeDecimals,
  toBigNumber,
  Token,
  Types,
} from '..';

export class Swap {
  /**
   * Default fee for swap (0.3%)
   */
  static readonly DEFAULT_FEE = 0.003;

  /**
   * Calculate the resultant amount of a swap
   */
  static getAmountOut(params: Swap.GetAmountOutParams): BigNumber {
    const amountIn = removeDecimals(params.amountIn, params.decimalsIn);
    const reserveIn = toBigNumber(params.reserveIn);
    const reserveOut = toBigNumber(params.reserveOut);
    const fee = toBigNumber(params.fee || this.DEFAULT_FEE);

    if (amountIn.isZero()) return toBigNumber(0);

    const amountInWithFee = amountIn.multipliedBy(toBigNumber(1).minus(fee));

    const numerator = amountInWithFee.multipliedBy(reserveOut);
    const denominator = reserveIn.plus(amountInWithFee);

    return applyDecimals(numerator.dividedBy(denominator), params.decimalsOut);
  }

  /**
   * Calculate the price impact based on given amounts and prices
   */
  static getPriceImpact(params: Swap.GetPriceImpactParams): BigNumber {
    const amountIn = toBigNumber(params.amountIn);
    const amountOut = toBigNumber(params.amountOut);
    const priceIn = toBigNumber(params.priceIn);
    const priceOut = toBigNumber(params.priceOut);
    if (
      amountIn.isZero() ||
      amountIn.isNaN() ||
      amountOut.isZero() ||
      amountOut.isNaN() ||
      priceIn.isZero() ||
      priceIn.isNaN() ||
      priceOut.isZero() ||
      priceOut.isNaN()
    )
      return toBigNumber(0);

    const _amountOut = Price.getByAmount({
      amount: amountOut.toString(),
      price: priceOut,
    });
    const _amountIn = Price.getByAmount({
      amount: amountIn.toString(),
      price: priceIn,
    });

    const priceImpact = new BigNumber(1)
      .minus(new BigNumber(_amountOut).dividedBy(_amountIn))
      .multipliedBy(100)
      .negated();

    return priceImpact;
  }

  static getTokenPaths({
    pairList,
    tokenList,
    tokenId,
    amount = '1',
  }: Swap.GetTokenPathsParams): Swap.GetTokenPathsResult {
    if (!pairList[tokenId]) return {};

    const graphNodes = findMaximalPaths(
      pairList,
      tokenList,
      tokenId,
      toBigNumber(amount)
    );

    return Object.values(graphNodes).reduce<MaximalPaths.PathList>(
      (acc, node) => {
        if (node.path.size < 2) return acc;
        return {
          ...acc,
          [node.id]: {
            path: Array.from(node.path),
            amountOut: node.amountOut,
          },
        };
      },
      {}
    );
  }
}

export namespace Swap {
  export interface GetAmountOutParams {
    amountIn: Types.Amount;
    decimalsIn: Types.Decimals;
    decimalsOut: Types.Decimals;
    reserveIn: Types.Number;
    reserveOut: Types.Number;
    fee?: Types.Number;
  }

  export interface GetPriceImpactParams {
    amountIn: Types.Amount;
    amountOut: Types.Amount;
    priceIn: Types.Number;
    priceOut: Types.Number;
  }

  export type GetTokenPathsParams = {
    pairList: Pair.List;
    tokenList: Token.MetadataList;
    tokenId: string;
    amount: Types.Amount;
  };

  export type GetTokenPathsResult = MaximalPaths.PathList;
}
