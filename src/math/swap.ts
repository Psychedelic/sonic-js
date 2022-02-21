import { findMaximalPaths, MaximalPaths } from '@/utils/maximal-paths';
import BigNumber from 'bignumber.js';
import { Price } from '.';
import { checkIfObject, Pair, toBigNumber, Token, Types } from '..';

/**
 * Math calculations for Swap functions.
 */
export class Swap {
  /**
   * Default fee for swap (0.3%)
   */
  static readonly DEFAULT_FEE = 0.003;

  /**
   * Calculate the resultant amount of a swap.
   * @param {Swap.GetAmountParams} params
   * @returns {BigNumber}
   */
  static getAmount(params: Swap.GetAmountParams): BigNumber {
    const amountIn = toBigNumber(params.amountIn).removeDecimals(
      params.decimalsIn
    );
    const reserveIn = toBigNumber(params.reserveIn);
    const reserveOut = toBigNumber(params.reserveOut);
    const fee = toBigNumber(params.fee || this.DEFAULT_FEE);
    const dataKey = params.dataKey || 'from';

    if (amountIn.isZero()) return toBigNumber(0);

    const feeCoefficient =
      dataKey === 'from' ? toBigNumber(1).minus(fee) : toBigNumber(1).plus(fee);
    const amountInWithFee = amountIn.multipliedBy(feeCoefficient);

    const numerator = amountInWithFee.multipliedBy(reserveOut);
    const denominator = reserveIn.plus(amountInWithFee);

    return numerator.dividedBy(denominator).applyDecimals(params.decimalsOut);
  }

  /**
   * Calculate minimal amount of a swap.
   * @param {Swap.GetAmountMinParams} params
   * @returns {BigNumber}
   */
  static getAmountMin = (params: Swap.GetAmountMinParams): BigNumber => {
    const amount = toBigNumber(params.amount);
    const slippage = toBigNumber(params.slippage);
    const decimals = toBigNumber(params.decimals);

    const object = { amount, slippage, decimals };

    if (checkIfObject(object, { isNotANumber: true, isZero: true })) {
      return toBigNumber(0);
    }

    if (checkIfObject(object, { isNegative: true })) {
      throw new Error('Negative amount, slippage or decimals are not allowed');
    }

    return amount
      .applyTolerance(slippage.dividedBy(100).toNumber())
      .dp(decimals.toNumber());
  };

  /**
   * Calculate the price impact based on given amounts and prices.
   * @param {Swap.GetPriceImpactParams} params
   * @returns {BigNumber}
   */
  static getPriceImpact(params: Swap.GetPriceImpactParams): BigNumber {
    const amountIn = toBigNumber(params.amountIn);
    const amountOut = toBigNumber(params.amountOut);
    const priceIn = toBigNumber(params.priceIn);
    const priceOut = toBigNumber(params.priceOut);

    const object = { amountIn, amountOut, priceIn, priceOut };

    if (checkIfObject(object, { isNotANumber: true, isZero: true })) {
      return toBigNumber(0);
    }

    if (checkIfObject(object, { isNegative: true })) {
      throw new Error(
        'Negative amountIn, amountOut, priceIn or priceOut are not allowed'
      );
    }

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

  /**
   * Calculate the best token path to realize the swap and the output amount.
   * @param {Swap.GetTokenPathsParams} params
   * @returns {MaximalPaths.PathList}
   */
  static getTokenPaths({
    pairList,
    tokenList,
    tokenId,
    amount = '1',
    dataKey = 'from',
  }: Swap.GetTokenPathsParams): MaximalPaths.PathList {
    if (!pairList[tokenId]) return {};

    const graphNodes = findMaximalPaths(
      pairList,
      tokenList,
      tokenId,
      toBigNumber(amount),
      dataKey
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

/**
 * Type definition for the Swap.
 */
export namespace Swap {
  /**
   * Defines if function should be for "token from" or "token to".
   */
  export type DataKey = 'from' | 'to';

  /**
   * Type definition for getAmount function params.
   * @param {Types.Amount} amountIn Amount of token in to swap
   * @param {Types.Decimals} decimalsIn Decimals of token in
   * @param {Types.Decimals} decimalsOut Decimals of token out
   * @param {Types.Number} reserveIn Amount of token in on swap canister reserve
   * @param {Types.Number} reserveOut Amount of token out on swap canister reserve
   * @param {Types.Number} fee Amount of token out on swap canister reserve
   * @param {Types.Number} dataKey Calculate amount for "token from" or "token to"
   */
  export interface GetAmountParams {
    amountIn: Types.Amount;
    decimalsIn: Types.Decimals;
    decimalsOut: Types.Decimals;
    reserveIn: Types.Number;
    reserveOut: Types.Number;
    fee?: Types.Number;
    dataKey?: DataKey;
  }

  /**
   * Type definition for getAmountMin function params.
   * @param {Types.Amount} amount Amount of token in to swap
   * @param {Types.Decimals} decimals Decimals of token in
   * @param {Types.Number} slippage Allowed slippage percentage
   */
  export interface GetAmountMinParams {
    amount: Types.Amount;
    slippage: Types.Number;
    decimals: Types.Decimals;
  }

  /**
   * Type definition for getPriceImpact function params.
   * @param {Types.Amount} amountIn Amount of token in of swap
   * @param {Types.Amount} amountOut Amount of token out of swap
   * @param {Types.Amount} priceIn Price of single token in of swap
   * @param {Types.Amount} priceOut Price of single token out of swap
   */
  export interface GetPriceImpactParams {
    amountIn: Types.Amount;
    amountOut: Types.Amount;
    priceIn: Types.Amount;
    priceOut: Types.Amount;
  }

  /**
   * Type definition for getTokenPaths function params.
   * @param {Pair.List} pairList List of pairs from swap canister
   * @param {Token.List} tokenList List of tokens from swap canister
   * @param {string} tokenId Token id
   * @param {Types.Amount} amount Amount of token in to swap
   * @param {DataKey} dataKey Calculate amount for "token from" or "token to"
   */
  export type GetTokenPathsParams = {
    pairList: Pair.List;
    tokenList: Token.MetadataList;
    tokenId: string;
    amount?: Types.Amount;
    dataKey?: DataKey;
  };
}
