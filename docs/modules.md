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

Options for validation.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isNegative?` | `boolean` |
| `isNotANumber?` | `boolean` |
| `isZero?` | `boolean` |

#### Defined in

[utils/object.ts:6](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/object.ts#L6)

___

### SwapActor

Ƭ **SwapActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`Swap`](interfaces/SwapIDL.Swap.md)\>

Type of SwapActor.

#### Defined in

[integrations/actor/factory.ts:17](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/factory.ts#L17)

___

### TokenActor

Ƭ **TokenActor**: [`Actor`](modules/ActorAdapter.md#actor)<[`Token`](interfaces/TokenIDL.Token.md)\>

Type of TokenActor.

#### Defined in

[integrations/actor/factory.ts:45](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/factory.ts#L45)

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

#### Defined in

[declarations/default.ts:4](https://github.com/Psychedelic/sonic-js/blob/1430250/src/declarations/default.ts#L4)

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

[utils/object.ts:17](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/object.ts#L17)

___

### createSwapActor

▸ **createSwapActor**(`options?`): `Promise`<[`SwapActor`](modules.md#swapactor)\>

Creates a Swap canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateSwapActorOptions`](interfaces/CreateSwapActorOptions.md) | Options for creating the SwapActor |

#### Returns

`Promise`<[`SwapActor`](modules.md#swapactor)\>

actor instance

#### Defined in

[integrations/actor/factory.ts:25](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/factory.ts#L25)

___

### createTokenActor

▸ **createTokenActor**(`options`): `Promise`<[`TokenActor`](modules.md#tokenactor)\>

Creates a DIP20 Token canister actor.
If no option is provided, the actor will be created using the default canister options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CreateTokenActorOptions`](interfaces/CreateTokenActorOptions.md) | Options for creating the TokenActor |

#### Returns

`Promise`<[`TokenActor`](modules.md#tokenactor)\>

actor instance

#### Defined in

[integrations/actor/factory.ts:53](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/factory.ts#L53)

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

#### Defined in

[utils/serialization.ts:7](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/serialization.ts#L7)

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

#### Defined in

[utils/maximal-paths.ts:15](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/maximal-paths.ts#L15)

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

#### Defined in

[utils/format.ts:69](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/format.ts#L69)

___

### getDeadline

▸ **getDeadline**(): `bigint`

Get deadline for swap canister requests.

#### Returns

`bigint`

#### Defined in

[integrations/swap-canister/utils.ts:56](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/swap-canister/utils.ts#L56)

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

#### Defined in

[integrations/swap-canister/utils.ts:24](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/swap-canister/utils.ts#L24)

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

#### Defined in

[integrations/swap-canister/utils.ts:8](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/swap-canister/utils.ts#L8)

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

#### Defined in

[utils/serialization.ts:26](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/serialization.ts#L26)

___

### toBigNumber

▸ **toBigNumber**(`num?`, `options?`): `BigNumber`

Converts a value to a BigNumber.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num?` | [`Number`](modules/Types.md#number) |
| `options?` | `ToBigNumberOptions` |

#### Returns

`BigNumber`

#### Defined in

[utils/format.ts:21](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/format.ts#L21)

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

#### Defined in

[utils/format.ts:56](https://github.com/Psychedelic/sonic-js/blob/1430250/src/utils/format.ts#L56)
