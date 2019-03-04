import { HTML_TAG_TYPE } from '../utils/constants';

export function HtmlNode(nodeId = '', tag = '', classes = [], id = '', attributes = {}, children = []) {
    this.nodeId = nodeId;
    this.tagname = tag;
    this.classes = classes;
    this.id = id;
    this.eventListeners = [];
    this.attributes = attributes;
    this.children = children;
    this.domNode = null;
    this.type = HTML_TAG_TYPE;

    this.create = () => {};

    this.mount = (domNode) => {
        this.domNode = domNode;
        this.setDomAttrs();
    };

    this.update = ({
        tagname: newTagname,
        classes: newClasses,
        id: newId,
        attributes: newAttributes,
    }) => {
        this.tagname = newTagname;
        this.classes = newClasses;
        this.id = newId;
        this.attributes = newAttributes;
        this.setDomAttrs();
    };

    this.remove = () => {
        //Always remove the event listeners
        this.eventListeners.forEach(listener => this.domNode.removeEventListener(listener[0], listener[1]));
        this.eventListeners = [];
    };

    this.setDomAttrs = () => {
        //Always preremove the event listeners
        this.eventListeners.forEach(listener => this.domNode.removeEventListener(listener[0], listener[1]));
        this.eventListeners = [];
        //The set the attributes with any new listeners
        Object.keys(this.attributes).forEach((attrName) => {
            if (typeof this.attributes[attrName] === 'function') {
                if (this.attributes[attrName].binding) {
                    this.domNode.setAttribute(attrName, this.attributes[attrName]());
                    return;
                }

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
        if (this.id) {
            this.domNode.id = this.id;
        } else {
            delete this.domNode.id;
        }
    };

    this.toString = () => `${this.tagname} ${this.classes.length > 0 ? `class="${
        this.classes.reduce((current, c) => `${current} ${c}`, '')
    }"` : ''} ${this.domId ? `id="${this.id}"` : ''} ${
        this.attributes.reduce((attrs, attr, name) => `${attrs} ${name}="${attr}"`, '')
    }>
        ${this.children.map(child => child.toString())}
    </${this.tagname}>`;

    this.clone = () => new HtmlNode(this.nodeId, this.tagname, this.classes, this.id, this.attributes, this.children);
}

export default HtmlNode;
