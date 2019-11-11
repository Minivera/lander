import { createNode } from './vdom/node';
import { mounter } from './vdom/mounter';
import { FunctionNode, VirtualNode } from './types/lander';
import injectState from './injectors/injectState';

interface CounterProps {
    count: number;
    setCount: (val: number) => void;
}

const Counter: FunctionNode<CounterProps> = ({ count, setCount }): VirtualNode => {
    const [localCount, localSetCount] = injectState<number>(0);

    return createNode(
        'div',
        { style: 'display: flex; flex-direction: column; align-items: flex-start;' },
        createNode('span', {}, `App count is ${count}, Counter count is ${localCount}`),
        createNode(
            'button',
            {
                click: (): void => {
                    setCount(count + 1);
                    localSetCount(localCount + 1);
                },
            },
            'Click to increase counter'
        )
    );
};

const App: FunctionNode = (): VirtualNode => {
    const [count, setCount] = injectState<number>(0);

    return createNode(
        'div',
        {},
        createNode(
            'div',
            {
                style: 'color: red',
                class: 'test',
                id: 'test',
            },
            'Hello, World!'
        ),
        createNode(Counter, { count, setCount })
    );
};

mounter(App, document.querySelector('#root'));

/*
import l from './vdom/node';
import { Tree } from './vdom/tree';
import injectState from './injectors/injectState';
import injectAsyncCall from './injectors/injectAsyncCall';

const App = (): Node => {
    const [count, setCount] = injectState<number>(0);
    const [user, setUser] = injectState<object | null>(null);

    injectAsyncCall(async () => {
        const result = await window.fetch('https://jsonplaceholder.typicode.com/users/1');
        const value = await result.json();
        setUser(value);
    });

    return l('div#test.test', { style: 'color:red;' }, ...[
        'Hello world',
        l('div', {}, `Count is ${count}`),
        l('div', {}, ...[
            l('button', {
                click: (): void => { setCount(typeof count !== 'undefined' ? count + 1 : 0); },
            }, 'Click to increase counter')
        ]),
        user ? l('pre', {}, JSON.stringify(user, null, 4)) : 'loading...'
    ]);
};

new Tree((): Node => l(App, {})).mount(document.querySelector('#root'));
*/
