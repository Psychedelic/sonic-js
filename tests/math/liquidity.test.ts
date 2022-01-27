import {
  getLPAmount,
  getPairDecimals,
  getAddLPPercentageString,
  getLiquidityPosition,
} from '@/math';
import BigNumber from 'bignumber.js';

describe('getPairDecimals', () => {
  test.each`
    input      | expected
    ${[8, 12]} | ${10}
    ${[5, 4]}  | ${4}
    ${[4, 4]}  | ${4}
    ${[5, 7]}  | ${6}
  `(
    'should be $expected for pair with $input decimals ',
    ({ input: [token0Decimals, token1Decimals], expected }) => {
      expect(getPairDecimals(token0Decimals, token1Decimals)).toEqual(expected);
    }
  );
});

describe('getLiquidityPosition', () => {
  test('should return the correct LP amount', () => {
    const result = getLiquidityPosition({
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

  test('should return the correct LP amount for empty reserves', () => {
    const result = getLiquidityPosition({
      token0Amount: '2',
      token0Decimals: 4,
      token1Amount: '2',
      token1Decimals: 5,
      reserve0: '0',
      reserve1: '0',
      totalSupply: '0',
    });

    expect(result).toEqual(new BigNumber('62246'));
  });
});

describe('getLPAmount', () => {
  test('should return the correct LP amount', () => {
    const result = getLPAmount({
      token0Amount: '0.00004466',
      token0Decimals: 8,
      token1Amount: '0.000719793445',
      token1Decimals: 12,
      reserve0: '1463673195459',
      reserve1: '235806336613029018',
      totalSupply: '571854896330929',
    });

    expect(result).toEqual('0.0001744859');
  });

  test('should return the correct LP amount for empty reserves', () => {
    const result = getLPAmount({
      token0Amount: '2',
      token0Decimals: 4,
      token1Amount: '2',
      token1Decimals: 5,
      reserve0: '0',
      reserve1: '0',
      totalSupply: '0',
    });

    expect(result).toEqual('6.2246');
  });
});

describe('getAddLPPercentageString', () => {
  test('should return the correct LP percentage (case 1)', () => {
    const result = getAddLPPercentageString({
      token0Amount: '0.00004466',
      token0Decimals: 8,
      token1Amount: '0.000719793445',
      token1Decimals: 12,
      reserve0: '1463673195459',
      reserve1: '235806336613029018',
      totalSupply: '571854896330929',
    });

    expect(result).toEqual('< 0.01%');
  });

  test('should return the correct LP percentage (case 2)', () => {
    const result = getAddLPPercentageString({
      token0Amount: '2',
      token0Decimals: 8,
      token1Amount: '2',
      token1Decimals: 8,
      reserve0: '200000000',
      reserve1: '200000000',
      totalSupply: '62246',
    });

    expect(result).toEqual('50%');
  });

  test('should return the correct LP percentage for empty reserves', () => {
    const result = getAddLPPercentageString({
      token0Amount: '2',
      token0Decimals: 4,
      token1Amount: '2',
      token1Decimals: 5,
      reserve0: '0',
      reserve1: '0',
      totalSupply: '0',
    });

    expect(result).toEqual('100%');
  });
});
