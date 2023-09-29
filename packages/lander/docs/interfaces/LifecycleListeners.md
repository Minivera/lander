[@lander/lander](../README.md) / [Exports](../modules.md) / LifecycleListeners

# Interface: LifecycleListeners

Object containing lifecycle listener functions.

## Table of contents

### Properties

- [afterMount](LifecycleListeners.md#aftermount)
- [afterUpdate](LifecycleListeners.md#afterupdate)
- [beforeDisconnect](LifecycleListeners.md#beforedisconnect)
- [beforeMount](LifecycleListeners.md#beforemount)
- [beforeUpdate](LifecycleListeners.md#beforeupdate)
- [shouldUpdate](LifecycleListeners.md#shouldupdate)

## Properties

### afterMount

• `Optional` **afterMount**: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`

#### Type declaration

▸ (`instance`): `void`

Hook called after the component has been successfully
mounted.

##### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `Object` |
| `instance.inject` | <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> |
| `instance.requestUpdate` | () => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:58](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L58)

___

### afterUpdate

• `Optional` **afterUpdate**: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`

#### Type declaration

▸ (`instance`): `void`

Hook called after an update has been processed.

##### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `Object` |
| `instance.inject` | <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> |
| `instance.requestUpdate` | () => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:61](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L61)

___

### beforeDisconnect

• `Optional` **beforeDisconnect**: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`

#### Type declaration

▸ (`instance`): `void`

Hook called before the component is disconnected
from the DOM.

##### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `Object` |
| `instance.inject` | <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> |
| `instance.requestUpdate` | () => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:62](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L62)

___

### beforeMount

• `Optional` **beforeMount**: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`

#### Type declaration

▸ (`instance`): `void`

Hook called after the component has been connected to
the DOM and before it is mounted.

##### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `Object` |
| `instance.inject` | <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> |
| `instance.requestUpdate` | () => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:57](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L57)

___

### beforeUpdate

• `Optional` **beforeUpdate**: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`

#### Type declaration

▸ (`instance`): `void`

Hook called before the component is updated and before
checking if we should update.

##### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `Object` |
| `instance.inject` | <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> |
| `instance.requestUpdate` | () => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:59](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L59)

___

### shouldUpdate

• `Optional` **shouldUpdate**: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `boolean` \| `void`

#### Type declaration

▸ (`instance`): `boolean` \| `void`

Hook called before the component is updated.
Return false to prevent updating the component. Does not provide the old or new attributes, the developer
is in charge of keep track of those.

##### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | `Object` |
| `instance.inject` | <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> |
| `instance.requestUpdate` | () => `void` |

##### Returns

`boolean` \| `void`

#### Defined in

[packages/lander/src/types/lander.ts:60](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L60)
