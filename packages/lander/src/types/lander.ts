/* eslint-disable no-use-before-define,no-unused-vars,@typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any,@typescript-eslint/no-namespace */
import { TreeNode } from '../nodes/treeNode';
import { TextNode } from '../nodes/textNode';
import { HtmlNode } from '../nodes/htmlNode';

export type Props<T = Record<string, unknown>> = T & {
    children?: VirtualNode[];
};

export type PropsWithChildren<T = Record<string, unknown>> = Props<T> & {
    children: VirtualNode[];
};

export type Context<T = Record<string, unknown>> = {
    setState: (key: string, value: unknown) => void;
    requestUpdate: () => void;
} & T;

export type VirtualNode = TreeNode | TextNode | HtmlNode;

export type VirtualElement = VirtualNode | string | number | boolean | null | undefined;

/**
 * Object containing lifecycle listener functions.
 * @typedef LifecycleListeners
 * @property {function(Context)} beforeMount - Hook called after the component has been connected to
 * the DOM and before it is mounted.
 * @property {function(Context)} afterMount - Hook called after the component has been successfully
 * mounted.
 * @property {function(Context)} beforeUpdate - Hook called before the component is updated and before
 * checking if we should update.
 * @property {function(Context): boolean} shouldUpdate - Hook called before the component is updated.
 * Return false to prevent updating the component. Does not provide the old or new attributes, the developer
 * is in charge of keep track of those.
 * @property {function(Context)} afterUpdate - Hook called after an update has been processed.
 * @property {function(Context)} beforeDisconnect - Hook called before the component is disconnected
 * from the DOM.
 */
export interface LifecycleListeners {
    beforeMount?: (instance: Context) => void;
    afterMount?: (instance: Context) => void;
    beforeUpdate?: (instance: Context) => void;
    shouldUpdate?: (instance: Context) => void | boolean;
    afterUpdate?: (instance: Context) => void;
    beforeDisconnect?: (instance: Context) => void;
}

/**
 * Object used to store and apply context on components. Context is a data store that can hook into lifecycle methods
 * of components and provide data that will then be passed to the factory.
 * @typedef ContextObject
 * @property {function(Object): Object} apply - Apply function that will be executed when context is
 * generated. It receives the previous context and updates it with the new context. Apply functions will be
 * chained together to generate the final context object.
 */
export interface ContextObject extends LifecycleListeners {
    apply: (current: Context) => Context;
}

/**
 * Type to define a function that will produce a component when executed with properties and context.
 * @callback FunctionComponent
 * @param {Props} props - The properties and children of this component.
 * @param {Context} context - The state and function to set the state for this component.
 * @returns {VirtualElement} Returns a virtual element, created after executing the function component.
 */
// eslint-disable-next-line
export interface FunctionComponent<P = {}, C = {}> {
    (props: PropsWithChildren<P>, context: Context<C>): VirtualElement;
}

export interface AugmentedFunctionComponent extends FunctionComponent {
    contextCreator?: (context: Context) => Context;
    contextObjects?: (() => ContextObject)[];
    original?: (props: PropsWithChildren<never>, context: Context<never>) => VirtualElement;
}

export type Tag = string | number | boolean | FunctionComponent<never, never> | { text: string | number | boolean };

export { TreeNode, TextNode, HtmlNode };

type Defaultize<Props, Defaults> =
    // Distribute over unions
    Props extends never // Make any properties included in Default optional
        ? Partial<Pick<Props, Extract<keyof Props, keyof Defaults>>> &
              // Include the remaining properties from Props
              Pick<Props, Exclude<keyof Props, keyof Defaults>>
        : never;

declare global {
    namespace JSX {
        type LibraryManagedAttributes<Component, Props> = Component extends {
            defaultProps: infer Defaults;
        }
            ? Defaultize<Props, Defaults>
            : Props;

        interface IntrinsicAttributes {
            key?: any;
        }

        type Element = VirtualElement;

        interface ElementAttributesProperty {
            props: any;
        }

        interface ElementChildrenAttribute {
            children: any;
        }

        interface SVGAttributes<Target extends EventTarget = SVGElement> extends HTMLAttributes<Target> {
            accentHeight?: number | string;
            accumulate?: 'none' | 'sum';
            additive?: 'replace' | 'sum';
            alignmentBaseline?:
                | 'auto'
                | 'baseline'
                | 'before-edge'
                | 'text-before-edge'
                | 'middle'
                | 'central'
                | 'after-edge'
                | 'text-after-edge'
                | 'ideographic'
                | 'alphabetic'
                | 'hanging'
                | 'mathematical'
                | 'inherit';
            allowReorder?: 'no' | 'yes';
            alphabetic?: number | string;
            amplitude?: number | string;
            arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated';
            ascent?: number | string;
            attributeName?: string;
            attributeType?: string;
            autoReverse?: number | string;
            azimuth?: number | string;
            baseFrequency?: number | string;
            baselineShift?: number | string;
            baseProfile?: number | string;
            bbox?: number | string;
            begin?: number | string;
            bias?: number | string;
            by?: number | string;
            calcMode?: number | string;
            capHeight?: number | string;
            clip?: number | string;
            clipPath?: string;
            clipPathUnits?: number | string;
            clipRule?: number | string;
            colorInterpolation?: number | string;
            colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
            colorProfile?: number | string;
            colorRendering?: number | string;
            contentScriptType?: number | string;
            contentStyleType?: number | string;
            cursor?: number | string;
            cx?: number | string;
            cy?: number | string;
            d?: string;
            decelerate?: number | string;
            descent?: number | string;
            diffuseConstant?: number | string;
            direction?: number | string;
            display?: number | string;
            divisor?: number | string;
            dominantBaseline?: number | string;
            dur?: number | string;
            dx?: number | string;
            dy?: number | string;
            edgeMode?: number | string;
            elevation?: number | string;
            enableBackground?: number | string;
            end?: number | string;
            exponent?: number | string;
            externalResourcesRequired?: number | string;
            fill?: string;
            fillOpacity?: number | string;
            fillRule?: 'nonzero' | 'evenodd' | 'inherit';
            filter?: string;
            filterRes?: number | string;
            filterUnits?: number | string;
            floodColor?: number | string;
            floodOpacity?: number | string;
            focusable?: number | string;
            fontFamily?: string;
            fontSize?: number | string;
            fontSizeAdjust?: number | string;
            fontStretch?: number | string;
            fontStyle?: number | string;
            fontVariant?: number | string;
            fontWeight?: number | string;
            format?: number | string;
            from?: number | string;
            fx?: number | string;
            fy?: number | string;
            g1?: number | string;
            g2?: number | string;
            glyphName?: number | string;
            glyphOrientationHorizontal?: number | string;
            glyphOrientationVertical?: number | string;
            glyphRef?: number | string;
            gradientTransform?: string;
            gradientUnits?: string;
            hanging?: number | string;
            horizAdvX?: number | string;
            horizOriginX?: number | string;
            ideographic?: number | string;
            imageRendering?: number | string;
            in2?: number | string;
            in?: string;
            intercept?: number | string;
            k1?: number | string;
            k2?: number | string;
            k3?: number | string;
            k4?: number | string;
            k?: number | string;
            kernelMatrix?: number | string;
            kernelUnitLength?: number | string;
            kerning?: number | string;
            keyPoints?: number | string;
            keySplines?: number | string;
            keyTimes?: number | string;
            lengthAdjust?: number | string;
            letterSpacing?: number | string;
            lightingColor?: number | string;
            limitingConeAngle?: number | string;
            local?: number | string;
            markerEnd?: string;
            markerHeight?: number | string;
            markerMid?: string;
            markerStart?: string;
            markerUnits?: number | string;
            markerWidth?: number | string;
            mask?: string;
            maskContentUnits?: number | string;
            maskUnits?: number | string;
            mathematical?: number | string;
            mode?: number | string;
            numOctaves?: number | string;
            offset?: number | string;
            opacity?: number | string;
            operator?: number | string;
            order?: number | string;
            orient?: number | string;
            orientation?: number | string;
            origin?: number | string;
            overflow?: number | string;
            overlinePosition?: number | string;
            overlineThickness?: number | string;
            paintOrder?: number | string;
            panose1?: number | string;
            pathLength?: number | string;
            patternContentUnits?: string;
            patternTransform?: number | string;
            patternUnits?: string;
            pointerEvents?: number | string;
            points?: string;
            pointsAtX?: number | string;
            pointsAtY?: number | string;
            pointsAtZ?: number | string;
            preserveAlpha?: number | string;
            preserveAspectRatio?: string;
            primitiveUnits?: number | string;
            r?: number | string;
            radius?: number | string;
            refX?: number | string;
            refY?: number | string;
            renderingIntent?: number | string;
            repeatCount?: number | string;
            repeatDur?: number | string;
            requiredExtensions?: number | string;
            requiredFeatures?: number | string;
            restart?: number | string;
            result?: string;
            rotate?: number | string;
            rx?: number | string;
            ry?: number | string;
            scale?: number | string;
            seed?: number | string;
            shapeRendering?: number | string;
            slope?: number | string;
            spacing?: number | string;
            specularConstant?: number | string;
            specularExponent?: number | string;
            speed?: number | string;
            spreadMethod?: string;
            startOffset?: number | string;
            stdDeviation?: number | string;
            stemh?: number | string;
            stemv?: number | string;
            stitchTiles?: number | string;
            stopColor?: string;
            stopOpacity?: number | string;
            strikethroughPosition?: number | string;
            strikethroughThickness?: number | string;
            string?: number | string;
            stroke?: string;
            strokeDasharray?: string | number;
            strokeDashoffset?: string | number;
            strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
            strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
            strokeMiterlimit?: string | number;
            strokeOpacity?: number | string;
            strokeWidth?: number | string;
            surfaceScale?: number | string;
            systemLanguage?: number | string;
            tableValues?: number | string;
            targetX?: number | string;
            targetY?: number | string;
            textAnchor?: string;
            textDecoration?: number | string;
            textLength?: number | string;
            textRendering?: number | string;
            to?: number | string;
            transform?: string;
            u1?: number | string;
            u2?: number | string;
            underlinePosition?: number | string;
            underlineThickness?: number | string;
            unicode?: number | string;
            unicodeBidi?: number | string;
            unicodeRange?: number | string;
            unitsPerEm?: number | string;
            vAlphabetic?: number | string;
            values?: string;
            vectorEffect?: number | string;
            version?: string;
            vertAdvY?: number | string;
            vertOriginX?: number | string;
            vertOriginY?: number | string;
            vHanging?: number | string;
            vIdeographic?: number | string;
            viewBox?: string;
            viewTarget?: number | string;
            visibility?: number | string;
            vMathematical?: number | string;
            widths?: number | string;
            wordSpacing?: number | string;
            writingMode?: number | string;
            x1?: number | string;
            x2?: number | string;
            x?: number | string;
            xChannelSelector?: string;
            xHeight?: number | string;
            xlinkActuate?: string;
            xlinkArcrole?: string;
            xlinkHref?: string;
            xlinkRole?: string;
            xlinkShow?: string;
            xlinkTitle?: string;
            xlinkType?: string;
            xmlBase?: string;
            xmlLang?: string;
            xmlns?: string;
            xmlnsXlink?: string;
            xmlSpace?: string;
            y1?: number | string;
            y2?: number | string;
            y?: number | string;
            yChannelSelector?: string;
            z?: number | string;
            zoomAndPan?: string;
        }

        interface PathAttributes {
            d: string;
        }

        type TargetedEvent<Target extends EventTarget = EventTarget, TypedEvent extends Event = Event> = Omit<
            TypedEvent,
            'currentTarget'
        > & {
            readonly currentTarget: Target;
        };

        type TargetedAnimationEvent<Target extends EventTarget> = TargetedEvent<Target, AnimationEvent>;
        type TargetedClipboardEvent<Target extends EventTarget> = TargetedEvent<Target, ClipboardEvent>;
        type TargetedCompositionEvent<Target extends EventTarget> = TargetedEvent<Target, CompositionEvent>;
        type TargetedDragEvent<Target extends EventTarget> = TargetedEvent<Target, DragEvent>;
        type TargetedFocusEvent<Target extends EventTarget> = TargetedEvent<Target, FocusEvent>;
        type TargetedKeyboardEvent<Target extends EventTarget> = TargetedEvent<Target, KeyboardEvent>;
        type TargetedMouseEvent<Target extends EventTarget> = TargetedEvent<Target, MouseEvent>;
        type TargetedPointerEvent<Target extends EventTarget> = TargetedEvent<Target, PointerEvent>;
        type TargetedTouchEvent<Target extends EventTarget> = TargetedEvent<Target, TouchEvent>;
        type TargetedTransitionEvent<Target extends EventTarget> = TargetedEvent<Target, TransitionEvent>;
        type TargetedUIEvent<Target extends EventTarget> = TargetedEvent<Target, UIEvent>;
        type TargetedWheelEvent<Target extends EventTarget> = TargetedEvent<Target, WheelEvent>;

        interface EventHandler<E extends TargetedEvent> {
            /**
             * The `this` keyword always points to the DOM element the event handler
             * was invoked on. See: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers#Event_handlers_parameters_this_binding_and_the_return_value
             */
            (this: E['currentTarget'], event: E): void;
        }

        type AnimationEventHandler<Target extends EventTarget> = EventHandler<TargetedAnimationEvent<Target>>;
        type ClipboardEventHandler<Target extends EventTarget> = EventHandler<TargetedClipboardEvent<Target>>;
        type CompositionEventHandler<Target extends EventTarget> = EventHandler<TargetedCompositionEvent<Target>>;
        type DragEventHandler<Target extends EventTarget> = EventHandler<TargetedDragEvent<Target>>;
        type FocusEventHandler<Target extends EventTarget> = EventHandler<TargetedFocusEvent<Target>>;
        type GenericEventHandler<Target extends EventTarget> = EventHandler<TargetedEvent<Target>>;
        type KeyboardEventHandler<Target extends EventTarget> = EventHandler<TargetedKeyboardEvent<Target>>;
        type MouseEventHandler<Target extends EventTarget> = EventHandler<TargetedMouseEvent<Target>>;
        type PointerEventHandler<Target extends EventTarget> = EventHandler<TargetedPointerEvent<Target>>;
        type TouchEventHandler<Target extends EventTarget> = EventHandler<TargetedTouchEvent<Target>>;
        type TransitionEventHandler<Target extends EventTarget> = EventHandler<TargetedTransitionEvent<Target>>;
        type UIEventHandler<Target extends EventTarget> = EventHandler<TargetedUIEvent<Target>>;
        type WheelEventHandler<Target extends EventTarget> = EventHandler<TargetedWheelEvent<Target>>;

        interface DOMAttributes<Target extends EventTarget> {
            children?: VirtualElement[] | VirtualElement;

            // Image Events
            onload?: GenericEventHandler<Target>;
            onloadcapture?: GenericEventHandler<Target>;
            onerror?: GenericEventHandler<Target>;
            onerrorcapture?: GenericEventHandler<Target>;

            // Clipboard Events
            oncopy?: ClipboardEventHandler<Target>;
            oncopycapture?: ClipboardEventHandler<Target>;
            oncut?: ClipboardEventHandler<Target>;
            oncutcapture?: ClipboardEventHandler<Target>;
            onpaste?: ClipboardEventHandler<Target>;
            onpastecapture?: ClipboardEventHandler<Target>;

            // Composition Events
            oncompositionend?: CompositionEventHandler<Target>;
            oncompositionendcapture?: CompositionEventHandler<Target>;
            oncompositionstart?: CompositionEventHandler<Target>;
            oncompositionstartcapture?: CompositionEventHandler<Target>;
            oncompositionupdate?: CompositionEventHandler<Target>;
            oncompositionupdatecapture?: CompositionEventHandler<Target>;

            // Details Events
            ontoggle?: GenericEventHandler<Target>;

            // Focus Events
            onfocus?: FocusEventHandler<Target>;
            onfocuscapture?: FocusEventHandler<Target>;
            onblur?: FocusEventHandler<Target>;
            onblurcapture?: FocusEventHandler<Target>;

            // Form Events
            onchange?: GenericEventHandler<Target>;
            onchangecapture?: GenericEventHandler<Target>;
            oninput?: GenericEventHandler<Target>;
            oninputcapture?: GenericEventHandler<Target>;
            onsearch?: GenericEventHandler<Target>;
            onsearchcapture?: GenericEventHandler<Target>;
            onsubmit?: GenericEventHandler<Target>;
            onsubmitcapture?: GenericEventHandler<Target>;
            oninvalid?: GenericEventHandler<Target>;
            oninvalidcapture?: GenericEventHandler<Target>;
            onreset?: GenericEventHandler<Target>;
            onresetcapture?: GenericEventHandler<Target>;
            onformdata?: GenericEventHandler<Target>;
            onformdatacapture?: GenericEventHandler<Target>;

            // Keyboard Events
            onkeydown?: KeyboardEventHandler<Target>;
            onkeydowncapture?: KeyboardEventHandler<Target>;
            onkeypress?: KeyboardEventHandler<Target>;
            onkeypresscapture?: KeyboardEventHandler<Target>;
            onkeyup?: KeyboardEventHandler<Target>;
            onkeyupcapture?: KeyboardEventHandler<Target>;

            // Media Events
            onabort?: GenericEventHandler<Target>;
            onabortcapture?: GenericEventHandler<Target>;
            oncanplay?: GenericEventHandler<Target>;
            oncanplaycapture?: GenericEventHandler<Target>;
            oncanplaythrough?: GenericEventHandler<Target>;
            oncanplaythroughcapture?: GenericEventHandler<Target>;
            ondurationchange?: GenericEventHandler<Target>;
            ondurationchangecapture?: GenericEventHandler<Target>;
            onemptied?: GenericEventHandler<Target>;
            onemptiedcapture?: GenericEventHandler<Target>;
            onencrypted?: GenericEventHandler<Target>;
            onencryptedcapture?: GenericEventHandler<Target>;
            onended?: GenericEventHandler<Target>;
            onendedcapture?: GenericEventHandler<Target>;
            onloadeddata?: GenericEventHandler<Target>;
            onloadeddatacapture?: GenericEventHandler<Target>;
            onloadedmetadata?: GenericEventHandler<Target>;
            onloadedmetadatacapture?: GenericEventHandler<Target>;
            onloadstart?: GenericEventHandler<Target>;
            onloadstartcapture?: GenericEventHandler<Target>;
            onpause?: GenericEventHandler<Target>;
            onpausecapture?: GenericEventHandler<Target>;
            onplay?: GenericEventHandler<Target>;
            onplaycapture?: GenericEventHandler<Target>;
            onplaying?: GenericEventHandler<Target>;
            onplayingcapture?: GenericEventHandler<Target>;
            onprogress?: GenericEventHandler<Target>;
            onprogresscapture?: GenericEventHandler<Target>;
            onratechange?: GenericEventHandler<Target>;
            onratechangecapture?: GenericEventHandler<Target>;
            onseeked?: GenericEventHandler<Target>;
            onseekedcapture?: GenericEventHandler<Target>;
            onseeking?: GenericEventHandler<Target>;
            onseekingcapture?: GenericEventHandler<Target>;
            onstalled?: GenericEventHandler<Target>;
            onstalledcapture?: GenericEventHandler<Target>;
            onsuspend?: GenericEventHandler<Target>;
            onsuspendcapture?: GenericEventHandler<Target>;
            ontimeipdate?: GenericEventHandler<Target>;
            ontimeupdatecapture?: GenericEventHandler<Target>;
            onvolumechange?: GenericEventHandler<Target>;
            onvolumechangecapture?: GenericEventHandler<Target>;
            onwaiting?: GenericEventHandler<Target>;
            onwaitingcapture?: GenericEventHandler<Target>;

            // MouseEvents
            onclick?: MouseEventHandler<Target>;
            onclickcapture?: MouseEventHandler<Target>;
            oncontextmenu?: MouseEventHandler<Target>;
            oncontextmenucapture?: MouseEventHandler<Target>;
            ondblclick?: MouseEventHandler<Target>;
            ondblclickcapture?: MouseEventHandler<Target>;
            ondrag?: DragEventHandler<Target>;
            ondragcapture?: DragEventHandler<Target>;
            ondragend?: DragEventHandler<Target>;
            ondragendcapture?: DragEventHandler<Target>;
            ondragenter?: DragEventHandler<Target>;
            ondragentercapture?: DragEventHandler<Target>;
            ondragexit?: DragEventHandler<Target>;
            ondragexitcapture?: DragEventHandler<Target>;
            ondragleave?: DragEventHandler<Target>;
            ondragleavecapture?: DragEventHandler<Target>;
            ondragover?: DragEventHandler<Target>;
            ondragovercapture?: DragEventHandler<Target>;
            ondragstart?: DragEventHandler<Target>;
            ondragstartcapture?: DragEventHandler<Target>;
            ondrop?: DragEventHandler<Target>;
            ondropcapture?: DragEventHandler<Target>;
            onmousedown?: MouseEventHandler<Target>;
            onmousedowncapture?: MouseEventHandler<Target>;
            onmouseenter?: MouseEventHandler<Target>;
            onmouseentercapture?: MouseEventHandler<Target>;
            onmouseleave?: MouseEventHandler<Target>;
            onmouseleavecapture?: MouseEventHandler<Target>;
            onmousemove?: MouseEventHandler<Target>;
            onmousemovecapture?: MouseEventHandler<Target>;
            onmouseout?: MouseEventHandler<Target>;
            onmouseoutcapture?: MouseEventHandler<Target>;
            onmouseover?: MouseEventHandler<Target>;
            onmouseovercapture?: MouseEventHandler<Target>;
            onmouseup?: MouseEventHandler<Target>;
            onmouseupcapture?: MouseEventHandler<Target>;

            // Selection Events
            onselect?: GenericEventHandler<Target>;
            onselectcapture?: GenericEventHandler<Target>;

            // Touch Events
            ontouchcancel?: TouchEventHandler<Target>;
            ontouchcancelcapture?: TouchEventHandler<Target>;
            ontouchend?: TouchEventHandler<Target>;
            ontouchendcapture?: TouchEventHandler<Target>;
            ontouchmove?: TouchEventHandler<Target>;
            ontouchmovecapture?: TouchEventHandler<Target>;
            ontouchstart?: TouchEventHandler<Target>;
            ontouchstartcapture?: TouchEventHandler<Target>;

            // Pointer Events
            onpointerover?: PointerEventHandler<Target>;
            onpointerovercapture?: PointerEventHandler<Target>;
            onpointerenter?: PointerEventHandler<Target>;
            onpointerentercapture?: PointerEventHandler<Target>;
            onpointerdown?: PointerEventHandler<Target>;
            onpointerdowncapture?: PointerEventHandler<Target>;
            onpointermove?: PointerEventHandler<Target>;
            onpointermovecapture?: PointerEventHandler<Target>;
            onpointerup?: PointerEventHandler<Target>;
            onpointerupcapture?: PointerEventHandler<Target>;
            onpointercancel?: PointerEventHandler<Target>;
            onpointercancelcapture?: PointerEventHandler<Target>;
            onpointerout?: PointerEventHandler<Target>;
            onpointeroutcapture?: PointerEventHandler<Target>;
            onpointerleave?: PointerEventHandler<Target>;
            onpointerleavecapture?: PointerEventHandler<Target>;
            ongotpointercapture?: PointerEventHandler<Target>;
            ongotpointercapturecapture?: PointerEventHandler<Target>;
            onlostpointercapture?: PointerEventHandler<Target>;
            onlostpointercapturecapture?: PointerEventHandler<Target>;

            // UI Events
            onscroll?: UIEventHandler<Target>;
            onscrollcapture?: UIEventHandler<Target>;

            // Wheel Events
            onwheel?: WheelEventHandler<Target>;
            onwheelcapture?: WheelEventHandler<Target>;

            // Animation Events
            onanimationstart?: AnimationEventHandler<Target>;
            onanimationstartcapture?: AnimationEventHandler<Target>;
            onanimationend?: AnimationEventHandler<Target>;
            onanimationendcapture?: AnimationEventHandler<Target>;
            onanimationiteration?: AnimationEventHandler<Target>;
            onanimationiterationcapture?: AnimationEventHandler<Target>;

            // Transition Events
            ontransitionend?: TransitionEventHandler<Target>;
            ontransitionendcapture?: TransitionEventHandler<Target>;
        }

        interface HTMLAttributes<RefType extends EventTarget = EventTarget> extends DOMAttributes<RefType> {
            // Standard HTML Attributes
            accept?: string;
            acceptCharset?: string;
            accessKey?: string;
            action?: string;
            allowFullScreen?: boolean;
            allowTransparency?: boolean;
            alt?: string;
            as?: string;
            async?: boolean;
            autocomplete?: string;
            autocorrect?: string;
            autofocus?: boolean;
            autoFocus?: boolean;
            autoPlay?: boolean;
            capture?: boolean | string;
            cellPadding?: number | string;
            cellSpacing?: number | string;
            charSet?: string;
            challenge?: string;
            checked?: boolean;
            class?: string;
            cols?: number;
            colSpan?: number;
            content?: string;
            contentEditable?: boolean;
            contextMenu?: string;
            controls?: boolean;
            controlsList?: string;
            coords?: string;
            crossOrigin?: string;
            data?: string;
            dateTime?: string;
            default?: boolean;
            defer?: boolean;
            dir?: 'auto' | 'rtl' | 'ltr';
            disabled?: boolean;
            disableRemotePlayback?: boolean;
            download?: any;
            draggable?: boolean;
            encType?: string;
            form?: string;
            formAction?: string;
            formEncType?: string;
            formMethod?: string;
            formNoValidate?: boolean;
            formTarget?: string;
            frameBorder?: number | string;
            headers?: string;
            height?: number | string;
            hidden?: boolean;
            high?: number;
            href?: string;
            hrefLang?: string;
            for?: string;
            httpEquiv?: string;
            icon?: string;
            id?: string;
            inputMode?: string;
            integrity?: string;
            is?: string;
            keyParams?: string;
            keyType?: string;
            kind?: string;
            label?: string;
            lang?: string;
            list?: string;
            loading?: 'eager' | 'lazy';
            loop?: boolean;
            low?: number;
            manifest?: string;
            marginHeight?: number;
            marginWidth?: number;
            max?: number | string;
            maxLength?: number;
            media?: string;
            mediaGroup?: string;
            method?: string;
            min?: number | string;
            minLength?: number;
            multiple?: boolean;
            muted?: boolean;
            name?: string;
            nonce?: string;
            noValidate?: boolean;
            open?: boolean;
            optimum?: number;
            pattern?: string;
            placeholder?: string;
            playsInline?: boolean;
            poster?: string;
            preload?: string;
            radioGroup?: string;
            readOnly?: boolean;
            rel?: string;
            required?: boolean;
            role?: string;
            rows?: number;
            rowSpan?: number;
            sandbox?: string;
            scope?: string;
            scoped?: boolean;
            scrolling?: string;
            seamless?: boolean;
            selected?: boolean;
            shape?: string;
            size?: number;
            sizes?: string;
            slot?: string;
            span?: number;
            spellcheck?: boolean;
            src?: string;
            srcset?: string;
            srcDoc?: string;
            srcLang?: string;
            srcSet?: string;
            start?: number;
            step?: number | string;
            style?: string;
            summary?: string;
            tabIndex?: number;
            target?: string;
            title?: string;
            type?: string;
            useMap?: string;
            value?: string | string[] | number;
            volume?: string | number;
            width?: number | string;
            wmode?: string;
            wrap?: string;

            // RDFa Attributes
            about?: string;
            datatype?: string;
            inlist?: any;
            prefix?: string;
            property?: string;
            resource?: string;
            typeof?: string;
            vocab?: string;

            // Microdata Attributes
            itemProp?: string;
            itemScope?: boolean;
            itemType?: string;
            itemID?: string;
            itemRef?: string;
        }

        interface HTMLMarqueeElement extends HTMLElement {
            behavior?: 'scroll' | 'slide' | 'alternate';
            bgColor?: string;
            direction?: 'left' | 'right' | 'up' | 'down';
            height?: number | string;
            hspace?: number | string;
            loop?: number | string;
            scrollAmount?: number | string;
            scrollDelay?: number | string;
            trueSpeed?: boolean;
            vspace?: number | string;
            width?: number | string;
        }

        interface IntrinsicElements {
            // HTML
            a: HTMLAttributes<HTMLAnchorElement>;
            abbr: HTMLAttributes<HTMLElement>;
            address: HTMLAttributes<HTMLElement>;
            area: HTMLAttributes<HTMLAreaElement>;
            article: HTMLAttributes<HTMLElement>;
            aside: HTMLAttributes<HTMLElement>;
            audio: HTMLAttributes<HTMLAudioElement>;
            b: HTMLAttributes<HTMLElement>;
            base: HTMLAttributes<HTMLBaseElement>;
            bdi: HTMLAttributes<HTMLElement>;
            bdo: HTMLAttributes<HTMLElement>;
            big: HTMLAttributes<HTMLElement>;
            blockquote: HTMLAttributes<HTMLQuoteElement>;
            body: HTMLAttributes<HTMLBodyElement>;
            br: HTMLAttributes<HTMLBRElement>;
            button: HTMLAttributes<HTMLButtonElement>;
            canvas: HTMLAttributes<HTMLCanvasElement>;
            caption: HTMLAttributes<HTMLTableCaptionElement>;
            cite: HTMLAttributes<HTMLElement>;
            code: HTMLAttributes<HTMLElement>;
            col: HTMLAttributes<HTMLTableColElement>;
            colgroup: HTMLAttributes<HTMLTableColElement>;
            data: HTMLAttributes<HTMLDataElement>;
            datalist: HTMLAttributes<HTMLDataListElement>;
            dd: HTMLAttributes<HTMLElement>;
            del: HTMLAttributes<HTMLModElement>;
            details: HTMLAttributes<HTMLDetailsElement>;
            dfn: HTMLAttributes<HTMLElement>;
            dialog: HTMLAttributes<HTMLDialogElement>;
            div: HTMLAttributes<HTMLDivElement>;
            dl: HTMLAttributes<HTMLDListElement>;
            dt: HTMLAttributes<HTMLElement>;
            em: HTMLAttributes<HTMLElement>;
            embed: HTMLAttributes<HTMLEmbedElement>;
            fieldset: HTMLAttributes<HTMLFieldSetElement>;
            figcaption: HTMLAttributes<HTMLElement>;
            figure: HTMLAttributes<HTMLElement>;
            footer: HTMLAttributes<HTMLElement>;
            form: HTMLAttributes<HTMLFormElement>;
            h1: HTMLAttributes<HTMLHeadingElement>;
            h2: HTMLAttributes<HTMLHeadingElement>;
            h3: HTMLAttributes<HTMLHeadingElement>;
            h4: HTMLAttributes<HTMLHeadingElement>;
            h5: HTMLAttributes<HTMLHeadingElement>;
            h6: HTMLAttributes<HTMLHeadingElement>;
            head: HTMLAttributes<HTMLHeadElement>;
            header: HTMLAttributes<HTMLElement>;
            hgroup: HTMLAttributes<HTMLElement>;
            hr: HTMLAttributes<HTMLHRElement>;
            html: HTMLAttributes<HTMLHtmlElement>;
            i: HTMLAttributes<HTMLElement>;
            iframe: HTMLAttributes<HTMLIFrameElement>;
            img: HTMLAttributes<HTMLImageElement>;
            input: HTMLAttributes<HTMLInputElement>;
            ins: HTMLAttributes<HTMLModElement>;
            kbd: HTMLAttributes<HTMLElement>;
            keygen: HTMLAttributes<HTMLUnknownElement>;
            label: HTMLAttributes<HTMLLabelElement>;
            legend: HTMLAttributes<HTMLLegendElement>;
            li: HTMLAttributes<HTMLLIElement>;
            link: HTMLAttributes<HTMLLinkElement>;
            main: HTMLAttributes<HTMLElement>;
            map: HTMLAttributes<HTMLMapElement>;
            mark: HTMLAttributes<HTMLElement>;
            marquee: HTMLAttributes<HTMLMarqueeElement>;
            menu: HTMLAttributes<HTMLMenuElement>;
            menuitem: HTMLAttributes<HTMLUnknownElement>;
            meta: HTMLAttributes<HTMLMetaElement>;
            meter: HTMLAttributes<HTMLMeterElement>;
            nav: HTMLAttributes<HTMLElement>;
            noscript: HTMLAttributes<HTMLElement>;
            object: HTMLAttributes<HTMLObjectElement>;
            ol: HTMLAttributes<HTMLOListElement>;
            optgroup: HTMLAttributes<HTMLOptGroupElement>;
            option: HTMLAttributes<HTMLOptionElement>;
            output: HTMLAttributes<HTMLOutputElement>;
            p: HTMLAttributes<HTMLParagraphElement>;
            param: HTMLAttributes<HTMLParamElement>;
            picture: HTMLAttributes<HTMLPictureElement>;
            pre: HTMLAttributes<HTMLPreElement>;
            progress: HTMLAttributes<HTMLProgressElement>;
            q: HTMLAttributes<HTMLQuoteElement>;
            rp: HTMLAttributes<HTMLElement>;
            rt: HTMLAttributes<HTMLElement>;
            ruby: HTMLAttributes<HTMLElement>;
            s: HTMLAttributes<HTMLElement>;
            samp: HTMLAttributes<HTMLElement>;
            script: HTMLAttributes<HTMLScriptElement>;
            section: HTMLAttributes<HTMLElement>;
            select: HTMLAttributes<HTMLSelectElement>;
            slot: HTMLAttributes<HTMLSlotElement>;
            small: HTMLAttributes<HTMLElement>;
            source: HTMLAttributes<HTMLSourceElement>;
            span: HTMLAttributes<HTMLSpanElement>;
            strong: HTMLAttributes<HTMLElement>;
            style: HTMLAttributes<HTMLStyleElement>;
            sub: HTMLAttributes<HTMLElement>;
            summary: HTMLAttributes<HTMLElement>;
            sup: HTMLAttributes<HTMLElement>;
            table: HTMLAttributes<HTMLTableElement>;
            tbody: HTMLAttributes<HTMLTableSectionElement>;
            td: HTMLAttributes<HTMLTableCellElement>;
            textarea: HTMLAttributes<HTMLTextAreaElement>;
            tfoot: HTMLAttributes<HTMLTableSectionElement>;
            th: HTMLAttributes<HTMLTableCellElement>;
            thead: HTMLAttributes<HTMLTableSectionElement>;
            time: HTMLAttributes<HTMLTimeElement>;
            title: HTMLAttributes<HTMLTitleElement>;
            tr: HTMLAttributes<HTMLTableRowElement>;
            track: HTMLAttributes<HTMLTrackElement>;
            u: HTMLAttributes<HTMLElement>;
            ul: HTMLAttributes<HTMLUListElement>;
            var: HTMLAttributes<HTMLElement>;
            video: HTMLAttributes<HTMLVideoElement>;
            wbr: HTMLAttributes<HTMLElement>;

            // TODO: Support SVGs
            // SVG
            svg: SVGAttributes<SVGSVGElement>;
            animate: SVGAttributes<SVGAnimateElement>;
            circle: SVGAttributes<SVGCircleElement>;
            clipPath: SVGAttributes<SVGClipPathElement>;
            defs: SVGAttributes<SVGDefsElement>;
            desc: SVGAttributes<SVGDescElement>;
            ellipse: SVGAttributes<SVGEllipseElement>;
            feBlend: SVGAttributes<SVGFEBlendElement>;
            feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>;
            feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>;
            feComposite: SVGAttributes<SVGFECompositeElement>;
            feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>;
            feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>;
            feDropShadow: SVGAttributes<SVGFEDropShadowElement>;
            feFlood: SVGAttributes<SVGFEFloodElement>;
            feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>;
            feImage: SVGAttributes<SVGFEImageElement>;
            feMerge: SVGAttributes<SVGFEMergeElement>;
            feMergeNode: SVGAttributes<SVGFEMergeNodeElement>;
            feMorphology: SVGAttributes<SVGFEMorphologyElement>;
            feOffset: SVGAttributes<SVGFEOffsetElement>;
            feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>;
            feTile: SVGAttributes<SVGFETileElement>;
            feTurbulence: SVGAttributes<SVGFETurbulenceElement>;
            filter: SVGAttributes<SVGFilterElement>;
            foreignObject: SVGAttributes<SVGForeignObjectElement>;
            g: SVGAttributes<SVGGElement>;
            image: SVGAttributes<SVGImageElement>;
            line: SVGAttributes<SVGLineElement>;
            linearGradient: SVGAttributes<SVGLinearGradientElement>;
            marker: SVGAttributes<SVGMarkerElement>;
            mask: SVGAttributes<SVGMaskElement>;
            path: SVGAttributes<SVGPathElement>;
            pattern: SVGAttributes<SVGPatternElement>;
            polygon: SVGAttributes<SVGPolygonElement>;
            polyline: SVGAttributes<SVGPolylineElement>;
            radialGradient: SVGAttributes<SVGRadialGradientElement>;
            rect: SVGAttributes<SVGRectElement>;
            stop: SVGAttributes<SVGStopElement>;
            symbol: SVGAttributes<SVGSymbolElement>;
            text: SVGAttributes<SVGTextElement>;
            tspan: SVGAttributes<SVGTSpanElement>;
            use: SVGAttributes<SVGUseElement>;
        }
    }
}
