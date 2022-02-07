import { SwapActor, TokenActor } from '@/integrations';
import { Agent } from '@dfinity/agent';
import { SwapIDL, TokenIDL } from 'declarations';
import { mockAllPairsResponse } from './pair';
import { mockPrincipal } from './principal';
import { mockSupportedTokenListResponse } from './token';

export const mockSwapActor = (params: Partial<SwapIDL.Swap> = {}): SwapActor =>
  ({
    getSupportedTokenList: async () => mockSupportedTokenListResponse(),
    getAllPairs: async () => mockAllPairsResponse(),
    deposit: async () => ({ ok: BigInt(1) }),
    withdraw: async () => ({ ok: BigInt(1) }),
    ...params,
  } as unknown as SwapActor);

export const mockTokenActor = (
  params: Partial<TokenIDL.Token> = {}
): TokenActor =>
  ({
    balanceOf: async () => BigInt('1'),
    approve: async () => ({ Ok: BigInt(1) }),
    allowance: async () => BigInt(0),
    ...params,
  } as unknown as TokenActor);

export const mockAgent = (params: Partial<Agent> = {}): Agent =>
  ({
    getPrincipal: async () => mockPrincipal(),
    ...params,
  } as unknown as Agent);
