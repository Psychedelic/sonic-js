import BigNumber from 'bignumber.js';
import { Types } from '.';
import { SwapIDL } from './did';

export namespace Token {
  export type Metadata = SwapIDL.TokenInfoExt & {
    logo: string;
    price?: Types.Amount;
  };

  export type MetadataList = {
    [canisterId: string]: Metadata;
  };

  export interface Data<M = Metadata> {
    metadata?: M;
    amount: Types.Amount;
  }

  export type Balance = {
    sonic: BigNumber;
    token: BigNumber;
    total: BigNumber;
  };

  export type BalanceList = {
    [canisterId: string]: Balance;
  };
}
