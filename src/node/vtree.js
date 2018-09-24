export default {
    mount(vtree, domNode) {
        domNode.childNodes.forEach(child => vtree.domNode.removeChild(child));
        domNode.appendChild(vtree.domNode);
    },
};
