[@lander/blueprint](README.md) / Exports

# @lander/blueprint

## Table of contents

### Functions

- [mount](modules.md#mount)

## Functions

### mount

▸ **mount**(`component`, `options?`): `Wrapper`

Mounts the given component to a fake JSDOM element. It returns a wrapper element that contains helpful methods
as well as the HTMLElement for querying like you would in the normal DOM.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | `JSXFunctionComponent` | The component to mount and render. |
| `options` | `Options` | The options for the mounting process. |

#### Returns

`Wrapper`

Wrapper that contains the mounted element and some helpful properties and methods for testing
purposes.

#### Defined in

[render.ts:36](https://github.com/Minivera/lander/blob/a051bab/packages/blueprint/src/render.ts#L36)
