import {
    lifecycleCreate,
    lifecycleMount,
    lifecyclePosition,
    lifecycleUpdate,
    lifecycleUnmount,
    lifecycleRemove,
    lifecycleEvents,
    htmlNodeType,
} from '../utils/constants';
import selectorExtractor from '../utils/selectorExtractor';
import AttrMap from '../containers/attrMap';
import ChildList from '../containers/childList';
import ListenerMap from '../containers/listenerMap';
import ClassList from '../containers/classList';
import uniqueId from '../utils/uid';

export const vnode = {
    id: null,
    type: htmlNodeType,
    tagname: null,
    domId: null,
    domNode: null,
    attributes: {},
    children: [],
    eventListeners: {},
    classes: [],
    parent: null,
    nextSibling: null,
    prevSibling: null,
    hooks: {},

    create() {
        this.id = uniqueId();
        this.domNode = document.createElement(this.tagname);
        this.attributes = new AttrMap(this.domNode, this.attributes);
        if (this.domId) {
            this.attributes.addAttribute('id', this.domId);
        }
        this.children = new ChildList(this.domNode, this.children);
        this.eventListeners = new ListenerMap(this.domNode, this.eventListeners);
        this.classes = new ClassList(this.domNode, this.classes);
        // Once everything is done, execute the lifecycle listener(s)
        if (this.hooks[lifecycleCreate]) {
            this.hooks[lifecycleCreate].forEach(call => call().bind(this));
        }
        return this;
    },

    mount() {
        // Once everything is done, execute the lifecycle listener(s)
        if (this.hooks[lifecycleMount]) {
            this.hooks[lifecycleMount].forEach(call => call().bind(this));
        }
        return this;
    },

    position(parent, prevSibling, nextSibling) {
        this.parent = parent;
        this.prevSibling = prevSibling;
        this.nextSibling = nextSibling;
        if (nextSibling) {
            nextSibling.prevSibling = this;
        }
        if (prevSibling) {
            prevSibling.nextSibling = this;
        }
        // Once everything is done, execute the lifecycle listener(s)
        if (this.hooks[lifecyclePosition]) {
            this.hooks[lifecyclePosition].forEach(call => call().bind(this));
        }
        return this;
    },

    update() {
        const oldAttributes = Object.assign({}, this.attributes.attrs);
        this.attributes.refreshAttributes();
        // Once everything is done, execute the lifecycle listener(s)
        if (this.hooks[lifecycleUpdate]) {
            this.hooks[lifecycleUpdate].forEach(call => call(oldAttributes).bind(this));
        }
        return this;
    },

    unmount() {
        this.children.forEach(child => child.unmount());
        this.parent = null;
        this.prevSibling = null;
        this.nextSibling = null;
        // Once everything is done, execute the lifecycle listener(s)
        if (this.hooks[lifecycleUnmount]) {
            this.hooks[lifecycleUnmount].forEach(call => call().bind(this));
        }
        return this;
    },

    remove() {
        this.children.forEach(child => child.remove());
        // Once everything is done, execute the lifecycle listener(s)
        if (this.hooks[lifecycleRemove]) {
            this.hooks[lifecycleRemove].forEach(call => call().bind(this));
        }
        return this;
    },

    prependChild(child) {
        this.children.prepend(child.mount());
        //Position the vnode with its siblings and parents
        child.position(this, null, this.children.getChild(1));
        return this;
    },

    appendChild(child) {
        this.children.append(child.mount());
        //Position the vnode with its siblings and parents
        child.position(this, this.children.getChild(this.children.childPos(child) - 1), null);
        return this;
    },

    insertBeforeChild(child, childBefore) {
        if (!this.children.hasChild(childBefore)) {
            return this;
        }
        this.children.insertBefore(child.mount(), childBefore);
        //Position the vnode with its siblings and parents
        child.position(this, this.children.getChild(this.children.childPos(child) - 1), childBefore);
        return this;
    },

    insertAfterChild(child, childAfter) {
        if (!this.children.hasChild(childAfter)) {
            return this;
        }
        this.children.insertAfter(child.mount(), childAfter);
        //Position the vnode with its siblings and parents
        child.position(this, childAfter, this.children.getChild(this.children.childPos(child) + 1));
        return this;
    },

    removeChild(child) {
        if (!this.children.hasChild(child)) {
            return this;
        }
        if (child.prevSibling && child.nextSibling) {
            child.prevSibling.nextSibling = child.nextSibling;
            child.nextSibling.prevSibling = child.prevSibling;
        }
        else if (child.prevSibling) {
            child.prevSibling.nextSibling = null;
        }
        else if (child.nextSibling) {
            child.nextSibling.prevSibling = null;
        }
        this.children.remove(child.unmount());
        child.remove();
        return this;
    },

    replaceChild(child, childToReplace) {
        if (!this.children.hasChild(childToReplace)) {
            return this;
        }
        this.children.replace(child.mount(), childToReplace.unmount());
        child.position(this, childToReplace.prevSibling, childToReplace.nextSibling);
        childToReplace.remove();
        return this;
    },

    addHook(hook, listener) {
        if (!this.hooks[hook]) {
            this.hooks[hook] = [];
        }
        this.hooks[hook] = this.hooks[hook].concat(listener);
        return this;
    },

    removeHook(hook, listener) {
        if (!this.hooks[hook]) {
            return this;
        }
        this.hooks[hook] = this.hooks[hook].filter(el => el !== listener);
        return this;
    },

    addEventListener(event, listener) {
        this.eventListeners.addListener(event, listener.bind(this));
        return this;
    },

    removeEventListener(event, listener) {
        this.eventListeners.removeListener(event, listener);
        return this;
    },

    setClass(classString) {
        this.classes.setClasses(classString.split(' '));
        return this;
    },
};

export const proxyHandlers = {
    get(obj, prop, receiver) {
        if (prop in obj) {
            return obj[prop];
        }
        return (value) => {
            if (prop.startsWith('on')) {
                if (lifecycleEvents.includes(prop.substring(0, 2))) {
                    obj.addHook(prop.substring(2), value);
                    return obj;
                }
                obj.addEventListener(prop.substring(2), value);
                return receiver;
            }
            obj.attributes.setAttribute(prop, value, obj);
            return receiver;
        };
    },
};

export default (tag) => {
    const selector = selectorExtractor(tag);

    return new Proxy(Object.assign({}, {
        ...vnode,
        ...selector,
    }).create(), proxyHandlers);
};
