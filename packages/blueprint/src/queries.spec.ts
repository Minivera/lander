import { h } from 'lander';

import { mount } from './index';

describe('The available queries', () => {
    const OtherComponent = () => h('div');
    const FakeComponent = () => h('div', {}, h(OtherComponent), h(OtherComponent));

    describe('findComponent', () => {
        it('will find the first instance of a single component', () => {
            const wrapper = mount(FakeComponent);

            expect(wrapper.findComponent(OtherComponent)).toBeDefined();
        });

        it('will return undefined if it cannot find anything', () => {
            const wrapper = mount(OtherComponent);

            expect(wrapper.findComponent(FakeComponent)).toBeUndefined();
        });
    });

    describe('findAllComponents', () => {
        it('will find the all instances of a single component', () => {
            const wrapper = mount(FakeComponent);

            expect(wrapper.findAllComponents(OtherComponent)).toHaveLength(2);
        });

        it('will return an empty array if no components exist', () => {
            const wrapper = mount(OtherComponent);

            expect(wrapper.findAllComponents(FakeComponent)).toHaveLength(0);
        });
    });
});
