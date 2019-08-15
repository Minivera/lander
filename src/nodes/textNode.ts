import { ExtendedElement } from './extender';

export const TextNodeExtender = (node: Text): Text =>
    Object.assign(node, {
        landerListeners: [],

        addEventListener: node.addEventListener,

        removeEventListener: node.removeEventListener,

        attachEventListeners: () => {},

        landerApply: () => {},

        landerDiff(newElement: Text): void {
            const el = (this as unknown) as Text;

            if (el.nodeType !== newElement.nodeType || el.nodeValue !== newElement.nodeValue) {
                // If both node are different, replace from parent.
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
