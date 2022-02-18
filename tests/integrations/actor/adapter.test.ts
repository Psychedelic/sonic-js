import { ActorAdapter } from '@/integrations';
import { Default, SwapIDL } from '@/declarations';
import {
  mockActorProvider,
  mockAgent,
  mockSwapActor,
  mockTokenActor,
} from '../../mocks/actor';
import { Actor } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';

jest.mock('@dfinity/agent');

(Actor.agentOf as jest.Mock).mockImplementation(() => mockAgent());
(Actor.createActor as jest.Mock).mockImplementation(() => mockSwapActor());

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
      ActorAdapter.actors[Default.SWAP_CANISTER_ID] = {
        actor: actorMock,
        adapter: new ActorAdapter(),
      };

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

    test('should return the already created actor with provider', async () => {
      const actorMock = mockSwapActor();
      ActorAdapter.actors[Default.SWAP_CANISTER_ID] = {
        actor: actorMock,
        adapter: new ActorAdapter(),
      };

      const actorProviderMock = mockActorProvider();
      const createActorSpy = jest.spyOn(actorProviderMock, 'createActor');

      sut = new ActorAdapter(actorProviderMock);
      await sut.createActor(Default.SWAP_CANISTER_ID, SwapIDL.factory);

      expect(createActorSpy).not.toHaveBeenCalled();
    });

    test('should create new actor with provider', async () => {
      (Actor.agentOf as jest.Mock).mockImplementation(() =>
        mockAgent({
          getPrincipal: () => Promise.resolve(Principal.anonymous()),
        })
      );

      const actorMock = mockSwapActor();
      ActorAdapter.actors[Default.SWAP_CANISTER_ID] = {
        actor: actorMock,
        adapter: new ActorAdapter(),
      };

      const actorProviderMock = mockActorProvider();
      const createActorSpy = jest.spyOn(actorProviderMock, 'createActor');

      sut = new ActorAdapter(actorProviderMock);
      await sut.createActor(Default.SWAP_CANISTER_ID, SwapIDL.factory);

      expect(createActorSpy).toHaveBeenCalled();
    });
  });
});
