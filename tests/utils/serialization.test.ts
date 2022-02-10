import { deserialize, serialize } from '@/utils';

describe('deserialize', () => {
  test('should deserialize an object with bigint', () => {
    const input = '{"a": "1n"}';
    const output = { a: BigInt(1) };
    expect(deserialize(input)).toEqual(output);
  });

  test('should deserialize a multiple object', () => {
    const input = '{"a": "1n", "b": 2, "c": "some_string"}';
    const output = {
      a: BigInt(1),
      b: 2,
      c: 'some_string',
    };

    expect(deserialize(input)).toEqual(output);
  });

  test('should return undefined if an error happen', () => {
    const input = '{"a": "1n", "b": 2, "c": "some_string"';
    jest.spyOn(JSON, 'parse').mockImplementationOnce(() => {
      throw Error();
    });

    expect(deserialize(input)).toBeUndefined();
  });
});

describe('serialize', () => {
  test('should serialize an object with bigint', () => {
    const input = { a: BigInt(1) };
    const output = '{"a":"1n"}';
    expect(serialize(input)).toEqual(output);
  });

  test('should serialize a multiple object', () => {
    const input = {
      a: BigInt(1),
      b: 2,
      c: 'some_string',
    };
    const output = '{"a":"1n","b":2,"c":"some_string"}';

    expect(serialize(input)).toEqual(output);
  });

  test('should return an empty string if an error happen', () => {
    const input = { a: BigInt(1) };
    jest.spyOn(JSON, 'stringify').mockImplementationOnce(() => {
      throw Error();
    });

    expect(serialize(input)).toEqual('');
  });
});
