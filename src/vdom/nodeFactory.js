import factory from '../nodes/factory';

const vnodizeChildren = (child) => {
    if (typeof child !== 'function') {
        return factory(child, null, null, true);
    }
    return child;
};

export default (tag, attributes = {}, children = []) => {
    const childArray = !Array.isArray(children) ? [children] : children;
    return factory(tag, attributes, childArray.map(vnodizeChildren));
};
