import { Types } from '@/declarations';
import BigNumber from 'bignumber.js';

/**
 * Converts a value to a BigNumber
 */
export const toBigNumber = (num?: Types.Number): BigNumber => {
  return new BigNumber(Number(num || 0));
};

/**
 * Create a exponential notation by given decimals
 */
export const exponential = (decimals: Types.Number): BigNumber => {
  return new BigNumber(10).pow(toBigNumber(decimals));
};

/**
 * Apply decimals to a number
 */
export const applyDecimals = (
  num: Types.Number,
  decimals: Types.Decimals
): BigNumber => {
  return toBigNumber(num).dividedBy(exponential(decimals)).dp(decimals);
};

/**
 * Removes decimals from a number
 */
export const removeDecimals = (
  num: Types.Number,
  decimals: Types.Decimals
): BigNumber => {
  return toBigNumber(num).dp(decimals).multipliedBy(exponential(decimals));
};

const fixStringEnding = (str: string): string => {
  return str.replace(/0+$/, '').replace(/\.$/, '');
};

/**
 * Formats an amount to a small string with scientific notation
 */
export const formatAmount = (amount: Types.Amount): string => {
  const [nat = '0', decimals = '0'] = amount.replace(/^0+/, '').split('.');

  if (Math.sign(Number(amount)) === -1) {
    return fixStringEnding(`${nat || 0}.${decimals.slice(0, 2)}`);
  }

  const thousands = Math.floor(Math.log10(Number(nat)));

  if (thousands < 3) {
    if (!nat && /^00/.test(decimals)) {
      return `< 0.01`;
    }
    return fixStringEnding(`${nat || 0}.${decimals.slice(0, 2)}`);
  } else if (thousands < 6) {
    return fixStringEnding(`${nat.slice(0, -3)}.${nat.slice(-3, -1)}`) + 'k';
  } else if (thousands < 9) {
    return fixStringEnding(`${nat.slice(0, -6)}.${nat.slice(-6, -4)}`) + 'M';
  } else {
    return `> 999M`;
  }
};
