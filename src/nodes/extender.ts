export interface ExtendedElement {
    landerListeners: {name: string, listener: EventListenerOrEventListenerObject}[];
    addEventListener(
        name: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener(
        name: string,
        listener: EventListenerOrEventListenerObject
    ): void;
    attachEventListeners(listeners: { name: string, listener: EventListenerOrEventListenerObject }[]): void;
    landerApply(attributes: Lander.Attributes): void;
    landerDiff(newElement: Node): void;
}
