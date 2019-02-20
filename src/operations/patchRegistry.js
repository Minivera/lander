import getChildIndex from '../utils/getVChildIndex';
import HtmlNode from '../nodes/htmlNode';
import TextNode from '../nodes/textNode';
import builder from '../vdom/builder';

import {
    PATCH_TEXT,
    PATCH_NODE,
    PATCH_INSERT,
    PATCH_REMOVE,
    PATCH_REORDER,
} from './patchOpTypes';

export default {
    operations: [],

    add(patchOp) {
        this.operations.push(patchOp);
    },

    execute(vtree) {
        // Execute the operations on the tree
        this.executeRecursive(null, vtree, vtree instanceof HtmlNode ? vtree : null, []);
        // Clear the operations when finished
        this.operations = [];
    },

    executeRecursive(parent, node, lastDomNode, currentPath) {
        this
            .operations
            .filter(op => JSON.stringify(op.oldNode) === JSON.stringify(node))
            .forEach((operation) => {
                switch (operation.type) {
                    case PATCH_TEXT:
                        this.patchText(parent, node, lastDomNode, operation);
                        break;
                    case PATCH_NODE:
                        this.patchNode(parent, node, lastDomNode, operation);
                        break;
                    case PATCH_INSERT:
                        this.patchInsert(parent, node, lastDomNode, operation);
                        break;
                    case PATCH_REMOVE:
                        this.patchRemove(parent, node, lastDomNode, operation);
                        break;
                    case PATCH_REORDER:
                        this.patchReorder(parent, node, lastDomNode, operation);
                        break;
                    default:
                }
            });

        let domNode = lastDomNode;
        // Update the last dom node if the current node is an HTML node
        if (node instanceof HtmlNode) {
            domNode = node;
        }

        // Try to run recursively on the children of the node
        if (node.children) {
            node.children.forEach(
                child => this.executeRecursive(node, child, domNode, currentPath.concat(node.nodeId)),
            );
        }
    },

    patchText(parent, node, domNode, op) {
        if (!domNode) {
            return;
        }

        node.update(op.node);
        const nodeIndex = getChildIndex(parent.children, node);
        domNode.domNode.replaceChild(builder.createTextNode(node.text), domNode.domNode.childNodes[nodeIndex]);
    },

    patchNode(parent, node, domNode, op) {
        node.update(op.node);
    },

    patchInsert(parent, node, domNode, op) {
        if (!domNode) {
            return;
        }

        op.node.create();
        parent.children.push(op.node);
        if (node instanceof HtmlNode) {
            const newDomNode = builder.createElement(op.node.tagname);
            op.node.mount(newDomNode);
            domNode.domNode.appendChild(op.node.domNode);
        } else if (node instanceof TextNode) {
            const newDomNode = builder.createTextNode(op.node.text);
            domNode.domNode.appendChild(newDomNode);
        }
    },

    patchRemove(parent, node, domNode, op) {
        if (!domNode) {
            return;
        }

        if (node instanceof HtmlNode) {
            domNode.domNode.removeChild(op.node.domNode);
        } else if (node instanceof TextNode) {
            const nodeIndex = getChildIndex(node.parent.children, node);
            domNode.domNode.removeChild(domNode.childNodes[nodeIndex]);
        }
        node.remove();
    },

    patchReorder(parent, node, domNode) {
        if (!domNode) {
            return;
        }

        domNode.domNode.childNodes.forEach(child => domNode.domNode.removeChild(child));
        parent.children.forEach((child) => {
            if (child instanceof HtmlNode) {
                domNode.domNode.appendChild(child.domNode);
            }
        });
    },
};
