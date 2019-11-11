import { TreeNode } from '../nodes/treeNode';
import { createNode } from './node';
import { FunctionNode } from '../types/lander';
import { currentInjectorManager, setMountingInjectorManager } from '../injectors/injectorsManager';
import { differ } from './differ';
import { Patch } from '../patches/basePatch';

export const mounter = (factory: FunctionNode, root: Element | null): void => {
    if (!root) {
        throw new Error('No root given to the Lander mounter');
    }

    const app = createNode(factory, {});

    if (!(app instanceof TreeNode)) {
        throw new Error('Lander must be mounted with a function node');
    }

    app.root = root;

    setMountingInjectorManager();
    if (!currentInjectorManager) {
        throw new Error('The injector manager was not successfully swapped to the updating manager');
    }
    const oldElement = currentInjectorManager.currentElement;
    currentInjectorManager.currentElement = app;
    currentInjectorManager.initializeRender();

    app.render();

    currentInjectorManager.validateRender();
    currentInjectorManager.currentElement = oldElement;

    differ(app, app, null, app.rendered).forEach((patch: Patch): void => patch.execute());
};
