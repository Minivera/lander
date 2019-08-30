import { injectorsManager } from '../vdom/injectorsManager';

export default (call: () => Promise<void>): void => injectorsManager.injectAsyncCall(call);
