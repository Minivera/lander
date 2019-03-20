import l from './vdom/nodeFactory';
import utils from './vdom/utils';
import hookState from './hooks/hookState';
import hookBinding from './hooks/hookBinding';

const HookedInput = () => {
    const [ getVal, setVal ] = hookBinding('');

    return <input value={getVal} input={setVal} />;
};

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
            Hello world
            <button click={setState}>
                {count} clicks
            </button>
            {count % 2 === 0 ? <span class="even">Even</span> : <span class="odd">Odd</span>}
            <HookedInput />
            <div class="test3">
                {childrenMap}
            </div>
        </div>
    );
};

utils.mount(document.querySelector('#root'), <App />);
