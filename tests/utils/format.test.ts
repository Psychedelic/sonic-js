import BigNumber from 'bignumber.js';
import { toExponential, formatAmount, toBigNumber } from 'utils';

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

  test('should parse object', () => {
    expect(toBigNumber({} as any)).toEqual(new BigNumber(0));
  });

  test('should parse null', () => {
    expect(toBigNumber(null as any)).toEqual(new BigNumber(0));
  });

  test('should parse empty string', () => {
    expect(toBigNumber('')).toEqual(new BigNumber(0));
  });

  test('should', () => {
    expect(toBigNumber('asd')).toEqual(new BigNumber(0));
  });
});

describe('toExponential', () => {
  test('should return 1', () => {
    expect(toExponential('0')).toEqual(new BigNumber(1));
  });

  test('should return 100', () => {
    expect(toExponential(BigInt(2))).toEqual(new BigNumber(100));
  });

  test('should return 100000', () => {
    expect(toExponential(5)).toEqual(new BigNumber(100000));
  });
});

describe('formatAmount', () => {
  test.each`
    input                 | expected
    ${'0.0000000000001'}  | ${'< 0.01'}
    ${'0.0001'}           | ${'< 0.01'}
    ${'0.00999'}          | ${'< 0.01'}
    ${'1'}                | ${'1'}
    ${'.0'}               | ${'0'}
    ${'.'}                | ${'0'}
    ${'0001.'}            | ${'1'}
    ${'100'}              | ${'100'}
    ${'999'}              | ${'999'}
    ${'9999'}             | ${'9.99k'}
    ${'-9999'}            | ${'-9.99k'}
    ${'99999'}            | ${'99.99k'}
    ${'999999'}           | ${'999.99k'}
    ${'9999999'}          | ${'9.99M'}
    ${'-9999999'}         | ${'-9.99M'}
    ${'99999999'}         | ${'99.99M'}
    ${'999999999'}        | ${'999.99M'}
    ${'9999999999'}       | ${'> 999M'}
    ${'-9999999999'}      | ${'< -999M'}
    ${'-0.0000000000001'} | ${'> -0.01'}
  `('should format $input to $expected', ({ input, expected }) => {
    expect(formatAmount(input)).toEqual(expected);
  });
});
