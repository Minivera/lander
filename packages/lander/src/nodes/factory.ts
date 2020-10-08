import { TreeNode } from './treeNode';
import { TextNode } from './textNode';
import { HtmlNode } from './htmlNode';
import { flatten } from '../utils/flattenArray';

import { VirtualElement, VirtualNode, Tag, Props, AugmentedFunctionComponent } from '../types/lander';

type DefinedVirtualElement = VirtualNode | string | number | boolean;

/**
 * Transform all children that are not object readable bu the `createNode` function into an object
 * that can ve processed by that same function. In particular, it makes sure that you can pass a string as
 * a children and still get a valid node.
 *
 * This enables something like:
 * @example
 *   createNode("span", {}, "Hello, world!");
 * @param child {VirtualElement} - The children the manage. This function is intended to be called within a `.map` call.
 * @returns {VirtualNode} Returns a valid virtual node.
 */
export const vnodizeChildren = (child: DefinedVirtualElement): VirtualNode =>
    typeof child === 'string' || typeof child === 'number' || typeof child === 'boolean'
        ? createNode({ text: child }, {})
        : child;

/**
 * This factory method takes JSX compliant parameters and generate small objects that represent our
 * virtual nodes. By walking this tree of nodes, we can process the virtual DOM tree and mount in on the DOM.
 *
 * If given a string as the tag, it will render an HTML node. Text nodes are managed through the `vdonizeChildren`
 * method, meaning that your only way to create text nodes is by giving a text children to another node. It also means
 * that the root node of an application cannot be a text node.
 *
 * If given a function as the tag, the creator will return a TreeNode to generate a new subtree and
 * execute the component.
 *
 * @example
 * createNode(({ text }) => createNode("h1", { style: "color: red;" }, text), { text: "Hello, World!" });
 * @param tag {String|Function|{ text: String }} - The tag of this virtual node.
 * @param attributes {Props} - The attributes of the node if it needs any. Only components and HTML nodes use
 * attributes.
 * @param children {VirtualElement} - the children to pass to the virtual node if it needs any.
 * Text nodes will ignore the children parameter if they are given some.
 * @returns {VirtualNode} Returns a valid virtual node.
 * @export
 */
export const createNode = (tag: Tag, attributes: Props = {}, ...children: VirtualElement[]): VirtualNode => {
    // protect against null attributes
    let props = attributes || {};

    // Remove attributes added by JSX in development
    if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-unused-vars
        const { __self, __source, ...rest } = props;
        props = rest;
    }

    // Flatten the children so that any array created with things like .map are processed as a single continuous array.
    // TODO: This might be inefficient long term.
    const flatChildren = flatten(children) as DefinedVirtualElement[];
    if (typeof tag === 'function') {
        // Clone the tag so components do not share context
        const cloned = tag.bind({}) as AugmentedFunctionComponent;
        Object.assign(cloned, tag);
        cloned.original = tag;

        return new TreeNode({
            factory: cloned,
            attributes: props,
            children: flatChildren.map(vnodizeChildren),
        });
    }
    if (Object.prototype.hasOwnProperty.call(tag, 'text')) {
        return new TextNode({ text: (tag as { text: string }).text || '' });
    }

    return new HtmlNode({
        tag: tag as string,
        attributes: props,
        children: flatChildren.map(vnodizeChildren),
    });
};
