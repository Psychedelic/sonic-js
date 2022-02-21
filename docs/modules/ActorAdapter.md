[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / ActorAdapter

# Namespace: ActorAdapter

Type definition for the ActorAdapter.

## Table of contents

### Interfaces

- [CreateActorParams](../interfaces/ActorAdapter.CreateActorParams.md)
- [CreateAgentParams](../interfaces/ActorAdapter.CreateAgentParams.md)

### Type aliases

- [Actor](ActorAdapter.md#actor)
- [ActorParams](ActorAdapter.md#actorparams)
- [Actors](ActorAdapter.md#actors)
- [Options](ActorAdapter.md#options)
- [Provider](ActorAdapter.md#provider)

## Type aliases

### Actor

Ƭ **Actor**<`T`\>: `ActorSubclass`<`T`\>

Return for the createActor function of the ActorAdapter.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[integrations/actor/adapter.ts:171](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L171)

___

### ActorParams

Ƭ **ActorParams**: `Object`

Parameters for creating an actor using the ActorAdapter.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canisterId?` | `string` |
| `interfaceFactory` | `IDL.InterfaceFactory` |

#### Defined in

[integrations/actor/adapter.ts:155](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L155)

___

### Actors

Ƭ **Actors**: `Record`<`string`, { `actor`: `ActorSubclass`<`any`\> ; `adapter`: [`ActorAdapter`](../classes/ActorAdapter.md)  }\>

Interface for static stored actors.

#### Defined in

[integrations/actor/adapter.ts:163](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L163)

___

### Options

Ƭ **Options**: `Object`

Options for the ActorAdapter.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `whitelist` | `string`[] |

#### Defined in

[integrations/actor/adapter.ts:129](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L129)

___

### Provider

Ƭ **Provider**: `Object`

Agent provider interface.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `agent` | `Agent` \| ``null`` |
| `createActor` | <T\>(`params`: [`CreateActorParams`](../interfaces/ActorAdapter.CreateActorParams.md)<`T`\>) => `Promise`<`ActorSubclass`<`T`\>\> |
| `createAgent` | (`params`: [`CreateAgentParams`](../interfaces/ActorAdapter.CreateAgentParams.md)) => `Promise`<`Agent`\> |

#### Defined in

[integrations/actor/adapter.ts:120](https://github.com/Psychedelic/sonic-js/blob/1430250/src/integrations/actor/adapter.ts#L120)
