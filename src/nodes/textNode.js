import { TEXT_TAG_TYPE } from '../utils/constants';

export function TextNode(id = '', text = '') {
    this.nodeId = id;
    this.text = text;
    this.children = [];
    this.type = TEXT_TAG_TYPE;

    this.create = () => {};

    this.mount = () => {};

    this.update = ({ text: newText }) => {
        this.text = newText;
    };

    this.remove = () => {};

    this.toString = () => this.text;

    this.clone = () => new TextNode(this.nodeId, this.text);
}

export default TextNode;
