import { h, Lander, FunctionComponent, VirtualElement } from '..';

describe('Render a simple component', () => {
    let container = document.body.appendChild(document.createElement('div'));

    afterEach(() => {
        document.body.removeChild(container);
        container = document.body.appendChild(document.createElement('div'));
    });

    afterAll(() => {
        document.body.removeChild(container);
    });

    it('Will render the underlying HTML', () => {
        const component: FunctionComponent = () =>
            h(
                'div',
                {
                    style: 'color: red;',
                    id: 'test',
                    class: 'test',
                    value: 1,
                    visible: true,
                },
                'Hello, World!'
            );

        Lander.renderInto(component, container);

        expect(container.innerHTML).toEqual(
            '<vdom-component><div style="color: red;" id="test" class="test" value="1" visible="">Hello, World!</div></vdom-component>'
        );
    });

    it('Will allow the component to be updated', async () => {
        let stateSetter: (val: string) => void = () => {};
        const component: FunctionComponent<unknown, { message: string }> = ({
            context: { message = 'Hello, World!', inject, requestUpdate },
        }) => {
            stateSetter = (val: string) => {
                inject({
                    message: val,
                });
                requestUpdate();
            };

            return h(
                'div',
                {
                    style: 'color: red;',
                    id: 'test',
                    class: 'test',
                },
                message
            );
        };

        Lander.renderInto(component, container);
        stateSetter('Goodbye, World!');

        await new Promise(window.requestAnimationFrame);

        expect(container.innerHTML).toEqual(
            '<vdom-component><div style="color: red;" id="test" class="test">Goodbye, World!</div></vdom-component>'
        );
    });

    it('Will handle a list of elements with updates', async () => {
        let stateSetter: (val: string[]) => void = () => {};
        const component: FunctionComponent<unknown, { elements: string[] }> = ({
            context: { elements = [], inject, requestUpdate },
        }) => {
            stateSetter = (val: string[]) => {
                inject({
                    elements: val,
                });
                requestUpdate();
            };

            return h(
                'ul',
                {
                    id: 'test',
                    class: 'test',
                },
                ...elements.map((el: string): VirtualElement => h('li', {}, el))
            );
        };

        Lander.renderInto(component, container);
        expect(container.innerHTML).toEqual('<vdom-component><ul id="test" class="test"></ul></vdom-component>');

        stateSetter(['Hello, World!', 'Goodbye, World!']);

        await new Promise(window.requestAnimationFrame);

        expect(container.innerHTML).toEqual(
            '<vdom-component><ul id="test" class="test"><li>Hello, World!</li><li>Goodbye, World!</li></ul></vdom-component>'
        );
    });

    it('Will handle a list of elements with removal', async () => {
        let stateSetter: (val: string[]) => void = () => {};
        const component: FunctionComponent<unknown, { elements: string[] }> = ({
            context: { elements = ['Hello, World!', 'Goodbye, World!'], inject, requestUpdate },
        }) => {
            stateSetter = (val: string[]) => {
                inject({
                    elements: val,
                });
                requestUpdate();
            };

            return h(
                'ul',
                {
                    id: 'test',
                    class: 'test',
                },
                ...elements.map((el: string): VirtualElement => h('li', {}, el))
            );
        };

        Lander.renderInto(component, container);
        stateSetter([]);

        await new Promise(window.requestAnimationFrame);

        expect(container.innerHTML).toEqual('<vdom-component><ul id="test" class="test"></ul></vdom-component>');
    });

    it('Will handle a complete change in type', async () => {
        let stateSetter: (val: boolean) => void = () => {};
        const component: FunctionComponent<unknown, { loading: boolean }> = ({
            context: { loading = true, inject, requestUpdate },
        }) => {
            stateSetter = (val: boolean) => {
                inject({
                    loading: val,
                });
                requestUpdate();
            };

            return h(
                'div',
                {
                    id: 'test',
                    loading: loading || undefined,
                    class: `test${loading ? ' loading' : ''}`,
                },
                loading ? 'loading' : h('marquee', {}, 'loaded!')
            );
        };

        Lander.renderInto(component, container);
        expect(container.innerHTML).toEqual(
            '<vdom-component><div id="test" loading="" class="test loading">loading</div></vdom-component>'
        );

        stateSetter(false);

        await new Promise(window.requestAnimationFrame);

        expect(container.innerHTML).toEqual(
            '<vdom-component><div id="test" class="test"><marquee>loaded!</marquee></div></vdom-component>'
        );
    });
});

describe('Render multiple components', () => {
    let container = document.body.appendChild(document.createElement('div'));

    afterEach(() => {
        document.body.removeChild(container);
        container = document.body.appendChild(document.createElement('div'));
    });

    afterAll(() => {
        document.body.removeChild(container);
    });

    it('Will render the underlying HTML', () => {
        const child: FunctionComponent<{ message: string }> = ({ message }) =>
            h(
                'div',
                {
                    style: 'color: red;',
                    id: 'test',
                    class: 'test',
                },
                message
            );
        const parent: FunctionComponent = () => h('main', {}, h(child, { message: 'Hello, World!' }));

        Lander.renderInto(parent, container);

        expect(container.innerHTML).toEqual(
            '<vdom-component><main><vdom-component><div style="color: red;" id="test" class="test">Hello, World!</div></vdom-component></main></vdom-component>'
        );
    });

    it('Will render the underlying HTML with children', () => {
        const child: FunctionComponent = ({ children }) =>
            h(
                'div',
                {
                    style: 'color: red;',
                    id: 'test',
                    class: 'test',
                },
                ...children
            );
        const parent: FunctionComponent = () => h('main', {}, h(child, {}, 'Hello, World!'));

        Lander.renderInto(parent, container);

        expect(container.innerHTML).toEqual(
            '<vdom-component><main><vdom-component>Hello, World!<div style="color: red;" id="test" class="test">Hello, World!</div></vdom-component></main></vdom-component>'
        );
    });

    it('Will allow updating child components', async () => {
        const child: FunctionComponent<{ message: string }> = ({ message }) =>
            h(
                'div',
                {
                    style: 'color: red;',
                    id: 'test',
                    class: 'test',
                },
                message
            );

        let stateSetter: (val: string) => void = () => {};
        const component: FunctionComponent<unknown, { message: string }> = ({
            context: { message = 'Hello, World!', inject, requestUpdate },
        }) => {
            stateSetter = (val: string) => {
                inject({
                    message: val,
                });
                requestUpdate();
            };

            return h(child, { message });
        };

        Lander.renderInto(component, container);
        stateSetter('Goodbye, World!');

        await new Promise(window.requestAnimationFrame);

        expect(container.innerHTML).toEqual(
            '<vdom-component><vdom-component><div style="color: red;" id="test" class="test">Goodbye, World!</div></vdom-component></vdom-component>'
        );
    });

    it('Will handle a complete change in type', async () => {
        const child: FunctionComponent<{ message: string }> = ({ message }) => h('marquee', {}, message);

        let stateSetter: (val: boolean) => void = () => {};
        const component: FunctionComponent<unknown, { loading: boolean }> = ({
            context: { loading = true, inject, requestUpdate },
        }) => {
            stateSetter = (val: boolean) => {
                inject({
                    loading: val,
                });
                requestUpdate();
            };

            return h('main', {}, loading ? 'loading' : h(child, { message: 'loaded!' }));
        };

        Lander.renderInto(component, container);
        expect(container.innerHTML).toEqual('<vdom-component><main>loading</main></vdom-component>');

        stateSetter(false);

        await new Promise(window.requestAnimationFrame);

        expect(container.innerHTML).toEqual(
            '<vdom-component><main><vdom-component><marquee>loaded!</marquee></vdom-component></main></vdom-component>'
        );
    });
});
