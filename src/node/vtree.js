export default {
    mount(vtree, domNode) {
        domNode.childNodes.forEach(child => domNode.removeChild(child));
        domNode.appendChild(vtree.domNode);
    },
};
