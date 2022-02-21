[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / ActorAdapter

# Class: ActorAdapter

Adapter responsible for creating actors.
It can receive a provider to identify the actor like a wallet provider (e.g. Plug).

## Table of contents

### Constructors

- [constructor](ActorAdapter.md#constructor)

### Properties

- [actors](ActorAdapter.md#actors)

### Methods

- [createActor](ActorAdapter.md#createactor)
- [createAgent](ActorAdapter.md#createagent)
- [adapterOf](ActorAdapter.md#adapterof)
- [createAnonymousActor](ActorAdapter.md#createanonymousactor)

## Constructors

### constructor

• **new ActorAdapter**(`provider?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider?` | [`Provider`](../modules/ActorAdapter.md#provider) |
| `options` | [`Options`](../modules/ActorAdapter.md#options) |

#### Defined in

[integrations/actor/adapter.ts:13](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L13)

## Properties

### actors

▪ `Static` `Readonly` **actors**: [`Actors`](../modules/ActorAdapter.md#actors) = `{}`

#### Defined in

[integrations/actor/adapter.ts:11](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L11)

## Methods

### createActor

▸ **createActor**<`T`\>(`canisterId`, `interfaceFactory`): `Promise`<[`Actor`](../modules/ActorAdapter.md#actor)<`T`\>\>

Creates a new actor or use from memory if is already created.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canisterId` | `string` | The canister id of the actor |
| `interfaceFactory` | `InterfaceFactory` | The interface factory of the actor |

#### Returns

`Promise`<[`Actor`](../modules/ActorAdapter.md#actor)<`T`\>\>

The actor

#### Defined in

[integrations/actor/adapter.ts:27](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L27)

___

### createAgent

▸ `Private` **createAgent**(`extraWhitelist?`): `Promise`<`void`\>

Creates the agent from provider.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `extraWhitelist` | `string`[] | `[]` | Extra whitelist to add to the default whitelist |

#### Returns

`Promise`<`void`\>

#### Defined in

[integrations/actor/adapter.ts:71](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L71)

___

### adapterOf

▸ `Static` **adapterOf**(`actor`): `undefined` \| [`ActorAdapter`](ActorAdapter.md)

Gets the adapter from an actor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actor` | `Actor` | The actor |

#### Returns

`undefined` \| [`ActorAdapter`](ActorAdapter.md)

The adapter or undefined if is not existent

#### Defined in

[integrations/actor/adapter.ts:85](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L85)

___

### createAnonymousActor

▸ `Static` **createAnonymousActor**<`T`\>(`canisterId`, `interfaceFactory`, `host?`): [`Actor`](../modules/ActorAdapter.md#actor)<`T`\>

Create an anonymous actor.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `canisterId` | `string` | `undefined` | The canister id of the actor |
| `interfaceFactory` | `InterfaceFactory` | `undefined` | The interface factory of the actor |
| `host` | `string` | `Default.IC_HOST` | The IC host to connect to |

#### Returns

[`Actor`](../modules/ActorAdapter.md#actor)<`T`\>

The anonymous actor

#### Defined in

[integrations/actor/adapter.ts:99](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L99)
