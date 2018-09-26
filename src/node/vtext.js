import { textNodeType } from '../utils/constants';
import uniqueId from '../utils/uid';

export default text => Object.assign({}, {
    id: null,
    type: textNodeType,
    text,
    domNode: null,

    create() {
        this.id = uniqueId();
        this.domNode = document.createTextNode(this.text);
        return this;
    },

    mount() {
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

    setText(newText) {
        this.text = newText;
        this.domNode = document.createTextNode(newText);
    },
}).create();
