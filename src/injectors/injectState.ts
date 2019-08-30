import { injectorsManager } from '../vdom/injectorsManager';

export default <T>(initialState: T): [T | undefined, (val: T) => void] => injectorsManager.injectState(initialState);
