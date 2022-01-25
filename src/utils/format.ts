import { Types } from '@/declarations';
import BigNumber from 'bignumber.js';

export const toBigNumber = (num?: Types.Number): BigNumber => {
  return new BigNumber(Number(num || 0));
};

export const exponential = (decimals: Types.Number): BigNumber => {
  return new BigNumber(10).pow(toBigNumber(decimals));
};

export const applyDecimals = (
  num: Types.Number,
  decimals: Types.Decimals
): BigNumber => {
  return toBigNumber(num).dividedBy(exponential(decimals));
};

export const removeDecimals = (
  num: Types.Number,
  decimals: Types.Decimals
): BigNumber => {
  return toBigNumber(num).multipliedBy(exponential(decimals));
};
