import { differ } from '../vdom/differ';
import { Patch } from '../patches/basePatch';
import { Attributes, FunctionNode, VirtualNode } from '../types/lander';
import { currentInjectorManager, setUpdatingInjectorManager } from '../injectors/injectorsManager';

interface TreeNodeConfig {
    factory: FunctionNode;
    attributes: Attributes;
    children: VirtualNode[];
}

export class TreeNode extends VirtualNode {
    factory: FunctionNode;

    attributes: Attributes;

    givenChildren: VirtualNode[];

    rendered: VirtualNode | null = null;

    root: Node | null = null;

    constructor({ factory, attributes, children }: TreeNodeConfig) {
        super();
        this.factory = factory;
        this.attributes = attributes;
        this.givenChildren = children;
    }

    render(): void {
        if (!currentInjectorManager) {
            throw new Error('The injector manager was not successfully swapped to the updating manager');
        }
        const oldElement = currentInjectorManager.currentElement;
        currentInjectorManager.currentElement = this;
        currentInjectorManager.initializeRender();

        this.rendered = this.factory(this.attributes, this.givenChildren);
        this.children = [this.rendered];
        this.rendered.render();

        currentInjectorManager.validateRender();
        currentInjectorManager.currentElement = oldElement;
    }

    equals(otherNode: VirtualNode): boolean {
        return this === otherNode;
    }

    childrenEquals(otherNode: VirtualNode): boolean {
        if (!(otherNode instanceof TreeNode)) {
            return false;
        }
        return this.rendered === otherNode.rendered;
    }

    update(): void {
        if (!this.root) {
            throw new Error('The tree node was not mounted');
        }

        setUpdatingInjectorManager();
        if (!currentInjectorManager) {
            throw new Error('The injector manager was not successfully swapped to the updating manager');
        }
        const oldElement = currentInjectorManager.currentElement;
        currentInjectorManager.currentElement = this;
        currentInjectorManager.initializeRender();

        const newTree: VirtualNode = this.factory(this.attributes, this.children);
        newTree.render();

        currentInjectorManager.validateRender();
        currentInjectorManager.currentElement = oldElement;

        differ(this, this, this.rendered, newTree).forEach((patch: Patch): void => patch.execute());
    }

    toString(): string {
        if (!this.rendered) {
            throw new Error('The tree node was not rendered');
        }

        return this.rendered.toString();
    }
}
