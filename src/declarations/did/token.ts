import { IDL } from '@dfinity/candid';
import type { Principal } from '@dfinity/principal';

export class TokenIDL {
  static readonly factory: IDL.InterfaceFactory = ({ IDL }) => {
    const TxError = IDL.Variant({
      InsufficientAllowance: IDL.Null,
      InsufficientBalance: IDL.Null,
      ErrorOperationStyle: IDL.Null,
      Unauthorized: IDL.Null,
      LedgerTrap: IDL.Null,
      ErrorTo: IDL.Null,
      Other: IDL.Null,
      BlockUsed: IDL.Null,
      AmountTooSmall: IDL.Null,
    });
    const Result = IDL.Variant({ Ok: IDL.Nat, Err: TxError });
    const Metadata = IDL.Record({
      fee: IDL.Nat,
      decimals: IDL.Nat8,
      owner: IDL.Principal,
      logo: IDL.Text,
      name: IDL.Text,
      totalSupply: IDL.Nat,
      symbol: IDL.Text,
    });
    const TokenInfo = IDL.Record({
      holderNumber: IDL.Nat64,
      deployTime: IDL.Nat64,
      metadata: Metadata,
      historySize: IDL.Nat64,
      cycles: IDL.Nat64,
      feeTo: IDL.Principal,
    });
    return IDL.Service({
      allowance: IDL.Func([IDL.Principal, IDL.Principal], [IDL.Nat], ['query']),
      approve: IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
      balanceOf: IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
      decimals: IDL.Func([], [IDL.Nat8], ['query']),
      getAllowanceSize: IDL.Func([], [IDL.Nat64], ['query']),
      getBlockUsed: IDL.Func([], [IDL.Vec(IDL.Nat64)], ['query']),
      getHolders: IDL.Func(
        [IDL.Nat64, IDL.Nat64],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat))],
        ['query']
      ),
      logo: IDL.Func([], [IDL.Text], ['query']),
      getMetadata: IDL.Func([], [Metadata], ['query']),
      getTokenInfo: IDL.Func([], [TokenInfo], ['query']),
      getUserApprovals: IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat))],
        ['query']
      ),
      historySize: IDL.Func([], [IDL.Nat64], ['query']),
      isBlockUsed: IDL.Func([IDL.Nat64], [IDL.Bool], ['query']),
      mint: IDL.Func([IDL.Opt(IDL.Vec(IDL.Nat8)), IDL.Nat64], [Result], []),
      name: IDL.Func([], [IDL.Text], ['query']),
      owner: IDL.Func([], [IDL.Principal], ['query']),
      setFee: IDL.Func([IDL.Nat], [], []),
      setFeeTo: IDL.Func([IDL.Principal], [], []),
      setGenesis: IDL.Func([], [Result], []),
      setLogo: IDL.Func([IDL.Text], [], []),
      setName: IDL.Func([IDL.Text], [], []),
      setOwner: IDL.Func([IDL.Principal], [], []),
      symbol: IDL.Func([], [IDL.Text], ['query']),
      totalSupply: IDL.Func([], [IDL.Nat], ['query']),
      transfer: IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
      transferFrom: IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat],
        [Result],
        []
      ),
      withdraw: IDL.Func([IDL.Nat64, IDL.Text], [Result], []),
    });
  };
}

export namespace TokenIDL {
  export interface Metadata {
    fee: bigint;
    decimals: number;
    owner: Principal;
    logo: string;
    name: string;
    totalSupply: bigint;
    symbol: string;
  }
  export type Result = { Ok: bigint } | { Err: TxError };
  export interface TokenInfo {
    holderNumber: bigint;
    deployTime: bigint;
    metadata: Metadata;
    historySize: bigint;
    cycles: bigint;
    feeTo: Principal;
  }
  export type TxError =
    | { InsufficientAllowance: null }
    | { InsufficientBalance: null }
    | { ErrorOperationStyle: null }
    | { Unauthorized: null }
    | { LedgerTrap: null }
    | { ErrorTo: null }
    | { Other: null }
    | { BlockUsed: null }
    | { AmountTooSmall: null };
  export interface Token {
    allowance: (arg_0: Principal, arg_1: Principal) => Promise<bigint>;
    approve: (arg_0: Principal, arg_1: bigint) => Promise<Result>;
    balanceOf: (arg_0: Principal) => Promise<bigint>;
    decimals: () => Promise<number>;
    getAllowanceSize: () => Promise<bigint>;
    getBlockUsed: () => Promise<Array<bigint>>;
    getHolders: (
      arg_0: bigint,
      arg_1: bigint
    ) => Promise<Array<[Principal, bigint]>>;
    logo: () => Promise<string>;
    getMetadata: () => Promise<Metadata>;
    getTokenInfo: () => Promise<TokenInfo>;
    getUserApprovals: (arg_0: Principal) => Promise<Array<[Principal, bigint]>>;
    historySize: () => Promise<bigint>;
    isBlockUsed: (arg_0: bigint) => Promise<boolean>;
    mint: (arg_0: [] | [Array<number>], arg_1: bigint) => Promise<Result>;
    name: () => Promise<string>;
    owner: () => Promise<Principal>;
    setFee: (arg_0: bigint) => Promise<undefined>;
    setFeeTo: (arg_0: Principal) => Promise<undefined>;
    setGenesis: () => Promise<Result>;
    setLogo: (arg_0: string) => Promise<undefined>;
    setName: (arg_0: string) => Promise<undefined>;
    setOwner: (arg_0: Principal) => Promise<undefined>;
    symbol: () => Promise<string>;
    totalSupply: () => Promise<bigint>;
    transfer: (arg_0: Principal, arg_1: bigint) => Promise<Result>;
    transferFrom: (
      arg_0: Principal,
      arg_1: Principal,
      arg_2: bigint
    ) => Promise<Result>;
    withdraw: (arg_0: bigint, arg_1: string) => Promise<Result>;
  }
  export type Factory = Token;
}
