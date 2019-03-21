const patchOperations = [];

function patchRecursive(parent, node, lastDomNode, currentPath) {
    patchOperations
        .filter(op => JSON.stringify(op.oldNode) === JSON.stringify(node)
            || JSON.stringify(op.parent) === JSON.stringify(node))
        .forEach((operation) => {
            switch (operation.type) {
                case PATCH_TEXT:
                    patchText(parent, node, lastDomNode, operation);
                    break;
                case PATCH_NODE:
                    patchNode(parent, node, lastDomNode, operation);
                    break;
                case PATCH_INSERT:
                    patchInsert(parent, node, lastDomNode, operation);
                    break;
                case PATCH_REMOVE:
                    patchRemove(parent, node, lastDomNode, operation);
                    break;
                case PATCH_REPLACE:
                    patchReplace(parent, node, lastDomNode, operation);
                    break;
                default:
            }
        });

    let domNode = lastDomNode;
    // Update the last dom node if the current node is an HTML node
    if (node instanceof HtmlNode) {
        domNode = node;
    }

    // Try to run recursively on the children of the node
    if (node.children) {
        node.children.forEach(
            child => this.executeRecursive(
                node,
                child,
                domNode,
                currentPath.concat(node.nodeId)
            ),
        );
    }
}

function patchText(parent, node, domNode, op) {
    if (!domNode) {
        return;
    }

    node.update(op.node);
    const nodeIndex = getChildIndex(parent.children, node);
    domNode.domNode.replaceChild(
        nodeMaker.createTextNode(node.text), domNode.domNode.childNodes[nodeIndex],
    );
}

function patchNode(parent, node, domNode, op) {
    node.update(op.node);
}

function patchInsert(parent, node, domNode, op) {
    if (!domNode) {
        return;
    }

    op.node.create();
    node.children.push(op.node);
    if (op.node instanceof HtmlNode) {
        const newDomNode = nodeMaker.createElement(op.node.tagname);
        op.node.mount(newDomNode);
        domNode.domNode.appendChild(op.node.domNode);
    } else if (op.node instanceof TextNode) {
        const newDomNode = nodeMaker.createTextNode(op.node.text);
        domNode.domNode.appendChild(newDomNode);
    }
}

function patchRemove(parent, node, domNode, op) {
    if (!domNode) {
        return;
    }

    const nodeIndex = getChildIndex(node.children, op.node);
    if (node instanceof HtmlNode) {
        domNode.domNode.removeChild(op.node.domNode);
    } else if (node instanceof TextNode) {
        domNode.domNode.removeChild(domNode.childNodes[nodeIndex]);
    }
    node.children = node
        .children
        .slice(0, nodeIndex)
        .concat(parent.children.slice(-nodeIndex));
    op.node.remove();
}

function patchReplace(parent, node, domNode, op) {
    if (!domNode) {
        return;
    }

    if (node instanceof HtmlNode) {
        const newDomNode = nodeMaker.createElement(op.node.tagname);
        domNode.domNode.replaceChild(newDomNode, node.domNode);
    } else if (node instanceof TextNode) {
        const nodeIndex = getChildIndex(node.parent.children, node);
        const newDomNode = nodeMaker.createTextNode(op.node.text);
        domNode.domNode.replaceChild(newDomNode, domNode.childNodes[nodeIndex]);
    }
}
