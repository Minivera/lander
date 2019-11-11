import { HtmlNode } from '../nodes/htmlNode';
import { applyDomAttributes } from '../utils/applyDomAttributes';
import { TextNode } from '../nodes/textNode';

export const updateHtmlNode = (node: HtmlNode, domNode: HTMLElement): void => {

    // Always clear the id
    delete domNode.id;

    // Always unset the classes
    const { classList } = domNode;
    while (classList.length > 0) {
        classList.remove(classList.item(0) as string);
    }

    applyDomAttributes(node.attributes, node.eventListeners, domNode);
};

export const updateTextNode = (node: TextNode, domNode: Text): void => {
    domNode.textContent = node.text;
};
