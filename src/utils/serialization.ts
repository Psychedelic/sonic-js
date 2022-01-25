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

export const serialize = <T>(data: T): string => {
  try {
    return JSON.stringify(data, (key, value) =>
      typeof value === 'bigint' ? value.toString() + 'n' : value
    );
  } catch {
    return '';
  }
};
