export const childList = {
    children: [],
    domNode: null,

    setChildren(children) {
        this.children = children;
        this.apply();
        return this;
    },

    prepend(child) {
        this.children = [child].concat(this.children);
        if (this.children.length > 1) {
            this.domNode.childNodes.insertBefore(this.children[1].domNode, child.domNode);
        }
        else {
            this.domNode.childNodes.appendChild(child.domNode);
        }
        return this;
    },

    append(child) {
        this.children = this.children.concat(child);
        this.domNode.childNodes.appendChild(child.domNode);
        return this;
    },

    insertBefore(child, childBefore) {
        //TODO
        this.domNode.childNodes.insertBefore(childBefore.domNode, child.domNode);
        return this;
    },

    insertAfter(child, childAfter) {
        //TODO
        this.domNode.childNodes.insertBefore(childAfter.domNode.nextSibling, child.domNode);
        return this;
    },

    remove(child) {
        this.children = this.children.filter((element) => {
            if (element === child) {
                this.domNode.childNodes.removeChild(element.domNode);
                return false;
            }
            return true;
        });
        return this;
    },

    replace(child, childToReplace) {
        this.children = this.children.map((element) => {
            if (element === child) {
                this.domNode.childNodes.replaceChild(childToReplace.domNode, element.domNode);
                return childToReplace;
            }
            return element;
        });
        return this;
    },

    clear() {
        this.domNode.childNodes.forEach(child => this.domNode.removeChild(child));
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
        let index = 0;
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
        this.domNode.childNodes.forEach(child => this.domNode.removeChild(child));
        this.children.forEach((child) => {
            this.domNode.appendChild(child.domNode);
        });
        return this;
    },
};

export default (domNode, defaults = []) => ({
    ...childList,
    domNode,
}).setChildren(defaults);
