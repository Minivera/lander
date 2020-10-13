import { AugmentedFunctionComponent, Context, ContextObject } from '..';

import { applyContext, applyContextToFactory } from './applyContext';

describe('applyContext', () => {
    it('Will add the context to a temporary property on the function', () => {
        const component = () => null;
        const context = (): ContextObject => ({ apply: (ctx: Context): Context => ctx });

        const result = applyContext(context, component);

        expect(result.contextObjects).toHaveLength(1);
        expect(result.contextObjects).toEqual([context]);
    });

    it('Will preserve the previous context', () => {
        const component = () => null;
        const context1 = (): ContextObject => ({ apply: (ctx: Context): Context => ctx });
        const context2 = (): ContextObject => ({ apply: (ctx: Context): Context => ctx });

        component.contextObjects = [context1];

        const result = applyContext(context2, component);

        expect(result.contextObjects).toHaveLength(2);
        expect(result.contextObjects).toEqual([context1, context2]);
    });
});

describe('applyContextToFactory', () => {
    it('Will add the context object as a creator on the function', () => {
        const baseContext = {
            setState: () => {},
            requestUpdate: () => {},
        };
        const applyFunc = jest.fn();

        const component: AugmentedFunctionComponent = () => null;
        const context = (): ContextObject => ({ apply: applyFunc });
        component.contextObjects = [context];

        const result = applyContextToFactory(component);

        expect(result.contextObjects).toBeUndefined();
        expect(result.contextCreator).toBeDefined();

        if (!result.contextCreator) {
            throw new Error('contextCreator was undefined');
        }
        result.contextCreator(baseContext);

        expect(applyFunc).toHaveBeenCalled();
    });

    it('Will preserve the previous context creators', () => {
        const baseContext = {
            setState: () => {},
            requestUpdate: () => {},
        };
        const applyFunc = jest.fn();
        const contextFunc = jest.fn();

        const component: AugmentedFunctionComponent = () => null;
        const context = (): ContextObject => ({ apply: applyFunc });
        component.contextObjects = [context];
        component.contextCreator = contextFunc;

        const result = applyContextToFactory(component);

        expect(result.contextObjects).toBeUndefined();

        if (!result.contextCreator) {
            throw new Error('contextCreator was undefined');
        }
        result.contextCreator(baseContext);

        expect(contextFunc).toHaveBeenCalled();
        expect(applyFunc).toHaveBeenCalled();
    });

    it('Will do nothing if there are no context objects', () => {
        const component: AugmentedFunctionComponent = () => null;

        const result = applyContextToFactory(component);

        expect(result.contextCreator).toBeUndefined();
    });
});
