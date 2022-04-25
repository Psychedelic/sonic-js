import { Liquidity } from '@/math';
import BigNumber from 'bignumber.js';

describe('Liquidity', () => {
  describe('.getOppositeAmount', () => {
    test('should return correct opposite Liquidity Amount', () => {
      const oppositeAmount = Liquidity.getOppositeAmount({
        amountIn: '1',
        reserveIn: '1000',
        reserveOut: '10',
        decimalsIn: 10,
        decimalsOut: 8,
      });

      expect(oppositeAmount).toEqual(new BigNumber('1'));
    });

    test('should return zero when amount is zero', () => {
      const oppositeAmount = Liquidity.getOppositeAmount({
        amountIn: '0',
        reserveIn: '1000',
        reserveOut: '10',
        decimalsIn: 10,
        decimalsOut: 8,
      });

      expect(oppositeAmount).toEqual(new BigNumber('0'));
    });

    test('should return zero when in reserve is zero', () => {
      const oppositeAmount = Liquidity.getOppositeAmount({
        amountIn: '1',
        reserveIn: '0',
        reserveOut: '10',
        decimalsIn: 10,
        decimalsOut: 8,
      });

      expect(oppositeAmount).toEqual(new BigNumber('0'));
    });
    test('should return zero when out reserve is zero', () => {
      const oppositeAmount = Liquidity.getOppositeAmount({
        amountIn: '1',
        reserveIn: '1000',
        reserveOut: '0',
        decimalsIn: 10,
        decimalsOut: 8,
      });

      expect(oppositeAmount).toEqual(new BigNumber('0'));
    });

    test('should return zero when some of the decimals is 0', () => {
      const oppositeAmount = Liquidity.getOppositeAmount({
        amountIn: '1',
        reserveIn: '1000',
        reserveOut: '0',
        decimalsIn: 0,
        decimalsOut: 1,
      });

      expect(oppositeAmount).toEqual(new BigNumber('0'));
    });

    test('should throw when the input is invalid', () => {
      const getOppositeAmount = (): BigNumber =>
        Liquidity.getOppositeAmount({
          amountIn: '0.000000000444',
          reserveIn: '866090525036542790',
          reserveOut: '4736077088416',
          decimalsIn: 12,
          decimalsOut: 8,
        });

      expect(getOppositeAmount).toThrow();
    });
  });

  describe('.getMinimalAmountIn', () => {
    test('should return the correct minimal amount in', () => {
      const result = Liquidity.getMinimalAmountIn({
        reserve: '4736077088416',
        reserveOpposite: '866090525036542790',
        decimals: 8,
        decimalsOpposite: 12,
      });

      expect(result).toEqual(new BigNumber('0.0001'));
    });

    test('should return the correct minimal amount in', () => {
      const result = Liquidity.getMinimalAmountIn({
        reserve: '866090525036542790',
        reserveOpposite: '4736077088416',
        decimals: 12,
        decimalsOpposite: 8,
      });

      expect(result).toEqual(new BigNumber('0.001828708674'));
    });
  });

  describe('.getPosition', () => {
    test('should return the correct Liquidity Position amount', () => {
      const result = Liquidity.getPosition({
        amount0: '0.00004466',
        decimals0: 8,
        amount1: '0.000719793445',
        decimals1: 12,
        reserve0: '1463673195459',
        reserve1: '235806336613029018',
        totalSupply: '571854896330929',
      });

      expect(result).toEqual(new BigNumber('1744859'));
    });

    test('should return the correct Liquidity Position amount for empty reserves', () => {
      const result = Liquidity.getPosition({
        amount0: '2',
        decimals0: 4,
        amount1: '2',
        decimals1: 5,
        reserve0: '0',
        reserve1: '0',
        totalSupply: '0',
      });

      expect(result).toEqual(new BigNumber('62245'));
    });

    test('should throw if the amount0 is invalid', () => {
      expect(() =>
        Liquidity.getPosition({
          amount0: '1.79',
          decimals0: 8,
          amount1: '2',
          decimals1: 8,
          reserve0: '200000000',
          reserve1: '200000000',
          totalSupply: '200000000',
          slippage: 10,
        })
      ).toThrowError('Invalid amount0');
    });

    test('should throw if the amount1 is invalid', () => {
      expect(() =>
        Liquidity.getPosition({
          amount0: '2',
          decimals0: 8,
          amount1: '1.79',
          decimals1: 8,
          reserve0: '200000000',
          reserve1: '200000000',
          totalSupply: '200000000',
          slippage: 10,
        })
      ).toThrowError('Invalid amount1');
    });
  });

  describe('.getShareOfPool', () => {
    test('should return the correct Liquidity Position share of a pool (case 1)', () => {
      const result = Liquidity.getShareOfPool({
        amount0: '0.00004466',
        decimals0: 8,
        amount1: '0.000719793445',
        decimals1: 12,
        reserve0: '1463673195459',
        reserve1: '235806336613029018',
        totalSupply: '571854896330929',
      });

      expect(result).toEqual(new BigNumber('0.00000000305122681622'));
    });

    test('should return the correct Liquidity Position share of a pool (case 2)', () => {
      const result = Liquidity.getShareOfPool({
        amount0: '2',
        decimals0: 8,
        amount1: '2',
        decimals1: 8,
        reserve0: '200000000',
        reserve1: '200000000',
        totalSupply: '200000000',
      });

      expect(result).toEqual(new BigNumber('0.5'));
    });

    test('should return the correct Liquidity Position share of a pool for empty reserves', () => {
      const result = Liquidity.getShareOfPool({
        amount0: '2',
        decimals0: 4,
        amount1: '2',
        decimals1: 5,
        reserve0: '0',
        reserve1: '0',
        totalSupply: '0',
      });

      expect(result).toEqual(new BigNumber('1'));
    });
  });

  describe('.getUserPositionValue', () => {
    test('should return correct user position value', () => {
      const result = Liquidity.getUserPositionValue({
        price0: '1',
        price1: '1',
        decimals0: 8,
        decimals1: 8,
        reserve0: 100,
        reserve1: 100,
        totalShares: '200',
        userShares: '500',
      });

      expect(result).toEqual(new BigNumber('0.000005'));
    });
  });

  describe('.getTokenBalances', () => {
    test('should return the correct token balances (case 1)', () => {
      const result = Liquidity.getTokenBalances({
        decimals0: 8,
        decimals1: 8,
        reserve0: BigInt('1000000000'),
        reserve1: BigInt('3000000000'),
        totalSupply: BigInt('40000'),
        lpBalance: 20000,
      });

      expect(result).toEqual({
        balance0: new BigNumber('5'),
        balance1: new BigNumber('15'),
      });
    });

    test('should return the correct token balances (case 2)', () => {
      const result = Liquidity.getTokenBalances({
        decimals0: 8,
        decimals1: 8,
        reserve0: BigInt('1000000000'),
        reserve1: BigInt('3000000000'),
        totalSupply: BigInt('17921'),
        lpBalance: 8961,
      });

      expect(result).toEqual({
        balance0: new BigNumber('5.000279'),
        balance1: new BigNumber('15.000837'),
      });
    });
  });
});
