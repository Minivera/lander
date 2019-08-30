import { Node } from '../vdom/node';

export class TextNode extends Node {
    constructor(nodeId, text = '') {
        super(nodeId);
        this.text = text;
    }

    update({ text }) {
        this.text = text;
    }

    toString() {
        return this.text;
    }

    clone() {
        return new TextNode(this.nodeId, this.text);
    }
}
