import { mount, cleanup } from './render';

if (typeof afterEach === 'function') {
    afterEach(() => {
        cleanup();
    });
}

export { mount };
