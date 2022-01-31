import BigNumber from 'bignumber.js';
import { Price } from '.';
import { applyDecimals, removeDecimals, toBigNumber, Types } from '..';

export namespace Swap {
  export const DEFAULT_FEE = 0.003;

  export interface GetAmountOutParams {
    amountIn: Types.Amount;
    decimalsIn: Types.Decimals;
    decimalsOut: Types.Decimals;
    reserveIn: Types.Number;
    reserveOut: Types.Number;
    fee?: Types.Number;
  }

  /**
   * Calculate the resultant amount of a swap
   */
  export const getAmountOut = (params: GetAmountOutParams): BigNumber => {
    const amountIn = removeDecimals(params.amountIn, params.decimalsIn);
    const reserveIn = toBigNumber(params.reserveIn);
    const reserveOut = toBigNumber(params.reserveOut);
    const fee = toBigNumber(params.fee || DEFAULT_FEE);

    if (amountIn.isZero()) return toBigNumber(0);

    const amountInWithFee = amountIn.multipliedBy(toBigNumber(1).minus(fee));

    const numerator = amountInWithFee.multipliedBy(reserveOut);
    const denominator = reserveIn.plus(amountInWithFee);

    return applyDecimals(numerator.dividedBy(denominator), params.decimalsOut);
  };

  export interface GetPriceImpactParams {
    amountIn: Types.Amount;
    amountOut: Types.Amount;
    priceIn: Types.Number;
    priceOut: Types.Number;
  }

  /**
   * Calculate the price impact based on given amounts and prices
   */
  export const getPriceImpact = (params: GetPriceImpactParams): BigNumber => {
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

    const _amountOut = Price.getPriceByAmount({
      amount: amountOut.toString(),
      price: priceOut,
    });
    const _amountIn = Price.getPriceByAmount({
      amount: amountIn.toString(),
      price: priceIn,
    });

    const priceImpact = new BigNumber(1)
      .minus(new BigNumber(_amountOut).dividedBy(_amountIn))
      .multipliedBy(100)
      .negated();

    return priceImpact;
  };
}
