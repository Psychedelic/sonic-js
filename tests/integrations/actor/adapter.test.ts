import { ActorAdapter } from '@/integrations';
import { Default, SwapIDL } from '@/declarations';
import { mockActorProvider, mockTokenActor } from '../../mocks/actor';

describe('ActorAdapter', () => {
  let sut: ActorAdapter;

  beforeEach(() => {
    sut = new ActorAdapter();
  });

  test('should create an adapter', () => {
    expect(sut).toBeDefined();
  });

  describe('.createActor', () => {
    test('should create an actor', async () => {
      const actor = await sut.createActor(
        Default.SWAP_CANISTER_ID,
        SwapIDL.factory
      );
      expect(actor).toBeDefined();
    });

    test('should return an already existent actor', async () => {
      const actorMock = mockTokenActor();
      ActorAdapter.actors[Default.SWAP_CANISTER_ID] = actorMock;

      const actor = await sut.createActor(
        Default.SWAP_CANISTER_ID,
        SwapIDL.factory
      );
      expect(actor).toBe(actorMock);

      delete ActorAdapter.actors[Default.SWAP_CANISTER_ID];
    });

    test('should create an agent using the provider', async () => {
      const actorProviderMock = mockActorProvider({ agent: null });
      const createAgentSpy = jest.spyOn(actorProviderMock, 'createAgent');
      const createActorSpy = jest.spyOn(actorProviderMock, 'createActor');

      sut = new ActorAdapter(actorProviderMock);

      await sut.createActor(Default.SWAP_CANISTER_ID, SwapIDL.factory);

      expect(createAgentSpy).toHaveBeenCalled();
      expect(createActorSpy).toHaveBeenCalledWith({
        canisterId: Default.SWAP_CANISTER_ID,
        interfaceFactory: SwapIDL.factory,
      });
    });

    test('should not create agent if already exists', async () => {
      const actorProviderMock = mockActorProvider();
      const createAgentSpy = jest.spyOn(actorProviderMock, 'createAgent');

      sut = new ActorAdapter(actorProviderMock);
      await sut.createActor(Default.SWAP_CANISTER_ID, SwapIDL.factory);

      expect(createAgentSpy).not.toHaveBeenCalled();
    });
  });
});
