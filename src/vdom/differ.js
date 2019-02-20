import HtmlNode from '../nodes/htmlNode';
import TextNode from '../nodes/textNode';
import patchRegistry from '../operations/patchRegistry';
import patchOperationFactory from '../operations/patchOperation';
import {
    PATCH_TEXT,
    PATCH_NODE,
    PATCH_INSERT,
    PATCH_REMOVE,
    PATCH_REORDER,
} from '../operations/patchOpTypes';

export default {
    diff(oldTree, newTree) {
        this.diffRecursive(oldTree, newTree);
    },

    diffRecursive(oldNode, newNode) {
        //If the old node is missing
        if (!oldNode) {
            patchRegistry.add(patchOperationFactory(PATCH_INSERT, newNode, { oldNode }));
            return;
        }
        //If the new node is missing
        if (!newNode) {
            patchRegistry.add(patchOperationFactory(PATCH_REMOVE, newNode, { oldNode }));
            return;
        }
        //Always Update the old tree with the new tree's data
        patchRegistry.add(patchOperationFactory(PATCH_NODE, newNode, { oldNode }));
        //if both node are identical
        if (this.compareVNodes(oldNode, newNode)) {
            //Still run on children
            newNode.children.forEach(
                (child, index) => this.diffRecursive(
                    oldNode.children[index],
                    child,
                ),
            );
        }
        //If both nodes are similar, but not equal
        else if (!this.compareVNodes(oldNode, newNode) && oldNode.type === newNode.type) {
            if (oldNode instanceof TextNode) {
                patchRegistry.add(patchOperationFactory(PATCH_TEXT, newNode, { oldNode }));
                return;
            }
            // Also run on the children if both node are similar, otherwise the insert will take care of that
            newNode.children.forEach(
                (child, index) => this.diffRecursive(
                    oldNode.children[index],
                    child,
                ),
            );
            patchRegistry.add(patchOperationFactory(PATCH_REORDER, newNode, { oldNode }));
        } else if (oldNode.type !== newNode.type) {
            //Else, if they are not of the same type
            //We simply want to create a new node and replace the old node
            patchRegistry.add(patchOperationFactory(PATCH_INSERT, newNode, { oldNode }));
            patchRegistry.add(patchOperationFactory(PATCH_REMOVE, newNode, { oldNode }));
            patchRegistry.add(patchOperationFactory(PATCH_REORDER, oldNode.parent, { oldNode }));
        }
    },

    compareVNodes(vnode1, vnode2) {
        if (JSON.stringify(vnode1.attributes) !== JSON.stringify(vnode2.attributes)) {
            return false;
        }
        if (!(vnode1.children && vnode2.children) || vnode1.children.length !== vnode2.children.length) {
            return false;
        }
        if (vnode1.type === vnode2.type) {
            if (vnode1 instanceof HtmlNode) {
                //HTML vnodes are equal if their tags are the same
                return vnode1.tagname === vnode2.tagname;
            }
            if (vnode1 instanceof TextNode) {
                //Text vnodes are equal if their text is equal
                return vnode1.text === vnode2.text;
            }
            return false;
        }
        return true;
    },
};
