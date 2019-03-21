import l from '../../src/vdom/nodeFactory';

let count = 0;

const counter = () => {
    count += 1;
};

utils.mount(document.querySelector('#root'), l(() => {
    const childrenMap = [];
    for (let i = 0; i < count; i++) {
        childrenMap.push(`child ${i}`);
    }

    return l('div#test.test', {
        style: 'color: red;',
    }, [
        l('button', {
            click: counter,
        }, `${count} click`),
        count % 2 === 0 ? l('span.even', {}, 'Even') : l('span.odd', {}, 'Odd'),
        l('div.test3', {}, childrenMap),
    ]);
}));