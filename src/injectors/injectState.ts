import { currentInjectorManager } from './injectorsManager';

export default <T>(initialState: T): [T, (val: T) => void] => {
    if (!currentInjectorManager) {
        throw new Error('Accessed injectors outside of the lander update cycle');
    }

    const state = currentInjectorManager.injectState(initialState);

    if (!state.current) {
        throw new Error('The number of injector calls was inconsistent between renders');
    }

    const elementInstance = currentInjectorManager.currentElement;
    const currentState = state.current;
    if (currentState.value === null) {
        currentState.value = initialState;
    }

    state.current = currentState.next;
    return [
        currentState.value as T,
        (value: T): void => {
            currentState.value = value;
            if (elementInstance) {
                elementInstance.update();
            }
        },
    ];
};
