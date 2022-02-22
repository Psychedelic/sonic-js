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

### Type aliases

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
- [formatAmount](README.md#formatamount)
- [getDeadline](README.md#getdeadline)
- [parseAllPairs](README.md#parseallpairs)
- [parseSupportedTokenList](README.md#parsesupportedtokenlist)
- [serialize](README.md#serialize)
- [toBigNumber](README.md#tobignumber)
- [toExponential](README.md#toexponential)

## Type aliases

### CheckIfOptions

Ƭ **CheckIfOptions**: `Object`

Options for validation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isNegative?` | `boolean` |
| `isNotANumber?` | `boolean` |
| `isZero?` | `boolean` |

___

### SwapActor

Ƭ **SwapActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`Swap`](interfaces/SwapIDL.Swap.md)\>

Type of SwapActor.

___

### TokenActor

Ƭ **TokenActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`Token`](interfaces/TokenIDL.Token.md)\>

Type of TokenActor.

## Variables

### Default

• `Const` **Default**: `Object`

Default values used on Sonic-js library.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IC_HOST` | `string` |
| `SLIPPAGE` | `number` |
| `SWAP_CANISTER_ID` | `string` |

## Functions

### checkIfObject

▸ **checkIfObject**(`object`, `options`): `boolean`

Checking if all values in object are valid

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `options` | [`CheckIfOptions`](README.md#checkifoptions) |

#### Returns

`boolean`

___

### createSwapActor

▸ **createSwapActor**(`options?`): `Promise`<[`SwapActor`](README.md#swapactor)\>

Creates a Swap canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateSwapActorOptions`](interfaces/CreateSwapActorOptions.md) | Options for creating the SwapActor |

#### Returns

`Promise`<[`SwapActor`](README.md#swapactor)\>

actor instance

___

### createTokenActor

▸ **createTokenActor**(`options`): `Promise`<[`TokenActor`](README.md#tokenactor)\>

Creates a DIP20 Token canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateTokenActorOptions`](interfaces/CreateTokenActorOptions.md) | Options for creating the TokenActor |

#### Returns

`Promise`<[`TokenActor`](README.md#tokenactor)\>

actor instance

___

### deserialize

▸ **deserialize**<`T`\>(`jsonString`): `undefined` \| `T`

Parses a json string into an object.
This is required for parsing objects that have BigInt values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jsonString` | `string` | JSON string to parse |

#### Returns

`undefined` \| `T`

___

### findMaximalPaths

▸ **findMaximalPaths**(`pairList`, `tokenList`, `source`, `initialAmount`, `dataKey?`): [`NodeList`](modules/MaximalPaths.md#nodelist)

Maximal paths graph solver.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pairList` | [`List`](modules/Pair.md#list) | `undefined` |
| `tokenList` | [`MetadataList`](modules/Token.md#metadatalist) | `undefined` |
| `source` | `string` | `undefined` |
| `initialAmount` | `BigNumber` | `undefined` |
| `dataKey` | [`DataKey`](modules/Swap.md#datakey) | `'from'` |

#### Returns

[`NodeList`](modules/MaximalPaths.md#nodelist)

___

### formatAmount

▸ **formatAmount**(`amount`): `string`

Formats an amount to a small string with scientific notation

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |

#### Returns

`string`

___

### getDeadline

▸ **getDeadline**(): `bigint`

Get deadline for swap canister requests.

#### Returns

`bigint`

___

### parseAllPairs

▸ **parseAllPairs**(`response`): [`List`](modules/Pair.md#list)

Parses a list of pairs from swap canister request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`PairInfoExt`](interfaces/SwapIDL.PairInfoExt.md)[] | Response from swap canister |

#### Returns

[`List`](modules/Pair.md#list)

___

### parseSupportedTokenList

▸ **parseSupportedTokenList**(`response`): [`MetadataList`](modules/Token.md#metadatalist)

Parses a list of supported tokens from swap canister request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`TokenInfoExt`](interfaces/SwapIDL.TokenInfoExt.md)[] | Response from swap canister |

#### Returns

[`MetadataList`](modules/Token.md#metadatalist)

___

### serialize

▸ **serialize**<`T`\>(`data`): `string`

Parses a json object into a string.
This is required for parsing objects that have BigInt values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | object to parse |

#### Returns

`string`

___

### toBigNumber

▸ **toBigNumber**(`num?`, `options?`): `BigNumber`

Converts a value to a BigNumber.

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

Create an exponential notation by given decimals.

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimals` | [`Number`](modules/Types.md#number) |

#### Returns

`BigNumber`
