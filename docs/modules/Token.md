[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / Token

# Namespace: Token

## Table of contents

### Interfaces

- [Data](../interfaces/Token.Data.md)

### Type aliases

- [Balance](Token.md#balance)
- [BalanceList](Token.md#balancelist)
- [Metadata](Token.md#metadata)
- [MetadataList](Token.md#metadatalist)

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

#### Defined in

[declarations/token.ts:33](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/token.ts#L33)

___

### BalanceList

Ƭ **BalanceList**: `Object`

Type definition for a token balance list.

#### Index signature

▪ [canisterId: `string`]: [`Balance`](Token.md#balance)

#### Defined in

[declarations/token.ts:42](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/token.ts#L42)

___

### Metadata

Ƭ **Metadata**: [`TokenInfoExt`](../interfaces/SwapIDL.TokenInfoExt.md)

Type definition for a token.

#### Defined in

[declarations/token.ts:9](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/token.ts#L9)

___

### MetadataList

Ƭ **MetadataList**: `Object`

Type definition for a list of tokens.

#### Index signature

▪ [canisterId: `string`]: [`Metadata`](Token.md#metadata)

#### Defined in

[declarations/token.ts:14](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/token.ts#L14)
