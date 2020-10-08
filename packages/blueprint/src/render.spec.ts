import { h } from 'lander';

import { mount } from './index';

const FakeComponent = jest.fn(() => h('div'));

describe('The mount method', () => {
    beforeEach(() => {
        FakeComponent.mockReset();
    });

    it('Will mount a component on the body by default', () => {
        const wrapper = mount(FakeComponent);

        expect(wrapper).toBeDefined();
        expect(wrapper.element).toBeDefined();
        expect(wrapper.element.getFactory()).toEqual(FakeComponent);

        expect(FakeComponent).toHaveBeenCalled();
    });

    it('Will mount a component on the specified component', () => {
        const el = document.body.appendChild(document.createElement('div'));
        const wrapper = mount(FakeComponent, {
            containerElement: el,
        });

        expect(wrapper.container).toEqual(el);
        expect(wrapper.element.getFactory()).toEqual(FakeComponent);

        expect(FakeComponent).toHaveBeenCalled();
        document.body.removeChild(el);
    });

    it('Will pass props and children if specified', () => {
        const props = {
            test: 'test',
        };
        const children = [h('div')];
        mount(FakeComponent, {
            props,
            children,
        });

        expect(FakeComponent).toHaveBeenCalledWith(
            {
                ...props,
                children,
            },
            expect.anything()
        );
    });

    it('Will allow unmounting the component', () => {
        const el = document.body.appendChild(document.createElement('div'));
        const wrapper = mount(FakeComponent, {
            containerElement: el,
        });

        wrapper.unmout();

        expect(el.children).toHaveLength(0);

        document.body.removeChild(el);
    });

    it('Will allow waiting for updates to the component', async () => {
        const caller = jest.fn();
        let updater = () => {};
        const FakeComponent = jest.fn((_, { requestUpdate }) => {
            updater = requestUpdate;
            caller();
            return h('div');
        });

        const wrapper = mount(FakeComponent);
        expect(caller).toHaveBeenCalledTimes(1);

        updater();
        await wrapper.waitForUpdate();

        expect(caller).toHaveBeenCalledTimes(2);
    });

    it('Throws an error if not passing the right type to the function', () => {
        // Ignoring typescript errors since this is what we want.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        expect(() => mount(null)).toThrow();
    });
});
