import BigNumber from 'bignumber.js';
import { Types } from '.';
import { SwapIDL } from './did';

export namespace Token {
  /**
   * It is an object containing information about a DIP20 token.
   */
  export type Metadata = SwapIDL.TokenInfoExt;

  /**
   * It is key-object that maps a list of `Token.Metadata`.
   */
  export type MetadataList = {
    [canisterId: string]: Metadata;
  };

  /**
   * It is an object containing the metadata and an amount of a token.
   * It is used for turn easier pass data on operations.
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
   * It is key-object that maps a list of `Token.Balance`
   */
  export type BalanceList = {
    [canisterId: string]: Balance;
  };
}
