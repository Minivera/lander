import { nodesEqual, childrenEquals } from '../utils/diffNodes';

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
        if (nodesEqual(oldTree, newTree) && childrenEquals(oldTree, newTree)) {
            // Run on children
            oldTree.children.forEach((child, index) => {
                this.diff(oldTree, child, newTree.children[index] ? newTree.children[index] : null);
            });
        } else if (oldTree.constructor === newTree.constructor) {
            // If the nodes are of the same type, but are otherwise different
            this.patches.push(new PatchAttributes(oldTree, newTree));
            // Run on the children of the node with the bigger length of children
            if (oldTree.children.length >= newTree.children.length) {
                oldTree.children.forEach((child, index) => {
                    this.diff(oldTree, child, newTree.children[index]);
                });
            } else {
                newTree.children.forEach((child, index) => {
                    this.diff(oldTree, oldTree.children[index], child);
                });
            }
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
