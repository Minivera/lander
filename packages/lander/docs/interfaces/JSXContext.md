[@lander/lander](../README.md) / [Exports](../modules.md) / JSXContext

# Interface: JSXContext

## Table of contents

### Properties

- [inject](JSXContext.md#inject)
- [requestUpdate](JSXContext.md#requestupdate)

## Properties

### inject

• **inject**: (`contextInjector`: {} \| (`context`: [`JSXContext`](JSXContext.md), `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => {}) => [`JSXContext`](JSXContext.md)

#### Type declaration

▸ (`contextInjector`): [`JSXContext`](JSXContext.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `contextInjector` | {} \| (`context`: [`JSXContext`](JSXContext.md), `listeners`: [`LifecycleListenersSetters`](LifecycleListenersSetters.md)) => {} |

##### Returns

[`JSXContext`](JSXContext.md)

#### Defined in

[packages/lander/src/types/lander.ts:78](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L78)

___

### requestUpdate

• **requestUpdate**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lander/src/types/lander.ts:77](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L77)
