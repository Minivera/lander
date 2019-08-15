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
