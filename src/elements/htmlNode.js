import { HTML_TAG_TYPE } from '../utils/constants';
import treeUtils from '../dom';

import baseNode from './baseElement';

export default () => Object.assign({}, baseNode, {
    type: HTML_TAG_TYPE,
    tagname: '',
    classes: [],
    domId: '',
    domNode: null,
    eventListeners: [],

    create(data = {}, mock = false) {
        const {
            attributes,
            children,
            nodeId,
            tagname,
            classes,
            id,
        } = data;

        this.tagname = tagname;
        this.classes = classes;
        this.domId = id;
        baseNode.create.call(this, {
            attributes,
            children,
            nodeId,
        }, mock);
    },

    mount(domNode) {
        this.domNode = domNode;
        this.setDomAttrs();
    },

    remove() {
        //Always remove the event listeners
        this.eventListeners.forEach(listener => this.domNode.removeEventListener(listener[0], listener[1]));
        baseNode.remove.call(this);
    },

    update(data = {}) {
        const {
            attributes,
            children,
            classes,
            id,
        } = data;

        this.classes = classes;
        this.domId = id;
        this.setDomAttrs();
        baseNode.update.call(this, {
            attributes,
            children,
        });
    },

    setDomAttrs() {
        //Always preremove the event listeners
        this.eventListeners.forEach(listener => this.domNode.removeEventListener(listener[0], listener[1]));
        //The set the attributes with any new listeners
        Object.keys(this.attributes).forEach((attrName) => {
            if (typeof this.attributes[attrName] === 'function')
            {
                const caller = event => this.attributes[attrName].call(this, event, this);
                this.domNode.addEventListener(attrName, caller);
                //Save the listener for later removal
                this.eventListeners.push([attrName, caller]);
                return;
            }
            this.domNode.setAttribute(attrName, this.attributes[attrName]);
        });
        const { classList } = this.domNode;
        while (classList.length > 0)
        {
            classList.remove(classList.item(0));
        }
        this.classes.forEach(c => classList.add(c));
        this.domNode.id = this.domId;
    },

    createTag() {
        return treeUtils.createElement(this.tagname);
    },

    toString() {
        return `${this.tagname} ${this.classes.length > 0 ? `class="${
            this.classes.reduce((classes, c) => `${classes} ${c}`, '')
        }"` : ''} ${this.domId ? `id="${this.domId}"` : ''} ${
            this.attributes.reduce((attrs, attr, name) => `${attrs} ${name}="${attr}"`, '')
        }>`;
    },
});
