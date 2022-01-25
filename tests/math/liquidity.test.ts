import { getAddAmountLP } from '@/math';
import BigNumber from 'bignumber.js';

describe('getAddAmountLP', () => {
  test('should return the correct amount', () => {
    const result = getAddAmountLP({
      token0Amount: '0.00004466',
      token1Amount: '0.000719793445',
      reserve0: '1463673195459',
      reserve1: '235806336613029018',
      totalSupply: '571854896330929',
    });

    expect(result).toEqual(new BigNumber('0.000174557398152385'));
  });
});
