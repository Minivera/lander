[@lander/lander](../README.md) / [Exports](../modules.md) / LifecycleListenersSetters

# Interface: LifecycleListenersSetters

## Table of contents

### Properties

- [afterMount](LifecycleListenersSetters.md#aftermount)
- [afterUpdate](LifecycleListenersSetters.md#afterupdate)
- [beforeDisconnect](LifecycleListenersSetters.md#beforedisconnect)
- [beforeMount](LifecycleListenersSetters.md#beforemount)
- [beforeUpdate](LifecycleListenersSetters.md#beforeupdate)
- [shouldUpdate](LifecycleListenersSetters.md#shouldupdate)

## Properties

### afterMount

• **afterMount**: (`listener`: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:22](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L22)

___

### afterUpdate

• **afterUpdate**: (`listener`: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:25](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L25)

___

### beforeDisconnect

• **beforeDisconnect**: (`listener`: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:26](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L26)

___

### beforeMount

• **beforeMount**: (`listener`: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:21](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L21)

___

### beforeUpdate

• **beforeUpdate**: (`listener`: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:23](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L23)

___

### shouldUpdate

• **shouldUpdate**: (`listener`: (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `boolean` \| `void`) => `void`

#### Type declaration

▸ (`listener`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`instance`: { `inject`: <I\>(`contextInjector`: `I` \| (`context`: { requestUpdate: () =\> void; inject: <I = {}\>(contextInjector: I \| ((context: ..., listeners: LifecycleListenersSetters) =\> I)) =\> Context<{} & I\>; }, `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => `I`) => [`Context`](../modules.md#context)<{} & `I`\> ; `requestUpdate`: () => `void`  }) => `boolean` \| `void` |

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:24](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L24)
