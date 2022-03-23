import { Swap } from '@/math';
import BigNumber from 'bignumber.js';
import { mockPairList } from '../mocks/pair';
import { mockTokenList } from '../mocks/token';

describe('Swap', () => {
  describe('.getAmountOut', () => {
    test('should return 0 to amountIn equal to 0', () => {
      const result = Swap.getAmountOut({
        amountIn: '0.0',
        decimalsIn: 0,
        decimalsOut: 0,
        reserveIn: 0,
        reserveOut: 0,
      });
      expect(result).toEqual(new BigNumber(0));
    });

    test.each`
      amountIn             | expected
      ${'15.030580604662'} | ${new BigNumber(0.999991)}
      ${'0.02'}            | ${new BigNumber(0.00133064)}
      ${'0.00133065'}      | ${new BigNumber(0.00008853)}
    `(
      'should return $expected for amountIn "$amountIn"',
      ({ amountIn, expected }) => {
        const result = Swap.getAmountOut({
          amountIn: amountIn,
          decimalsIn: 12,
          decimalsOut: 8,
          reserveIn: BigInt('525189312838912653'),
          reserveOut: BigInt('3504720976611'),
        });
        expect(result).toEqual(expected);
      }
    );
  });

  describe('.getAmountIn', () => {
    test('should return 0 to amountOut equal to 0', () => {
      const result = Swap.getAmountIn({
        amountOut: '0.0',
        decimalsIn: 0,
        decimalsOut: 0,
        reserveIn: 0,
        reserveOut: 0,
      });
      expect(result).toEqual(new BigNumber(0));
    });

    test.each`
      amountOut       | expected
      ${'1'}          | ${new BigNumber(15.030580604662)}
      ${'0.02'}       | ${new BigNumber(0.300603206301)}
      ${'0.00133065'} | ${new BigNumber(0.019999872169)}
    `(
      'should return $expected for amountOut "$amountOut"',
      ({ amountOut, expected }) => {
        const result = Swap.getAmountIn({
          amountOut: amountOut,
          decimalsIn: 12,
          decimalsOut: 8,
          reserveIn: BigInt('525189312838912653'),
          reserveOut: BigInt('3504720976611'),
        });
        expect(result).toEqual(expected);
      }
    );
  });

  describe('.getAmountMin', () => {
    test.each`
      amount  | decimals | slippage | expected
      ${10}   | ${8}     | ${10}    | ${new BigNumber(9)}
      ${100}  | ${8}     | ${20}    | ${new BigNumber(80)}
      ${1000} | ${8}     | ${30}    | ${new BigNumber(700)}
    `('should return $expected', ({ amount, decimals, slippage, expected }) => {
      const result = Swap.getAmountMin({
        amount,
        decimals,
        slippage,
      });
      expect(result).toEqual(expected);
    });

    test.each`
      amount | decimals | slippage
      ${0}   | ${8}     | ${10}
      ${100} | ${0}     | ${10}
      ${100} | ${8}     | ${0}
      ${NaN} | ${8}     | ${10}
      ${100} | ${NaN}   | ${10}
      ${100} | ${8}     | ${NaN}
    `(
      'should return 0 when any param is 0, NaN',
      ({ amount, decimals, slippage }) => {
        const result = Swap.getAmountMin({
          amount,
          decimals,
          slippage,
        });
        expect(result).toEqual(new BigNumber(0));
      }
    );

    test.each`
      amount  | decimals | slippage
      ${-100} | ${8}     | ${10}
      ${100}  | ${-8}    | ${10}
      ${100}  | ${8}     | ${-10}
    `(
      'should throw an error when any param is negative',
      ({ amount, decimals, slippage }) => {
        const fn = (): BigNumber =>
          Swap.getAmountMin({
            amount,
            decimals,
            slippage,
          });

        expect(fn).toThrow(Error);
        expect(fn).toThrow(
          'Negative amount, slippage or decimals are not allowed'
        );
      }
    );
  });

  describe('.getPriceImpact', () => {
    test.each`
      amountIn | amountOut | priceIn | priceOut
      ${1}     | ${1}      | ${1}    | ${0}
      ${1}     | ${1}      | ${0}    | ${1}
      ${1}     | ${0}      | ${1}    | ${1}
      ${0}     | ${1}      | ${1}    | ${1}
    `(
      'should return 0 when any param is 0',
      ({ amountIn, amountOut, priceIn, priceOut }) => {
        const result = Swap.getPriceImpact({
          amountIn,
          amountOut,
          priceIn,
          priceOut,
        });
        expect(result).toEqual(new BigNumber(0));
      }
    );

    test.each`
      amountIn | amountOut       | priceIn | priceOut        | expected
      ${10}    | ${10}           | ${1}    | ${1}            | ${0}
      ${10}    | ${5}            | ${1}    | ${2}            | ${0}
      ${1}     | ${1}            | ${5}    | ${1}            | ${-80}
      ${1}     | ${1}            | ${5}    | ${4.905}        | ${-1.9}
      ${1}     | ${1.1}          | ${1}    | ${1}            | ${10}
      ${1}     | ${1.001}        | ${1}    | ${1}            | ${0.1}
      ${1}     | ${10000}        | ${1}    | ${100}          | ${99999900}
      ${1}     | ${0.0000000001} | ${1}    | ${1}            | ${-99.99999999}
      ${1}     | ${0.0000000001} | ${1}    | ${0.0000000001} | ${'-99.999999999999999999'}
    `(
      'should return $expected when amountIn: $amountIn, amountOut: $amountOut, priceIn: $priceIn, priceOut: $priceOut',
      ({ amountIn, amountOut, priceIn, priceOut, expected }) => {
        const result = Swap.getPriceImpact({
          amountIn,
          amountOut,
          priceIn,
          priceOut,
        });
        expect(result).toEqual(new BigNumber(expected));
      }
    );
  });

  describe('.getTokenPaths', () => {
    const pairList = mockPairList();
    const tokenList = mockTokenList();

    test('should return the correct path (case 1)', () => {
      const paths = Swap.getTokenPaths({
        pairList,
        tokenList,
        tokenId: 'aanaa-xaaaa-aaaah-aaeiq-cai',
      });
      expect(paths).toEqual({
        'utozz-siaaa-aaaam-qaaxq-cai': {
          path: ['aanaa-xaaaa-aaaah-aaeiq-cai', 'utozz-siaaa-aaaam-qaaxq-cai'],
          amountOut: new BigNumber('0.06394265'),
        },
      });
    });

    test('should return the correct path (case 2)', () => {
      const paths = Swap.getTokenPaths({
        pairList,
        tokenList,
        tokenId: 'oexpe-biaaa-aaaah-qcf6q-cai',
      });
      expect(paths).toEqual({
        'onuey-xaaaa-aaaah-qcf7a-cai': {
          path: ['oexpe-biaaa-aaaah-qcf6q-cai', 'onuey-xaaaa-aaaah-qcf7a-cai'],
          amountOut: new BigNumber('0.99698012'),
        },
        'gagfc-iqaaa-aaaah-qcdvq-cai': {
          path: ['oexpe-biaaa-aaaah-qcf6q-cai', 'gagfc-iqaaa-aaaah-qcdvq-cai'],
          amountOut: new BigNumber('0.99698012'),
        },
        'gvbup-jyaaa-aaaah-qcdwa-cai': {
          path: [
            'oexpe-biaaa-aaaah-qcf6q-cai',
            'gagfc-iqaaa-aaaah-qcdvq-cai',
            'gvbup-jyaaa-aaaah-qcdwa-cai',
          ],
          amountOut: new BigNumber('1.01443836'),
        },
      });
    });

    test('should return the correct path (case 3)', () => {
      const paths = Swap.getTokenPaths({
        pairList,
        tokenList,
        tokenId: 'a7saq-3aaaa-aaaai-qbcdq-cai',
      });
      expect(paths).toEqual({
        'wjsrf-myaaa-aaaam-qaayq-cai': {
          path: ['a7saq-3aaaa-aaaai-qbcdq-cai', 'wjsrf-myaaa-aaaam-qaayq-cai'],
          amountOut: new BigNumber('0.42662751'),
        },
      });
    });

    test('should return the correct path (case 4)', () => {
      const paths = Swap.getTokenPaths({
        pairList,
        tokenList,
        tokenId: 'kftk5-4qaaa-aaaah-aa5lq-cai',
      });
      expect(paths).toEqual({});
    });

    test('should return the correct path (case 5)', () => {
      const paths = Swap.getTokenPaths({
        pairList,
        tokenList,
        tokenId: Object.keys(tokenList)[0],
        dataKey: 'to',
      });
      expect(paths).toEqual({
        'utozz-siaaa-aaaam-qaaxq-cai': {
          path: ['aanaa-xaaaa-aaaah-aaeiq-cai', 'utozz-siaaa-aaaam-qaaxq-cai'],
          amountOut: new BigNumber('0.06432769'),
        },
      });
    });

    test('should return the correct path (case 6)', () => {
      const paths = Swap.getTokenPaths({
        pairList,
        tokenList,
        tokenId: 'kftk5-4qaaa-aaaah-aa5lq-cai',
        dataKey: 'to',
      });
      expect(paths).toEqual({});
    });
  });
});
