import { FunctionComponent, Lander, applyContext } from '..';

describe('Using context', () => {
    let container = document.body.appendChild(document.createElement('div'));

    afterEach(() => {
        document.body.removeChild(container);
        container = document.body.appendChild(document.createElement('div'));
    });

    afterAll(() => {
        document.body.removeChild(container);
    });

    it("Will add properties to the component's context", () => {
        const test = 'foo';
        const testContext = (component: FunctionComponent) => {
            return applyContext(
                () => ({
                    apply(oldContext) {
                        return {
                            ...oldContext,
                            test,
                        };
                    },
                }),
                component
            );
        };

        const component: FunctionComponent = jest.fn();
        Lander.renderInto(testContext(component), container);

        expect(component).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
                test,
            })
        );
    });

    // This tests that the components are properly cloned so they don't share memory
    it('Will add different properties to the same component type if given multiple instances', () => {
        const component1: FunctionComponent = jest.fn();
        const component2: FunctionComponent = jest.fn();

        const testContext = (component: FunctionComponent) => {
            return applyContext(
                () => ({
                    apply(oldContext) {
                        return {
                            ...oldContext,
                            test: component === component1 ? 'foo' : 'bar',
                        };
                    },
                }),
                component
            );
        };
        Lander.renderInto(testContext(component1), container);
        Lander.renderInto(testContext(component2), container);

        expect(component1).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
                test: 'foo',
            })
        );
        expect(component2).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
                test: 'bar',
            })
        );
    });

    it('Will add lifecycle hooks when asked', async () => {
        const beforeMount = jest.fn();
        const afterMount = jest.fn();
        const beforeUpdate = jest.fn();
        const afterUpdate = jest.fn();
        const beforeDisconnect = jest.fn();

        const testContext = (component: FunctionComponent) => {
            return applyContext(
                () => ({
                    apply(oldContext) {
                        return {
                            ...oldContext,
                            beforeMount,
                            afterMount,
                            beforeUpdate,
                            afterUpdate,
                            beforeDisconnect,
                        };
                    },
                }),
                component
            );
        };

        let updater = () => {};
        const component: FunctionComponent = (_, { requestUpdate }) => {
            updater = requestUpdate;
            return null;
        };
        Lander.renderInto(testContext(component), container);
        updater();

        await new Promise(window.requestAnimationFrame);

        // Force disconnectCallback
        container.innerHTML = '';

        expect(beforeMount).toHaveBeenCalled();
        expect(afterMount).toHaveBeenCalled();
        expect(beforeUpdate).toHaveBeenCalled();
        expect(afterUpdate).toHaveBeenCalled();
        expect(beforeDisconnect).toHaveBeenCalled();
    });

    it('Will prevent updating using the shouldUpdate hook', async () => {
        const shouldUpdate = jest.fn(() => false);

        const testContext = (component: FunctionComponent) => {
            return applyContext(
                () => ({
                    apply(oldContext) {
                        return {
                            ...oldContext,
                            shouldUpdate,
                        };
                    },
                }),
                component
            );
        };

        let updater = () => {};
        const component: FunctionComponent = jest.fn((_, { requestUpdate }) => {
            updater = requestUpdate;
            return null;
        });
        Lander.renderInto(testContext(component), container);
        updater();

        await new Promise(window.requestAnimationFrame);

        expect(component).toHaveBeenCalledTimes(1);
        expect(shouldUpdate).toHaveBeenCalled();
    });
});
