import { Assets } from '@/math';
import { toBigNumber } from '@/utils';
import { mockBalance, mockToken } from '../mocks/token';

describe('Assets', () => {
  describe('.getMaxDepositAmount', () => {
    test.each`
      token                                                 | balance                                           | expected
      ${mockToken()}                                        | ${mockBalance({ token: toBigNumber(0) })}         | ${0}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${mockBalance({ token: toBigNumber(4) })}         | ${0}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${mockBalance({ token: toBigNumber(6) })}         | ${2}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${mockBalance({ token: toBigNumber(1) })}         | ${0}
      ${mockToken({ decimals: 8, fee: BigInt(2000000) })}   | ${mockBalance({ token: toBigNumber(1) })}         | ${0.96}
      ${mockToken({ decimals: 0, fee: BigInt(20) })}        | ${mockBalance({ token: toBigNumber(41) })}        | ${1}
      ${mockToken({ decimals: 0, fee: BigInt(20) })}        | ${mockBalance({ token: toBigNumber(39.999999) })} | ${0}
    `(
      'should return the expected BigNumber',
      ({ token, balance, expected }) => {
        expect(Assets.getMaxDepositAmount({ token, balance })).toEqual(
          toBigNumber(expected)
        );
      }
    );
  });

  describe('.getMaxWithdrawAmount', () => {
    test.each`
      token                                                 | balance                                           | expected
      ${mockToken()}                                        | ${mockBalance({ sonic: toBigNumber(0) })}         | ${0}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${mockBalance({ sonic: toBigNumber(4) })}         | ${2}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${mockBalance({ sonic: toBigNumber(6) })}         | ${4}
      ${mockToken({ decimals: 8, fee: BigInt(200000000) })} | ${mockBalance({ sonic: toBigNumber(2) })}         | ${0}
      ${mockToken({ decimals: 8, fee: BigInt(2000000) })}   | ${mockBalance({ sonic: toBigNumber(1) })}         | ${0.98}
      ${mockToken({ decimals: 0, fee: BigInt(20) })}        | ${mockBalance({ sonic: toBigNumber(21) })}        | ${1}
      ${mockToken({ decimals: 0, fee: BigInt(20) })}        | ${mockBalance({ sonic: toBigNumber(19.999999) })} | ${0}
    `(
      'should return the expected BigNumber',
      ({ token, balance, expected }) => {
        expect(Assets.getMaxWithdrawAmount({ token, balance })).toEqual(
          toBigNumber(expected)
        );
      }
    );
  });
});
