import BigNumber from 'bignumber.js';
import { toBigNumber, Types } from '..';

export namespace Price {
  export type GetPriceByAmountParams = {
    amount?: Types.Amount;
    price?: Types.Number;
  };

  export const getPriceByAmount = (
    params: GetPriceByAmountParams
  ): BigNumber => {
    if (!params.amount && !params.price) return toBigNumber(0);

    const amount = toBigNumber(params.amount);
    const price = toBigNumber(params.price);

    if (amount.isZero() || price.isZero()) return toBigNumber(0);

    return amount.multipliedBy(price);
  };
}
