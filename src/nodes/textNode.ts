import { VirtualNode } from '../types/lander';

interface TextNodeConfig {
    text: string;
}

// eslint-disable-next-line no-undef
export class TextNode extends VirtualNode {
    text: string;

    constructor({ text }: TextNodeConfig) {
        super();
        this.text = text;
    }

    render(): void {}

    equals(otherNode: VirtualNode): boolean {
        if (!(otherNode instanceof TextNode)) {
            return false;
        }

        return this.text === otherNode.text;
    }

    childrenEquals(): boolean {
        return true;
    }

    toString(): string {
        return this.text;
    }
}
