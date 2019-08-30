import l from './vdom/factory';
import Lander from './vdom/tree';
import useState from './hooks/useState';
import useEffect from './hooks/useEffect';

const Message = ({ message, children }) => l('div', {}, [message, ...children]);

const App = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState(null);

    useEffect(async () => {
        const result = await window.fetch('https://jsonplaceholder.typicode.com/users/1');
        const value = await result.json();
        setUser(value);
    });

    return l(
        'div',
        {
            style: 'display: flex; flex-direction: column; align-items: start',
        },
        l(Message, { message: 'Hello, World!' }),
        l('span', {}, `Count is ${count}`),
        l(
            'button',
            {
                click: () => setCount(count + 1),
            },
            'Click to increase count'
        ),
        !user ? 'loading' : l('pre', {}, JSON.stringify(user, null, 2))
    );
};

new Lander(() => l(App, {})).mount(document.querySelector('#root'));
