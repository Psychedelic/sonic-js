import { createSwapActor, createTokenActor } from '@/integrations';

describe('createSwapActor', () => {
  test('should create an actor', async () => {
    const actor = await createSwapActor();
    expect(actor).toBeDefined();
  });
});

describe('createTokenActor', () => {
  test('should create a token actor', async () => {
    const actor = await createTokenActor({
      canisterId: 'aanaa-xaaaa-aaaah-aaeiq-cai',
    });
    expect(actor).toBeDefined();
  });
});
