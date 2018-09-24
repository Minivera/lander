export default {
    mount(vtree, domNode) {
        domNode.childNodes.forEach(child => this.domNode.removeChild(child));
        domNode.appendChild(vtree.domNode);
    },
};
