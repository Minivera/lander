import l from './vdom/nodeFactory';
import utils from './vdom/utils';
import hookState from './hooks/hookState';

utils.mount(document.querySelector('#root'), l(() => {
    const [count, setCount] = hookState(0);

    const setState = () => {
        setCount(count + 1);
        utils.update();
    };

    return l('div#test.test', {
        style: 'color: red;',
    }, [
        'Hello World',
        l('button', {
            click: setState,
        }, `${count} click`),
        count % 2 === 0 ? l('span.even', {}, 'Even') : l('span.even', {}, 'Odd'),
    ]);
}));
