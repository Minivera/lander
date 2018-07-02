import { UNKNOWN_TAG_TYPE } from '../utils/constants';
import uniqueId from '../utils/uid';
import treeUtils from '../dom';

export default {
    id: null,
    type: UNKNOWN_TAG_TYPE,
    attributes: {},
    children: [],
    parent: null,
    nextSibling: null,
    prevSibling: null,
    hooks: {},

    create(data = {}, mock = false) {
        const { attributes, children, nodeId } = data;
        this.id = nodeId || uniqueId();

        this.attributes = attributes;
        this.children = children;
        if (this.hooks.oncreate && !mock)
        {
            this.hooks.oncreate.forEach(hook => hook.call(this));
        }
    },

    position(parent) {
        treeUtils.position(this, parent);

        if (this.hooks.onposition)
        {
            this.hooks.onposition.forEach(hook => hook.call(this));
        }
    },

    mount() {
        if (this.hooks.onmount)
        {
            this.hooks.onmount.forEach(hook => hook.call(this));
        }
    },

    remove() {
        if (this.hooks.onremove)
        {
            this.hooks.onremove.forEach(hook => hook.call(this));
        }

        treeUtils.remove(this);
    },

    update(data = {}) {
        const { attributes, children } = data;

        this.attributes = attributes;
        this.children = children;

        if (this.hooks.onupdate)
        {
            this.hooks.onupdate.forEach(hook => hook.call(this));
        }
    },

    requestUpdate() {
        if (this.hooks.onrequestupdate)
        {
            this.hooks.onrequestupdate.forEach(hook => hook.call(this));
        }

        treeUtils.update();
    },

    toString() {
        return this.children.reduce((children, child) => children + child, '');
    },

    getAttribute(attrName) {
        return this.attribute[attrName];
    },

    setAttribute(attrName, attrValue) {
        this.dirty = true;
        this.attributes[attrName] = attrValue;
    },

    addLifecyleListener(lifecycle, listener) {
        if (!this.hooks[lifecycle]) {
            this.hooks[lifecycle] = {};
        }
        this.hooks[lifecycle][listener] = listener;
    },

    removeLifecycleListener(lifecycle, listener) {
        if (!this.hooks[lifecycle]) {
            return;
        }
        delete this.hooks[lifecycle][listener];
    },

    get parentNode() {
        return this.parent;
    },

    set parentNode(parent) {
        treeUtils.position(this, parent);
    },

    get nextSiblingNode() {
        return this.nextSibling;
    },

    get prevSiblingNode() {
        return this.prevSibling;
    },
};
