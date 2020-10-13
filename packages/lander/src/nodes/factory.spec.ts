import { createNode } from './factory';
import { FunctionComponent, HtmlNode, TextNode, TreeNode, VirtualElement, VirtualNode } from '..';

describe('createNode', () => {
    it('will create a tree node when given a component', () => {
        const factory: FunctionComponent = () => null;
        const props = {};
        const children: VirtualNode[] = [];

        const result = createNode(factory, props, ...children) as TreeNode;

        expect(result).toBeInstanceOf(TreeNode);
        expect(result.factory.original).toEqual(factory);
        expect(result.attributes).toEqual(props);
        expect(result.children).toEqual(children);
    });

    it('will create a text node when given an object with a text attribute', () => {
        const text = 'test';

        const result = createNode({ text }) as TextNode;

        expect(result).toBeInstanceOf(TextNode);
        expect(result.text).toEqual(text);
    });

    it('will create an HTML node if given anything else', () => {
        const tag = 'div';
        const props = {};
        const children: VirtualNode[] = [];

        const result = createNode(tag, props, ...children) as HtmlNode;

        expect(result).toBeInstanceOf(HtmlNode);
        expect(result.tag).toEqual(tag);
        expect(result.attributes).toEqual(props);
        expect(result.children).toEqual(children);
    });

    it('will clean the children and props of nodes that supports them', () => {
        const factory: FunctionComponent = () => null;
        const tag = 'div';
        const props = {
            style: 'color: red',
            id: 'test',
        };
        const children: VirtualElement[] = [createNode(factory), 'test', null, undefined, 1, true];

        const result = createNode(tag, props, ...children) as HtmlNode;

        expect(result).toBeInstanceOf(HtmlNode);
        expect(result.children).toHaveLength(4);

        // First children should be component
        expect(result.children[0]).toBeInstanceOf(TreeNode);
        expect((result.children[0] as TreeNode).factory.original).toEqual(factory);

        // Second children should be text
        expect(result.children[1]).toBeInstanceOf(TextNode);
        expect((result.children[1] as TextNode).text).toEqual('test');

        // Next children should not be null nor undefined, but a number
        expect(result.children[2]).toBeInstanceOf(TextNode);
        expect((result.children[2] as TextNode).text).toEqual(1);

        // Last children should not be a boolean
        expect(result.children[3]).toBeInstanceOf(TextNode);
        expect((result.children[3] as TextNode).text).toEqual(true);
    });
});
