import HtmlNode from './htmlNode';
import TextNode from './textNode';
import FuncNode from './funcNode';

export default (tag, attrs = {}, children = [], listeners = {}) => {
    const factory = () => {
        let node;
        let data = {
            attributes: attrs,
            factory,
            children,
        };
        if (typeof tag === 'function')
        {
            node = new FuncNode();
            data = Object.assign(data, {
                callee: tag,
            });
        }
        else if (typeof tag === 'object')
        {
            node = new HtmlNode();
            data = Object.assign(data, {
                ...tag,
            });
        }
        else
        {
            node = new TextNode();
            data = Object.assign(data, {
                text: tag,
            });
        }
        Object.keys(listeners).forEach(name => node.addLifecyleListener(name, listeners[name]));
        node.factory = factory;
        return { node, creationData: data };
    };
    factory.isFactory = true;
    return factory;
};
