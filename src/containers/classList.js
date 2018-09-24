export const classList = {
    classes: [],
    domNode: null,

    setClasses(classes) {
        this.classes = classes;
        this.apply();
        return this;
    },

    addClass(classString) {
        this.classes = this.classes.concat(classString);
        this.domNode.classList.add(classString);
        return this;
    },

    removeClass(classString) {
        this.classes = this.classes.filter(c => c !== classString);
        this.domNode.classList.remove(classString);
        return this;
    },

    hasClass(classString) {
        return this.classes.includes(classString);
    },

    clear() {
        this.classes = [];
        this.apply();
        return this;
    },

    apply() {
        const { classList: classes } = this.domNode;
        while (classes.length > 0)
        {
            classes.remove(classes.item(0));
        }
        this.classes.forEach(c => classes.add(c));
        return this;
    },
};

export default (domNode, defaults = []) => ({
    ...classList,
    domNode,
}).setClasses(defaults);
