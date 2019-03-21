export function ArrayNode(id = '', children = []) {
    this.nodeId = id;
    this.children = children;

    this.mount = () => {};

    this.update = ({ children: newChildren }) => {
        this.children = newChildren;
    };

    this.remove = () => {};

    this.clone = () => new ArrayNode(this.nodeId, this.children);
}
