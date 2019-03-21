export function Node(
    nodeId = '',
    attributes = {},
    children = [],
) {
    this.nodeId = nodeId;
    this.attributes = attributes;
    this.children = children;

    this.mount = () => {};

    this.update = ({ attributes }) => this.attributes = attributes;

    this.remove = () => {};

    this.clone = ({ attributes }) => new Node(this.nodeId, this.attributes, this.children);
}
