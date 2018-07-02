import selectorExtractor from '../utils/selectorExtractor';
import { VNodeFactory } from '../elements';

const vnodizeChildren = (child) => {
    if (typeof child !== 'function' || !child.isFactory)
    {
        return VNodeFactory(child);
    }
    return child;
};

export default (tag, attributes = {}, children = [], listeners = {}) => {
    const childArray = children.constructor !== Array ? [children] : children;
    if (typeof tag === 'function')
    {
        return VNodeFactory(tag, attributes, childArray.map(vnodizeChildren), listeners);
    }
    const selector = selectorExtractor(tag);
    return VNodeFactory(selector, attributes, childArray.map(vnodizeChildren), listeners);
};
