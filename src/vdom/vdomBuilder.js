import selectorExtractor from '../utils/selectorExtractor';
import factory from '../elements/factory';

const vnodizeChildren = (child) => {
    if (typeof child !== 'object')
    {
        return factory(child);
    }
    return child;
};

export default (tag, attributes = {}, children = [], listeners = {}) => {
    const childArray = children.constructor !== Array ? [children] : children;
    if (typeof tag === 'function')
    {
        return factory(tag, attributes, childArray.map(vnodizeChildren), listeners);
    }
    const selector = selectorExtractor(tag);
    return factory(selector, attributes, childArray.map(vnodizeChildren), listeners);
};
