# Namespace: Token

## Table of contents

### Type aliases

- [Balance](Token.md#balance)
- [BalanceList](Token.md#balancelist)
- [Metadata](Token.md#metadata)
- [MetadataList](Token.md#metadatalist)

### Interfaces

- [Data](../interfaces/Token.Data.md)

## Type aliases

### Balance

Ƭ **Balance**: `Object`

Type definition for a token balance.

**`param`** represents the user's amount deposited on sonic

**`param`** represents the user's amount from wallet

**`param`** represents the sum of sonic and token

#### Type declaration

| Name | Type |
| :------ | :------ |
| `sonic` | `BigNumber` |
| `token` | `BigNumber` |
| `total` | `BigNumber` |

___

### BalanceList

Ƭ **BalanceList**: `Object`

Type definition for a token balance list.

#### Index signature

▪ [canisterId: `string`]: [`Balance`](Token.md#balance)

___

### Metadata

Ƭ **Metadata**: [`TokenInfoExt`](../interfaces/SwapIDL.TokenInfoExt.md)

Type definition for a token.

___

### MetadataList

Ƭ **MetadataList**: `Object`

Type definition for a list of tokens.

#### Index signature

▪ [canisterId: `string`]: [`Metadata`](Token.md#metadata)
