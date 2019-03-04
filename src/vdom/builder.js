import { HtmlNode } from '../nodes/htmlNode';
import { TextNode } from '../nodes/textNode';
import { FuncNode } from '../nodes/funcNode';

import differ from './differ';
import nodeMaker from './nodeMaker';

export default {
    mountedNodes: {},

    build(vtree) {
        return this.buildRecursive(vtree);
    },

    buildRecursive(currentNode, firstPass = true) {
        let node = currentNode;
        const mounted = this.mountedNodes[currentNode.nodeId];

        // Check if we knew the node already
        if (!mounted || !differ.compareVNodes(mounted, currentNode)) {
            // If not the same, we need to patch the old node with the new node
            this.mountedNodes[currentNode.nodeId] = currentNode;
            node.create();
        }

        // If not the first building pass, then we can clone
        if (!firstPass) {
            node = node.clone();
        }

        if (node instanceof FuncNode) {
            node.children = node.render();
        }

        // Check if the two nodes are similar
        if (mounted && differ.compareVNodes(mounted, node)) {
            // If yes, try to reconcile the new node with the mounted node
            node.children = node.children.map((child, index) => {
                const mountedChild = mounted.children[index];
                if (mountedChild && differ.compareVNodes(mountedChild, child, child instanceof FuncNode)) {
                    child.nodeId = mountedChild.nodeId;
                    child.domNode = mountedChild.domNode;
                }
                return this.buildRecursive(child, firstPass);
            });
        } else {
            node.children = node.children.map(child => this.buildRecursive(child, firstPass));
        }

        return node;
    },

    mount(vtree, root) {
        return this.mountRecursive(vtree, root);
    },

    mountRecursive(currentNode, currentDomNode) {
        let domNode = null;

        if (currentNode instanceof HtmlNode) {
            domNode = nodeMaker.createElement(currentNode.tagname);
        } else if (currentNode instanceof TextNode) {
            domNode = nodeMaker.createTextNode(currentNode.text);
        }

        // Make sure we keep the dom nodes alive
        if (domNode !== null) {
            currentDomNode.appendChild(domNode);
        } else if (domNode == null) {
            domNode = currentDomNode;
        }

        if (currentNode.children) {
            currentNode.children.forEach(child => this.mountRecursive(child, domNode));
        }

        currentNode.mount(domNode);
        return currentNode;
    },

    render(vtree) {
        return vtree.toString();
    },

    diff(oldTree) {
        const newTree = this.buildRecursive(oldTree, false);

        differ.diff(oldTree, newTree);
    },
};
