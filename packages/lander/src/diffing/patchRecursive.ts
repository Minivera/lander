import { HtmlNode } from '../nodes/htmlNode';
import { TreeNode } from '../nodes/treeNode';
import { applyAttributes, updateNode, generateNode } from './utils';

import { VirtualNode } from '../types/lander';

/**
 * Main diffing algorithm that will diff nodes and patch them in place, generating DOM mutations alongside virtual DOM
 * mutations. Will be recursively called on all the nodes in the tree until the entire tree has been patched.
 * @todo Improve performance
 * @param {VirtualNode} parent - The parent of the old and new node. Used to add or remove children.
 * @param {VirtualNode} oldNode - The node from the tree that is being patched. Is modified by the
 * algorithm.
 * @param {VirtualNode} newNode - The node from the new tree used to patch the old tree.
 * @export
 */
export const patch = (parent: VirtualNode, oldNode: VirtualNode | null, newNode: VirtualNode | null): void => {
    if (!newNode) {
        // If a null or undefined should get here, ignore it.
        return;
    }

    // If Old node does not exists, then we are mounting for the first time
    if (!oldNode) {
        // Generate the dom node
        const domNode = generateNode(newNode);
        if (!domNode || !parent.domNode) {
            return;
        }

        newNode.domNode = domNode;
        if (newNode instanceof HtmlNode) {
            applyAttributes({}, newNode.attributes, domNode as HTMLElement);
        }

        // Start patching on the new node's children
        if (Object.prototype.hasOwnProperty.call(newNode, 'children')) {
            const converted = newNode as { children: VirtualNode[] };

            converted.children.forEach(child => patch(newNode, null, child));
        }

        parent.domNode.appendChild(domNode);
        return;
    }

    // If the two nodes don't have the same type
    if (oldNode.constructor !== newNode.constructor) {
        // Replace the old child with the new child
        if (Object.prototype.hasOwnProperty.call(newNode, 'children')) {
            const converted = parent as { children: VirtualNode[] };

            converted.children = converted.children.map(child => {
                if (child === oldNode) {
                    return newNode;
                }
                return child;
            });
        }

        const domNode = generateNode(newNode);
        if (!domNode || !parent.domNode || !oldNode.domNode) {
            return;
        }

        newNode.domNode = domNode;
        if (newNode instanceof HtmlNode) {
            const convertedOld = oldNode as HtmlNode;
            const convertedNew = newNode as HtmlNode;

            applyAttributes(convertedOld.attributes, convertedNew.attributes, domNode as HTMLElement);
        }

        parent.domNode.replaceChild(domNode, oldNode.domNode);
    } else if (!oldNode.diff(newNode)) {
        if (!oldNode.domNode) {
            return;
        }

        // If the nodes are different, but of the same type, update the nodes
        updateNode(oldNode, newNode);
        if (oldNode instanceof TreeNode) {
            // If this node is a component, stop right here and update the component.
            // The component will take care of patching the children
            oldNode.domNode.update();
            return;
        }
    }

    // Make sure to not check children for text nodes
    if (!Object.prototype.hasOwnProperty.call(oldNode, 'children')) {
        return;
    }
    const convertedOld = oldNode as HtmlNode | TreeNode;
    const convertedNew = newNode as HtmlNode | TreeNode;

    // Proceed to update the children or replace them if needed
    let index = 0;
    // Loop in the old children until we have no more children
    for (; index < convertedOld.children.length; index++) {
        const oldChild = convertedOld.children[index];

        // If there are no more new children
        if (index >= convertedNew.children.length) {
            // We have to remove the remaining old children and break the loop
            convertedOld.children.splice(index).forEach(child => {
                if (!convertedOld.domNode || !child.domNode) {
                    return;
                }

                convertedOld.domNode.removeChild(child.domNode);
            });
            break;
        }

        const newChild = convertedNew.children[index];

        // Start patching the two nodes
        patch(convertedOld, oldChild, newChild);
    }

    // Loop in the new children if there are more
    for (; index < convertedNew.children.length; index++) {
        const newChild = convertedNew.children[index];
        convertedOld.children.push(newChild);

        // Generate the new node and append it to the dom
        const domNode = generateNode(newChild);
        if (!domNode || !convertedOld.domNode) {
            return;
        }

        newChild.domNode = domNode;
        if (newChild instanceof HtmlNode) {
            applyAttributes({}, newChild.attributes, domNode as HTMLElement);
        }

        // Start patching the new node's children
        if (Object.prototype.hasOwnProperty.call(newChild, 'children')) {
            const converted = newChild as { children: VirtualNode[] };

            converted.children.forEach(child => patch(newChild, null, child));
        }

        convertedOld.domNode.appendChild(domNode);
    }
};
