import factory from '../nodes/factory';

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
