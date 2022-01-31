import { Price } from '@/math';
import BigNumber from 'bignumber.js';

describe('getByAmount', () => {
  test.each`
    amount       | price
    ${undefined} | ${undefined}
    ${undefined} | ${'10'}
    ${'10'}      | ${undefined}
    ${'0'}       | ${'0'}
    ${'0'}       | ${'10'}
    ${'10'}      | ${'0'}
  `(
    'should return 0 for amount $amount and price $price',
    ({ amount, price }) => {
      const result = Price.getByAmount({ amount, price });
      expect(result).toEqual(new BigNumber(0));
    }
  );

  test.each`
    amount     | price    | expected
    ${'1'}     | ${'10'}  | ${10}
    ${2.97194} | ${'5.5'} | ${16.34567}
    ${'5'}     | ${0.001} | ${0.005}
  `(
    'should return $expected for amount $amount and price $price',
    ({ amount, price, expected }) => {
      const result = Price.getByAmount({ amount, price });
      expect(result).toEqual(new BigNumber(expected));
    }
  );
});
