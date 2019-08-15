import { ExtendedElement } from './extender';
import { equals } from '../utils/nodeCompare';

export const HtmlNodeExtender = (node: HTMLElement): HTMLElement => {
    const oldAddEventListener = node.addEventListener;
    const oldRemoveEventListener = node.removeEventListener;

    return Object.assign(node, {
        landerListeners: [],

        addEventListener(
            name: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions
        ) {
            this.landerListeners.push({ name, listener });
            oldAddEventListener.apply(this, [name, listener, options]);
        },

        removeEventListener(name: string, listener: EventListenerOrEventListenerObject) {
            this.landerListeners = this.landerListeners.filter(element => element.name !== name);
            oldRemoveEventListener.apply(this, [name, listener]);
        },

        attachEventListeners(listeners: { name: string, listener: EventListenerOrEventListenerObject }[]) {
            this.landerListeners.forEach((listener): void => {
                oldRemoveEventListener.apply(this, [listener.name, listener.listener]);
            });

            this.landerListeners = listeners;
            listeners.forEach((listener): void => {
                oldAddEventListener.apply(this, [listener.name, listener.listener]);
            });
        },

        landerApply(attributes: Lander.Attributes): void {
            const el = (this as unknown) as HTMLElement;

            // Always removes all the event listeners from the node
            this.landerListeners.forEach(element => el.removeEventListener(element.name, element.listener));

            // Always clear the id
            delete el.id;

            // Always unset the classes
            const { classList } = el;
            while (classList.length > 0) {
                classList.remove(classList.item(0) as string);
            }

            // The set the attributes with any new listeners
            Object.entries(attributes).forEach(([name, value]: [string, Lander.AttributeValue]): void => {
                if (name === 'class' && typeof value === 'string') {
                    (value as string).split(' ').forEach((c: string): void => el.classList.add(c));
                    return;
                }
                if (name === 'id' && typeof value === 'string') {
                    el.id = value as string;
                    return;
                }
                if (typeof value === 'function') {
                    el.addEventListener(name, value as EventListenerOrEventListenerObject);
                    return;
                }
                if (typeof value === 'boolean') {
                    el.setAttribute(name, '');
                }
                el.setAttribute(name, value.toString());
            });
        },

        landerDiff(newElement: HTMLElement): void {
            const el = (this as unknown) as HTMLElement;

            // Always run on the childrens
            el.childNodes.forEach((child: ChildNode, index: number): void => {
                const childEl = (child as unknown) as ExtendedElement;
                if (childEl.landerDiff) {
                    childEl.landerDiff(newElement.childNodes[index]);
                }
            });

            // Always reattach the event listeners
            const toReplace = (newElement as unknown) as ExtendedElement;
            this.attachEventListeners(toReplace.landerListeners);

            // Test if the node is not equal to the new node
            if (!equals(newElement, el)) {
                // If not, fully replace the tree
                el.replaceWith(newElement);

                // Reattach the event listeners if necessary
                const replaced = (el as unknown) as ExtendedElement;
                const toReplace = (newElement as unknown) as ExtendedElement;
                if (replaced.attachEventListeners) {
                    replaced.attachEventListeners(toReplace.landerListeners);
                }
            }
        },
    } as ExtendedElement);
};
