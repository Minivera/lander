mountedNodes = {};

function buildRecursive(currentNode, firstPass = true) {
    let node = currentNode;
    const mounted = mountedNodes[currentNode.nodeId];

    // Check if we knew the node already
    if (!mounted || !compareVNodes(mounted, currentNode)) {
        // If not the same, we need to patch the old node with the new node
        mountedNodes[currentNode.nodeId] = currentNode;
    }

    // If not the first building pass, then we can clone
    if (!firstPass) {
        node = node.clone();
    }

    if (node instanceof FuncNode) {
        node.children = node.render();
    }

    // Check if the two nodes are similar
    if (mounted && compareVNodes(mounted, node)) {
        // If yes, try to reconcile the new node with the mounted node
        node.children = node.children.map((child, index) => {
            const mountedChild = mounted.children[index];
            if (mountedChild && compareVNodes(mountedChild, child, child instanceof FuncNode)) {
                child.nodeId = mountedChild.nodeId;
                child.domNode = mountedChild.domNode;
            }
            return this.buildRecursive(child, firstPass);
        });
    } else {
        node.children = node.children.map(child => this.buildRecursive(child, firstPass));
    }

    return node;
}
