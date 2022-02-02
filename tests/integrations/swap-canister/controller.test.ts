import { SwapCanisterController } from 'integrations';
import { mockSwapActor } from '../../mocks/actor';
import { mockAllPairsResponse } from '../../mocks/pair';
import { mockSupportedTokenListResponse } from '../../mocks/token';

describe('SwapCanisterController', () => {
  let sut: SwapCanisterController;
  const supportedTokenListResponseMock = mockSupportedTokenListResponse();
  const allPairsResponseMock = mockAllPairsResponse();

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

  describe('.getPairsList', () => {
    test('should return a parsed list of pairs', async () => {
      const response = await sut.getPairList();

      allPairsResponseMock.forEach((mock) => {
        expect(response[mock.token0][mock.token1]).toEqual(mock);
        expect(response[mock.token1][mock.token0]).toEqual({
          ...mock,
          token0: mock.token1,
          token1: mock.token0,
          reserve0: mock.reserve1,
          reserve1: mock.reserve0,
        });
      });
    });

    test('should store the response inside the class', async () => {
      await sut.getPairList();

      expect(sut.pairList).toBeDefined();
      allPairsResponseMock.forEach((mock) => {
        expect(sut.pairList?.[mock.token0][mock.token1]).toEqual(mock);
        expect(sut.pairList?.[mock.token1][mock.token0]).toEqual({
          ...mock,
          token0: mock.token1,
          token1: mock.token0,
          reserve0: mock.reserve1,
          reserve1: mock.reserve0,
        });
      });
    });
  });
});
