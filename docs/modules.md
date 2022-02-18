[@psychedelic/sonic-js](README.md) / Exports

# @psychedelic/sonic-js

## Table of contents

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

### Classes

- [ActorAdapter](classes/ActorAdapter.md)
- [Assets](classes/Assets.md)
- [Liquidity](classes/Liquidity.md)
- [Price](classes/Price.md)
- [Swap](classes/Swap.md)
- [SwapCanisterController](classes/SwapCanisterController.md)
- [SwapIDL](classes/SwapIDL.md)
- [TokenIDL](classes/TokenIDL.md)

### Interfaces

- [CreateSwapActorOptions](interfaces/CreateSwapActorOptions.md)
- [CreateTokenActorOptions](interfaces/CreateTokenActorOptions.md)

### Type aliases

- [CheckIfOptions](modules.md#checkifoptions)
- [SwapActor](modules.md#swapactor)
- [TokenActor](modules.md#tokenactor)

### Variables

- [Default](modules.md#default)

### Functions

- [checkIfObject](modules.md#checkifobject)
- [createSwapActor](modules.md#createswapactor)
- [createTokenActor](modules.md#createtokenactor)
- [deserialize](modules.md#deserialize)
- [findMaximalPaths](modules.md#findmaximalpaths)
- [formatAmount](modules.md#formatamount)
- [getDeadline](modules.md#getdeadline)
- [parseAllPairs](modules.md#parseallpairs)
- [parseSupportedTokenList](modules.md#parsesupportedtokenlist)
- [serialize](modules.md#serialize)
- [toBigNumber](modules.md#tobignumber)
- [toExponential](modules.md#toexponential)

## Type aliases

### CheckIfOptions

Ƭ **CheckIfOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isNegative?` | `boolean` |
| `isNotANumber?` | `boolean` |
| `isZero?` | `boolean` |

#### Defined in

[utils/object.ts:3](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/object.ts#L3)

___

### SwapActor

Ƭ **SwapActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`Swap`](interfaces/SwapIDL.Swap.md)\>

#### Defined in

[integrations/actor/factory.ts:9](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/factory.ts#L9)

___

### TokenActor

Ƭ **TokenActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`Token`](interfaces/TokenIDL.Token.md)\>

#### Defined in

[integrations/actor/factory.ts:27](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/factory.ts#L27)

## Variables

### Default

• **Default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IC_HOST` | `string` |
| `SLIPPAGE` | `number` |
| `SWAP_CANISTER_ID` | `string` |

#### Defined in

[declarations/default.ts:1](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/declarations/default.ts#L1)

## Functions

### checkIfObject

▸ **checkIfObject**(`object`, `options`): `boolean`

Checking if all values in object are valid

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Object` |
| `options` | [`CheckIfOptions`](modules.md#checkifoptions) |

#### Returns

`boolean`

#### Defined in

[utils/object.ts:13](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/object.ts#L13)

___

### createSwapActor

▸ `Const` **createSwapActor**(`__namedParameters?`): `Promise`<[`SwapActor`](modules.md#swapactor)\>

Creates a Swap canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CreateSwapActorOptions`](interfaces/CreateSwapActorOptions.md) |

#### Returns

`Promise`<[`SwapActor`](modules.md#swapactor)\>

#### Defined in

[integrations/actor/factory.ts:15](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/factory.ts#L15)

___

### createTokenActor

▸ `Const` **createTokenActor**(`__namedParameters`): `Promise`<[`TokenActor`](modules.md#tokenactor)\>

Creates a DIP20 Token canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CreateTokenActorOptions`](interfaces/CreateTokenActorOptions.md) |

#### Returns

`Promise`<[`TokenActor`](modules.md#tokenactor)\>

#### Defined in

[integrations/actor/factory.ts:33](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/factory.ts#L33)

___

### deserialize

▸ `Const` **deserialize**<`T`\>(`jsonString`): `undefined` \| `T`

Parses a json string into an object.
This is required for parsing objects that have BigInt values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

[utils/serialization.ts:5](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/serialization.ts#L5)

___

### findMaximalPaths

▸ `Const` **findMaximalPaths**(`pairList`, `tokenList`, `source`, `initialAmount`, `dataKey?`): [`NodeList`](modules/MaximalPaths.md#nodelist)

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

#### Defined in

[utils/maximal-paths.ts:6](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/maximal-paths.ts#L6)

___

### formatAmount

▸ `Const` **formatAmount**(`amount`): `string`

Formats an amount to a small string with scientific notation

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` |

#### Returns

`string`

#### Defined in

[utils/format.ts:59](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/format.ts#L59)

___

### getDeadline

▸ `Const` **getDeadline**(): `bigint`

Get deadline for swap canister requests

#### Returns

`bigint`

#### Defined in

[integrations/swap-canister/utils.ts:51](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/utils.ts#L51)

___

### parseAllPairs

▸ `Const` **parseAllPairs**(`response`): [`List`](modules/Pair.md#list)

Parses a list of pairs from swap canister request

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`PairInfoExt`](interfaces/SwapIDL.PairInfoExt.md)[] |

#### Returns

[`List`](modules/Pair.md#list)

#### Defined in

[integrations/swap-canister/utils.ts:20](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/utils.ts#L20)

___

### parseSupportedTokenList

▸ `Const` **parseSupportedTokenList**(`response`): [`MetadataList`](modules/Token.md#metadatalist)

Parses a list of supported tokens from swap canister request

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`TokenInfoExt`](interfaces/SwapIDL.TokenInfoExt.md)[] |

#### Returns

[`MetadataList`](modules/Token.md#metadatalist)

#### Defined in

[integrations/swap-canister/utils.ts:6](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/swap-canister/utils.ts#L6)

___

### serialize

▸ `Const` **serialize**<`T`\>(`data`): `string`

Parses a json object into a string.
This is required for parsing objects that have BigInt values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`string`

#### Defined in

[utils/serialization.ts:22](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/serialization.ts#L22)

___

### toBigNumber

▸ `Const` **toBigNumber**(`num?`, `options?`): `BigNumber`

Converts a value to a BigNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `num?` | [`Number`](modules/Types.md#number) |
| `options?` | `ToBigNumberOptions` |

#### Returns

`BigNumber`

#### Defined in

[utils/format.ts:15](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/format.ts#L15)

___

### toExponential

▸ `Const` **toExponential**(`decimals`): `BigNumber`

Create an exponential notation by given decimals

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimals` | [`Number`](modules/Types.md#number) |

#### Returns

`BigNumber`

#### Defined in

[utils/format.ts:48](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/utils/format.ts#L48)
