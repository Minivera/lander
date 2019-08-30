export class PatchRemove {
    constructor(parent, oldNode) {
        this.parent = parent;
        this.oldNode = oldNode;
    }

    execute() {
        this.parent.removeChild(this.oldNode);

        this.parent.domNode.removeChild(this.oldNode.domNode);
        this.oldNode.remove();
    }
}
