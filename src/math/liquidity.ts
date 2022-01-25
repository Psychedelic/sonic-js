import BigNumber from 'bignumber.js';
import { toBigNumber, Types } from '..';

export interface GetAddAmountLPParams {
  token0Amount: Types.Amount;
  token1Amount: Types.Amount;
  reserve0: Types.Number;
  reserve1: Types.Number;
  totalSupply: Types.Number;
}

/**
 * Calculate the LP that's going to be add
 * Min((token0Amount * totalSupply) / (reserve0), (token1Amount * totalSupply) / (reserve1)) * 100
 */
export const getAddAmountLP = (params: GetAddAmountLPParams): BigNumber => {
  const token0Amount = toBigNumber(params.token0Amount);
  const token1Amount = toBigNumber(params.token1Amount);
  const reserve0 = toBigNumber(params.reserve0);
  const reserve1 = toBigNumber(params.reserve1);
  const totalSupply = toBigNumber(params.totalSupply);

  const one = token0Amount.times(totalSupply).div(reserve0);
  const two = token1Amount.times(totalSupply).div(reserve1);

  return BigNumber.min(one, two).multipliedBy(100);
};
