import tree from './node/vtree';
import node from './node/vnode';
import text from './node/vtext';

let state = 0;
function setState() {
    state++;
    this.nextSibling.update();
}

tree.mount(
    node('div#test.test')
        .style('color: red;')
        .setClass('toto tata')
        .appendChild(
            text('Hello world'),
        )
        .appendChild(
            node('button')
                .onclick(setState)
                .appendChild(
                    text('Click to increase value'),
                ),
        )
        .appendChild(
            node('input')
                .value(() => state),
        ),
    document.querySelector('#root'),
);

/*utils.mount(document.querySelector('#root'), () => l('div#test.test', {
    style: 'color: red;',
}, [
    'Hello World',
    l('button', {
        click: setState,
    }, `${state} click`),
    state % 2 === 0 ? l('span.even', {}, 'Even') : l('span.even', {}, 'Odd'),
]));*/
