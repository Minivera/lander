import { HTML_TAG_TYPE } from '../utils/constants';

export default function() {
    this.tagname = '';
    this.classes = [];
    this.id = '';
    this.eventListeners = [];
    this.children = [];
    this.attributes = {};
    this.domNode = null;
    this.type = HTML_TAG_TYPE;

    this.create = () => {};

    this.mount = (domNode) => {
        this.domNode = domNode;
        this.setDomAttrs();
    };

    this.render = () => this.children;

    this.update = (data = {}) => {
        const {
            attributes,
            classes,
            id,
        } = data;

        this.classes = classes;
        this.id = id;
        this.attributes = attributes;
        this.setDomAttrs();
    };

    this.remove = () => {
        //Always remove the event listeners
        this.eventListeners.forEach(listener => this.domNode.removeEventListener(listener[0], listener[1]));
    };

    this.setDomAttrs = () => {
        //Always preremove the event listeners
        this.eventListeners.forEach(listener => this.domNode.removeEventListener(listener[0], listener[1]));
        //The set the attributes with any new listeners
        Object.keys(this.attributes).forEach((attrName) => {
            if (typeof this.attributes[attrName] === 'function') {
                const caller = event => this.attributes[attrName].call(this, event, this);
                this.domNode.addEventListener(attrName, caller);
                //Save the listener for later removal
                this.eventListeners.push([attrName, caller]);
                return;
            }
            this.domNode.setAttribute(attrName, this.attributes[attrName]);
        });
        const { classList } = this.domNode;
        while (classList.length > 0) {
            classList.remove(classList.item(0));
        }
        this.classes.forEach(c => classList.add(c));
        this.domNode.id = this.id;
    };

    this.toString = () => `${this.tagname} ${this.classes.length > 0 ? `class="${
        this.classes.reduce((classes, c) => `${classes} ${c}`, '')
    }"` : ''} ${this.domId ? `id="${this.id}"` : ''} ${
        this.attributes.reduce((attrs, attr, name) => `${attrs} ${name}="${attr}"`, '')
    }>
        ${this.children.map(child => child.toString())}
    </${this.tagname}>`;
}
