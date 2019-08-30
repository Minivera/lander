import { nodesEqual, childrenEquals } from '../utils/diffNodes';
import { HTMLNode } from '../nodes/htmlNode';

import { PatchRemove } from './patchRemove';
import { PatchInsert } from './patchInsert';
import { PatchAttributes } from './patchAttributes';
import { PatchReplace } from './patchReplace';

export class Differ {
    constructor() {
        this.patches = [];
    }

    diff(parent, oldTree, newTree) {
        if (!oldTree) {
            // If the old node does not exist, add the new node
            this.patches.push(new PatchInsert(parent, newTree));
            return;
        }
        if (!newTree) {
            // If the new node does not exist, remove the old node
            this.patches.push(new PatchRemove(parent, oldTree));
            return;
        }

        // If the nodes are the same
        if (nodesEqual(oldTree, newTree)) {
            // Run on children
            oldTree.children.forEach((child, index) => {
                this.diff(oldTree, child, newTree.children[index] ? newTree.children[index] : null);
            });

            // If the node is an HTML node, always update the listeners
            if (oldTree instanceof HTMLNode) {
                this.patches.push(new PatchAttributes(oldTree, newTree));
            }
        } else if (childrenEquals(oldTree, newTree)) {
            // If the nodes are different, but have similar children
            // Update the attributes
            this.patches.push(new PatchAttributes(oldTree, newTree));
            // Run on children
            oldTree.children.forEach((child, index) => {
                this.diff(oldTree, child, newTree.children[index]);
            });
        } else {
            // Otherwise, fully replace the tree
            this.patches.push(new PatchReplace(parent, oldTree, newTree));
        }
    }

    patch() {
        this.patches.forEach(patch => patch.execute());
        this.patches = [];
    }
}
