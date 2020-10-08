import { ContextObject, AugmentedFunctionComponent } from '../types/lander';

/**
 * Function that augments the received component to add the functionalities to basic function components.
 * Context is added as the second argument on the component factory functions and their values are stored
 * on the component for as long as it is loaded into the DOM.
 * @param {ContextObject} contextCreator - function that returns an object containing the context to apply
 * on the component.
 * @param {AugmentedFunctionComponent} component - Component on which to add the context.
 * @return {AugmentedFunctionComponent} Augmented component with context added.
 */
export const applyContext = (
    contextCreator: () => ContextObject,
    component: AugmentedFunctionComponent
): AugmentedFunctionComponent => {
    // Temporarily add the context object to the factory so we can build it later.
    if (!component.contextObjects) {
        component.contextObjects = [];
    }
    component.contextObjects.push(contextCreator);

    // Return the augmented component
    return component;
};

/**
 * Function that applies the saved context objects on a component. The context objects
 * need to be saved on the function before getting applied to make sure we clone the data and
 * that no component share their contexts.
 * @param {AugmentedFunctionComponent} component - Component on which to add the context.
 * @return {AugmentedFunctionComponent} Augmented component with context added.
 */
export const applyContextToFactory = (component: AugmentedFunctionComponent): AugmentedFunctionComponent => {
    if (!component.contextObjects) {
        return component;
    }

    // Loop through all of the saved context objects
    component.contextObjects.forEach((contextBuilder: () => ContextObject) => {
        if (typeof contextBuilder !== 'function') {
            throw new Error(
                `Contexts must be created using a function to prevent components sharing the same context memory. ${typeof contextBuilder} given`
            );
        }

        // Build the context object
        const contextObj = contextBuilder();

        if (!Object.prototype.hasOwnProperty.call(contextObj, 'apply')) {
            throw new Error(
                'Context creators must return an object with an `apply` method that takes the previous context as their' +
                    'only argument and return the updated context.'
            );
        }

        // Add the context to the function component
        const previousCreator = component.contextCreator;
        if (previousCreator) {
            // If there was a previous context applied to the component, chain them together.
            component.contextCreator = context => contextObj.apply(previousCreator(context));
        } else {
            // Otherwise, create the context creator from the apply function
            component.contextCreator = contextObj.apply.bind(contextObj);
        }
    });
    delete component.contextObjects;

    // Return the augmented component
    return component;
};
