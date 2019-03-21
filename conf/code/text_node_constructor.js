export function TextNode(id = '', text = '') {
    this.nodeId = id;
    this.text = text;
    this.children = [];

    this.mount = () => {};

    this.update = ({ text: newText }) => {
        this.text = newText;
    };

    this.remove = () => {};

    this.clone = () => new TextNode(this.nodeId, this.text);
}
