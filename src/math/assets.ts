import BigNumber from 'bignumber.js';
import { toBigNumber, Token } from '..';

export class Assets {
  /**
   * Calculates the maximal amount of tokens that can be deposited from given token balance
   * @param params Assets.GetMaxDepositAmountParams
   * @returns BigNumber
   */
  static getMaxDepositAmount({
    token,
    balance,
  }: Assets.GetMaxDepositAmountParams): BigNumber {
    const fee = toBigNumber(token.fee).applyDecimals(token.decimals);

    const maxAmount = balance.token.minus(fee.multipliedBy(2));

    if (maxAmount.lte(0)) return toBigNumber(0);
    return maxAmount;
  }

  /**
   * Calculates the maximal amount of tokens that can be withdrawn from given sonic balance
   * @param params Assets.GetMaxWithdrawAmountParams
   * @returns BigNumber
   */
  static getMaxWithdrawAmount({
    token,
    balance,
  }: Assets.GetMaxWithdrawAmountParams): BigNumber {
    const fee = toBigNumber(token.fee).applyDecimals(token.decimals);

    const maxAmount = balance.sonic.minus(fee);

    if (maxAmount.lte(0)) return toBigNumber(0);
    return maxAmount;
  }
}

export namespace Assets {
  export interface GetMaxDepositAmountParams {
    token: Token.Metadata;
    balance: Token.Balance;
  }

  export interface GetMaxWithdrawAmountParams {
    token: Token.Metadata;
    balance: Token.Balance;
  }
}
