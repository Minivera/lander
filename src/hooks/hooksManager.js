export const hooksManager = {
    currentTree: null,
    currentElement: null,
    state: new Map(),

    prepareRender() {
        if (!this.currentElement || !this.currentTree) {
            throw new Error('No element was given during an hook call.');
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

    useState(initialState) {
        if (!this.currentElement || !this.currentTree) {
            throw new Error('No element was given during an injector call.');
        }
        const identifier = this.currentElement;
        const treeInstance = this.currentTree;

        const currentState = this.state.get(identifier);
        if (!currentState) {
            return [undefined, () => {}];
        }

        const stateIndex = currentState.lastAskedState;
        if (currentState.states.length - 1 < stateIndex) {
            currentState.states.push(initialState);
        }

        currentState.lastAskedState++;
        return [
            currentState && currentState.states[stateIndex],
            value => {
                const givenState = this.state.get(identifier);
                if (givenState) {
                    givenState.states[stateIndex] = value;
                }
                treeInstance.update();
            },
        ];
    },

    useEffect(call) {
        if (!this.currentElement || !this.currentTree) {
            throw new Error('No element was given during an injector call.');
        }
        const identifier = this.currentElement;

        const currentState = this.state.get(identifier);
        if (!currentState) {
            return new Promise(resolve => resolve());
        }

        const callerIndex = currentState.lastCalledCaller;
        if (currentState.callers[callerIndex] && currentState.callers[callerIndex].called) {
            return null;
        }

        currentState.lastCalledCaller++;
        currentState.callers.push({ called: true });
        return new Promise((resolve, reject) => {
            call()
                .then(resolve)
                .catch(reject);
        });
    },
};
