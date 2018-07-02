import { FUNC_TAG_TYPE } from '../utils/constants';

import baseNode from './baseElement';

export default () => Object.assign({}, baseNode, {
    type: FUNC_TAG_TYPE,
    callee: '',

    create(data = {}, mock = false) {
        const { attributes, nodeId, callee } = data;

        this.callee = callee;
        baseNode.create.call(this, {
            attributes,
            nodeId,
            children: callee(attributes),
        }, mock);
    },

    update(data = {}) {
        const { attributes } = data;
        baseNode.update.call(this, {
            attributes,
            children: this.callee(attributes),
        });
    },
});
