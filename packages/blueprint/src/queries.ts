import { FunctionComponent, ComponentElement } from '@lander/lander';

export interface Queries {
    findComponent: (factory: FunctionComponent) => ComponentElement | undefined;
    findAllComponents: (factory: FunctionComponent) => ComponentElement[];
}

export const findComponent = (element: HTMLElement) => (factory: FunctionComponent): ComponentElement | undefined => {
    const components = element.querySelectorAll('vdom-component');

    for (let i = 0; i < components.length; i++) {
        const component = components.item(i) as ComponentElement;
        const augmentedFactory = component.getFactory();

        if (augmentedFactory && augmentedFactory === factory) {
            return component;
        }
    }

    return undefined;
};

export const findAllComponents = (element: HTMLElement) => (factory: FunctionComponent): ComponentElement[] => {
    const components = element.querySelectorAll('vdom-component');
    const found: ComponentElement[] = [];

    for (let i = 0; i < components.length; i++) {
        const component = components.item(i) as ComponentElement;
        const augmentedFactory = component.getFactory();

        if (augmentedFactory && augmentedFactory === factory) {
            found.push(component);
        }
    }

    return found;
};
