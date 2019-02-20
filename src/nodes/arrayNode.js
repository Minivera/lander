import { ARRAY_TAG_TYPE } from '../utils/constants';

export default function() {
    this.children = [];
    this.type = ARRAY_TAG_TYPE;

    this.create = () => {};

    this.mount = () => {};

    this.render = () => this.children;

    this.update = () => {};

    this.remove = () => {};

    this.toString = () => this.children.map(child => child.toString());

    this.clone = () => {
        const clone = new this.constructor();
        clone.children = this.children;
        clone.nodeId = this.nodeId;
        return clone;
    };
}
