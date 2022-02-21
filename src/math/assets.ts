import BigNumber from 'bignumber.js';
import { toBigNumber, Token, Types } from '..';

/**
 * Math calculations for Assets functions.
 */
export class Assets {
  /**
   * Calculates the maximal amount of tokens that can be deposited from given token balance.
   * The calculation applies the token fee twice.
   * Fee paid for approval and fee paid for deposit.
   * @param {Assets.GetDepositAmountParams} params
   * @returns {BigNumber}
   */
  static getDepositAmount(params: Assets.GetDepositAmountParams): BigNumber {
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
   * @param {Assets.GetWithdrawAmountParams} params
   * @returns {BigNumber}
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

/**
 * Type definition for the Assets.
 */
export namespace Assets {
  /**
   * Type definition for getDepositAmount function params.
   */
  export interface GetDepositAmountParams {
    token: Token.Metadata;
    amount: Types.Amount;
  }

  /**
   * Type definition for getWithdrawAmount function params.
   */
  export interface GetWithdrawAmountParams {
    token: Token.Metadata;
    amount: Types.Amount;
  }
}
