import { SwapIDL, Default } from '@/declarations';
import { ActorSubclass } from '@dfinity/agent';
import { ActorAdapter } from '.';

export interface CreateSwapActorParams {
  canisterId?: string;
  actorAdapter?: ActorAdapter;
}

export const createSwapActor = ({
  canisterId = Default.SWAP_CANISTER_ID,
  actorAdapter = new ActorAdapter(),
}: CreateSwapActorParams = {}): Promise<ActorSubclass<SwapIDL.Swap>> => {
  return actorAdapter.createActor(canisterId, SwapIDL.factory);
};
