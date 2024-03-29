import { JSXFunctionComponent, JSXProps, VirtualNode } from '../types/lander';
import { ComponentElement } from '../tree/component';

/**
 * Tree node class that manages component based classes. When the node creator hits a function, it will
 * create an instance of this class.
 * @export
 * @class TreeNode
 */
export class TreeNode {
    /**
     * Stores the factory used to render this component, augmented with context.
     * @type {JSXFunctionComponent}
     */
    public factory: JSXFunctionComponent;

    /**
     * The attributes assigned to this node, will be passed to the factory when it is executed.
     * @type {JSXProps}
     */
    public attributes: JSXProps;

    /**
     * Children of the node. Will be passed to the factory when it is execute. Not to confuse with the children
     * rendered by the factory.
     * @type {VirtualNode[]}
     */
    public children: VirtualNode[] = [];

    /**
     * DOM node assigned to this virtual node for easy access.
     * @type {ComponentElement}
     */
    public domNode: ComponentElement | null = null;

    /**
     * Class constructor that stores the values.
     * @param {object} props - The properties given to this constructor.
     * @param {JSXFunctionComponent} props.factory - Component to build when this node is rendered in the view.
     * @param {JSXProps} props.attributes - Attributes to pass to the factory when called.
     * @param {VirtualNode[]} props.children - The children to pass to the factory when called.
     */
    constructor({
        factory,
        attributes,
        children,
    }: {
        factory: JSXFunctionComponent;
        attributes: JSXProps;
        children: VirtualNode[];
    }) {
        this.factory = factory;
        this.attributes = attributes;
        this.children = children;
    }

    /**
     * Diffing function that returns if the two nodes are the same or not.
     * @param other {VirtualNode}
     * @returns {boolean} Returns true if the two nodes are the same, false otherwise.
     */
    diff(other: VirtualNode): boolean {
        if (!(other instanceof TreeNode)) {
            return false;
        }
        if (
            Object.entries(this.attributes).find(
                ([key, value]) => (other.attributes as Record<string, unknown>)[key] !== value
            )
        ) {
            return false;
        }
        return this.factory === other.factory;
    }
}
