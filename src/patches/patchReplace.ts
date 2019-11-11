import { Patch } from './basePatch';
import { VirtualNode } from '../types/lander';
import { HtmlNode } from '../nodes/htmlNode';
import { createHtmlElement, createTextElement } from '../vdom/creator';
import { TextNode } from '../nodes/textNode';
import { PatchInsert } from './patchInsert';
import { TreeNode } from '../nodes/treeNode';

export class PatchReplace extends Patch {
    lastTree: TreeNode;

    parent: VirtualNode;

    oldNode: VirtualNode;

    newNode: VirtualNode;

    constructor(lastTree: TreeNode, parent: VirtualNode, oldNode: VirtualNode, newNode: VirtualNode) {
        super();
        this.lastTree = lastTree;
        this.parent = parent;
        this.oldNode = oldNode;
        this.newNode = newNode;
    }

    execute(): void {
        const parentWithDom = this.parent.domNode;
        if (!parentWithDom || !parentWithDom.root) {
            throw new Error('The tree was not mounted');
        }

        let domNode: Node | null = null;

        if (this.newNode instanceof HtmlNode) {
            this.newNode.tree = this.lastTree;
            domNode = createHtmlElement(this.newNode);
        } else if (this.newNode instanceof TextNode) {
            domNode = createTextElement(this.newNode);
        }

        this.newNode.root = parentWithDom.root;
        // If no dom node was created
        if (domNode !== null && this.oldNode.root) {
            parentWithDom.root.replaceChild(this.oldNode.root, domNode);
            this.newNode.root = domNode;
        }

        this.parent.replaceChild(this.oldNode, this.newNode);
        this.newNode.children.forEach((child: VirtualNode): void => {
            PatchInsert.insertChildren(this.lastTree, (domNode || parentWithDom.root) as Node, child);
        });
    }
}
