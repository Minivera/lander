import l from './vdom/nodeFactory';
import utils from './vdom/utils';
import hookState from './hooks/hookState';
import hookBinding from './hooks/hookBinding';

utils.mount(document.querySelector('#root'), l(() => {
    const [count, setCount] = hookState(0);

    const setState = () => {
        setCount(count + 1);
        utils.update();
    };

    const childrenMap = [];
    for (let i = 0; i < count; i++) {
        childrenMap.push(`child ${i}`);
    }

    return l('div#test.test', {
        style: 'color: red;',
    }, [
        'Hello World',
        l('button', {
            click: setState,
        }, `${count} click`),
        count % 2 === 0 ? l('span.even', {}, 'Even') : l('span.even', {}, 'Odd'),
        l('div.test2', {}, [
            l(() => {
                const [ getVal, setVal ] = hookBinding('');

                return l('input', {
                    value: getVal,
                    input: setVal,
                });
            }),
        ]),
        l('div.test3', {}, childrenMap),
    ]);
}));
