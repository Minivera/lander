import { ExtendedElement } from '../nodes/extender';
import { injectorsManager } from './injectorsManager';

export class Tree {
    private factory: () => Node;

    private root?: Node;

    constructor(factory: () => Node | Node) {
        if (typeof factory === 'function') {
            this.factory = factory;
        } else {
            this.factory = (): Node => factory;
        }
    }

    mount(root: HTMLElement | null): void {
        injectorsManager.currentTree = this;
        if (!root) {
            throw new Error('No HTML element was provided to the Lander Tree mount method.');
        }

        this.root = root;
        root.appendChild(this.factory());
        injectorsManager.currentTree = null;
    }

    update(): void {
        injectorsManager.currentTree = this;
        if (!this.root) {
            throw new Error('The Lander tree was not mounted on a dom tree.');
        }
        if (typeof this.factory !== 'function') {
            throw new Error('The Lander tree was created with a static node, yet a request for an update was ' +
                'received. Provide a function to the tree constructor to allow tree updates.');
        }
        const newTree = this.factory();
        (this.root.firstChild as unknown as ExtendedElement).landerDiff(newTree);
        injectorsManager.currentTree = null;
    }
}
