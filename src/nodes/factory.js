import selectorExtractor from '../utils/selectorExtractor';
import uid from '../utils/uid';

import ArrayNode from './arrayNode';
import FuncNode from './funcNode';
import HtmlNode from './htmlNode';
import TextNode from './textNode';

export default (tag, attributes = {}, children = [], vnodeized = false) => {
    const id = Symbol(uid());
    return () => {
        let node = null;
        const data = {
            attributes,
            children,
        };
        if (typeof tag === 'function') {
            node = new FuncNode();
            data.factory = tag;
        } else if (Array.isArray(tag)) {
            node = new ArrayNode();
        } else if (vnodeized) {
            node = new TextNode();
            data.text = tag;
        } else {
            node = new HtmlNode();
            const selector = selectorExtractor(tag);
            Object.assign(data, selector);
        }

        Object.assign(node, {
            attributes,
            children,
            nodeId: id,
            ...data,
        });
        return node;
    };
};
