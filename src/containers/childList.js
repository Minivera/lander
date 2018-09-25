export default (domNode = null, defaults = []) => Object.assign({}, {
    children: [],
    domNode,

    setChildren(children) {
        this.children = children;
        this.apply();
        return this;
    },

    prepend(child) {
        this.children = [child].concat([this.children]);
        if (this.children.length > 1) {
            this.domNode.insertBefore(this.children[1].domNode, child.domNode);
        }
        else {
            this.domNode.appendChild(child.domNode);
        }
        return this;
    },

    append(child) {
        this.children = this.children.concat([child]);
        this.domNode.appendChild(child.domNode);
        return this;
    },

    insertBefore(child, childBefore) {
        const pos = this.childPos(childBefore);
        if (pos <= 0) {
            return this.prepend(child);
        }
        this.children = this.children.slice(0, pos).concat([child], this.children.slice(pos));
        this.domNode.insertBefore(childBefore.domNode, child.domNode);
        return this;
    },

    insertAfter(child, childAfter) {
        const pos = this.childPos(childAfter);
        if (pos >= this.children.length - 1) {
            return this.append(child);
        }
        this.children = this.children.slice(0, pos + 1).concat([child], this.children.slice(pos + 1));
        this.domNode.insertBefore(childAfter.domNode.nextSibling, child.domNode);
        return this;
    },

    remove(child) {
        this.children = this.children.filter((element) => {
            if (element === child) {
                this.domNode.removeChild(element.domNode);
                return false;
            }
            return true;
        });
        return this;
    },

    replace(child, childToReplace) {
        this.children = this.children.map((element) => {
            if (element === child) {
                this.domNode.replaceChild(childToReplace.domNode, element.domNode);
                return childToReplace;
            }
            return element;
        });
        return this;
    },

    clear() {
        Array.from(this.domNode.childNodes).forEach(child => this.domNode.removeChild(child));
        this.children = [];
        return this;
    },

    forEach(callback) {
        this.children.forEach(callback);
        return this;
    },

    map(callback) {
        return this.children.map(callback);
    },

    reduce(callback, initialValue) {
        return this.children.reduce(callback, initialValue);
    },

    hasChild(child) {
        return this.children.includes(child);
    },

    hasAnyChildren() {
        return this.children.length > 0;
    },

    childPos(child) {
        let index = -1;
        const found = this.children.find((element) => {
            index++;
            return element === child;
        });
        return found ? index : -1;
    },

    getChild(pos) {
        return this.children[pos] ? this.children[pos] : null;
    },

    apply() {
        Array.from(this.domNode.childNodes).forEach(child => this.domNode.removeChild(child));
        this.children.forEach((child) => {
            this.domNode.appendChild(child.domNode);
        });
        return this;
    },
}).setChildren(defaults);
