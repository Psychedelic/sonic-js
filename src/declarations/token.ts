import BigNumber from 'bignumber.js';
import { Types } from '.';
import { SwapIDL } from './did';

export namespace Token {
  /**
   * Type definition for a token.
   */
  export type Metadata = SwapIDL.TokenInfoExt & {
    logo: string;
    price?: Types.Amount;
  };

  /**
   * Type definition for a list of tokens.
   */
  export type MetadataList = {
    [canisterId: string]: Metadata;
  };

  /**
   * Type definition for a token data.
   * It includes the amount for functions usage.
   */
  export interface Data<M = Metadata> {
    metadata?: M;
    amount: Types.Amount;
  }

  /**
   * Type definition for a token balance.
   * @param sonic represents the user's amount deposited on sonic
   * @param token represents the user's amount from wallet
   * @param total represents the sum of sonic and token
   */
  export type Balance = {
    sonic: BigNumber;
    token: BigNumber;
    total: BigNumber;
  };

  /**
   * Type definition for a token balance list.
   */
  export type BalanceList = {
    [canisterId: string]: Balance;
  };
}
