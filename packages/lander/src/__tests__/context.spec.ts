import { FunctionComponent, Lander } from '..';

describe('Using context', () => {
    let container = document.body.appendChild(document.createElement('div'));

    afterEach(() => {
        document.body.removeChild(container);
        container = document.body.appendChild(document.createElement('div'));
    });

    afterAll(() => {
        document.body.removeChild(container);
    });

    it("Will add properties to the component's context", async () => {
        let awaiter = Promise.resolve();

        const test = 'foo';
        const component: FunctionComponent = jest.fn(({ context: { inject } }) => {
            inject((context, listeners) => {
                listeners.afterMount(() => {
                    awaiter = new Promise(resolve => {
                        context.requestUpdate();

                        // Wait for the scheduler to pick up the next animation frame
                        window.requestAnimationFrame(() => resolve());
                    });
                });

                return { test };
            });

            return null;
        });
        Lander.renderInto(component, container);

        await awaiter;

        expect(component).toHaveBeenCalledWith(
            expect.objectContaining({
                context: expect.objectContaining({ test }),
            })
        );
    });

    // This tests that the components are properly cloned so they don't share memory
    it('Will add different properties to the same component type if given multiple instances', async () => {
        const updaters: (() => void)[] = [];

        const component: (state: string) => FunctionComponent = state =>
            jest.fn(({ context: { inject, requestUpdate } }) => {
                inject({ state });
                updaters.push(requestUpdate);

                return null;
            });

        const component1: FunctionComponent = component('foo');
        const component2: FunctionComponent = component('bar');

        Lander.renderInto(component1, container);
        Lander.renderInto(component2, container);

        updaters.forEach(updater => updater());

        await new Promise(window.requestAnimationFrame);

        expect(component1).toHaveBeenCalledWith(
            expect.objectContaining({
                context: expect.objectContaining({
                    state: 'foo',
                }),
            })
        );
        expect(component2).toHaveBeenCalledWith(
            expect.objectContaining({
                context: expect.objectContaining({ state: 'bar' }),
            })
        );
    });

    it('Will add lifecycle hooks when asked', async () => {
        const beforeMount = jest.fn();
        const afterMount = jest.fn();
        const beforeUpdate = jest.fn();
        const afterUpdate = jest.fn();
        const beforeDisconnect = jest.fn();

        let updater = () => {};
        const component: FunctionComponent = ({ context: { requestUpdate, inject } }) => {
            updater = requestUpdate;

            inject((_, listeners) => {
                listeners.beforeMount(beforeMount);
                listeners.afterMount(afterMount);
                listeners.beforeUpdate(beforeUpdate);
                listeners.afterUpdate(afterUpdate);
                listeners.beforeDisconnect(beforeDisconnect);

                return {};
            });

            return null;
        };
        Lander.renderInto(component, container);
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

        let updater = () => {};
        const component: FunctionComponent = jest.fn(({ context: { requestUpdate, inject } }) => {
            updater = requestUpdate;

            inject((_, listeners) => {
                listeners.shouldUpdate(shouldUpdate);

                return {};
            });

            return null;
        });
        Lander.renderInto(component, container);
        updater();

        await new Promise(window.requestAnimationFrame);

        expect(component).toHaveBeenCalledTimes(1);
        expect(shouldUpdate).toHaveBeenCalled();
    });
});
