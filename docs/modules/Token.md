# Namespace: Token

## Table of contents

### Type Aliases

- [Balance](Token.md#balance)
- [BalanceList](Token.md#balancelist)
- [Metadata](Token.md#metadata)
- [MetadataList](Token.md#metadatalist)

### Interfaces

- [Data](../interfaces/Token.Data.md)

## Type Aliases

### Balance

Ƭ **Balance**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `sonic` | `BigNumber` |
| `token` | `BigNumber` |
| `total` | `BigNumber` |

___

### BalanceList

Ƭ **BalanceList**: `Object`

#### Index signature

▪ [canisterId: `string`]: [`Balance`](Token.md#balance)

___

### Metadata

Ƭ **Metadata**: [`TokenInfoExt`](../interfaces/SwapIDL.TokenInfoExt.md)

___

### MetadataList

Ƭ **MetadataList**: `Object`

#### Index signature

▪ [canisterId: `string`]: [`Metadata`](Token.md#metadata)
