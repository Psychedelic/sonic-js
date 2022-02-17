import BigNumber from 'bignumber.js';
import { toBigNumber, Token, Types } from '..';

export class Assets {
  /**
   * Calculates the maximal amount of tokens that can be deposited from given token balance.
   * The calculation applies the token fee twice.
   * Fee paid for approval and fee paid for deposit.
   *
   * @param params Assets.GetMaxDepositAmountParams
   * @returns BigNumber
   */
  static getMaxDepositAmount({
    token,
    balance,
  }: Assets.GetMaxDepositAmountParams): BigNumber {
    const fee = toBigNumber(token.fee).applyDecimals(token.decimals);

    const maxAmount = balance.minus(fee.multipliedBy(2));

    if (maxAmount.lte(0)) return toBigNumber(0);
    return maxAmount;
  }

  /**
   * Calculates the resultant amount of tokens after sonic withdraw.
   * The calculation applies the token fee.
   *
   * @param params Assets.GetMaxWithdrawAmountParams
   * @returns BigNumber
   */
  static getWithdrawAmount(params: Assets.GetWithdrawAmountParams): BigNumber {
    const fee = toBigNumber(params.token.fee).applyDecimals(
      params.token.decimals
    );
    const amount = toBigNumber(params.amount).minus(fee);

    if (amount.lte(0)) return toBigNumber(0);
    return amount;
  }
}

export namespace Assets {
  export interface GetMaxDepositAmountParams {
    token: Token.Metadata;
    balance: Token.Balance['token'];
  }

  export interface GetWithdrawAmountParams {
    token: Token.Metadata;
    amount: Types.Amount;
  }
}
