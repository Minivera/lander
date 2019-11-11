import { Attributes, AttributeValue, Listeners, VirtualNode } from '../types/lander';
import { TreeNode } from './treeNode';

interface HtmlNodeConfig {
    tag: string;
    attributes: Attributes;
    children: VirtualNode[];
}

// eslint-disable-next-line no-undef
export class HtmlNode extends VirtualNode {
    tree: TreeNode | null = null;

    tag: string;

    attributes: Attributes;

    eventListeners: Listeners = [];

    children: VirtualNode[];

    constructor({ tag, attributes, children }: HtmlNodeConfig) {
        super();
        this.tag = tag;
        this.attributes = attributes;
        this.children = children;

        Object.entries(attributes).forEach(([name, value]: [string, AttributeValue]): void => {
            if (typeof value === 'function') {
                this.eventListeners.push({
                    name,
                    listener: (value as EventListener),
                });
                delete this.attributes[name];
            } else if (typeof value === 'object' && Object.keys(value).includes('handleEvent')) {
                this.eventListeners.push({
                    name,
                    listener: (value as EventListenerObject),
                });
                delete this.attributes[name];
            }
        });
    }

    requestUpdate(): void {
        if (!this.tree) {
            throw new Error('This HTML element was not mounted, potential memory leak.');
        }
        this.tree.update();
    }

    render(): void {
        this.children.forEach((child: VirtualNode): void => child.render());
    }

    equals(otherNode: VirtualNode): boolean {
        if (!(otherNode instanceof HtmlNode)) {
            return false;
        }

        if (otherNode === this) {
            return true;
        }
        if (!otherNode) {
            return false;
        }
        if (otherNode.tag !== this.tag) {
            return false;
        }
        if (otherNode.eventListeners.length || this.eventListeners.length) {
            return false;
        }
        return JSON.stringify(otherNode.attributes) === JSON.stringify(this.attributes);
    }

    childrenEquals(otherNode: VirtualNode): boolean {
        if (!(otherNode instanceof HtmlNode)) {
            return false;
        }

        return super.childrenEquals(otherNode);
    }

    toString(): string {
        let attributes = '';

        Object.entries(this.attributes).forEach(([name, value]: [string, AttributeValue]): void => {
            if (typeof value === 'boolean') {
                attributes += `${name}=""`;
                return;
            }
            attributes += `${name}="${value}"`;
        });

        return `<${this.tag} ${attributes}>${
            this.children.map((child: VirtualNode): string => child.toString()).join('')
        }</${this.tag}>`;
    }
}
