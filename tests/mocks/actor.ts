import { SwapActor, TokenActor, ActorAdapter } from '@/integrations';
import { Agent } from '@dfinity/agent';
import { SwapIDL, TokenIDL } from 'declarations';
import { mockAllPairsResponse, mockUserLPBalanceResponse } from './pair';
import { mockPrincipal } from './principal';
import { mockSupportedTokenListResponse } from './token';

export const mockSwapActor = (params: Partial<SwapIDL.Swap> = {}): SwapActor =>
  ({
    getSupportedTokenList: async () => mockSupportedTokenListResponse(),
    getAllPairs: async () => mockAllPairsResponse(),
    deposit: async () => ({ ok: BigInt(1) }),
    withdraw: async () => ({ ok: BigInt(1) }),
    getUserBalances: async () => [
      ['aanaa-xaaaa-aaaah-aaeiq-cai', BigInt(1000000000000)],
      ['utozz-siaaa-aaaam-qaaxq-cai', BigInt(100000000)],
      ['onuey-xaaaa-aaaah-qcf7a-cai', BigInt(100000000)],
      ['oexpe-biaaa-aaaah-qcf6q-cai', BigInt(100000000)],
      ['a7saq-3aaaa-aaaai-qbcdq-cai', BigInt(100000000)],
      ['kftk5-4qaaa-aaaah-aa5lq-cai', BigInt(100000000)],
      ['li5ot-tyaaa-aaaah-aa5ma-cai', BigInt(100000000)],
      ['gagfc-iqaaa-aaaah-qcdvq-cai', BigInt(100000000)],
      ['u2nsf-eaaaa-aaaam-qaawa-cai', BigInt(100000000)],
      ['gvbup-jyaaa-aaaah-qcdwa-cai', BigInt(100000000)],
      ['xe4vl-dqaaa-aaaam-qaa7a-cai', BigInt(100000000)],
      ['cfoim-fqaaa-aaaai-qbcmq-cai', BigInt(100000000)],
      ['wjsrf-myaaa-aaaam-qaayq-cai', BigInt(100000000)],
    ],
    swapExactTokensForTokens: async () => ({ ok: BigInt(1) }),
    getUserLPBalancesAbove: async () => mockUserLPBalanceResponse(),
    addLiquidity: async () => ({ ok: BigInt(1) }),
    removeLiquidity: async () => ({ ok: BigInt(1) }),
    ...params,
  } as unknown as SwapActor);

export const mockTokenActor = (
  params: Partial<TokenIDL.Token> = {}
): TokenActor =>
  ({
    balanceOf: async () => BigInt('1'),
    approve: async () => ({ Ok: BigInt(1) }),
    allowance: async () => BigInt(0),
    decimals: async () => 12,
    ...params,
  } as unknown as TokenActor);

export const mockAgent = (params: Partial<Agent> = {}): Agent =>
  ({
    getPrincipal: async () => mockPrincipal(),
    ...params,
  } as unknown as Agent);

export const mockActorProvider = (
  params: Partial<ActorAdapter.Provider> = {}
): ActorAdapter.Provider => ({
  createActor: async () => ({} as any),
  agent: mockAgent(),
  createAgent: async () => mockAgent(),
  ...params,
});
