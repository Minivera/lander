import { patch } from '../diffing/patchRecursive';
import {
    VirtualNode,
    LifecycleListeners,
    TreeNode,
    LifecycleListenersSetters,
    JSXProps,
    JSXFunctionComponent,
    JSXContext,
    Context,
} from '../types/lander';
import { vnodizeChildren } from '../nodes/factory';
import { DOMPatchScheduler } from '../diffing/domPatchScheduler';

/**
 * Custom element that allows us to manage components as trees rather than nodes of a tree. These components
 * are stored inside the actual DOM and keep their own virtual tree. When one is added to the DOM structure,
 * it will render the function stored in factory and mount the virtual nodes into the DOM.
 * @export
 * @class ComponentElement
 * @extends window.HTMLElement
 */
export class ComponentElement extends window.HTMLElement {
    /**
     * Stores whether or not the component has mounted the content of its factory. Will not update
     * if it has yet to be mounted.
     * @type {boolean}
     */
    private mounted = false;

    /**
     * Stores the properties of the component given as attributes when the `createNode` function is called.
     * @type {JSXProps}
     */
    private props: JSXProps = {};

    /**
     * Stores the virtual children that are to be passed to the factory when rendering.
     * @type {VirtualNode}
     */
    private virtualChild: VirtualNode[] = [];

    /**
     * The factory to execute when this component mounts or update.
     * @type {JSXFunctionComponent}
     */
    private factory: JSXFunctionComponent | null = null;

    /**
     * Object that stores the component's context data. Updated with state management capabilities for the framework.
     * @type {JSXContext}
     */
    private context: JSXContext = {
        requestUpdate: this.requestUpdate.bind(this),
        inject: this.injectContext.bind(this),
    };

    /**
     * Object containing functions that listen to the various lifecycle events of a component. These functions
     * will be executed with the current component as their only parameter.
     * @type {LifecycleListeners}
     */
    private lifecycleListeners: LifecycleListeners = {
        beforeMount: () => {},
        afterMount: () => {},
        beforeUpdate: () => {},
        shouldUpdate: () => true,
        afterUpdate: () => {},
        beforeDisconnect: () => {},
    };

    /**
     * The tree mounted on this component. When the component updates, this tree is updated in place.
     * @type {VirtualNode}
     */
    private tree: VirtualNode | null = null;

    /**
     * The TreeNode instance for this component to make sure the two can properly communicate.
     * @type {TreeNode}
     */
    private node: TreeNode | null = null;

    /**
     * Saves the animation frame ID where the component expects to be updated. If null, then we are not updating.
     * Otherwise, we should cancel the last update and trigger a new one if not null.
     * @type {number}
     */
    private updateFrameId: number | null = null;

    /**
     * Update the values of the DOM component from the values passed in parameter.
     * @param {FunctionComponent} factory - Function to render the component.
     * @param {PropsWithoutContext} props - Properties to give to the factory.
     * @param {VirtualNode} virtualChild - Child to give to the factory.
     * @param {TreeNode} node - Underlying virtual node backing the DOM node.
     */
    public setAll(
        factory: JSXFunctionComponent,
        props: JSXProps,
        virtualChild: VirtualNode[] | null,
        node: TreeNode
    ): void {
        this.factory = factory;
        this.props = props;
        this.virtualChild = virtualChild || [];
        this.node = node;
    }

    /**
     * The lifecycle method called by the DOM. Will use the fact that the node has been added to the DOM to
     * mount the content of the factory.
     */
    public connectedCallback(): void {
        this.mount();
    }

    /**
     * The lifecycle method called by the DOM with the component is disconnected from it.
     */
    public disconnectedCallback(): void {
        this.lifecycleListeners.beforeDisconnect?.call(this, this.context as Context);
        this.mounted = false;
    }

    /**
     * Method associated to the context object that allows injecting data during mount and accessing
     * it during subsequent renders
     */
    public injectContext(
        contextInjector: ((context: JSXContext, listeners: LifecycleListenersSetters) => JSXContext) | {}
    ): JSXContext {
        const setListener =
            (hook: keyof LifecycleListeners) =>
            (listener: (context: Context) => void | boolean): void => {
                this.listen(hook, listener as (context: JSXContext) => void);
            };

        // Generate the context from the previous context
        this.context = {
            ...this.context,
            ...(typeof contextInjector === 'function'
                ? contextInjector(this.context, {
                      beforeMount: setListener('beforeMount'),
                      afterMount: setListener('afterMount'),
                      beforeUpdate: setListener('beforeUpdate'),
                      shouldUpdate: setListener('shouldUpdate'),
                      afterUpdate: setListener('afterUpdate'),
                      beforeDisconnect: setListener('beforeDisconnect'),
                  })
                : contextInjector),
            inject: this.injectContext.bind(this),
            requestUpdate: this.requestUpdate.bind(this),
        };

        return this.context;
    }

    /**
     * Function that sets a specific lifecycle hook listener. Will do nothing if the lifecycle hook
     * is unknown.
     * @see lifecycleListeners
     * @param {String} hook - Hook to listen to.
     * @param {function} listener - Listener function to set for the given hook.
     */
    public listen(hook: keyof LifecycleListeners, listener: (context: JSXContext) => void): void {
        if (Object.prototype.hasOwnProperty.call(this.lifecycleListeners, hook)) {
            this.lifecycleListeners[hook] = listener;
        }
    }

    /**
     * Mount method that is triggered when the component is mounted to the DOM. Will render the tree for the first time
     * and diff it against the empty DOM.
     */
    public mount(): void {
        if (!this.node) {
            return;
        }

        const scheduler = new DOMPatchScheduler();
        this.tree = this.render();
        this.lifecycleListeners.beforeMount?.call(this, this.context as Context);
        patch(scheduler, this.node, null, this.tree);
        scheduler.flush();
        this.mounted = true;
        this.lifecycleListeners.afterMount?.call(this, this.context as Context);
    }

    /**
     * Requests and update on the component that will trigger and update if the component is still mounted.
     */
    public requestUpdate(): void {
        if (this.mounted) {
            if (this.updateFrameId !== null) {
                window.cancelAnimationFrame(this.updateFrameId);
            }
            this.updateFrameId = window.requestAnimationFrame(() => {
                this.update();
                this.updateFrameId = null;
            });
        }
    }

    /**
     * Update method that will trigger a new render of this virtual tree and execute the diffing algorithm.
     */
    public update(): void {
        if (!this.node) {
            return;
        }

        this.lifecycleListeners.beforeUpdate?.call(this, this.context as Context);
        if (!this.lifecycleListeners.shouldUpdate?.call(this, this.context as Context)) {
            return;
        }
        const vtree = this.render();
        const scheduler = new DOMPatchScheduler();
        patch(scheduler, this.node, this.tree, vtree);
        scheduler.flush();
        this.lifecycleListeners.afterUpdate?.call(this, this.context as Context);
    }

    /**
     * Render method used to render the factory using the component's state and properties.
     * @private
     * @returns {VirtualNode} Returns the rendered factory.
     */
    public render(): VirtualNode | null {
        if (!this.factory) {
            return null;
        }

        const result = this.factory({
            ...this.props,
            children: this.virtualChild,
            context: this.context,
        });

        if (!result) {
            return null;
        }

        return vnodizeChildren(result) || null;
    }

    /**
     * Returns the factory saved inside this component.
     */
    public getFactory(): JSXFunctionComponent | null {
        return this.factory;
    }
}
