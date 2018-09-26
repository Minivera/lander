import tree from './node/vtree';
import node from './node/vnode';
import text from './node/vtext';

let state = 0;
const oddMessage = text('Number is odd');
const evenMessage = text('Number is even');
function setState() {
    state++;
    this.nextSibling.update();
    if (state % 2) {
        this.parent.replaceChild(oddMessage, evenMessage);
    } else {
        this.parent.replaceChild(evenMessage, oddMessage);
    }
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
        )
        .appendChild(evenMessage),
    document.querySelector('#root'),
);
