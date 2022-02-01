import { ActorAdapter } from '@/integrations';
import { Default, SwapIDL } from '@/declarations';

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
      const actor = sut.createActor(Default.SWAP_CANISTER_ID, SwapIDL.factory);
      expect(actor).toBeDefined();
    });
  });
});
