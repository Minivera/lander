[@lander/lander](../README.md) / [Exports](../modules.md) / TextNode

# Class: TextNode

Text node class that manages a text element in the virtual Tree.

**`Export`**

## Table of contents

### Constructors

- [constructor](TextNode.md#constructor)

### Properties

- [domNode](TextNode.md#domnode)
- [text](TextNode.md#text)

### Methods

- [diff](TextNode.md#diff)

## Constructors

### constructor

• **new TextNode**(`props`)

Class constructor that stores the values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | The properties given to this constructor. |
| `props.text` | `string` | Text to display through this virtual node. |

#### Defined in

[packages/lander/src/nodes/textNode.ts:26](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/textNode.ts#L26)

## Properties

### domNode

• **domNode**: ``null`` \| `Text` = `null`

DOM node assigned to this virtual node for easy access.

#### Defined in

[packages/lander/src/nodes/textNode.ts:19](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/textNode.ts#L19)

___

### text

• **text**: `string`

Stores the text to display in the DOM when mounted or updated.

#### Defined in

[packages/lander/src/nodes/textNode.ts:13](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/textNode.ts#L13)

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

[packages/lander/src/nodes/textNode.ts:35](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/textNode.ts#L35)
