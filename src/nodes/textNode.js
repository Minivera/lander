import { TEXT_TAG_TYPE } from '../utils/constants';

export default function() {
    this.text = '';
    this.children = [];
    this.type = TEXT_TAG_TYPE;

    this.create = () => {};

    this.mount = () => {};

    this.render = () => this.children;

    this.update = (data = {}) => {
        const { text } = data;

        this.text = text;
    };

    this.remove = () => {};

    this.toString = () => this.text;
}
