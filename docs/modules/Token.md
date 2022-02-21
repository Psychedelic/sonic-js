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

#### Type declaration

| Name | Type |
| :------ | :------ |
| `sonic` | `BigNumber` |
| `token` | `BigNumber` |
| `total` | `BigNumber` |

#### Defined in

[declarations/token.ts:20](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/token.ts#L20)

___

### BalanceList

Ƭ **BalanceList**: `Object`

#### Index signature

▪ [canisterId: `string`]: [`Balance`](Token.md#balance)

#### Defined in

[declarations/token.ts:26](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/token.ts#L26)

___

### Metadata

Ƭ **Metadata**: [`TokenInfoExt`](../interfaces/SwapIDL.TokenInfoExt.md) & { `logo`: `string` ; `price?`: [`Amount`](Types.md#amount)  }

#### Defined in

[declarations/token.ts:6](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/token.ts#L6)

___

### MetadataList

Ƭ **MetadataList**: `Object`

#### Index signature

▪ [canisterId: `string`]: [`Metadata`](Token.md#metadata)

#### Defined in

[declarations/token.ts:11](https://github.com/Psychedelic/sonic-js/blob/33e2dd1/src/declarations/token.ts#L11)
