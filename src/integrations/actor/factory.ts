import { SwapIDL, Default, TokenIDL } from '@/declarations';
import { ActorSubclass } from '@dfinity/agent';
import { ActorAdapter } from '.';

export interface CreateSwapActorOptions {
  canisterId?: string;
  actorAdapter?: ActorAdapter;
}

export type SwapActor = ActorSubclass<ActorSubclass<SwapIDL.Swap>>;

/**
 * Creates a Swap canister actor.
 * If no option is provided, the actor will be created using the default canister options.
 */
export const createSwapActor = ({
  canisterId = Default.SWAP_CANISTER_ID,
  actorAdapter = new ActorAdapter(),
}: CreateSwapActorOptions = {}): Promise<SwapActor> => {
  return actorAdapter.createActor(canisterId, SwapIDL.factory);
};

export interface CreateTokenActorOptions {
  canisterId: string;
  actorAdapter?: ActorAdapter;
}

export type TokenActor = ActorSubclass<TokenIDL.Token>;

/**
 * Creates a DIP20 Token canister actor.
 * If no option is provided, the actor will be created using the default canister options.
 */
export const createTokenActor = ({
  canisterId,
  actorAdapter = new ActorAdapter(),
}: CreateTokenActorOptions): Promise<TokenActor> => {
  return actorAdapter.createActor(canisterId, TokenIDL.factory);
};
