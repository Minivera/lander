import hooksStore from '../hooks/hooksStore';
import { FUNC_TAG_TYPE } from '../utils/constants';

export default function() {
    this.factory = () => {};
    this.attributes = {};
    this.children = [];
    this.type = FUNC_TAG_TYPE;

    this.create = () => {};

    this.mount = () => {};

    this.render = () => {
        const prevElement = hooksStore.currentElement;
        hooksStore.currentElement = this;

        const result = this.factory(this.attributes);
        this.children = result;
        if (!Array.isArray(result)) {
            this.children = [result];
        }

        hooksStore.currentElement = prevElement;
    };

    this.update = (data = {}) => {
        const {
            attributes,
        } = data;

        this.attributes = attributes;
    };

    this.remove = () => {};

    this.toString = () => this.children.map(child => child.toString());
}
