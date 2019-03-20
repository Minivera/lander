import selectorExtractor from '../utils/selectorExtractor';
import uid from '../utils/uid';

import { ArrayNode } from './arrayNode';
import { FuncNode } from './funcNode';
import { HtmlNode } from './htmlNode';
import { TextNode } from './textNode';

export default (tag, attributes = {}, children = [], vnodeized = false) => {
    const id = Symbol(uid());
    if (typeof tag === 'function') {
        return new FuncNode(id, tag, attributes, children);
    }
    if (Array.isArray(tag)) {
        return new ArrayNode(id, children);
    }
    if (vnodeized) {
        return new TextNode(id, tag);
    }
    const selector = selectorExtractor(tag);
    return new HtmlNode(id, selector.tagname, selector.classes, selector.id, attributes, children);
};
