export const PATCH_TEXT = 'text';
export const PATCH_NODE = 'node';
export const PATCH_INSERT = 'insert';
export const PATCH_REMOVE = 'remove';
export const PATCH_REPLACE = 'replace';

function diffRecursive(oldNode, newNode, parent) {
    //If the old node is missing
    if (!oldNode) {
        patchRegistry.add(patchOperationFactory(PATCH_INSERT, newNode, { parent }));
        return;
    }
    //If the new node is missing
    if (!newNode) {
        patchRegistry.add(patchOperationFactory(PATCH_REMOVE, oldNode, { parent }));
        return;
    }
    //if both node are identical
    if (compareVNodes(oldNode, newNode)) {
        // Check if the node is an HTML node and has event listeners, we should always update these
        if (oldNode instanceof HtmlNode && oldNode.eventListeners.length > 0) {
            patchRegistry.add(patchOperationFactory(PATCH_NODE, newNode, { oldNode }));
        }
        //Still run on children
        newNode.children.forEach(
            (child, index) => diffRecursive(
                oldNode.children[index],
                child,
                oldNode,
            ),
        );
    }
    //If both nodes are similar, but not equal
    else if (!compareVNodes(oldNode, newNode) && oldNode.type === newNode.type) {
        if (oldNode instanceof TextNode) {
            patchRegistry.add(patchOperationFactory(PATCH_TEXT, newNode, { oldNode }));
            return;
        }
        patchRegistry.add(patchOperationFactory(PATCH_NODE, newNode, { oldNode }));
        // Also run on the children if both node are similar, otherwise the insert will take care of that
        newNode.children.forEach(
            (child, index) => diffRecursive(
                oldNode.children[index],
                child,
                oldNode,
            ),
        );
    } else if (oldNode.type !== newNode.type) {
        //Else, if they are not of the same type
        //We simply want to create a new node and replace the old node
        patchRegistry.add(patchOperationFactory(PATCH_REPLACE, newNode, { oldNode }));
    }
}
