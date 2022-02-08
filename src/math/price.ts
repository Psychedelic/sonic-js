import BigNumber from 'bignumber.js';
import { toBigNumber, Types } from '..';

export class Price {
  /**
   * Calculate the total amount price by a given amount
   */
  static getByAmount(params: Price.GetByAmountParams): BigNumber {
    if (!params.amount && !params.price) return toBigNumber(0);

    const amount = toBigNumber(params.amount);
    const price = toBigNumber(params.price);

    if (amount.isZero() || price.isZero()) return toBigNumber(0);

    return amount.multipliedBy(price);
  }
}

export namespace Price {
  export type GetByAmountParams = {
    amount?: Types.Amount;
    price?: Types.Number;
  };
}
