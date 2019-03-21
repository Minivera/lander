function mountRecursive(currentNode, currentDomNode) {
    let domNode = null;

    if (currentNode instanceof HtmlNode) {
        domNode = window.document.createElement(currentNode.tagname);
    } else if (currentNode instanceof TextNode) {
        domNode = window.document.createTextNode(currentNode.text);
    }

    // Make sure we keep the dom nodes alive
    if (domNode !== null) {
        currentDomNode.appendChild(domNode);
    } else if (domNode == null) {
        domNode = currentDomNode;
    }

    if (currentNode.children) {
        currentNode.children.forEach(child => this.mountRecursive(child, domNode));
    }

    currentNode.mount(domNode);
    return currentNode;
}
