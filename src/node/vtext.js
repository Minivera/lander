import { vnode } from './vnode';

export default text => ({
    ...vnode,
    text,
}).mount();
