import BigNumber from 'bignumber.js';
import { applyDecimals, exponential, removeDecimals, toBigNumber } from 'utils';

describe('toBigNumber', () => {
  test('should parse bigint', () => {
    expect(toBigNumber(BigInt(5))).toEqual(new BigNumber(5));
  });

  test('should parse string', () => {
    expect(toBigNumber('5')).toEqual(new BigNumber(5));
  });

  test('should parse number', () => {
    expect(toBigNumber(5)).toEqual(new BigNumber(5));
  });

  test('should parse BigNumber', () => {
    expect(toBigNumber(new BigNumber(5))).toEqual(new BigNumber(5));
  });

  test('should parse undefined', () => {
    expect(toBigNumber(undefined)).toEqual(new BigNumber(0));
  });

  test('should parse empty string', () => {
    expect(toBigNumber('')).toEqual(new BigNumber(0));
  });

  test('should', () => {
    expect(toBigNumber('asd')).toEqual(new BigNumber(NaN));
  });
});

describe('exponential', () => {
  test('should return 1', () => {
    expect(exponential('0')).toEqual(new BigNumber(1));
  });

  test('should return 100', () => {
    expect(exponential(BigInt(2))).toEqual(new BigNumber(100));
  });

  test('should return 100000', () => {
    expect(exponential(5)).toEqual(new BigNumber(100000));
  });
});

describe('applyDecimals', () => {
  test('should apply 3 decimals', () => {
    expect(applyDecimals(100, 3)).toEqual(new BigNumber(0.1));
  });

  test('should apply 8 decimals', () => {
    expect(applyDecimals(123, 8)).toEqual(new BigNumber(0.00000123));
  });
});

describe('removeDecimals', () => {
  test('should remove 3 decimals', () => {
    expect(removeDecimals(0.1, 3)).toEqual(new BigNumber(100));
  });

  test('should remove 8 decimals', () => {
    expect(removeDecimals(0.00000123, 8)).toEqual(new BigNumber(123));
  });
});
