import { TreeNode } from '../nodes/treeNode';
import { TextNode } from '../nodes/textNode';
import { ArrayNode } from '../nodes/arrayNode';
import { HtmlNode } from '../nodes/htmlNode';
import { Attributes, ChildTypes, NodeCreator, TagTypes, TextNodeTag, VirtualNode } from '../types/lander';

const vdonizeChildren = (child: ChildTypes): VirtualNode =>
    typeof child === 'string'
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        ? createNode({ text: child as string }, {})
        : (child as VirtualNode);

export const createNode: NodeCreator = (
    tag: TagTypes,
    attributes: Attributes,
    ...children: ChildTypes[]
) => {
    if (typeof tag === 'function') {
        return new TreeNode({
            factory: tag,
            attributes,
            children: children.map(vdonizeChildren),
        });
    }
    if (Array.isArray(tag)) {
        return new ArrayNode({ children: children.map(vdonizeChildren) });
    }
    if ((tag as TextNodeTag).text) {
        return new TextNode({ text: (tag as TextNodeTag).text });
    }

    return new HtmlNode({
        tag: (tag as string),
        attributes,
        children: children.map(vdonizeChildren),
    });
};
