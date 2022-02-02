import { SwapCanisterController } from 'integrations';
import { mockSwapActor } from '../../mocks/actor';
import { mockSupportedTokenListResponse } from '../../mocks/token';

describe('SwapCanisterController', () => {
  let sut: SwapCanisterController;
  const supportedTokenListResponseMock = mockSupportedTokenListResponse();

  beforeEach(() => {
    sut = new SwapCanisterController(mockSwapActor());
  });

  describe('.getTokenList', () => {
    test('should return a parsed list of tokens', async () => {
      const response = await sut.getTokenList();

      supportedTokenListResponseMock.forEach((mock) => {
        expect(response[mock.id]).toEqual(mock);
      });
    });

    test('should store the response inside the class', async () => {
      await sut.getTokenList();

      expect(sut.tokenList).toBeDefined();
      supportedTokenListResponseMock.forEach((mock) => {
        expect(sut.tokenList?.[mock.id]).toEqual(mock);
      });
    });
  });
});
