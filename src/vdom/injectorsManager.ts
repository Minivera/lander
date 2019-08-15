import { Tree } from './tree';

type AsyncCaller = () => Promise<void>;

interface HookState {
    lastAskedState: number;
    states: unknown[];
    lastCalledCaller: number;
    callers: { called: boolean }[];
}

interface InjectorsManager {
    currentTree: Tree | null;
    currentElement: object | null;
    state: Map<object, HookState>;
    prepareRender: () => void;
    injectState: <T>(initialState: T) => [T | undefined, (val: T) => void];
    injectAsyncCall(call: () => Promise<void>): void;
}

export const injectorsManager: InjectorsManager = {
    currentTree: null,
    currentElement: null,
    state: new Map<object, HookState>(),

    prepareRender() {
        if (!this.currentElement || !this.currentTree) {
            throw new Error('No element was given during an injector call.');
        }

        const identifier = this.currentElement;
        if (!this.state.has(identifier)) {
            this.state.set(identifier, {
                lastAskedState: 0,
                states: [],
                lastCalledCaller: 0,
                callers: [],
            });
        }

        const currentState = this.state.get(identifier);
        if (currentState) {
            currentState.lastAskedState = 0;
            currentState.lastCalledCaller = 0;
        }
    },

    injectState<T>(initialState: T): [T | undefined, (val: T) => void] {
        if (!this.currentElement || !this.currentTree) {
            throw new Error('No element was given during an injector call.');
        }
        const identifier = this.currentElement;
        const treeInstance = this.currentTree;

        const currentState = this.state.get(identifier);
        if (!currentState) {
            return [undefined, (): void => {}];
        }

        const stateIndex = currentState.lastAskedState;
        if (currentState.states.length - 1 < stateIndex) {
            currentState.states.push(initialState);
        }

        currentState.lastAskedState++;
        return [
            currentState && currentState.states[stateIndex] as T,
            (value: T): void => {
                const givenState = this.state.get(identifier);
                if (givenState) {
                    givenState.states[stateIndex] = value;
                }
                treeInstance.update();
            },
        ];
    },

    injectAsyncCall(call: AsyncCaller): Promise<void> | null {
        if (!this.currentElement || !this.currentTree) {
            throw new Error('No element was given during an injector call.');
        }
        const identifier = this.currentElement;

        const currentState = this.state.get(identifier);
        if (!currentState) {
            return new Promise<void>((resolve): void => resolve());
        }

        const callerIndex = currentState.lastCalledCaller;
        if (currentState.callers[callerIndex] && currentState.callers[callerIndex].called) {
            return null;
        }

        currentState.lastCalledCaller++;
        currentState.callers.push({ called: true });
        return new Promise<void>((resolve, reject): void => {
            call().then(resolve).catch(reject);
        });
    },
};
