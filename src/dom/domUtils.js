import domDiffer from './domDiffer';

const getChildIndex = (children = [], id) => children.findIndex(vnode => vnode === id);

export default {
    internalTree: null,
    factory: null,
    mounted: false,
    $window: window,

    init($window) {
        this.$window = $window;
    },

    create(rootFactory = () => {}) {
        this.factory = rootFactory;
        this.internalTree = this.createInternal(rootFactory());
        this.positionInternal(this.internalTree, null);
    },

    createInternal(factory, mock = false) {
        const { node, creationData } = factory();
        node.create(creationData, mock);
        node.children = node.children.map(child => this.createInternal(child));
        return node;
    },

    positionInternal(node, parent) {
        node.position(parent);
        node.children.forEach(child => this.positionInternal(child, node));
    },

    mount(root, vnode) {
        this.mounted = true;
        this.create(vnode, true);
        return domDiffer.mount(root, this.internalTree);
    },

    render(vnode) {
        this.mounted = false;
        this.create(vnode);
        return this.internalTree.toString();
    },

    position(vnode, parent) {
        vnode.parent = parent;
        if (parent)
        {
            const currentIndex = getChildIndex(vnode.parent.children, vnode.id);
            if (currentIndex > 0)
            {
                vnode.prevSibling = parent.children[currentIndex - 1];
                vnode.prevSibling.nextSibling = vnode;
            }
            if (currentIndex < parent.children.length - 1)
            {
                vnode.nextSibling = parent.children[currentIndex + 1];
                vnode.nextSibling.prevSibling = vnode;
            }
        }
    },

    update() {
        if (!this.mounted)
        {
            //TODO: Improve error message
            throw new Error('The virtual dom tree must be mounted for the diffing to work.');
        }
        return domDiffer.diff(this.internalTree.domNode, this.internalTree, this.createInternal(this.factory(), true));
    },

    remove(vnode) {
        if (vnode.parent)
        {
            vnode.parent.children.splice(getChildIndex(vnode.parent.children, vnode.id), 1);
            vnode.prevSibling.nextSibling = vnode.nextSibling;
            vnode.nextSibling.prevSibling = vnode.prevSibling;
        }
    },

    createElement(tag) {
        return this.$window.document.createElement(tag);
    },

    createTextNode(text) {
        return this.$window.document.createTextNode(text);
    },
};
