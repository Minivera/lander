import { ARRAY_TAG_TYPE } from '../utils/constants';

export function ArrayNode(id = '', children = []) {
    this.nodeId = id;
    this.children = children;
    this.type = ARRAY_TAG_TYPE;

    this.create = () => {};

    this.mount = () => {};

    this.update = ({ children: newChildren }) => {
        this.children = newChildren;
    };

    this.remove = () => {};

    this.toString = () => this.children.map(child => child.toString());

    this.clone = () => new ArrayNode(this.nodeId, this.children);
}

export default ArrayNode;
