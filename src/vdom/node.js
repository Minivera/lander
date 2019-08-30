export class Node {
    constructor(id) {
        this.nodeId = id;
        this.domNode = null;
        this.children = [];
        this.parent = null;
        this.nextSibling = null;
        this.prevSibling = null;
    }

    mount(domNode) {
        this.domNode = domNode;
    }

    remove() {
        this.domNode = null;
    }

    get firstChildren() {
        if (this.children.length) {
            return this.children[0];
        }
        return null;
    }

    get lastChildren() {
        if (this.children.length) {
            return this.children[this.children.length - 1];
        }
        return null;
    }

    insertBefore(newChild) {
        const index = this.parent.children.findIndex(element => element === this);
        if (index < 0) {
            throw new Error('The node is not a child of the given parent in insertBefore');
        }
        this.children.splice(index, 0, newChild);
    }

    insertAfter(newChild) {
        const index = this.parent.children.findIndex(element => element === this);
        if (index < 0) {
            throw new Error('The node is not a child of the given parent in insertAfter');
        }
        this.children.splice(index + 1, 0, newChild);
    }

    appendChild(newChild) {
        this.children.push(newChild);
    }

    replaceChild(newChild, oldChild) {
        const index = this.children.findIndex(element => element === oldChild);
        if (index < 0) {
            throw new Error('The node is not a child of the given parent in replaceChild');
        }
        this.children[index] = newChild;
    }

    removeChild(oldChild) {
        const index = this.children.findIndex(element => element === oldChild);
        if (index < 0) {
            throw new Error('The node is not a child of the given parent in replaceChild');
        }
        this.children.splice(index, 1);
    }
}
