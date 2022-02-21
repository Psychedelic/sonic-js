import { SwapIDL, Default, TokenIDL } from '@/declarations';
import { ActorAdapter } from './adapter';

/**
 * Options for creating an SwapActor.
 * @param canisterId Swap canister ID, default is applied
 * @param actorAdapter ActorAdapter instance with or without a provider, default is applied
 */
export interface CreateSwapActorOptions {
  canisterId?: string;
  actorAdapter?: ActorAdapter;
}

/**
 * Type of SwapActor.
 */
export type SwapActor = ActorAdapter.Actor<SwapIDL.Swap>;

/**
 * Creates a Swap canister actor.
 * If no option is provided, the actor will be created using the default canister options.
 * @param options Options for creating the SwapActor
 * @returns SwapActor instance
 */
export const createSwapActor = ({
  canisterId = Default.SWAP_CANISTER_ID,
  actorAdapter = new ActorAdapter(),
}: CreateSwapActorOptions = {}): Promise<SwapActor> => {
  return actorAdapter.createActor(canisterId, SwapIDL.factory);
};

/**
 * Options for creating an TokenActor.
 * @param canisterId The canister id to create the actor for
 * @param actorAdapter ActorAdapter instance with or without a provider, default is applied
 */
export interface CreateTokenActorOptions {
  canisterId: string;
  actorAdapter?: ActorAdapter;
}

/**
 * Type of TokenActor.
 */
export type TokenActor = ActorAdapter.Actor<TokenIDL.Token>;

/**
 * Creates a DIP20 Token canister actor.
 * If no option is provided, the actor will be created using the default canister options.
 * @param options Options for creating the TokenActor
 * @returns TokenActor instance
 */
export const createTokenActor = ({
  canisterId,
  actorAdapter = new ActorAdapter(),
}: CreateTokenActorOptions): Promise<TokenActor> => {
  return actorAdapter.createActor(canisterId, TokenIDL.factory);
};
