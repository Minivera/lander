import { HtmlNode } from '../nodes/htmlNode';
import { TextNode } from '../nodes/textNode';
import patchRegistry from '../operations/patchRegistry';
import patchOperationFactory from '../operations/patchOperation';
import {
    PATCH_TEXT,
    PATCH_NODE,
    PATCH_INSERT,
    PATCH_REMOVE,
    PATCH_REPLACE,
} from '../operations/patchOpTypes';

export default {
    diff(oldTree, newTree) {
        this.diffRecursive(oldTree, newTree, null);
    },

    diffRecursive(oldNode, newNode, parent) {
        //If the old node is missing
        if (!oldNode) {
            patchRegistry.add(patchOperationFactory(PATCH_INSERT, newNode, { parent }));
            return;
        }
        //If the new node is missing
        if (!newNode) {
            patchRegistry.add(patchOperationFactory(PATCH_REMOVE, oldNode, { parent }));
            return;
        }
        //if both node are identical
        if (this.compareVNodes(oldNode, newNode)) {
            // Check if the node is an HTML node and has event listeners, we should always update these
            if (oldNode instanceof HtmlNode && oldNode.eventListeners.length > 0) {
                patchRegistry.add(patchOperationFactory(PATCH_NODE, newNode, { oldNode }));
            }
            //Still run on children
            newNode.children.forEach(
                (child, index) => this.diffRecursive(
                    oldNode.children[index],
                    child,
                    oldNode,
                ),
            );
        }
        //If both nodes are similar, but not equal
        else if (!this.compareVNodes(oldNode, newNode) && oldNode.type === newNode.type) {
            if (oldNode instanceof TextNode) {
                patchRegistry.add(patchOperationFactory(PATCH_TEXT, newNode, { oldNode }));
                return;
            }
            patchRegistry.add(patchOperationFactory(PATCH_NODE, newNode, { oldNode }));
            // Also run on the children if both node are similar, otherwise the insert will take care of that
            newNode.children.forEach(
                (child, index) => this.diffRecursive(
                    oldNode.children[index],
                    child,
                    oldNode,
                ),
            );
        } else if (oldNode.type !== newNode.type) {
            //Else, if they are not of the same type
            //We simply want to create a new node and replace the old node
            patchRegistry.add(patchOperationFactory(PATCH_REPLACE, newNode, { oldNode }));
        }
    },

    compareVNodes(vnode1, vnode2, ignoreChildren = false) {
        if (vnode1 === vnode2) {
            return true;
        }
        if (vnode1.type !== vnode2.type) {
            return false;
        }
        if (!ignoreChildren
            && !((vnode1.children && vnode2.children) || vnode1.children.length !== vnode2.children.length)) {
            return false;
        }
        if (JSON.stringify(vnode1.attributes) !== JSON.stringify(vnode2.attributes)) {
            return false;
        }
        if (vnode1 instanceof HtmlNode) {
            // If the HTML node has any bound attributes
            if (Object.keys(vnode1.attributes).find(attr => vnode1.attributes[attr].binding)
                || Object.keys(vnode2.attributes).find(attr => vnode2.attributes[attr].binding)) {
                let similarBindings = true;
                const bindings = Object.keys(vnode1.attributes).filter(attr => vnode1.attributes[attr].binding);
                for (let i = 0; i < bindings.length; i++) {
                    // Eslint is very dumb when it comes to fo in loops with arrays
                    const attr = bindings[i];
                    if (!vnode2.attributes[attr]) {
                        similarBindings = false;
                        break;
                    }
                    if (vnode1.attributes[attr]() !== vnode2.attributes[attr]()) {
                        similarBindings = false;
                        break;
                    }
                }

                if (!similarBindings) {
                    return false;
                }
            }
            return vnode1.tagname === vnode2.tagname && vnode1.id === vnode2.id
                && JSON.stringify(vnode1.classes) === JSON.stringify(vnode2.classes);
        }
        if (vnode1 instanceof TextNode) {
            return vnode1.text === vnode2.text;
        }
        return true;
    },
};
