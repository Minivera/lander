import { TreeNode } from '../nodes/treeNode';
import { VirtualNode } from '../types/lander';

interface StateValue {
    value: unknown;
    next: StateValue | null;
}

interface HooksState {
    states: StateValue | null;
    current: StateValue | null;
}

interface InjectorsManager {
    currentElement: TreeNode | null;
    previousCurrentState?: StateValue | null,
    initializeRender: () => void;
    validateRender: () => void;
    injectState: <T>(initialState: T) => HooksState;
}

const injectorsStates: Map<string, HooksState> = new Map<string, HooksState>();

const getCurrentInjectorsStateKey = (element: TreeNode): string => {
    if (element.parent) {
        const keys: string[] = [];
        element.parent.children.forEach((child: VirtualNode, index: number): void => {
            keys.push(index.toString());
            if (child === element) {
                keys.push(element.factory.toString());
            }
        });
        return keys.join('_');
    } else {
        return element.factory.toString();
    }
};

export let currentInjectorManager: InjectorsManager | null = null;

export const mountInjectorsManager: InjectorsManager = {
    currentElement: null,

    previousCurrentState: null,

    initializeRender() {
        if (!this.currentElement) {
            throw new Error('not current element defined');
        }

        const key = getCurrentInjectorsStateKey(this.currentElement);
        let injectorState = injectorsStates.get(key);

        if (!injectorState) {
            injectorState = {
                current: null,
                states: null,
            };
            injectorsStates.set(key, injectorState);
        }

        if (!injectorState.states) {
            injectorState.states = {
                value: null,
                next: null,
            };
            injectorState.current = null;
        } else {
            this.previousCurrentState = injectorState.current;
            injectorState.current = injectorState.states;
        }
    },

    validateRender() {
        if (!this.currentElement) {
            throw new Error('not current element defined');
        }

        const key = getCurrentInjectorsStateKey(this.currentElement);
        const injectorState = injectorsStates.get(key);

        if (!injectorState) {
            throw new Error('No state was found for the validating element');
        }

        if (injectorState.current !== null) {
            throw new Error('The number of injector calls was inconsistent between renders');
        }
    },

    injectState<T>(initialState: T): HooksState {
        if (!this.currentElement) {
            throw new Error('not current element defined');
        }

        const key = getCurrentInjectorsStateKey(this.currentElement);
        const injectorState = injectorsStates.get(key);

        if (!injectorState) {
            throw new Error('No state was found for the current element');
        }

        if (!injectorState.current) {
            injectorState.current = {
                value: initialState,
                next: null,
            };

            if (this.previousCurrentState) {
                this.previousCurrentState.next = injectorState.current;
            } else {
                injectorState.states = injectorState.current;
                this.previousCurrentState = injectorState.current;
            }
        }

        return injectorState;
    },
};

export const updateInjectorsManager: InjectorsManager = {
    currentElement: null,

    initializeRender() {
        if (!this.currentElement) {
            throw new Error('not current element defined');
        }

        const key = getCurrentInjectorsStateKey(this.currentElement);
        const injectorState = injectorsStates.get(key);

        if (!injectorState) {
            throw new Error('No state was found for the validating element');
        }

        if (!injectorState.states) {
            throw new Error('The hooks state was not initialized during mount');
        }
        injectorState.current = injectorState.states;
    },

    validateRender() {
        if (!this.currentElement) {
            throw new Error('not current element defined');
        }

        const key = getCurrentInjectorsStateKey(this.currentElement);
        const injectorState = injectorsStates.get(key);

        if (!injectorState) {
            throw new Error('No state was found for the validating element');
        }

        if (injectorState.current !== null) {
            throw new Error('The number of injector calls was inconsistent between renders');
        }
    },

    injectState(): HooksState {
        if (!this.currentElement) {
            throw new Error('not current element defined');
        }

        const key = getCurrentInjectorsStateKey(this.currentElement);
        const injectorState = injectorsStates.get(key);

        if (!injectorState) {
            throw new Error('No state was found for the validating element');
        }

        return injectorState;
    },
};

export const setUpdatingInjectorManager = (): void => {
    currentInjectorManager = updateInjectorsManager;
};

export const setMountingInjectorManager = (): void => {
    currentInjectorManager = mountInjectorsManager;
};
