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

___

### Balances

Ƭ **Balances**: `Object`

Type definition for a pair Liquidity Position balance.
It is represented using nested object in the structure of:
[canisterId][canisterId]: Balance

#### Index signature

▪ [canisterId: `string`]: { `[canisterId: string]`: [`Balance`](Pair.md#balance);  }

___

### List

Ƭ **List**: `Object`

Type definition for a list of pairs.
It is represented using nested object in the structure of:
[canisterId][canisterId]: Metadata

#### Index signature

▪ [canisterId: `string`]: { `[canisterId: string]`: [`Metadata`](Pair.md#metadata);  }

___

### Metadata

Ƭ **Metadata**: [`PairInfoExt`](../interfaces/SwapIDL.PairInfoExt.md)

Type definition for a pair.
