import BigNumber from 'bignumber.js';
import '@/big-number';

describe('applyDecimals', () => {
  test('should apply 3 decimals', () => {
    expect(new BigNumber(100).applyDecimals(3)).toEqual(new BigNumber(0.1));
  });

  test('should apply 8 decimals', () => {
    expect(new BigNumber(123).applyDecimals(8)).toEqual(
      new BigNumber(0.00000123)
    );
  });
});

describe('removeDecimals', () => {
  test('should remove 3 decimals', () => {
    expect(new BigNumber(0.1).removeDecimals(3)).toEqual(new BigNumber(100));
  });

  test('should remove 8 decimals', () => {
    expect(new BigNumber(0.00000123).removeDecimals(8)).toEqual(
      new BigNumber(123)
    );
  });
});

describe('toBigInt', () => {
  test('should throw if provided number is floating', () => {
    expect(() => new BigNumber(5.5).toBigInt()).toThrow();
  });

  test('should return a bigint', () => {
    expect(new BigNumber(5).toBigInt()).toEqual(BigInt(5));
  });
});
