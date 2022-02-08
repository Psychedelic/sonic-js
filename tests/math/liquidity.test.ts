import { Liquidity } from '@/math';
import BigNumber from 'bignumber.js';
import { mockPair } from '../mocks/pair';

describe('Liquidity', () => {
  describe('.getPairDecimals', () => {
    test.each`
      input      | expected
      ${[8, 12]} | ${10}
      ${[5, 4]}  | ${4}
      ${[4, 4]}  | ${4}
      ${[5, 7]}  | ${6}
    `(
      'should be $expected for pair with $input decimals ',
      ({ input: [token0Decimals, token1Decimals], expected }) => {
        expect(
          Liquidity.getPairDecimals(token0Decimals, token1Decimals)
        ).toEqual(expected);
      }
    );
  });

  describe('.getAddLiquidityPosition', () => {
    test('should return the correct Liquidity Position amount', () => {
      const result = Liquidity.getAddPosition({
        token0Amount: '0.00004466',
        token0Decimals: 8,
        token1Amount: '0.000719793445',
        token1Decimals: 12,
        reserve0: '1463673195459',
        reserve1: '235806336613029018',
        totalSupply: '571854896330929',
      });

      expect(result).toEqual(new BigNumber('1744859'));
    });

    test('should return the correct Liquidity Position amount for empty reserves', () => {
      const result = Liquidity.getAddPosition({
        token0Amount: '2',
        token0Decimals: 4,
        token1Amount: '2',
        token1Decimals: 5,
        reserve0: '0',
        reserve1: '0',
        totalSupply: '0',
      });

      expect(result).toEqual(new BigNumber('62245'));
    });
  });

  describe('.getAddPercentageString', () => {
    test('should return the correct Liquidity Position percentage (case 1)', () => {
      const result = Liquidity.getAddPercentage({
        token0Amount: '0.00004466',
        token0Decimals: 8,
        token1Amount: '0.000719793445',
        token1Decimals: 12,
        reserve0: '1463673195459',
        reserve1: '235806336613029018',
        totalSupply: '571854896330929',
      });

      expect(result).toEqual(new BigNumber('0.00000000305122681622'));
    });

    test('should return the correct Liquidity Position percentage (case 2)', () => {
      const result = Liquidity.getAddPercentage({
        token0Amount: '2',
        token0Decimals: 8,
        token1Amount: '2',
        token1Decimals: 8,
        reserve0: '200000000',
        reserve1: '200000000',
        totalSupply: '62246',
      });

      expect(result).toEqual(new BigNumber('0.5'));
    });

    test('should return the correct Liquidity Position percentage for empty reserves', () => {
      const result = Liquidity.getAddPercentage({
        token0Amount: '2',
        token0Decimals: 4,
        token1Amount: '2',
        token1Decimals: 5,
        reserve0: '0',
        reserve1: '0',
        totalSupply: '0',
      });

      expect(result).toEqual(new BigNumber('1'));
    });
  });

  describe('.getTokenBalances', () => {
    test('should return the correct token balances (case 1)', () => {
      const pair = mockPair({
        reserve0: BigInt('10000'),
        reserve1: BigInt('30000'),
        totalSupply: BigInt('40000'),
      });
      const result = Liquidity.getTokenBalances({ pair, lpBalance: 20000 });

      expect(result).toEqual({
        token0: new BigNumber('5000'),
        token1: new BigNumber('15000'),
      });
    });

    test('should return the correct token balances (case 2)', () => {
      const pair = mockPair({
        reserve0: BigInt('10000'),
        reserve1: BigInt('30000'),
        totalSupply: BigInt('17921'),
      });
      const result = Liquidity.getTokenBalances({ pair, lpBalance: 8961 });

      expect(result).toEqual({
        token0: new BigNumber('5000'),
        token1: new BigNumber('15000'),
      });
    });
  });
});
