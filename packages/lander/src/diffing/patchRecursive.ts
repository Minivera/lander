import { HtmlNode } from '../nodes/htmlNode';
import { TreeNode } from '../nodes/treeNode';
import { TextNode, VirtualNode } from '../types/lander';

import { applyAttributes, updateNode, generateNode } from './utils';
import { DOMPatchScheduler } from './domPatchScheduler';

/**
 * Main diffing algorithm that will diff nodes and patch them in place, generating DOM mutations alongside virtual DOM
 * mutations. Will be recursively called on all the nodes in the tree until the entire tree has been patched.
 * @todo Improve performance
 * @param {DOMPatchScheduler} scheduler - The DOM scheduler used to plan writes so we run them all at once and optimize that for the browser.
 * @param {VirtualNode} parent - The parent of the old and new node. Used to add or remove children.
 * @param {VirtualNode} oldNode - The node from the tree that is being patched. Is modified by the
 * algorithm.
 * @param {VirtualNode} newNode - The node from the new tree used to patch the old tree.
 * @export
 */
export const patch = (
    scheduler: DOMPatchScheduler,
    parent: VirtualNode,
    oldNode: VirtualNode | null,
    newNode: VirtualNode | null
): void => {
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
            applyAttributes(scheduler, {}, newNode.attributes, domNode as HTMLElement);
        }

        // Start patching on the new node's children
        if (Object.prototype.hasOwnProperty.call(newNode, 'children')) {
            const converted = newNode as { children: VirtualNode[] };

            converted.children.forEach(child => patch(scheduler, newNode, null, child));
        }

        parent.domNode.appendChild(domNode);
        return;
    }

    // If the two nodes don't have the same type
    if (oldNode.constructor !== newNode.constructor) {
        // Replace the old child with the new child
        if (Object.prototype.hasOwnProperty.call(parent, 'children')) {
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

            applyAttributes(scheduler, convertedOld.attributes, convertedNew.attributes, domNode as HTMLElement);
        }

        scheduler.write(() => {
            if (!oldNode.domNode) {
                return;
            }

            parent.domNode?.replaceChild(domNode, oldNode?.domNode);
        });

        // Setup to make sure we patch the children as well
        if (newNode instanceof TextNode) {
            return;
        }
        const convertedNew = newNode as TreeNode | HtmlNode;

        // Loop in the new children if there are more
        convertedNew.children.forEach(child => {
            if (!child) {
                return;
            }

            // Generate the new node and append it to the dom
            const domNode = generateNode(child);
            if (!domNode || !convertedNew.domNode) {
                return;
            }

            child.domNode = domNode;
            if (child instanceof HtmlNode) {
                applyAttributes(scheduler, {}, child.attributes, domNode as HTMLElement);
            }

            // Start patching the new node's children
            if (Object.prototype.hasOwnProperty.call(child, 'children')) {
                const converted = child as { children: VirtualNode[] };

                converted.children.forEach(child => patch(scheduler, child, null, child));
            }

            scheduler.write(() => convertedNew.domNode?.appendChild(domNode));
        });
        return;
    } else if (!oldNode.diff(newNode)) {
        if (!oldNode.domNode) {
            return;
        }

        // If the nodes are different, but of the same type, update the nodes
        updateNode(scheduler, oldNode, newNode);
        if (oldNode instanceof TreeNode) {
            // If this node is a component, stop right here and update the component.
            // The component will take care of patching the children
            oldNode.domNode.update();
            return;
        }
    }

    // Make sure to not check children for text nodes
    if (oldNode instanceof TextNode) {
        return;
    }
    const convertedOld = oldNode as HtmlNode | TreeNode;
    const convertedNew = newNode as HtmlNode | TreeNode;

    // Proceed to update the children or replace them if needed
    let index = 0;
    // Loop in the old children until we have no more children
    for (; index < convertedOld.children.length; index++) {
        const oldChild = convertedOld.children[index];
        if (!oldChild) {
            continue;
        }

        // If there are no more new children
        if (index >= convertedNew.children.length) {
            // We have to remove the remaining old children and break the loop
            convertedOld.children.splice(index).forEach(child => {
                if (!child) {
                    return;
                }

                if (!convertedOld.domNode || !child.domNode) {
                    return;
                }

                scheduler.write(() => {
                    if (!child.domNode) {
                        return;
                    }

                    convertedOld.domNode?.removeChild(child.domNode);
                });
            });
            break;
        }

        const newChild = convertedNew.children[index];
        if (!newChild) {
            continue;
        }

        // Start patching the two nodes
        patch(scheduler, convertedOld, oldChild, newChild);
    }

    // Loop in the new children if there are more
    for (; index < convertedNew.children.length; index++) {
        const newChild = convertedNew.children[index];
        if (!newChild) {
            continue;
        }

        convertedOld.children.push(newChild);

        // Generate the new node and append it to the dom
        const domNode = generateNode(newChild);
        if (!domNode || !convertedOld.domNode) {
            return;
        }

        newChild.domNode = domNode;
        if (newChild instanceof HtmlNode) {
            applyAttributes(scheduler, {}, newChild.attributes, domNode as HTMLElement);
        }

        // Start patching the new node's children
        if (Object.prototype.hasOwnProperty.call(newChild, 'children')) {
            const converted = newChild as { children: VirtualNode[] };

            converted.children.forEach(child => patch(scheduler, newChild, null, child));
        }

        scheduler.write(() => convertedOld.domNode?.appendChild(domNode));
    }
};
