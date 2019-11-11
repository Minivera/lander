import { Patch } from './basePatch';
import { VirtualNode } from '../types/lander';
import { HtmlNode } from '../nodes/htmlNode';
import { TextNode } from '../nodes/textNode';
import { createHtmlElement, createTextElement } from '../vdom/creator';
import { TreeNode } from '../nodes/treeNode';

export class PatchInsert extends Patch {
    lastTree: TreeNode;

    parent: VirtualNode;

    newNode: VirtualNode;

    constructor(lastTree: TreeNode, parent: VirtualNode, newNode: VirtualNode) {
        super();
        this.lastTree = lastTree;
        this.parent = parent;
        this.newNode = newNode;
    }

    execute(): void {
        const parentWithDom = this.parent.domNode;
        if (!parentWithDom || !parentWithDom.root) {
            throw new Error('The tree was not mounted');
        }

        this.parent.appendChild(this.newNode);
        PatchInsert.insertChildren(this.lastTree, parentWithDom.root, this.newNode);
    }

    static insertChildren(lastTree: TreeNode, parentDOM: Node, current: VirtualNode): void {
        let domNode: Node | null = null;

        if (current instanceof HtmlNode) {
            current.tree = lastTree;
            domNode = createHtmlElement(current);
        } else if (current instanceof TextNode) {
            domNode = createTextElement(current);
        } else if (current instanceof TreeNode) {
            lastTree = current;
        }

        // If no dom node was created
        if (domNode !== null) {
            parentDOM.appendChild(domNode);
            parentDOM = domNode;
        }

        current.root = parentDOM;
        current.children.forEach((child: VirtualNode): void => {
            this.insertChildren(lastTree, parentDOM, child);
        });
    }
}
