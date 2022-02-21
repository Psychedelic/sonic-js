[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Pair

# Namespace: Pair

## Table of contents

### Type aliases

- [Balance](Pair.md#balance)
- [Balances](Pair.md#balances)
- [List](Pair.md#list)
- [Metadata](Pair.md#metadata)

## Type aliases

### Balance

Ƭ **Balance**: [`Number`](Types.md#number)

Type definition for a pair Liquidity Position balance.

#### Defined in

[declarations/pair.ts:24](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/pair.ts#L24)

___

### Balances

Ƭ **Balances**: `Object`

Type definition for a pair Liquidity Position balance.
It is represented using nested object in the structure of:
[canisterId][canisterId]: Balance

#### Index signature

▪ [canisterId: `string`]: { `[canisterId: string]`: [`Balance`](Pair.md#balance);  }

#### Defined in

[declarations/pair.ts:31](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/pair.ts#L31)

___

### List

Ƭ **List**: `Object`

Type definition for a list of pairs.
It is represented using nested object in the structure of:
[canisterId][canisterId]: Metadata

#### Index signature

▪ [canisterId: `string`]: { `[canisterId: string]`: [`Metadata`](Pair.md#metadata);  }

#### Defined in

[declarations/pair.ts:15](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/pair.ts#L15)

___

### Metadata

Ƭ **Metadata**: [`PairInfoExt`](../interfaces/SwapIDL.PairInfoExt.md)

Type definition for a pair.

#### Defined in

[declarations/pair.ts:8](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/pair.ts#L8)
