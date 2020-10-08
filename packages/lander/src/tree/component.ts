import { patch } from '../diffing/patchRecursive';
import { Props, VirtualNode, Context, AugmentedFunctionComponent, LifecycleListeners, TreeNode } from '../types/lander';
import { vnodizeChildren } from '../nodes/factory';

/**
 * Custom element that allows us to manage components as trees rather than nodes of a tree. These components
 * are stored inside of the actual DOM and keep their own virtual tree. When one is added to the DOM structure,
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
     * @type {Props}
     */
    private props: Props = {};

    /**
     * Stores the virtual children that are to be passed to the factory when rendering.
     * @type {VirtualNode}
     */
    private virtualChild: VirtualNode[] = [];

    /**
     * The factory to execute when this component mounts or update.
     * @type {AugmentedFunctionComponent}
     */
    private factory: AugmentedFunctionComponent | null = null;

    /**
     * The context is a special function that takes in a context object and will return a context object. By executing
     * the given function, it will run the `apply` function on each of the context objects applied on the component and
     * return the updated context to augment the component with.
     * @type {function(Object): Object}
     */
    private contextCreator: (context: Context) => Context = (context: Context) => context;

    /**
     * Object that stores the component's context data. Updated with state management capabilities for the framework.
     * @type {Context}
     */
    private context: Context = {
        setState: (key, value) => {
            this.context[key] = value;
            this.requestUpdate();
        },
        requestUpdate: () => {},
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
     * @param {AugmentedFunctionComponent} factory - Function to render the component.
     * @param {Props} props - Properties to give to the factory.
     * @param {VirtualNode} virtualChild - Child to give to the factory.
     * @param {TreeNode} node - Underlying virtual node backing the DOM node.
     */
    public setAll(
        factory: AugmentedFunctionComponent,
        props: Props,
        virtualChild: VirtualNode[] | null,
        node: TreeNode
    ): void {
        this.factory = factory;
        this.contextCreator = this.factory.contextCreator || ((context: Context) => context);
        this.props = props;
        this.virtualChild = virtualChild || [];
        this.node = node;

        this.applyContext();
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
        this.lifecycleListeners.beforeDisconnect.call(this, this.context);
        this.mounted = false;
    }

    /**
     * Method that executes the context creator on this nodeand saves the updated context.
     */
    public applyContext(): void {
        // Generate the context from the previous context
        const finalContext: Context = this.contextCreator({
            ...this.context,
            requestUpdate: this.requestUpdate.bind(this),
        });

        // Loop on each of the available lifecycle hooks
        ([
            'beforeMount',
            'afterMount',
            'beforeUpdate',
            'shouldUpdate',
            'afterUpdate',
            'beforeDisconnect',
        ] as (keyof LifecycleListeners)[]).forEach((hook: keyof LifecycleListeners) => {
            // If the context object has a hook defined and it is a function
            if (finalContext[hook] && typeof finalContext[hook] === 'function') {
                // Add that lifecycle hook to the component properties
                this.listen(hook, finalContext[hook] as (context: Context) => Context);
                delete finalContext[hook];
            }
        });

        // Update the element context with the new context.
        this.context = finalContext;
    }

    /**
     * Function that sets a specific lifecycle hook listener. Will do nothing if the lifecycle hook
     * is unknown.
     * @see lifecycleListeners
     * @param {String} hook - Hook to listen to.
     * @param {function} listener - Listener function to set for the given hook.
     */
    public listen(hook: keyof LifecycleListeners, listener: (context: Context) => void): void {
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

        this.tree = this.render();
        this.lifecycleListeners.beforeMount.call(this, this.context);
        patch(this.node, null, this.tree);
        this.mounted = true;
        this.lifecycleListeners.afterMount.call(this, this.context);
    }

    /**
     * Requests and update on the component that will trigger and update if the component is still mounted.
     */
    public requestUpdate(): void {
        if (this.mounted) {
            this.applyContext();

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

        this.lifecycleListeners.beforeUpdate.call(this, this.context);
        if (!this.lifecycleListeners.shouldUpdate.call(this, this.context)) {
            return;
        }
        const vtree = this.render();
        patch(this.node, this.tree, vtree);
        this.lifecycleListeners.afterUpdate.call(this, this.context);
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

        const result = this.factory(
            {
                ...this.props,
                children: this.virtualChild,
            },
            this.context
        );

        if (!result) {
            return null;
        }

        return vnodizeChildren(result);
    }

    /**
     * Returns the component's factory function.
     * @return {AugmentedFunctionComponent} The function used to render this element.
     */
    public getFactory(): AugmentedFunctionComponent | null {
        return this.factory;
    }
}
