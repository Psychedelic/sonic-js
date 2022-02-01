import { SwapIDL, Default } from '@/declarations';
import { ActorSubclass } from '@dfinity/agent';
import { ActorAdapter } from '.';

export interface CreateSwapActorOptions {
  canisterId?: string;
  actorAdapter?: ActorAdapter;
}

/**
 * Creates a Swap canister actor.
 * If no option is provided, the actor will be created using the default canister options.
 */
export const createSwapActor = ({
  canisterId = Default.SWAP_CANISTER_ID,
  actorAdapter = new ActorAdapter(),
}: CreateSwapActorOptions = {}): Promise<ActorSubclass<SwapIDL.Swap>> => {
  return actorAdapter.createActor(canisterId, SwapIDL.factory);
};
