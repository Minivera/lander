import { Differ } from '../patches/differ';
import { HTMLNode } from '../nodes/htmlNode';
import { TextNode } from '../nodes/textNode';
import { hooksManager } from '../hooks/hooksManager';

export class Tree {
    constructor(factory = () => {}) {
        if (typeof factory === 'function') {
            this.factory = factory;
        } else {
            this.factory = () => factory;
        }
        this.tree = null;
        this.root = null;
    }

    mount(domNode) {
        hooksManager.currentTree = this;

        this.root = domNode;
        this.tree = this.factory();
        this.position(null, this.tree);
        this.mountToRoot(this.root, this.tree);

        hooksManager.currentTree = null;
    }

    position(parent, currentNode) {
        let prev = null;

        currentNode.children.forEach(child => {
            child.parent = parent;
            child.prev = prev;
            if (prev) {
                prev.next = child;
            }
            prev = child;

            child.children.forEach(subChild => this.position(child, subChild));
        });
    }

    mountToRoot(parent, node) {
        let domNode = null;
        if (node instanceof HTMLNode) {
            domNode = document.createElement(node.tag);
            node.mount(domNode);
        } else if (node instanceof TextNode) {
            domNode = document.createTextNode(node.text);
            node.mount(domNode);
        }

        node.children.forEach(child => {
            this.mountToRoot(domNode, child);
        });

        parent.appendChild(domNode);
    }

    update() {
        hooksManager.currentTree = this;

        const newTree = this.factory();
        const differ = new Differ();
        differ.diff(null, this.tree, newTree);
        differ.patch();

        hooksManager.currentTree = null;
    }
}

export default Tree;
