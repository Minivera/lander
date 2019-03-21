export const hooksStore = {
    currentElement: null,

    elements: new Map(),

    hookState(initialState) {
        const identifier = this.currentElement.nodeId;
        if (!this.elements.has(identifier)) {
            this.elements.set(identifier, {
                state: initialState,
            });
        }

        return [
            this.elements.get(identifier).state,
            (value) => { this.elements.get(identifier).state = value; },
        ];
    },
};

export const hookState = initialState => hooksStore.hookState(initialState);
