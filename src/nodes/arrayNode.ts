import { VirtualNode } from '../types/lander';

interface ArrayNodeConfig {
    children: VirtualNode[];
}

// eslint-disable-next-line no-undef
export class ArrayNode extends VirtualNode {
    children: VirtualNode[];

    constructor({ children }: ArrayNodeConfig) {
        super();
        this.children = children;
    }

    render(): void {
        this.children.forEach((child: VirtualNode): void => child.render());
    }

    equals(otherNode: VirtualNode): boolean {
        return otherNode instanceof ArrayNode;
    }

    childrenEquals(otherNode: VirtualNode): boolean {
        if (!(otherNode instanceof ArrayNode)) {
            return false;
        }

        return super.childrenEquals(otherNode);
    }

    toString(): string {
        return this.children.map((child: VirtualNode): string => child.toString()).join('');
    }
}
