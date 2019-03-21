function buildRecursive(currentNode) {
    if (currentNode instanceof FuncNode) {
        currentNode.children = currentNode.render();
    }

    currentNode.children = currentNode.children.map(child => this.buildRecursive(child));

    return currentNode;
}
