[@lander/lander](README.md) / Exports

# @lander/lander

## Table of contents

### Classes

- [ComponentElement](classes/ComponentElement.md)
- [HtmlNode](classes/HtmlNode.md)
- [TextNode](classes/TextNode.md)
- [TreeNode](classes/TreeNode.md)

### Interfaces

- [FunctionComponent](interfaces/FunctionComponent.md)
- [JSXContext](interfaces/JSXContext.md)
- [JSXProps](interfaces/JSXProps.md)
- [LifecycleListeners](interfaces/LifecycleListeners.md)
- [LifecycleListenersSetters](interfaces/LifecycleListenersSetters.md)

### Type Aliases

- [Context](modules.md#context)
- [JSXFunctionComponent](modules.md#jsxfunctioncomponent)
- [Props](modules.md#props)
- [PropsWithChildren](modules.md#propswithchildren)
- [PropsWithoutContext](modules.md#propswithoutcontext)
- [Tag](modules.md#tag)
- [VirtualElement](modules.md#virtualelement)
- [VirtualNode](modules.md#virtualnode)

### Variables

- [Lander](modules.md#lander)

### Functions

- [h](modules.md#h)

## Type Aliases

### Context

Ƭ **Context**<`T`\>: { `inject`: <I\>(`contextInjector`: (`context`: [`Context`](modules.md#context)<`T`\>, `listeners`: [`LifecycleListenersSetters`](interfaces/LifecycleListenersSetters.md)) => `I` \| `I`) => [`Context`](modules.md#context)<`T` & `I`\> ; `requestUpdate`: () => `void`  } & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |

#### Defined in

[packages/lander/src/types/lander.ts:29](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L29)

___

### JSXFunctionComponent

Ƭ **JSXFunctionComponent**: (`props`: [`JSXProps`](interfaces/JSXProps.md)) => [`VirtualElement`](modules.md#virtualelement)

#### Type declaration

▸ (`props`): [`VirtualElement`](modules.md#virtualelement)

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`JSXProps`](interfaces/JSXProps.md) |

##### Returns

[`VirtualElement`](modules.md#virtualelement)

#### Defined in

[packages/lander/src/types/lander.ts:86](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L86)

___

### Props

Ƭ **Props**<`T`, `C`\>: `T` & { `children?`: [`VirtualNode`](modules.md#virtualnode)[] ; `context`: [`Context`](modules.md#context)<`C`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |
| `C` | {} |

#### Defined in

[packages/lander/src/types/lander.ts:6](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L6)

___

### PropsWithChildren

Ƭ **PropsWithChildren**<`T`, `C`\>: [`Props`](modules.md#props)<`T`, `C`\> & { `children`: [`VirtualNode`](modules.md#virtualnode)[]  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |
| `C` | {} |

#### Defined in

[packages/lander/src/types/lander.ts:11](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L11)

___

### PropsWithoutContext

Ƭ **PropsWithoutContext**<`T`, `C`\>: `T` & { `children?`: [`VirtualNode`](modules.md#virtualnode)[] ; `context?`: [`Context`](modules.md#context)<`C`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |
| `C` | {} |

#### Defined in

[packages/lander/src/types/lander.ts:15](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L15)

___

### Tag

Ƭ **Tag**: `string` \| `number` \| `boolean` \| [`FunctionComponent`](interfaces/FunctionComponent.md)<`never`, `never`\> \| { `text`: `string` \| `number` \| `boolean`  }

#### Defined in

[packages/lander/src/types/lander.ts:88](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L88)

___

### VirtualElement

Ƭ **VirtualElement**: [`VirtualNode`](modules.md#virtualnode) \| `string` \| `number` \| `boolean` \| ``null`` \| `undefined`

#### Defined in

[packages/lander/src/types/lander.ts:38](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L38)

___

### VirtualNode

Ƭ **VirtualNode**: [`TreeNode`](classes/TreeNode.md) \| [`TextNode`](classes/TextNode.md) \| [`HtmlNode`](classes/HtmlNode.md)

#### Defined in

[packages/lander/src/types/lander.ts:36](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/types/lander.ts#L36)

## Variables

### Lander

• `Const` **Lander**: `Object`

Object that enables the creation of a virtual DOM tree for the given component. The renderInto method can be called
multiple times on different components, there is no limit to the amount of virtual trees in a single page.

**`Example`**

```ts
Lander.renderInto(App, "#app");
```

**`Export`**

#### Type declaration

| Name | Type |
| :------ | :------ |
| `renderInto` | (`root`: [`FunctionComponent`](interfaces/FunctionComponent.md)<`never`, `never`\>, `element`: `HTMLElement`) => `void` |

#### Defined in

[packages/lander/src/index.ts:18](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/index.ts#L18)

## Functions

### h

▸ **h**(`tag`, `attributes?`, `...children`): [`VirtualNode`](modules.md#virtualnode)

This factory method takes JSX compliant parameters and generate small objects that represent our
virtual nodes. By walking this tree of nodes, we can process the virtual DOM tree and mount in on the DOM.

If given a string as the tag, it will render an HTML node. Text nodes are managed through the `vdonizeChildren`
method, meaning that your only way to create text nodes is by giving a text children to another node. It also means
that the root node of an application cannot be a text node.

If given a function as the tag, the creator will return a TreeNode to generate a new subtree and
execute the component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | [`Tag`](modules.md#tag) | {String\|Function\|{ text: String }} - The tag of this virtual node. |
| `attributes` | [`JSXProps`](interfaces/JSXProps.md) | {Props} - The attributes of the node if it needs any. Only components and HTML nodes use attributes. |
| `...children` | [`VirtualElement`](modules.md#virtualelement)[] | {VirtualElement} - the children to pass to the virtual node if it needs any. Text nodes will ignore the children parameter if they are given some. |

#### Returns

[`VirtualNode`](modules.md#virtualnode)

Returns a valid virtual node.

**`Example`**

```ts
createNode(({ text }) => createNode("h1", { style: "color: red;" }, text), { text: "Hello, World!" });
```

**`Export`**

#### Defined in

[packages/lander/src/nodes/factory.ts:45](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/factory.ts#L45)
