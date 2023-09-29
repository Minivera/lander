[@lander/lander](../README.md) / [Exports](../modules.md) / TreeNode

# Class: TreeNode

Tree node class that manages component based classes. When the node creator hits a function, it will
create an instance of this class.

**`Export`**

## Table of contents

### Constructors

- [constructor](TreeNode.md#constructor)

### Properties

- [attributes](TreeNode.md#attributes)
- [children](TreeNode.md#children)
- [domNode](TreeNode.md#domnode)
- [factory](TreeNode.md#factory)

### Methods

- [diff](TreeNode.md#diff)

## Constructors

### constructor

• **new TreeNode**(`props`)

Class constructor that stores the values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | The properties given to this constructor. |
| `props.attributes` | [`JSXProps`](../interfaces/JSXProps.md) | Attributes to pass to the factory when called. |
| `props.children` | [`VirtualNode`](../modules.md#virtualnode)[] | The children to pass to the factory when called. |
| `props.factory` | [`JSXFunctionComponent`](../modules.md#jsxfunctioncomponent) | Component to build when this node is rendered in the view. |

#### Defined in

[packages/lander/src/nodes/treeNode.ts:43](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/treeNode.ts#L43)

## Properties

### attributes

• **attributes**: [`JSXProps`](../interfaces/JSXProps.md)

The attributes assigned to this node, will be passed to the factory when it is executed.

#### Defined in

[packages/lander/src/nodes/treeNode.ts:21](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/treeNode.ts#L21)

___

### children

• **children**: [`VirtualNode`](../modules.md#virtualnode)[] = `[]`

Children of the node. Will be passed to the factory when it is execute. Not to confuse with the children
rendered by the factory.

#### Defined in

[packages/lander/src/nodes/treeNode.ts:28](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/treeNode.ts#L28)

___

### domNode

• **domNode**: ``null`` \| [`ComponentElement`](ComponentElement.md) = `null`

DOM node assigned to this virtual node for easy access.

#### Defined in

[packages/lander/src/nodes/treeNode.ts:34](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/treeNode.ts#L34)

___

### factory

• **factory**: [`JSXFunctionComponent`](../modules.md#jsxfunctioncomponent)

Stores the factory used to render this component, augmented with context.

#### Defined in

[packages/lander/src/nodes/treeNode.ts:15](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/treeNode.ts#L15)

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

[packages/lander/src/nodes/treeNode.ts:62](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/nodes/treeNode.ts#L62)
