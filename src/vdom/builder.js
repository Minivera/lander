import HtmlNode from '../nodes/htmlNode';
import TextNode from '../nodes/textNode';

import differ from './differ';

export default {
    $window: window,

    init($window) {
        this.$window = $window;
    },

    build(vtreeFactory, root) {
        return this.buildRecursive(vtreeFactory, root);
    },

    buildRecursive(currentFactory, currentDomNode) {
        const node = currentFactory();
        let domNode = null;

        if (node instanceof HtmlNode) {
            domNode = this.createElement(node.tagname);
        } else if (node instanceof TextNode) {
            domNode = this.createTextNode(node.text);
        }

        // Make sure we keep the dom nodes alive
        if (domNode !== null) {
            currentDomNode.appendChild(domNode);
        } else if (domNode == null) {
            domNode = currentDomNode;
        }

        node.create();
        node.render();
        if (node.children) {
            node.children = node.children.map(child => this.buildRecursive(child, domNode));
        }

        node.mount(domNode);
        return node;
    },

    render(vtreeFactory) {
        return this.renderRecursive(vtreeFactory);
    },

    renderRecursive(currentFactory) {
        return currentFactory().toString();
    },

    diff(treeFactory, oldTree) {
        const newTree = this.buildUnmountedRecursive(treeFactory);

        differ.diff(oldTree, newTree);
    },

    buildUnmountedRecursive(currentFactory) {
        const node = currentFactory();

        node.render();
        if (node.children) {
            node.children = node.children.map(child => this.buildUnmountedRecursive(child));
        }

        return node;
    },

    createElement(tagname) {
        return this.$window.document.createElement(tagname);
    },

    createTextNode(text) {
        return this.$window.document.createTextNode(text);
    },
};