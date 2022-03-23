import {
    TreeNode,
    VirtualNode,
    ComponentElement,
    JSXFunctionComponent, JSXProps,
} from '@lander/lander';

import { Queries, findComponent, findAllComponents } from './queries';

const elementContainers = new Set<HTMLElement>();

interface Options {
    props?: JSXProps;
    children?: VirtualNode[];
    containerElement?: HTMLElement;
}

interface Wrapper extends Queries {
    container: HTMLElement;
    element: ComponentElement;
    unmout: () => void;
    waitForUpdate: () => Promise<number>;
}

/**
 * Mounts the given component to a fake JSDOM element. It returns a wrapper element that contains helpful methods
 * as well as the HTMLElement for querying like you would in the normal DOM.
 * @param {JSXFunctionComponent} component - The component to mount and render.
 * @param {Options} options - The options for the mounting process.
 * @param {Props} options.props - The properties to pass to the component, if any.
 * @param {VirtualNode[]} options.children - The children to pass to the component, if any.
 * @param {HTMLElement} options.containerElement - The element to add the container to.
 * @return {Wrapper} Wrapper that contains the mounted element and some helpful properties and methods for testing
 * purposes.
 */
export const mount = (
    component: JSXFunctionComponent,
    { props = {}, children = [], containerElement }: Options = {}
): Wrapper => {
    if (typeof component !== 'function') {
        throw new Error('The root of a virtual DOM tree must be a component');
    }

    if (!containerElement) {
        containerElement = document.body.appendChild(document.createElement('div'));
    }

    elementContainers.add(containerElement);

    const rootElement = document.createElement('vdom-component') as ComponentElement;
    const virtualNode = new TreeNode({ factory: component, children, attributes: props });

    virtualNode.domNode = rootElement;
    rootElement.setAll(component, props, children, virtualNode);

    containerElement.appendChild(rootElement);

    return {
        container: containerElement,
        element: rootElement,
        unmout: () => {
            if (containerElement) {
                containerElement.removeChild(rootElement);
            }
        },
        waitForUpdate: () => {
            return new Promise(window.requestAnimationFrame);
        },
        findComponent: findComponent(rootElement),
        findAllComponents: findAllComponents(rootElement),
    };
};

export const cleanup = (): void => {
    elementContainers.forEach((containerElement: HTMLElement) => {
        if (containerElement.parentNode === document.body) {
            document.body.removeChild(containerElement);
        }
    });

    elementContainers.clear();
};
