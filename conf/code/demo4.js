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
        l('button', {
            click: setState,
        }, `${count} click`),
        count % 2 === 0 ? l('span.even', {}, 'Even') : l('span.odd', {}, 'Odd'),
        l('div.test3', {}, childrenMap),
    ]);
}));
