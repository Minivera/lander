import l from './dom';

let state = 0;
const setState = (event, vnode) => {
    state++;
    vnode.requestUpdate();
};

l.mount(document.querySelector('#root'), () => l('div#test.test', {
    style: 'color: red;',
}, [
    'Hello World',
    l('button', {
        click: setState,
    }, `${state} click`),
]));
