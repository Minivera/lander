export function FuncNode(id = '', factory = () => {}, attributes = {}) {
    this.nodeId = id;
    this.factory = factory;
    this.attributes = attributes;
    this.children = [];

    this.mount = () => {};

    this.render = () => {
        let result = this.factory(this.attributes);
        if (!Array.isArray(result)) {
            result = [result];
        }
        return result;
    };

    this.update = ({ attributes: newAttributes }) => {
        this.attributes = newAttributes;
    };

    this.remove = () => {};

    this.clone = () => new FuncNode(this.nodeId, this.factory, this.attributes);
}

