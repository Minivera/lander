import { VirtualNode } from '../types/lander';

/**
 * Text node class that manages a text element in the virtual Tree.
 * @export
 * @class TextNode
 */
export class TextNode {
    /**
     * Stores the text to display in the DOM when mounted or updated.
     * @type {String}
     */
    public text: string;

    /**
     * DOM node assigned to this virtual node for easy access.
     * @type {TextNode}
     */
    public domNode: Text | null = null;

    /**
     * Class constructor that stores the values.
     * @param {Object} props - The properties given to this constructor.
     * @param {String} props.text - Text to display through this virtual node.
     */
    constructor({ text }: { text: string }) {
        this.text = text;
    }

    /**
     * Diffing function that returns if the two nodes are the same or not.
     * @param other {VirtualNode}
     * @returns {boolean} Returns true if the two nodes are the same, false otherwise.
     */
    diff(other: VirtualNode): boolean {
        if (!(other instanceof TextNode)) {
            return false;
        }
        return this.text === other.text;
    }
}
