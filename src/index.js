import tree from './node/vtree';
import node from './node/vnode';

/*let state = 0;
const setState = (event, vnode) => {
    state++;
    vnode.requestUpdate();
};*/

tree.mount(node('div#test.test'), document.querySelector('#root'));

/*utils.mount(document.querySelector('#root'), () => l('div#test.test', {
    style: 'color: red;',
}, [
    'Hello World',
    l('button', {
        click: setState,
    }, `${state} click`),
    state % 2 === 0 ? l('span.even', {}, 'Even') : l('span.even', {}, 'Odd'),
]));*/
