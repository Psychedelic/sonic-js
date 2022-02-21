/**
 * Parses a json string into an object.
 * This is required for parsing objects that have BigInt values.
 * @param jsonString JSON string to parse
 * @returns object or undefined
 */
export const deserialize = <T = any>(jsonString: string): T | undefined => {
  try {
    return JSON.parse(jsonString, (key, value) => {
      if (typeof value === 'string' && /^\d+n$/.test(value)) {
        return BigInt(value.substring(0, value.length - 1));
      }
      return value;
    });
  } catch {
    return undefined;
  }
};

/**
 * Parses a json object into a string.
 * This is required for parsing objects that have BigInt values.
 * @param data object to parse
 * @returns string
 */
export const serialize = <T>(data: T): string => {
  try {
    return JSON.stringify(data, (key, value) =>
      typeof value === 'bigint' ? value.toString() + 'n' : value
    );
  } catch {
    return '';
  }
};
