import BigNumber from 'bignumber.js';

/**
 * Options for validation.
 */
export type CheckIfOptions = {
  isZero?: boolean;
  isNotANumber?: boolean;
  isNegative?: boolean;
};

/**
 * Checking if all values in object are valid
 * @param {{[key: string]: BigNumber}} obj Object with BigNumber to be validated
 * @param {CheckIfOptions} options
 */
export function checkIfObject(
  object: {
    [key: string]: BigNumber;
  },
  options: CheckIfOptions
): boolean {
  let isMatch = false;

  const values = Object.values(object);

  for (const value of values) {
    if (options.isZero && value.isZero()) {
      isMatch = true;
    }

    if (options.isNotANumber && value.isNaN()) {
      isMatch = true;
    }

    if (options.isNegative && value.isNegative()) {
      isMatch = true;
    }
  }

  return isMatch;
}
