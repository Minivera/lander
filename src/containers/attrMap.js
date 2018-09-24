export const attrMap = {
    attrs: {},
    factories: {},
    domNode: null,

    setAttributes(attributes, passThru = {}) {
        Object.keys(attributes).forEach(name => this.addAttribute(name, attributes[name], passThru));
        return this;
    },

    addAttribute(name, attr, passThru = {}) {
        let value = attr;
        if (typeof attr === 'function') {
            this.factories[name] = attr;
            value = attr(passThru);
        }
        this.attrs[name] = value;
        this.domNode.setAttribute(name, value);
        return this;
    },

    removeAttribute(name) {
        delete this.factories[name];
        delete this.attrs[name];
        this.domNode.removeAttribute(name);
        return this;
    },

    getAttribute(name) {
        return this.attrs[name];
    },

    setAttribute(name, attr, passThru = {}) {
        return this.addAttribute(name, attr, passThru);
    },

    refreshAttributes(passThru = {}) {
        Object.keys(this.factories).forEach((name) => {
            this.attrs[name] = this.factories[name](passThru);
        });
        this.apply();
        return this;
    },

    clear() {
        this.factories = {};
        this.attrs = {};
        this.apply();
        return this;
    },

    apply() {
        this.domNode.attributes.forEach((_, name) => this.domNode.removeAttribute(name));
        Object.keys(this.attrs).forEach((name) => {
            this.domNode.setAttribute(name, this.attrs[name]);
        });
        return this;
    },
};

export default (domNode, defaults = {}) => ({
    ...attrMap,
    domNode,
}.setAttributes(defaults));
