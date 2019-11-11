import { HtmlNode } from '../nodes/htmlNode';
import { TextNode } from '../nodes/textNode';
import { applyDomAttributes } from '../utils/applyDomAttributes';

export const createHtmlElement = (node: HtmlNode): HTMLElement => {
    const domNode = document.createElement(node.tag);

    applyDomAttributes(node.attributes, node.eventListeners, domNode);

    return domNode;
};

export const createTextElement = (node: TextNode): Text => {
    return document.createTextNode(node.text);
};
