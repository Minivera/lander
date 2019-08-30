import uid from '../utils/uid';
import selectorExtractor from '../utils/selectorExtractor';
import { TextNodeExtender } from '../nodes/textNode';
import { HtmlNodeExtender } from '../nodes/htmlNode';
import { ExtendedElement } from '../nodes/extender';
import { injectorsManager } from './injectorsManager';

const vdonizeChildren = (child: Lander.ChildTypes): Node =>
    typeof child === 'string'
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        ? createNode({ text: child as string }, {})
        : (child as Node);

export const createNode: Lander.NodeCreator = (
    tag: Lander.TagTypes,
    attributes: Lander.Attributes,
    ...children: Lander.ChildTypes[]
): Node => {
    if (typeof tag === 'function') {
        const oldElement = injectorsManager.currentElement;
        injectorsManager.currentElement = tag;
        injectorsManager.prepareRender();

        const returnValue = (tag as Lander.FunctionNode)(attributes, ...children.map(vdonizeChildren));

        injectorsManager.currentElement = oldElement;
        return returnValue;
    }
    if ((tag as Lander.TextNodeTag).text) {
        const node = document.createTextNode((tag as Lander.TextNodeTag).text);
        return TextNodeExtender(node);
    }

    const selector = selectorExtractor(tag);
    if (!selector.tagname) {
        throw new Error(`Invalid selector received ${tag}`);
    }
    if (selector.id) {
        attributes.id = selector.id;
    }
    if (selector.classes && selector.classes.length) {
        attributes.class = selector.classes.join(' ');
    }
    const node = document.createElement(selector.tagname);

    children.forEach((child: Lander.ChildTypes) => node.appendChild(vdonizeChildren(child)));
    const createdNode: ExtendedElement = HtmlNodeExtender(node) as unknown as ExtendedElement;
    createdNode.landerApply(attributes);

    return createdNode as unknown as Node;
};

export default createNode;
