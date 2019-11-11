import { Patch } from './basePatch';
import { VirtualNode } from '../types/lander';
import { HtmlNode } from '../nodes/htmlNode';
import { updateHtmlNode, updateTextNode } from '../vdom/updator';
import { TextNode } from '../nodes/textNode';

export class PatchAttributes extends Patch {
    oldNode: VirtualNode;

    newNode: VirtualNode;

    constructor(oldNode: VirtualNode, newNode: VirtualNode) {
        super();
        this.oldNode = oldNode;
        this.newNode = newNode;
    }

    execute(): void {
        if (this.oldNode instanceof HtmlNode) {
            // Always removes all the event listeners from the node before updating
            this.oldNode.eventListeners.forEach(element => {
                if (this.oldNode.root) {
                    this.oldNode.root.removeEventListener(element.name, element.listener);
                }
            });

            this.oldNode.attributes = (this.newNode as HtmlNode).attributes;
            this.oldNode.eventListeners = (this.newNode as HtmlNode).eventListeners;
            updateHtmlNode(this.oldNode, this.oldNode.root as HTMLElement);
        } else if (this.oldNode instanceof TextNode) {
            this.oldNode.text = (this.newNode as TextNode).text;
            updateTextNode(this.oldNode, this.oldNode.root as Text);
        }
    }
}
