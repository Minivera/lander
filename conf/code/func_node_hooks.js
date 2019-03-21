export function FuncNode(id = '', factory = () => {}, attributes = {}) {
    this.nodeId = id;
    this.factory = factory;
    this.attributes = attributes;
    this.children = [];
    this.type = FUNC_TAG_TYPE;

    this.create = () => {};

    this.mount = () => {};

    this.render = () => {
        const prevElement = hooksStore.currentElement;
        hooksStore.currentElement = this;

        let result = this.factory(this.attributes);
        if (!Array.isArray(result)) {
            result = [result];
        }

        hooksStore.currentElement = prevElement;
        return result;
    };

    this.update = ({ attributes: newAttributes }) => {
        this.attributes = newAttributes;
    };

    this.remove = () => {};

    this.toString = () => this.children.map(child => child.toString());

    this.clone = () => new FuncNode(this.nodeId, this.factory, this.attributes);
}
