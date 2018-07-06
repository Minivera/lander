import l from './vdom/vdomBuilder';
import utils from './vdom/vdomUtils';

let state = 0;
const setState = (event, vnode) => {
    state++;
    vnode.requestUpdate();
};

utils.mount(document.querySelector('#root'), () => l('div#test.test', {
    style: 'color: red;',
}, [
    'Hello World',
    l('button', {
        click: setState,
    }, `${state} click`),
    state % 2 === 0 ? l('span.even', {}, 'Even') : l('span.even', {}, 'Odd'),
]));
