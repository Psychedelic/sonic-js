import BigNumber from 'bignumber.js';
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
}
