import builder from './builder';
import patchRegistry from '../operations/patchRegistry';

export default {
    vtree: null,

    mount(root, tree) {
        this.vtree = builder.build(tree);
        this.vtree = builder.mount(tree, root);
    },

    render(tree) {
        return builder.render(tree);
    },

    update() {
        builder.diff(this.vtree);
        patchRegistry.execute(this.vtree);
    },
};
