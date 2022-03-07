import { JSXProps, VirtualNode } from '../types/lander';

/**
 * HTML node class that manages an HTML element in the virtual Tree.
 * @todo Support SVGs
 * @export
 * @class HtmlNode
 */
export class HtmlNode {
    /**
     * Tag for creating the HTMLElement in the DOM when mounting.
     * @type {String}
     */
    public tag: string;

    /**
     * Attributes to assign to the HTMLElement when mounting or updating.
     * @type {JSXProps}
     */
    public attributes: JSXProps;

    /**
     * Virtual children that will have to be patched into the virtual DOM node when mounting or updating.
     * @type {VirtualNode[]}
     */
    public children: VirtualNode[] = [];

    /**
     * DOM node assigned to this virtual node for easy access.
     * @type {HtmlNode}
     */
    public domNode: HTMLElement | null = null;

    /**
     * Class constructor that stores the values.
     * @param {Object} props - The properties given to this constructor.
     * @param {String} props.tag - Tag name to create in the DOM when this node is mounted.
     * @param {JSXProps} props.attributes - Attributes to assign to the HTML node when created.
     * @param {VirtualNode[]} props.children - The children to assign to the HTML node when created.
     */
    constructor({
        tag,
        attributes,
        children,
    }: {
        tag: string;
        attributes: JSXProps;
        children: VirtualNode[];
    }) {
        this.tag = tag;
        this.attributes = attributes;
        this.children = children;
    }

    /**
     * Diffing function that returns if the two nodes are the same or not.
     * @param other {VirtualNode}
     * @returns {boolean} Returns true if the two nodes are the same, false otherwise.
     */
    diff(other: VirtualNode): boolean {
        if (!(other instanceof HtmlNode)) {
            return false;
        }
        if (this.tag !== other.tag) {
            return false;
        }
        return !Object.entries(this.attributes).find(
            ([key, value]) => (other.attributes as Record<string, unknown>)[key] !== value
        );
    }
}
