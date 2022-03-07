import { HtmlNode } from '../nodes/htmlNode';
import { TextNode } from '../nodes/textNode';
import { TreeNode } from '../nodes/treeNode';
import { JSXProps, VirtualNode } from '../types/lander';
import { ComponentElement } from '../tree/component';

import { DOMPatchScheduler } from './domPatchScheduler';

/**
 * Function that will apply the given attributes on the HTML element. The old attributes are passed for removing
 * attributes when needed. For example, if an attribute is present in the old attributes, but not in the new
 * attributes, it should be removed from the DOM node.
 * @todo support namespaced attributes
 * @param {DOMPatchScheduler} scheduler - The DOM scheduler used to plan writes so we run them all at once and optimize that for the browser.
 * @param {PropsWithoutContext} oldAttributes - The old attributes that were assigned to the node before the patch.
 * @param {PropsWithoutContext} newAttributes - The new attributes that were assigned to the node after the patch.
 * @param {HTMLElement} node - The node on which to apply the attribute changes.
 */
export const applyAttributes = (
    scheduler: DOMPatchScheduler,
    oldAttributes: JSXProps = {},
    newAttributes: JSXProps = {},
    node: HTMLElement
): void => {
    Object.keys(oldAttributes).forEach(key => {
        // If the new attributes doesn't have the old attribute
        if (
            !Object.prototype.hasOwnProperty.call(newAttributes, key) ||
            !(newAttributes as Record<string, unknown>)[key]
        ) {
            const objectizedNode = node as unknown as { [s: string]: unknown };

            // Remove the attribute from the node since it is now gone
            if (typeof objectizedNode[key] !== 'undefined') {
                // Delete on the node directly if we can
                delete objectizedNode[key];
            }
            scheduler.write(() => node.removeAttribute(key));
        }
    });
    // Go over the new attributes
    Object.entries(newAttributes).forEach(([key, value]) => {
        if (
            typeof value !== 'function' &&
            Object.prototype.hasOwnProperty.call(oldAttributes, key) &&
            (oldAttributes as Record<string, unknown>)[key] === value
        ) {
            // If the attribute did not change and is not an event listener, don't bother updating
            return;
        }
        const objectizedNode = node as unknown as { [s: string]: unknown };

        if (typeof objectizedNode[key] !== 'undefined') {
            // Set on the node directly if we can
            scheduler.write(() => {
                objectizedNode[key] = value;
            });
        }

        if (typeof value === 'string' || typeof value === 'number') {
            // Set the new attribute value on the node
            scheduler.write(() => node.setAttribute(key, (value as string | number).toString()));
        } else if (typeof value === 'boolean') {
            // For booleans, set the attribute as an empty string if true or remove if false
            if (value) {
                scheduler.write(() => node.setAttribute(key, ''));
            } else {
                scheduler.write(() => node.removeAttribute(key));
            }
        }
    });
};

/**
 * Generate a DOM node with the given virtual node. If generating a virtual dom component, it will also assign
 * all the properties on the web component.
 * @param {HtmlNode|TextNode|TreeNode} virtualNode - The node from which to create the DOM node.
 * @returns {Node} - Returns a DOM node that can be used directly.
 */
export const generateNode = (virtualNode: VirtualNode): HTMLElement | Text | ComponentElement | undefined => {
    if (virtualNode instanceof HtmlNode) {
        return document.createElement(virtualNode.tag);
    } else if (virtualNode instanceof TextNode) {
        return document.createTextNode(virtualNode.text);
    }
    const converted = virtualNode as TreeNode;

    const rootElement = document.createElement('vdom-component') as ComponentElement;
    rootElement.setAll(
        converted.factory,
        converted.attributes,
        converted.children as VirtualNode[],
        converted
    );
    return rootElement;
};

/**
 * Updates a virtual node and its associated DOM node with the values of the new virtual node.
 * @param {DOMPatchScheduler} scheduler - The DOM scheduler used to plan writes so we run them all at once and optimize that for the browser.
 * @param {VirtualNode} oldNode - The node to update.
 * @param {VirtualNode} newNode - The node to update from.
 */
export const updateNode = (scheduler: DOMPatchScheduler, oldNode: VirtualNode, newNode: VirtualNode): void => {
    if (oldNode instanceof HtmlNode) {
        const convertedOld = oldNode as HtmlNode;
        const convertedNew = newNode as HtmlNode;

        if (!convertedOld.domNode) {
            return;
        }

        applyAttributes(scheduler, convertedOld.attributes, convertedNew.attributes, convertedOld.domNode);
        oldNode.attributes = convertedNew.attributes;
    } else if (oldNode instanceof TextNode) {
        const convertedOld = oldNode as TextNode;
        const convertedNew = newNode as TextNode;

        if (!convertedOld.domNode) {
            return;
        }

        convertedOld.text = convertedNew.text;
        convertedOld.domNode.nodeValue = convertedNew.text;
    } else {
        const convertedOld = oldNode as TreeNode;
        const convertedNew = newNode as TreeNode;

        if (!convertedOld.domNode) {
            return;
        }

        // Update the virtual attributes for a component node
        convertedOld.attributes = convertedNew.attributes;
        convertedOld.children = convertedNew.children;
        convertedOld.factory = convertedNew.factory;

        // Update the DOM attributes from the associated web component
        convertedOld.domNode.setAll(
            convertedNew.factory,
            convertedNew.attributes,
            convertedNew.children as VirtualNode[],
            convertedOld
        );
    }
};
