export default (domNode = null, defaults = {}) => Object.assign({}, {
    listeners: {},
    domNode,

    setListeners(listeners) {
        Object.keys(listeners).forEach(name => this.addListener(name, listeners[name]));
        return this;
    },

    addListener(key, listener) {
        if (!this.listeners[key]) {
            this.listeners[key] = [];
        }
        this.listeners[key].push(listener);
        this.domNode.addEventListener(key, listener);
        return this;
    },

    removeListener(key, listener) {
        if (!this.listeners[key]) {
            return this;
        }
        this.listeners[key] = this.listeners[key].filter(element => element !== listener);
        this.domNode.removeEventListener(key, listener);
        return this;
    },

    clear() {
        //Remove all listeners currently registered
        Object.keys(this.listeners).forEach((key) => {
            this.listeners[key].forEach(listener => this.domNode.removeEventListener(key, listener));
        });
        this.listeners = {};
        return this;
    },

    apply() {
        //Remove all listeners currently registered, ignoring any that aren't on the node
        Object.keys(this.listeners).forEach((key) => {
            this.listeners[key].forEach(listener => this.domNode.removeEventListener(key, listener));
        });
        //Readd the listeners on a clean node
        Object.keys(this.listeners).forEach((key) => {
            this.listeners[key].forEach(listener => this.domNode.addEventListener(key, listener));
        });
        return this;
    },
}).setListeners(defaults);
