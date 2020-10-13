import { ComponentElement } from './tree/component';
import { createNode } from './nodes/factory';
import { TreeNode } from './nodes/treeNode';
import { applyContext } from './context/applyContext';
import { AugmentedFunctionComponent, FunctionComponent } from './types/lander';
export * from './types/lander';

window.customElements.define('vdom-component', ComponentElement);

/**
 * Object that enables the creation of a virtual DOM tree for the given component. The renderInto method can be called
 * multiple times on different components, there is no limit to the amount of virtual trees in a single page.
 *
 * @example
 * Lander.renderInto(App, "#app");
 * @export
 */
export const Lander = {
    /**
     * Function that will render this application in the given HTMLElement.
     * @param root {FunctionComponent} - The application or component to render into the element.
     * @param element {HTMLElement} - The element to use as the root of the application.
     */
    renderInto: (root: FunctionComponent<never, never>, element: HTMLElement): void => {
        if (typeof root !== 'function') {
            throw new Error('The root of a virtual DOM tree must be a component');
        }

        const factory = root as AugmentedFunctionComponent;
        const rootElement = document.createElement('vdom-component') as ComponentElement;
        const virtualNode = new TreeNode({ factory, children: [], attributes: {} });

        virtualNode.domNode = rootElement;
        rootElement.setAll(factory, {}, null, virtualNode);

        element.appendChild(rootElement);
    },
};

export { createNode as h, applyContext, ComponentElement };
