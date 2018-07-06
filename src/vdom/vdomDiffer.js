import patchRegistry from '../operations/patchRegistry';
import { patchOperationFactory } from '../operations/patchOperation';
import {
    PATCH_TEXT,
    PATCH_NODE,
    PATCH_INSERT,
    PATCH_REMOVE,
    PATCH_REORDER,
} from '../operations/patchOpTypes';
import {
    UNKNOWN_TAG_TYPE,
    HTML_TAG_TYPE,
    FUNC_TAG_TYPE,
    TEXT_TAG_TYPE,
} from '../utils/constants';

export default {
    mount(root, virtualTree) {
        if (root.hasChildNodes())
        {
            if (virtualTree.type === HTML_TAG_TYPE && root.tagname !== virtualTree.tagname)
            {
                virtualTree.mount(root);
            }
            return this.mountToDom(root, virtualTree);
        }
        //Clear the root before mounting to new
        root.childNodes.forEach(node => root.removeChild(node));
        return this.mountToNew(root, virtualTree);
    },

    mountToDom(root, vTree) {
        if (vTree.type === HTML_TAG_TYPE)
        {
            const rootChildren = root.childNodes;
            const vChildren = vTree.children;
            if (rootChildren.length !== vChildren.length) {
                this.mountToNew(root, vTree);
                return;
            }
            for (let index = 0; index < vChildren.length; index++) {
                const child = vChildren[index];
                const domChild = rootChildren[index];
                if (child.type === HTML_TAG_TYPE) {
                    if (domChild.tagname !== child.tagname) {
                        this.mountToNew(root, vTree);
                        return;
                    }
                    child.mount(domChild);
                    this.mountToDom(domChild, child);
                }
            }
        }
        else
        {
            vTree.mount(root);
            vTree.children.forEach(child => this.mountToDom(root, child));
        }
    },

    mountToNew(domNode, vNode) {
        let madeNode = domNode;
        if (vNode.type === HTML_TAG_TYPE) {
            madeNode = vNode.createTag();
            domNode.appendChild(madeNode);
        }
        else if (vNode.type === TEXT_TAG_TYPE) {
            domNode.appendChild(vNode.createText());
        }
        vNode.mount(madeNode);
        vNode.children.forEach(child => this.mountToNew(madeNode, child));
    },

    compareVNodes(vnode1, vnode2) {
        if (JSON.stringify(vnode1.attributes) !== JSON.stringify(vnode2.attributes))
        {
            return false;
        }
        if (vnode1.children.length !== vnode2.children.length)
        {
            return false;
        }
        if (vnode1.type === vnode2.type)
        {
            switch (vnode1.type)
            {
                //Compare the types of vnodes for equality
                case UNKNOWN_TAG_TYPE:
                    //Unknown nodes are not comparable
                    return false;
                case HTML_TAG_TYPE:
                    //HTML vnodes are equal if their tags are the same
                    return vnode1.tagname === vnode2.tagname;
                case FUNC_TAG_TYPE:
                    //Func vnodes are never equal
                    return false;
                case TEXT_TAG_TYPE:
                    //Text vnodes are equal if their text is equal
                    return vnode1.text === vnode2.text;
                default:
                    return false;
            }
        }
        return true;
    },

    diff(oldNode, newNode, path) {
        //If the old node is missing
        if (!oldNode)
        {
            patchRegistry.add(patchOperationFactory(PATCH_INSERT, newNode, { path }));
            return;
        }
        //If the new node is missing
        if (!newNode)
        {
            patchRegistry.add(patchOperationFactory(PATCH_REMOVE, newNode, {
                path,
                id: oldNode.id,
            }));
            return;
        }
        //if both node are identical
        if (this.compareVNodes(oldNode, newNode))
        {
            //Still run on children
            newNode.children.forEach(
                (child, index) => this.diff(
                    oldNode.children[index],
                    child,
                    path.concat(oldNode.id),
                ),
            );
        }
        //If both nodes are similar, but not equal
        else if (!this.compareVNodes(oldNode, newNode) && oldNode.type === newNode.type) {
            if (oldNode.type === TEXT_TAG_TYPE)
            {
                patchRegistry.add(patchOperationFactory(PATCH_TEXT, newNode, {
                    path,
                    id: oldNode.id,
                }));
                return;
            }
            //Update the old tree with the new tree's data
            patchRegistry.add(patchOperationFactory(PATCH_NODE, newNode, {
                path,
                id: oldNode.id,
            }));
            // Also run on the children if both node are similar, otherwise the insert will take care of that
            newNode.children.forEach(
                (child, index) => this.diff(
                    oldNode.children[index],
                    child,
                    path.concat(oldNode.id),
                ),
            );
            patchRegistry.add(patchOperationFactory(PATCH_REORDER, newNode, {
                path,
                id: oldNode.id,
            }));
        }
        //Else, if they are not of the same type
        else if (oldNode.type !== newNode.type)
        {
            //We simply want to create a new node and replace the old node
            patchRegistry.add(patchOperationFactory(PATCH_INSERT, newNode, {
                path,
                id: oldNode.id,
            }));
            patchRegistry.add(patchOperationFactory(PATCH_REMOVE, newNode, {
                path,
                id: oldNode.id,
            }));
            patchRegistry.add(patchOperationFactory(PATCH_REORDER, oldNode.parent, {
                path,
                id: oldNode.id,
            }));
        }
    },
};
