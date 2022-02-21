import BigNumber from 'bignumber.js';
import { toBigNumber, Types } from '..';

/**
 * Math calculations for Price functions.
 */
export class Price {
  /**
   * Calculate the total amount price by a given amount
   * @param params Price.GetByAmountParams
   * @returns BigNumber
   */
  static getByAmount(params: Price.GetByAmountParams): BigNumber {
    if (!params.amount && !params.price) return toBigNumber(0);

    const amount = toBigNumber(params.amount);
    const price = toBigNumber(params.price);

    if (amount.isZero() || price.isZero()) return toBigNumber(0);

    return amount.multipliedBy(price);
  }
}

/**
 * Type definition for the Price.
 */
export namespace Price {
  /**
   * Type definition for getByAmount function params.
   */
  export type GetByAmountParams = {
    amount?: Types.Amount;
    price?: Types.Number;
  };
}
