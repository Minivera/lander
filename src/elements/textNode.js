import { TEXT_TAG_TYPE } from '../utils/constants';
import treeUtils from '../dom';

import baseNode from './baseElement';

export default () => Object.assign({}, baseNode, {
    type: TEXT_TAG_TYPE,
    text: '',

    create(data = {}, mock = false) {
        const { text } = data;

        this.text = text;
        baseNode.create.call(this, data, mock);
    },

    update(data = {}) {
        const { text, attributes, children } = data;

        this.text = text;
        baseNode.update.call(this, {
            attributes,
            children,
        });
    },

    createText() {
        return treeUtils.createTextNode(this.text);
    },

    toString() {
        return this.text;
    },
});
