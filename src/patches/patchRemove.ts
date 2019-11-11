import { Patch } from './basePatch';
import { VirtualNode } from '../types/lander';
import { HtmlNode } from '../nodes/htmlNode';
import { TextNode } from '../nodes/textNode';

export class PatchRemove extends Patch {
    parent: VirtualNode;

    oldNode: VirtualNode;

    constructor(parent: VirtualNode, oldNode: VirtualNode) {
        super();
        this.parent = parent;
        this.oldNode = oldNode;
    }

    execute(): void {
        const parentWithDom = this.parent.domNode;
        if (!parentWithDom || !parentWithDom.root) {
            throw new Error('The tree was not mounted');
        }

        this.parent.removeChild(this.oldNode);

        if ((this.oldNode instanceof HtmlNode || this.oldNode instanceof TextNode) && this.oldNode.root) {
            parentWithDom.root.removeChild(this.oldNode.root);
        }
    }
}
