let count = 0;

const counter = () => {
    count += 1;
};

utils.mount(document.querySelector('#root'), l(() => l('div#test.test', {
    style: 'color: red;',
}, l('button', {
    click: counter,
}, `${count} click`))));
