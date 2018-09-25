import { textNodeType } from '../utils/constants';
import uniqueId from '../utils/uid';

export default text => Object.assign({}, {
    id: null,
    type: textNodeType,
    text,
    domNode: null,

    create() {
        this.id = uniqueId();
        return this;
    },

    mount() {
        this.domNode = document.createTextNode(this.text);
        return this;
    },

    position() {
        return this;
    },

    update() {
        return this;
    },

    unmount() {
        return this;
    },

    remove() {
        return this;
    },
}).create().mount();
