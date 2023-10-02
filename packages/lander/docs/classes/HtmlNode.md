[@lander/lander](../README.md) / [Exports](../modules.md) / HtmlNode

# Class: HtmlNode

HTML node class that manages an HTML element in the virtual Tree.

**`Todo`**

Support SVGs

**`Export`**

## Table of contents

### Constructors

- [constructor](HtmlNode.md#constructor)

### Properties

- [attributes](HtmlNode.md#attributes)
- [children](HtmlNode.md#children)
- [domNode](HtmlNode.md#domnode)
- [tag](HtmlNode.md#tag)

### Methods

- [diff](HtmlNode.md#diff)

## Constructors

### constructor

• **new HtmlNode**(`props`)

Class constructor that stores the values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | The properties given to this constructor. |
| `props.attributes` | [`JSXProps`](../interfaces/JSXProps.md) | Attributes to assign to the HTML node when created. |
| `props.children` | [`VirtualNode`](../modules.md#virtualnode)[] | The children to assign to the HTML node when created. |
| `props.tag` | `string` | Tag name to create in the DOM when this node is mounted. |

#### Defined in

[packages/lander/src/nodes/htmlNode.ts:41](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/htmlNode.ts#L41)

## Properties

### attributes

• **attributes**: [`JSXProps`](../interfaces/JSXProps.md)

Attributes to assign to the HTMLElement when mounting or updating.

#### Defined in

[packages/lander/src/nodes/htmlNode.ts:20](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/htmlNode.ts#L20)

___

### children

• **children**: [`VirtualNode`](../modules.md#virtualnode)[] = `[]`

Virtual children that will have to be patched into the virtual DOM node when mounting or updating.

#### Defined in

[packages/lander/src/nodes/htmlNode.ts:26](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/htmlNode.ts#L26)

___

### domNode

• **domNode**: ``null`` \| `HTMLElement` = `null`

DOM node assigned to this virtual node for easy access.

#### Defined in

[packages/lander/src/nodes/htmlNode.ts:32](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/htmlNode.ts#L32)

___

### tag

• **tag**: `string`

Tag for creating the HTMLElement in the DOM when mounting.

#### Defined in

[packages/lander/src/nodes/htmlNode.ts:14](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/htmlNode.ts#L14)

## Methods

### diff

▸ **diff**(`other`): `boolean`

Diffing function that returns if the two nodes are the same or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`VirtualNode`](../modules.md#virtualnode) | {VirtualNode} |

#### Returns

`boolean`

Returns true if the two nodes are the same, false otherwise.

#### Defined in

[packages/lander/src/nodes/htmlNode.ts:60](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/htmlNode.ts#L60)
