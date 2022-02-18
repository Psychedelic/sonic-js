[@psychedelic/sonic-js](../README.md) / [Exports](../modules.md) / ActorAdapter

# Namespace: ActorAdapter

## Table of contents

### Interfaces

- [CreateActor](../interfaces/ActorAdapter.CreateActor.md)
- [CreateAgentParams](../interfaces/ActorAdapter.CreateAgentParams.md)
- [Repository](../interfaces/ActorAdapter.Repository.md)

### Type aliases

- [Actor](ActorAdapter.md#actor)
- [ActorProps](ActorAdapter.md#actorprops)
- [Actors](ActorAdapter.md#actors)
- [Options](ActorAdapter.md#options)
- [Provider](ActorAdapter.md#provider)

## Type aliases

### Actor

Ƭ **Actor**<`T`\>: `ActorSubclass`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[integrations/actor/adapter.ts:143](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L143)

___

### ActorProps

Ƭ **ActorProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canisterId?` | `string` |
| `interfaceFactory` | `IDL.InterfaceFactory` |

#### Defined in

[integrations/actor/adapter.ts:133](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L133)

___

### Actors

Ƭ **Actors**: `Record`<`string`, { `actor`: `ActorSubclass`<`any`\> ; `adapter`: [`ActorAdapter`](../classes/ActorAdapter.md)  }\>

#### Defined in

[integrations/actor/adapter.ts:138](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L138)

___

### Options

Ƭ **Options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `whitelist` | `string`[] |

#### Defined in

[integrations/actor/adapter.ts:109](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L109)

___

### Provider

Ƭ **Provider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `agent` | `Agent` \| ``null`` |
| `createActor` | <T\>(`params`: [`CreateActor`](../interfaces/ActorAdapter.CreateActor.md)<`T`\>) => `Promise`<`ActorSubclass`<`T`\>\> |
| `createAgent` | (`params`: [`CreateAgentParams`](../interfaces/ActorAdapter.CreateAgentParams.md)) => `Promise`<`Agent`\> |

#### Defined in

[integrations/actor/adapter.ts:103](https://github.com/Psychedelic/sonic-js/blob/cfc7f22/src/integrations/actor/adapter.ts#L103)
