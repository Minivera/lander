import { TextNode } from '../nodes/textNode';
import selectorExtractor from '../utils/selectorExtractor';
import { HTMLNode } from '../nodes/htmlNode';
import { hooksManager } from '../hooks/hooksManager';

// eslint-disable-next-line no-use-before-define
const vnodeizeChildren = child => (typeof child === 'string' ? createNode({ text: child }, {}) : child);

const createNode = (tag, attributes, ...children) => {
    if (typeof tag === 'function') {
        const oldElement = hooksManager.currentElement;
        hooksManager.currentElement = tag;
        hooksManager.prepareRender();

        const rendered = tag({ ...attributes, children: children.flat(1).map(vnodeizeChildren) });

        hooksManager.currentElement = oldElement;
        return rendered;
    }
    if (tag.text) {
        return new TextNode('', tag.text);
    }

    const selector = selectorExtractor(tag);
    if (!selector.tagname) {
        throw new Error(`Invalid selector received ${tag}`);
    }
    return new HTMLNode(
        '',
        selector.tagname,
        selector.id,
        selector.classes,
        attributes,
        children.flat(1).map(vnodeizeChildren)
    );
};

export default createNode;
