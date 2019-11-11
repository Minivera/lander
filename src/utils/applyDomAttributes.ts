import { Attributes, AttributeValue, Listeners, Listener } from '../types/lander';

export const applyDomAttributes = (attributes: Attributes, listeners: Listeners, domNode: HTMLElement): void => {
    Object.entries(attributes).forEach(([name, value]: [string, AttributeValue]): void => {
        if (!value) {
            return;
        }
        if (name === 'class' && typeof value === 'string') {
            value.split(' ').forEach((c: string): void => domNode.classList.add(c));
            return;
        }
        if (name === 'id' && typeof value === 'string') {
            domNode.id = value;
            return;
        }
        if (typeof value === 'boolean') {
            domNode.setAttribute(name, '');
            return;
        }
        domNode.setAttribute(name, value.toString());
    });

    listeners.forEach((listener: Listener): void => {
        domNode.addEventListener(listener.name, listener.listener);
    });
};
