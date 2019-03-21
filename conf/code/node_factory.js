const factory = (tag, attributes = {}, children = [], vnodeized = false) => {
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

const vnodizeChildren = (child) => {
    if (typeof child !== 'object') {
        return factory(child, null, null, true);
    }
    return child;
};

export default (tag, attributes = {}, ...children) => {
    let childArray = [];
    children.forEach((child) => {
        // Extract content of array child
        if (Array.isArray(child)) {
            childArray = childArray.concat(...child);
        } else {
            childArray = childArray.concat(child);
        }
    });

    return factory(tag, attributes, childArray.map(vnodizeChildren));
};
