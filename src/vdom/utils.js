import builder from './builder';
import patchRegistry from '../operations/patchRegistry';

export default {
    vtree: null,
    factory: () => {},

    mount(root, tree) {
        this.factory = tree;
        this.vtree = builder.build(tree, root);
    },

    update() {
        builder.diff(this.factory, this.vtree);
        patchRegistry.execute(this.vtree);
    },
};
