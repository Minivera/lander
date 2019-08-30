import { HTMLNode } from '../nodes/htmlNode';
import { TextNode } from '../nodes/textNode';

export class PatchReplace {
    constructor(parent, oldNode, newNode) {
        this.parent = parent;
        this.oldNode = oldNode;
        this.newNode = newNode;
    }

    execute() {
        this.parent.replaceChild(this.newNode, this.oldNode);

        let newNode = null;
        if (this.newNode instanceof HTMLNode) {
            newNode = document.createElement(this.newNode.tag);
        } else if (this.newNode instanceof TextNode) {
            newNode = document.createTextNode(this.newNode.text);
        }

        this.newNode.mount(newNode);
        this.parent.domNode.replaceChild(newNode, this.oldNode.domNode);
        this.oldNode.remove();

        this.newNode.children.forEach(child => this.mountChildren(newNode, child));
    }

    mountChildren(parentDom, node) {
        let newNode = null;
        if (node instanceof HTMLNode) {
            newNode = document.createElement(node.tag);
        } else if (node instanceof TextNode) {
            newNode = document.createTextNode(node.text);
        }

        node.mount(newNode);
        parentDom.appendChild(newNode);
        node.children.forEach(child => this.mountChildren(newNode, child));
    }
}
