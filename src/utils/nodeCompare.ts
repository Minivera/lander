export const equals = (node1: HTMLElement | null, node2: HTMLElement | null): boolean => {
    if (!node1 && !node2) {
        return true;
    }
    if (!node1 || !node2) {
        return false;
    }
    if (node1.nodeType !== node2.nodeType) {
        return false;
    }
    if (node1.nodeName !== node2.nodeName) {
        return false;
    }
    if (node1.nodeValue !== node2.nodeValue) {
        return false;
    }
    return JSON.stringify(node1.attributes) === JSON.stringify(node2.attributes);
};

export const childrenEquals = (node1: HTMLElement, node2: HTMLElement): boolean => {
    if (node1.childNodes.length !== node2.childNodes.length) {
        return false;
    }
    let currentElement1 = node1.firstChild;
    let currentElement2 = node2.firstChild;

    while (currentElement1 !== null && currentElement2 !== null) {
        if (!equals(currentElement1 as HTMLElement, currentElement2 as HTMLElement)) {
            return false;
        }
        currentElement1 = currentElement1.nextSibling;
        currentElement2 = currentElement2.nextSibling;
    }
    return true;
};
