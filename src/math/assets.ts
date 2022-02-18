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
  static getDepositAmount(params: Assets.GetMaxDepositAmountParams): BigNumber {
    const fee = toBigNumber(params.token.fee).applyDecimals(
      params.token.decimals
    );
    const amount = toBigNumber(params.amount, {
      validate: { isNegative: true },
    }).plus(fee.multipliedBy(2));

    if (amount.lte(0)) return toBigNumber(0);
    return amount;
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
    const amount = toBigNumber(params.amount, {
      validate: { isNegative: true },
    }).minus(fee);

    if (amount.lte(0)) return toBigNumber(0);
    return amount;
  }
}

export namespace Assets {
  export interface GetMaxDepositAmountParams {
    token: Token.Metadata;
    amount: Types.Amount;
  }

  export interface GetWithdrawAmountParams {
    token: Token.Metadata;
    amount: Types.Amount;
  }
}
