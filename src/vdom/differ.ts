import { Patch } from '../patches/basePatch';
import { PatchInsert } from '../patches/patchInsert';
import { PatchRemove } from '../patches/patchRemove';
import { PatchAttributes } from '../patches/patchAttributes';
import { PatchReplace } from '../patches/patchReplace';
import { VirtualNode } from '../types/lander';
import { TreeNode } from '../nodes/treeNode';

export const differ = (
    lastTree: TreeNode,
    parent: VirtualNode,
    oldTree: VirtualNode | null,
    newTree: VirtualNode | null
): Patch[] => {
    if (!newTree && !oldTree) {
        return [];
    }

    let patches: Patch[] = [];
    if (!oldTree && newTree !== null) {
        // If the old node does not exist, add the new node
        patches.push(new PatchInsert(lastTree, parent, newTree));
        return patches;
    }
    if (!newTree && oldTree !== null) {
        // If the new node does not exist, remove the old node
        patches.push(new PatchRemove(parent, oldTree));
        return patches;
    }

    const oldNode = oldTree as VirtualNode;
    const newNode = newTree as VirtualNode;

    if (oldNode instanceof TreeNode) {
        lastTree = oldNode;
    }

    // If the nodes are the same
    if (oldNode.equals(newNode) && oldNode.childrenEquals(newNode)) {
        // Run on children
        oldNode.children.forEach((child, index) => {
            patches = patches.concat(differ(
                lastTree,
                oldNode,
                child,
                newNode.children[index] ? newNode.children[index] : null
            ));
        });
    } else if (oldNode.constructor === newNode.constructor) {
        // If the nodes are of the same type, but are otherwise different
        patches.push(new PatchAttributes(oldNode, newNode));
        // Run on the children of the node with the bigger length of children
        if (oldNode.children.length >= newNode.children.length) {
            oldNode.children.forEach((child, index) => {
                patches = patches.concat(
                    differ(
                        lastTree,
                        oldNode,
                        child,
                        newNode.children[index] ? newNode.children[index] : null
                    )
                );
            });
        } else {
            newNode.children.forEach((child, index) => {
                patches = patches.concat(
                    differ(
                        lastTree,
                        oldNode,
                        oldNode.children[index] ? oldNode.children[index] : null,
                        child
                    )
                );
            });
        }
    } else {
        // Otherwise, fully replace the tree
        patches.push(new PatchReplace(lastTree, parent, oldNode, newNode));
    }

    return patches;
};
