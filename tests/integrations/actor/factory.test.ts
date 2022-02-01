import { createSwapActor } from '@/integrations';

describe('createSwapActor', () => {
  test('should create an actor', async () => {
    const actor = await createSwapActor();
    expect(actor).toBeDefined();
  });
});
