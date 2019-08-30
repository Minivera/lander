export class PatchAttributes {
    constructor(oldNode, newNode) {
        this.oldNode = oldNode;
        this.newNode = newNode;
    }

    execute() {
        this.oldNode.update(this.newNode);
    }
}
