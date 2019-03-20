import utils from '../vdom/utils';

const store = {
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

    hookBinding(initialState) {
        const [ state, setState ] = this.hookState(initialState);

        const getState = () => state;
        getState.binding = true;

        return [ getState, (newState) => {
            // if from an HTML event
            if (newState.target) {
                setState(newState.target.value);
            } else {
                setState(newState);
            }
            utils.update();
        }];
    },
};

export default store;
