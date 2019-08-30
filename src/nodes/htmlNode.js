import { Node } from '../vdom/node';

export class HTMLNode extends Node {
    constructor(nodeId, tag = '', id = '', classes = [], attributes = {}, children = []) {
        super(nodeId);
        this.tag = tag;
        this.id = id;
        this.classes = classes;
        this.attributes = attributes;
        this.children = children;
        this.eventListeners = [];
    }

    mount(domNode) {
        super.mount(domNode);
        this.setDomAttributes();
    }

    update({ tag, classes, id, attributes }) {
        this.tag = tag;
        this.classes = classes;
        this.id = id;
        this.attributes = attributes;
        this.setDomAttributes();
    }

    remove() {
        super.remove();
        // Always remove the event listeners
        this.eventListeners.forEach(listener => this.domNode.removeEventListener(listener[0], listener[1]));
        this.eventListeners = [];
    }

    setDomAttributes() {
        // Always preremove the event listeners
        this.eventListeners.forEach(listener => this.domNode.removeEventListener(listener[0], listener[1]));
        this.eventListeners = [];

        // The set the attributes with any new listeners
        Object.keys(this.attributes).forEach(attrName => {
            if (typeof this.attributes[attrName] === 'function') {
                const caller = event => this.attributes[attrName].call(this, event, this);
                this.domNode.addEventListener(attrName, caller);
                // Save the listener for later removal
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
    }

    toString() {
        return this.domNode.outerHTML;
    }

    clone() {
        return new HTMLNode(this.nodeId, this.tag, this.id, this.classes, this.attributes, this.children);
    }
}
