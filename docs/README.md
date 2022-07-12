# @psychedelic/sonic-js

## Table of contents

### Classes

- [ActorAdapter](classes/ActorAdapter.md)
- [Assets](classes/Assets.md)
- [Liquidity](classes/Liquidity.md)
- [Price](classes/Price.md)
- [Swap](classes/Swap.md)
- [SwapCanisterController](classes/SwapCanisterController.md)
- [SwapIDL](classes/SwapIDL.md)
- [TokenIDL](classes/TokenIDL.md)

### Namespaces

- [ActorAdapter](modules/ActorAdapter.md)
- [Assets](modules/Assets.md)
- [Liquidity](modules/Liquidity.md)
- [MaximalPaths](modules/MaximalPaths.md)
- [Pair](modules/Pair.md)
- [Price](modules/Price.md)
- [Swap](modules/Swap.md)
- [SwapCanisterController](modules/SwapCanisterController.md)
- [SwapIDL](modules/SwapIDL.md)
- [Token](modules/Token.md)
- [TokenIDL](modules/TokenIDL.md)
- [Types](modules/Types.md)

### Type Aliases

- [CheckIfOptions](README.md#checkifoptions)
- [SwapActor](README.md#swapactor)
- [TokenActor](README.md#tokenactor)

### Interfaces

- [CreateSwapActorOptions](interfaces/CreateSwapActorOptions.md)
- [CreateTokenActorOptions](interfaces/CreateTokenActorOptions.md)
- [ToBigNumberOptions](interfaces/ToBigNumberOptions.md)

### Variables

- [Default](README.md#default)

### Functions

- [checkIfObject](README.md#checkifobject)
- [createSwapActor](README.md#createswapactor)
- [createTokenActor](README.md#createtokenactor)
- [deserialize](README.md#deserialize)
- [findMaximalPaths](README.md#findmaximalpaths)
- [findReverseMaximalPaths](README.md#findreversemaximalpaths)
- [formatAmount](README.md#formatamount)
- [getDeadline](README.md#getdeadline)
- [parseAllPairs](README.md#parseallpairs)
- [parseSupportedTokenList](README.md#parsesupportedtokenlist)
- [parseUserLPBalances](README.md#parseuserlpbalances)
- [removeEmptyPairs](README.md#removeemptypairs)
- [serialize](README.md#serialize)
- [toBigNumber](README.md#tobignumber)
- [toExponential](README.md#toexponential)

## Type Aliases

### CheckIfOptions

Ƭ **CheckIfOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isNegative?` | `boolean` |
| `isNotANumber?` | `boolean` |
| `isZero?` | `boolean` |

___

### SwapActor

Ƭ **SwapActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`Swap`](interfaces/SwapIDL.Swap.md)\>

___

### TokenActor

Ƭ **TokenActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`Token`](interfaces/TokenIDL.Token.md)\>

## Variables

### Default

• `Const` **Default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ENV` | `string` |
| `IC_HOST` | `string` |
| `SLIPPAGE` | `number` |
| `SWAP_CANISTER_ID` | `string` |

## Functions

### checkIfObject

▸ **checkIfObject**(`object`, `options`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object` | - |
| `options` | [`CheckIfOptions`](README.md#checkifoptions) |  |

#### Returns

`boolean`

___

### createSwapActor

▸ **createSwapActor**(`options?`): `Promise`<[`SwapActor`](README.md#swapactor)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateSwapActorOptions`](interfaces/CreateSwapActorOptions.md) |  |

#### Returns

`Promise`<[`SwapActor`](README.md#swapactor)\>

___

### createTokenActor

▸ **createTokenActor**(`options`): `Promise`<[`TokenActor`](README.md#tokenactor)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateTokenActorOptions`](interfaces/CreateTokenActorOptions.md) |  |

#### Returns

`Promise`<[`TokenActor`](README.md#tokenactor)\>

___

### deserialize

▸ **deserialize**<`T`\>(`jsonString`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsonString` | `string` |  |

#### Returns

`undefined` \| `T`

___

### findMaximalPaths

▸ **findMaximalPaths**(`pairList`, `tokenList`, `source`, `initialAmount`): [`NodeList`](modules/MaximalPaths.md#nodelist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairList` | [`List`](modules/Pair.md#list) |
| `tokenList` | [`MetadataList`](modules/Token.md#metadatalist) |
| `source` | `string` |
| `initialAmount` | `BigNumber` |

#### Returns

[`NodeList`](modules/MaximalPaths.md#nodelist)

___

### findReverseMaximalPaths

▸ **findReverseMaximalPaths**(`pairList`, `tokenList`, `source`, `initialAmount`): [`NodeList`](modules/MaximalPaths.md#nodelist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairList` | [`List`](modules/Pair.md#list) |
| `tokenList` | [`MetadataList`](modules/Token.md#metadatalist) |
| `source` | `string` |
| `initialAmount` | `BigNumber` |

#### Returns

[`NodeList`](modules/MaximalPaths.md#nodelist)

___

### formatAmount

▸ **formatAmount**(`amount`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |

#### Returns

`string`

___

### getDeadline

▸ **getDeadline**(): `bigint`

#### Returns

`bigint`

___

### parseAllPairs

▸ **parseAllPairs**(`response`): [`List`](modules/Pair.md#list)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`PairInfoExt`](interfaces/SwapIDL.PairInfoExt.md)[] |  |

#### Returns

[`List`](modules/Pair.md#list)

___

### parseSupportedTokenList

▸ **parseSupportedTokenList**(`response`): [`MetadataList`](modules/Token.md#metadatalist)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`TokenInfoExt`](interfaces/SwapIDL.TokenInfoExt.md)[] |  |

#### Returns

[`MetadataList`](modules/Token.md#metadatalist)

___

### parseUserLPBalances

▸ **parseUserLPBalances**(`response`): [`Balances`](modules/Pair.md#balances)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`string`, `bigint`][] |  |

#### Returns

[`Balances`](modules/Pair.md#balances)

___

### removeEmptyPairs

▸ **removeEmptyPairs**(`pairList`): [`List`](modules/Pair.md#list)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairList` | [`List`](modules/Pair.md#list) |

#### Returns

[`List`](modules/Pair.md#list)

___

### serialize

▸ **serialize**<`T`\>(`data`): `string`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` |  |

#### Returns

`string`

___

### toBigNumber

▸ **toBigNumber**(`num?`, `options?`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num?` | [`Number`](modules/Types.md#number) |
| `options?` | [`ToBigNumberOptions`](interfaces/ToBigNumberOptions.md) |

#### Returns

`BigNumber`

___

### toExponential

▸ **toExponential**(`decimals`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimals` | [`Number`](modules/Types.md#number) |

#### Returns

`BigNumber`
