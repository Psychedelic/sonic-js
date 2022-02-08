import { SwapCanisterController, SwapActor } from '@/integrations';
import { createTokenActor } from '@/integrations/actor';
import { Actor } from '@dfinity/agent';
import BigNumber from 'bignumber.js';
import { Token } from 'declarations';
import { applyDecimals, serialize } from 'utils';
import { mockAgent, mockSwapActor, mockTokenActor } from '../../mocks/actor';
import { mockAllPairsResponse } from '../../mocks/pair';
import { mockPrincipal, mockPrincipalId } from '../../mocks/principal';
import {
  mockSupportedTokenListResponse,
  mockTokenId,
  mockTokenList,
} from '../../mocks/token';

jest.mock('@/integrations/actor');

(createTokenActor as jest.Mock).mockImplementation(async () =>
  mockTokenActor()
);

jest.mock('@dfinity/agent');

(Actor.agentOf as jest.Mock).mockImplementation(() => mockAgent());

describe('SwapCanisterController', () => {
  let swapActor: SwapActor;
  let sut: SwapCanisterController;
  const supportedTokenListResponseMock = mockSupportedTokenListResponse();
  const allPairsResponseMock = mockAllPairsResponse();

  beforeEach(() => {
    swapActor = mockSwapActor();
    sut = new SwapCanisterController(swapActor);
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
        if (Number(mock.reserve0) === 0 && Number(mock.reserve1) === 0) {
          return;
        }
        expect(serialize(response[mock.token0][mock.token1])).toEqual(
          serialize(mock)
        );
        expect(serialize(response[mock.token1][mock.token0])).toEqual(
          serialize({
            ...mock,
            token0: mock.token1,
            token1: mock.token0,
            reserve0: mock.reserve1,
            reserve1: mock.reserve0,
          })
        );
      });
    });

    test('should store the response inside the class', async () => {
      await sut.getPairList();

      expect(sut.pairList).toBeDefined();
      allPairsResponseMock.forEach((mock) => {
        if (Number(mock.reserve0) === 0 && Number(mock.reserve1) === 0) {
          return;
        }
        expect(serialize(sut.pairList?.[mock.token0][mock.token1])).toEqual(
          serialize(mock)
        );
        expect(serialize(sut.pairList?.[mock.token1][mock.token0])).toEqual(
          serialize({
            ...mock,
            token0: mock.token1,
            token1: mock.token0,
            reserve0: mock.reserve1,
            reserve1: mock.reserve0,
          })
        );
      });
    });
  });

  describe('.getTokenBalances', () => {
    beforeEach(() => {
      sut.tokenList = mockTokenList();
    });

    test('should fetch token list if is not present', async () => {
      const spy = jest.spyOn(sut, 'getTokenList');
      sut.tokenList = null;

      await sut.getTokenBalances(mockPrincipalId());

      expect(spy).toHaveBeenCalled();
      expect(createTokenActor).toHaveBeenCalled();
    });

    test('should not fetch token list if is present', async () => {
      const spy = jest.spyOn(sut, 'getTokenList');
      await sut.getTokenBalances(mockPrincipalId());

      expect(spy).not.toHaveBeenCalled();
    });

    test('should return a list of token balances', async () => {
      const response = await sut.getTokenBalances(mockPrincipalId());

      Object.keys(sut.tokenList as Token.MetadataList).forEach((tokenId) => {
        expect(response[tokenId]).toBeInstanceOf(BigNumber);
      });
    });

    test('should return a list of token balances with correct values', async () => {
      const response = await sut.getTokenBalances(mockPrincipalId());

      Object.values(sut.tokenList as Token.MetadataList).forEach((token) => {
        expect(response[token.id].toNumber()).toEqual(
          applyDecimals('1', token.decimals).toNumber()
        );
      });
    });
  });

  describe('.getAgentPrincipal', () => {
    test('should return the principal', async () => {
      const response = await sut.getAgentPrincipal();
      expect(response).toEqual(mockPrincipal());
    });

    test('should return undefined', async () => {
      (Actor.agentOf as jest.Mock).mockImplementationOnce(() => undefined);
      const response = await sut.getAgentPrincipal();
      expect(response).toBeUndefined();
    });
  });

  describe('.approve', () => {
    const params = { tokenId: mockTokenId(), amount: '10' };

    beforeEach(() => {
      sut.tokenList = mockTokenList();
    });

    test('should fetch token list if is not present', async () => {
      const spy = jest.spyOn(sut, 'getTokenList');
      sut.tokenList = null;

      await sut.approve(params);

      expect(spy).toHaveBeenCalled();
      expect(createTokenActor).toHaveBeenCalled();
    });

    test('should not fetch token list if is present', async () => {
      const spy = jest.spyOn(sut, 'getTokenList');
      await sut.approve(params);

      expect(spy).not.toHaveBeenCalled();
    });

    test('should create a token actor', async () => {
      await sut.approve(params);
      expect(createTokenActor).toHaveBeenCalled();
    });

    test('should call approve on token actor', async () => {
      const spy = jest.fn().mockResolvedValue({ Ok: BigInt(1) });

      (createTokenActor as jest.Mock).mockImplementationOnce(async () =>
        mockTokenActor({ approve: spy })
      );

      await sut.approve(params);

      expect(spy).toHaveBeenCalled();
    });

    test('should not call approve if already exists allowance', async () => {
      const spy = jest.fn().mockResolvedValue({ Ok: BigInt(1) });
      const allowance = jest.fn().mockResolvedValue(BigInt('10000000000000'));

      (createTokenActor as jest.Mock).mockImplementationOnce(async () =>
        mockTokenActor({ approve: spy, allowance })
      );

      await sut.approve(params);

      expect(spy).not.toHaveBeenCalled();
    });

    test('should throw for error response', async () => {
      const spy = jest.fn().mockResolvedValue({ Err: { Other: null } });

      (createTokenActor as jest.Mock).mockImplementationOnce(async () =>
        mockTokenActor({ approve: spy })
      );

      const promise = sut.approve(params);

      await expect(promise).rejects.toThrowError(
        JSON.stringify({ Other: null })
      );
    });

    test('should throw if there is no agent principal', async () => {
      (Actor.agentOf as jest.Mock).mockImplementationOnce(() => undefined);

      const promise = sut.approve(params);
      await expect(promise).rejects.toThrow();
    });
  });

  describe('.deposit', () => {
    const params = { tokenId: mockTokenId(), amount: '10' };

    test('should call deposit', async () => {
      const spy = jest.spyOn(swapActor, 'deposit');
      await sut.deposit(params);

      expect(spy).toHaveBeenCalled();
    });

    test('should throw on deposit error response', async () => {
      jest
        .spyOn(swapActor, 'deposit')
        .mockResolvedValueOnce({ err: 'error_message' });

      const promise = sut.deposit(params);

      await expect(promise).rejects.toThrowError(
        JSON.stringify('error_message')
      );
    });
  });

  describe('.withdraw', () => {
    const params = { tokenId: mockTokenId(), amount: '10' };

    beforeEach(() => {
      sut.tokenList = mockTokenList();
    });

    test('should fetch token list if is not present', async () => {
      const spy = jest.spyOn(sut, 'getTokenList');
      sut.tokenList = null;

      await sut.withdraw(params);

      expect(spy).toHaveBeenCalled();
      expect(createTokenActor).toHaveBeenCalled();
    });

    test('should not fetch token list if is present', async () => {
      const spy = jest.spyOn(sut, 'getTokenList');
      await sut.withdraw(params);

      expect(spy).not.toHaveBeenCalled();
    });

    test('should call withdraw', async () => {
      const spy = jest.spyOn(swapActor, 'withdraw');
      await sut.withdraw(params);

      expect(spy).toHaveBeenCalled();
    });

    test('should throw on withdraw error response', async () => {
      jest
        .spyOn(swapActor, 'withdraw')
        .mockResolvedValueOnce({ err: 'error_message' });

      const promise = sut.withdraw(params);

      await expect(promise).rejects.toThrowError(
        JSON.stringify('error_message')
      );
    });
  });
});
