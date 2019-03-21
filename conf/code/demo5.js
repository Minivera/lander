const App = () => {
    const [count, setCount] = hookState(0);

    const setState = () => {
        setCount(count + 1);
        utils.update();
    };

    const childrenMap = [];
    for (let i = 0; i < count; i++) {
        childrenMap.push(`child ${i}`);
    }

    return (
        <div id="test" class="test" style="color: red;">
            <button click={setState}>
                {count} clicks
            </button>
            {count % 2 === 0 ? <span class="even">Even</span> : <span class="odd">Odd</span>}
            <div class="test3">
                {childrenMap}
            </div>
        </div>
    );
};

utils.mount(document.querySelector('#root'), <App />);
