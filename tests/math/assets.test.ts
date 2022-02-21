import { Assets } from '@/math';
import { toBigNumber } from '@/utils';
import { Token } from 'index';
import { mockToken } from '../mocks/token';

describe('Assets', () => {
  describe('.getMaxDepositAmount', () => {
    test.each`
      token                                                 | amount         | expected
      ${mockToken()}                                        | ${'0'}         | ${0.004}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${'4'}         | ${8}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${'6'}         | ${10}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${'1'}         | ${5}
      ${mockToken({ decimals: 8, fee: BigInt(2000000) })}   | ${'1'}         | ${1.04}
      ${mockToken({ decimals: 0, fee: BigInt(20) })}        | ${'41'}        | ${81}
      ${mockToken({ decimals: 0, fee: BigInt(20) })}        | ${'39.999999'} | ${79.999999}
    `('should return the expected BigNumber', ({ token, amount, expected }) => {
      expect(Assets.getDepositAmount({ token, amount })).toEqual(
        toBigNumber(expected)
      );
    });

    test('should throw for negative values', () => {
      expect(() =>
        Assets.getDepositAmount({
          token: mockToken() as Token.Metadata,
          amount: '-10.00',
        })
      ).toThrow();
    });
  });

  describe('.getWithdrawAmount', () => {
    test.each`
      token                                                 | amount         | expected
      ${mockToken()}                                        | ${'0'}         | ${0}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${'4'}         | ${2}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${'6'}         | ${4}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${'2'}         | ${0}
      ${mockToken({ decimals: 8, fee: BigInt(2000000) })}   | ${'1'}         | ${0.98}
      ${mockToken({ decimals: 0, fee: BigInt(20) })}        | ${'21'}        | ${1}
      ${mockToken({ decimals: 0, fee: BigInt(20) })}        | ${'19.999999'} | ${0}
    `('should return the expected BigNumber', ({ token, amount, expected }) => {
      expect(Assets.getWithdrawAmount({ token, amount })).toEqual(
        toBigNumber(expected)
      );
    });

    test('should throw for negative values', () => {
      expect(() =>
        Assets.getWithdrawAmount({
          token: mockToken() as Token.Metadata,
          amount: '-10.00',
        })
      ).toThrow();
    });
  });
});
