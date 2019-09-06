import { HTMLNode } from '../nodes/htmlNode';
import { TextNode } from '../nodes/textNode';

export const nodesEqual = (oldNode, newNode) => {
    if (!oldNode || !newNode) {
        return false;
    }
    if (oldNode.constructor !== newNode.constructor) {
        return false;
    }
    if (oldNode instanceof HTMLNode && newNode instanceof HTMLNode) {
        if (oldNode.tag !== newNode.tag) {
            return false;
        }
        if (oldNode.id !== newNode.id) {
            return false;
        }
        if (!oldNode.classes.every(element => newNode.classes.includes(element))) {
            return false;
        }
        if (oldNode.eventListeners.length || newNode.eventListeners.length) {
            return false;
        }
        return JSON.stringify(oldNode.attributes) === JSON.stringify(newNode.attributes);
    }
    if (oldNode instanceof TextNode && newNode instanceof TextNode) {
        return oldNode.text === newNode.text;
    }
    return true;
};

export const childrenEquals = (oldNode, newNode) => {
    if (oldNode.children.length !== newNode.children.length) {
        return false;
    }
    let currentElement1 = oldNode.firstChild;
    let currentElement2 = newNode.firstChild;

    while (currentElement1 !== null && currentElement2 !== null) {
        if (!nodesEqual(currentElement1, currentElement2)) {
            return false;
        }
        currentElement1 = currentElement1.nextSibling;
        currentElement2 = currentElement2.nextSibling;
    }
    return true;
};
