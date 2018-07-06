import getChildIndex from '../utils/getVChildIndex';
import {
    PATCH_TEXT,
    PATCH_NODE,
    PATCH_INSERT,
    PATCH_REMOVE,
    PATCH_REORDER,
} from './patchOpTypes';
import {
    HTML_TAG_TYPE,
    TEXT_TAG_TYPE,
} from '../utils/constants';

export default {
    operations: [],

    add(patchOp) {
        this.operations.push(patchOp);
    },

    walkPath(tree, path) {
        const child = tree.children[getChildIndex(tree.children, path[0])];
        if (path.length <= 1)
        {
            return child;
        }
        return this.walkPath(child, path.slice(1));
    },

    findParentNodeWithDom(currentNode) {
        let parentNode = currentNode;
        while (parentNode && parentNode.type !== HTML_TAG_TYPE)
        {
            parentNode = parentNode.parent;
        }
        return parentNode;
    },

    execute(vtree) {
        //Sort by path length so we can optimize our walks
        this.operations.sort((op1, op2) => op2.path.length - op1.path.length).forEach((op) => {
            const parent = this.walkPath(vtree, op.path.slice(1));
            const node = parent.children.find(child => child.id === op.id);
            switch (op.type) {
                case PATCH_TEXT:
                    this.patchText(parent, node, op);
                    break;
                case PATCH_NODE:
                    this.patchNode(parent, node, op);
                    break;
                case PATCH_INSERT:
                    this.patchInsert(parent, node, op);
                    break;
                case PATCH_REMOVE:
                    this.patchRemove(parent, node, op);
                    break;
                case PATCH_REORDER:
                    this.patchReorder(parent, node, op);
                    break;
                default:
            }
        });
        this.operations = [];
    },

    patchText(parent, node, op) {
        node.update(op.node);
        const parentNode = this.findParentNodeWithDom(node, op.path);
        const nodeIndex = getChildIndex(parent.children, node.id);
        parentNode.domNode.replaceChild(node.createText(), parentNode.domNode.childNodes[nodeIndex]);
    },

    patchNode(parent, node, op) {
        node.update(op.node);
    },

    patchInsert(parent, node, op) {
        op.node.create({
            ...op.node,
            nodeId: op.id,
        });
        parent.children.push(op.node);
        op.node.position(parent);
        const parentNodeWithDom = this.findParentNodeWithDom(node, op.path);
        if (node.type === HTML_TAG_TYPE)
        {
            op.node.mount(op.node.createTag());
            parentNodeWithDom.domNode.appendChild(op.node.domNode);
        }
        else if (node.type === TEXT_TAG_TYPE)
        {
            op.node.mount(parentNodeWithDom.domNode);
            parentNodeWithDom.domNode.appendChild(op.node.createText());
        }
        else
        {
            op.node.mount(parentNodeWithDom.domNode);
        }
    },

    patchRemove(parent, node, op) {
        const parentNodeWithDom = this.findParentNodeWithDom(node, op.path);
        if (node.type === HTML_TAG_TYPE)
        {
            parentNodeWithDom.domNode.removeChild(op.node.domNode);
        }
        else if (node.type === TEXT_TAG_TYPE)
        {
            const nodeIndex = getChildIndex(node.parent.children, node.id);
            parentNodeWithDom.domNode.removeChild(parentNodeWithDom.childNodes[nodeIndex]);
        }
        node.remove();
    },

    patchReorder(parent, node, op) {
        const parentNodeWithDom = this.findParentNodeWithDom(node, op.path);
        parentNodeWithDom.domNode.childNodes.forEach(child => parentNodeWithDom.domNode.removeChild(child));
        parent.children.forEach((child) => {
            if (child.type === HTML_TAG_TYPE)
            {
                parentNodeWithDom.domNode.appendChild(child.domNode);
            }
        });
    },
};
