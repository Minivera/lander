export abstract class VirtualNode {
    children: VirtualNode[] = [];

    parent: VirtualNode | null = null;

    root: Node | null = null;

    get domNode(): VirtualNode | null {
        if (this.root) {
            return this;
        }

        let current: VirtualNode | null = this.parent;
        while (current !== null) {
            if (current.root) {
                return current;
            }
            current = current.parent;
        }
        return null;
    }

    get nextSibling(): VirtualNode | null {
        if (this.parent === null) {
            return null;
        }

        let current = this.parent.firstChild;
        if (current === null) {
            return null;
        }

        for (let i = 1; i < this.parent.children.length; i++) {
            if (current === this) {
                return this.parent.children.length - 1 >= i ? this.parent.children[i] : null;
            }
            current = this.parent.children[i];
        }
        return null;
    }

    get previousSibling(): VirtualNode | null {
        if (this.parent === null) {
            return null;
        }

        let current: VirtualNode | null = null;
        for (let i = 0; i < this.parent.children.length; i++) {
            if (current === this) {
                return i >= 1 ? this.parent.children[i - 1] : null;
            }
            current = this.parent.children[i];
        }
        return null;
    }

    get firstChild(): VirtualNode | null {
        return this.children.length ? this.children[0] : null;
    }

    get lastChild(): VirtualNode | null {
        return this.children.length ? this.children[this.children.length - 1] : null;
    }

    appendChild(newNode: VirtualNode): void {
        this.children.push(newNode);
        newNode.parent = this;
    }

    removeChild(toRemove: VirtualNode): void {
        this.children = this.children.filter((child: VirtualNode): boolean => child !== toRemove);
    }

    replaceChild(oldNode: VirtualNode, newNode: VirtualNode): void {
        this.children = this.children.map((child: VirtualNode): VirtualNode => {
            if (child === oldNode) {
                newNode.parent = this;
                oldNode.parent = null;
                return newNode;
            }
            return child;
        });
    }

    mount(root: Node): void {
        this.root = root;
    }

    abstract render(): void;

    abstract equals(otherNode: VirtualNode): boolean;

    childrenEquals(otherNode: VirtualNode): boolean {
        if (otherNode.children.length !== this.children.length) {
            return false;
        }
        let currentElement1 = this.firstChild;
        let currentElement2 = otherNode.firstChild;

        while (currentElement1 !== null && currentElement2 !== null) {
            if (!currentElement1.equals(currentElement2)) {
                return false;
            }
            currentElement1 = currentElement1.nextSibling;
            currentElement2 = currentElement2.nextSibling;
        }
        return true;
    }

    abstract toString(): string;
}

export type NodeCreator = (tag: TagTypes, attributes: Attributes, ...children: ChildTypes[]) => VirtualNode;

export type TextNodeTag = { text: string };

export type TagTypes = string | FunctionNode | TextNodeTag;

export type AttributeValue = undefined | null | string | number | boolean | object | EventListenerOrEventListenerObject;

export type Attributes = {[n: string]: AttributeValue};

export type Listener = {name: string, listener: EventListenerOrEventListenerObject};

export type Listeners = Listener[];

export type ChildTypes = string | VirtualNode;

export type FunctionNode<T = any> = (attributes: Attributes & T, children: VirtualNode[]) => VirtualNode;
