[@lander/lander](../README.md) / [Exports](../modules.md) / FunctionComponent

# Interface: FunctionComponent<P, C\>

Type to define a function that will produce a component when executed with properties and context.

**`Param`**

The properties and children of this component.

**`Param`**

The state and function to set the state for this component.

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `C` | {} |

## Callable

### FunctionComponent

▸ **FunctionComponent**(`props`): [`VirtualElement`](../modules.md#virtualelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`PropsWithChildren`](../modules.md#propswithchildren)<`P`, `C`\> |

#### Returns

[`VirtualElement`](../modules.md#virtualelement)

#### Defined in

[packages/lander/src/types/lander.ts:73](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L73)
