[@lander/lander](../README.md) / [Exports](../modules.md) / ComponentElement

# Class: ComponentElement

Custom element that allows us to manage components as trees rather than nodes of a tree. These components
are stored inside the actual DOM and keep their own virtual tree. When one is added to the DOM structure,
it will render the function stored in factory and mount the virtual nodes into the DOM.

**`Export`**

## Hierarchy

- `HTMLElement`

  ↳ **`ComponentElement`**

## Table of contents

### Constructors

- [constructor](ComponentElement.md#constructor)

### Properties

- [ATTRIBUTE\_NODE](ComponentElement.md#attribute_node)
- [CDATA\_SECTION\_NODE](ComponentElement.md#cdata_section_node)
- [COMMENT\_NODE](ComponentElement.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](ComponentElement.md#document_fragment_node)
- [DOCUMENT\_NODE](ComponentElement.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](ComponentElement.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](ComponentElement.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](ComponentElement.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](ComponentElement.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](ComponentElement.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](ComponentElement.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](ComponentElement.md#document_type_node)
- [ELEMENT\_NODE](ComponentElement.md#element_node)
- [ENTITY\_NODE](ComponentElement.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](ComponentElement.md#entity_reference_node)
- [NOTATION\_NODE](ComponentElement.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](ComponentElement.md#processing_instruction_node)
- [TEXT\_NODE](ComponentElement.md#text_node)
- [accessKey](ComponentElement.md#accesskey)
- [accessKeyLabel](ComponentElement.md#accesskeylabel)
- [ariaAtomic](ComponentElement.md#ariaatomic)
- [ariaAutoComplete](ComponentElement.md#ariaautocomplete)
- [ariaBusy](ComponentElement.md#ariabusy)
- [ariaChecked](ComponentElement.md#ariachecked)
- [ariaColCount](ComponentElement.md#ariacolcount)
- [ariaColIndex](ComponentElement.md#ariacolindex)
- [ariaColSpan](ComponentElement.md#ariacolspan)
- [ariaCurrent](ComponentElement.md#ariacurrent)
- [ariaDisabled](ComponentElement.md#ariadisabled)
- [ariaExpanded](ComponentElement.md#ariaexpanded)
- [ariaHasPopup](ComponentElement.md#ariahaspopup)
- [ariaHidden](ComponentElement.md#ariahidden)
- [ariaInvalid](ComponentElement.md#ariainvalid)
- [ariaKeyShortcuts](ComponentElement.md#ariakeyshortcuts)
- [ariaLabel](ComponentElement.md#arialabel)
- [ariaLevel](ComponentElement.md#arialevel)
- [ariaLive](ComponentElement.md#arialive)
- [ariaModal](ComponentElement.md#ariamodal)
- [ariaMultiLine](ComponentElement.md#ariamultiline)
- [ariaMultiSelectable](ComponentElement.md#ariamultiselectable)
- [ariaOrientation](ComponentElement.md#ariaorientation)
- [ariaPlaceholder](ComponentElement.md#ariaplaceholder)
- [ariaPosInSet](ComponentElement.md#ariaposinset)
- [ariaPressed](ComponentElement.md#ariapressed)
- [ariaReadOnly](ComponentElement.md#ariareadonly)
- [ariaRequired](ComponentElement.md#ariarequired)
- [ariaRoleDescription](ComponentElement.md#ariaroledescription)
- [ariaRowCount](ComponentElement.md#ariarowcount)
- [ariaRowIndex](ComponentElement.md#ariarowindex)
- [ariaRowSpan](ComponentElement.md#ariarowspan)
- [ariaSelected](ComponentElement.md#ariaselected)
- [ariaSetSize](ComponentElement.md#ariasetsize)
- [ariaSort](ComponentElement.md#ariasort)
- [ariaValueMax](ComponentElement.md#ariavaluemax)
- [ariaValueMin](ComponentElement.md#ariavaluemin)
- [ariaValueNow](ComponentElement.md#ariavaluenow)
- [ariaValueText](ComponentElement.md#ariavaluetext)
- [assignedSlot](ComponentElement.md#assignedslot)
- [attributeStyleMap](ComponentElement.md#attributestylemap)
- [attributes](ComponentElement.md#attributes)
- [autocapitalize](ComponentElement.md#autocapitalize)
- [autofocus](ComponentElement.md#autofocus)
- [baseURI](ComponentElement.md#baseuri)
- [childElementCount](ComponentElement.md#childelementcount)
- [childNodes](ComponentElement.md#childnodes)
- [children](ComponentElement.md#children)
- [classList](ComponentElement.md#classlist)
- [className](ComponentElement.md#classname)
- [clientHeight](ComponentElement.md#clientheight)
- [clientLeft](ComponentElement.md#clientleft)
- [clientTop](ComponentElement.md#clienttop)
- [clientWidth](ComponentElement.md#clientwidth)
- [contentEditable](ComponentElement.md#contenteditable)
- [context](ComponentElement.md#context)
- [dataset](ComponentElement.md#dataset)
- [dir](ComponentElement.md#dir)
- [draggable](ComponentElement.md#draggable)
- [enterKeyHint](ComponentElement.md#enterkeyhint)
- [factory](ComponentElement.md#factory)
- [firstChild](ComponentElement.md#firstchild)
- [firstElementChild](ComponentElement.md#firstelementchild)
- [hidden](ComponentElement.md#hidden)
- [id](ComponentElement.md#id)
- [inert](ComponentElement.md#inert)
- [innerHTML](ComponentElement.md#innerhtml)
- [innerText](ComponentElement.md#innertext)
- [inputMode](ComponentElement.md#inputmode)
- [isConnected](ComponentElement.md#isconnected)
- [isContentEditable](ComponentElement.md#iscontenteditable)
- [lang](ComponentElement.md#lang)
- [lastChild](ComponentElement.md#lastchild)
- [lastElementChild](ComponentElement.md#lastelementchild)
- [lifecycleListeners](ComponentElement.md#lifecyclelisteners)
- [localName](ComponentElement.md#localname)
- [mounted](ComponentElement.md#mounted)
- [namespaceURI](ComponentElement.md#namespaceuri)
- [nextElementSibling](ComponentElement.md#nextelementsibling)
- [nextSibling](ComponentElement.md#nextsibling)
- [node](ComponentElement.md#node)
- [nodeName](ComponentElement.md#nodename)
- [nodeType](ComponentElement.md#nodetype)
- [nodeValue](ComponentElement.md#nodevalue)
- [nonce](ComponentElement.md#nonce)
- [offsetHeight](ComponentElement.md#offsetheight)
- [offsetLeft](ComponentElement.md#offsetleft)
- [offsetParent](ComponentElement.md#offsetparent)
- [offsetTop](ComponentElement.md#offsettop)
- [offsetWidth](ComponentElement.md#offsetwidth)
- [onabort](ComponentElement.md#onabort)
- [onanimationcancel](ComponentElement.md#onanimationcancel)
- [onanimationend](ComponentElement.md#onanimationend)
- [onanimationiteration](ComponentElement.md#onanimationiteration)
- [onanimationstart](ComponentElement.md#onanimationstart)
- [onauxclick](ComponentElement.md#onauxclick)
- [onbeforeinput](ComponentElement.md#onbeforeinput)
- [onblur](ComponentElement.md#onblur)
- [oncancel](ComponentElement.md#oncancel)
- [oncanplay](ComponentElement.md#oncanplay)
- [oncanplaythrough](ComponentElement.md#oncanplaythrough)
- [onchange](ComponentElement.md#onchange)
- [onclick](ComponentElement.md#onclick)
- [onclose](ComponentElement.md#onclose)
- [oncontextmenu](ComponentElement.md#oncontextmenu)
- [oncopy](ComponentElement.md#oncopy)
- [oncuechange](ComponentElement.md#oncuechange)
- [oncut](ComponentElement.md#oncut)
- [ondblclick](ComponentElement.md#ondblclick)
- [ondrag](ComponentElement.md#ondrag)
- [ondragend](ComponentElement.md#ondragend)
- [ondragenter](ComponentElement.md#ondragenter)
- [ondragleave](ComponentElement.md#ondragleave)
- [ondragover](ComponentElement.md#ondragover)
- [ondragstart](ComponentElement.md#ondragstart)
- [ondrop](ComponentElement.md#ondrop)
- [ondurationchange](ComponentElement.md#ondurationchange)
- [onemptied](ComponentElement.md#onemptied)
- [onended](ComponentElement.md#onended)
- [onerror](ComponentElement.md#onerror)
- [onfocus](ComponentElement.md#onfocus)
- [onformdata](ComponentElement.md#onformdata)
- [onfullscreenchange](ComponentElement.md#onfullscreenchange)
- [onfullscreenerror](ComponentElement.md#onfullscreenerror)
- [ongotpointercapture](ComponentElement.md#ongotpointercapture)
- [oninput](ComponentElement.md#oninput)
- [oninvalid](ComponentElement.md#oninvalid)
- [onkeydown](ComponentElement.md#onkeydown)
- [onkeypress](ComponentElement.md#onkeypress)
- [onkeyup](ComponentElement.md#onkeyup)
- [onload](ComponentElement.md#onload)
- [onloadeddata](ComponentElement.md#onloadeddata)
- [onloadedmetadata](ComponentElement.md#onloadedmetadata)
- [onloadstart](ComponentElement.md#onloadstart)
- [onlostpointercapture](ComponentElement.md#onlostpointercapture)
- [onmousedown](ComponentElement.md#onmousedown)
- [onmouseenter](ComponentElement.md#onmouseenter)
- [onmouseleave](ComponentElement.md#onmouseleave)
- [onmousemove](ComponentElement.md#onmousemove)
- [onmouseout](ComponentElement.md#onmouseout)
- [onmouseover](ComponentElement.md#onmouseover)
- [onmouseup](ComponentElement.md#onmouseup)
- [onpaste](ComponentElement.md#onpaste)
- [onpause](ComponentElement.md#onpause)
- [onplay](ComponentElement.md#onplay)
- [onplaying](ComponentElement.md#onplaying)
- [onpointercancel](ComponentElement.md#onpointercancel)
- [onpointerdown](ComponentElement.md#onpointerdown)
- [onpointerenter](ComponentElement.md#onpointerenter)
- [onpointerleave](ComponentElement.md#onpointerleave)
- [onpointermove](ComponentElement.md#onpointermove)
- [onpointerout](ComponentElement.md#onpointerout)
- [onpointerover](ComponentElement.md#onpointerover)
- [onpointerup](ComponentElement.md#onpointerup)
- [onprogress](ComponentElement.md#onprogress)
- [onratechange](ComponentElement.md#onratechange)
- [onreset](ComponentElement.md#onreset)
- [onresize](ComponentElement.md#onresize)
- [onscroll](ComponentElement.md#onscroll)
- [onscrollend](ComponentElement.md#onscrollend)
- [onsecuritypolicyviolation](ComponentElement.md#onsecuritypolicyviolation)
- [onseeked](ComponentElement.md#onseeked)
- [onseeking](ComponentElement.md#onseeking)
- [onselect](ComponentElement.md#onselect)
- [onselectionchange](ComponentElement.md#onselectionchange)
- [onselectstart](ComponentElement.md#onselectstart)
- [onslotchange](ComponentElement.md#onslotchange)
- [onstalled](ComponentElement.md#onstalled)
- [onsubmit](ComponentElement.md#onsubmit)
- [onsuspend](ComponentElement.md#onsuspend)
- [ontimeupdate](ComponentElement.md#ontimeupdate)
- [ontoggle](ComponentElement.md#ontoggle)
- [ontouchcancel](ComponentElement.md#ontouchcancel)
- [ontouchend](ComponentElement.md#ontouchend)
- [ontouchmove](ComponentElement.md#ontouchmove)
- [ontouchstart](ComponentElement.md#ontouchstart)
- [ontransitioncancel](ComponentElement.md#ontransitioncancel)
- [ontransitionend](ComponentElement.md#ontransitionend)
- [ontransitionrun](ComponentElement.md#ontransitionrun)
- [ontransitionstart](ComponentElement.md#ontransitionstart)
- [onvolumechange](ComponentElement.md#onvolumechange)
- [onwaiting](ComponentElement.md#onwaiting)
- [onwebkitanimationend](ComponentElement.md#onwebkitanimationend)
- [onwebkitanimationiteration](ComponentElement.md#onwebkitanimationiteration)
- [onwebkitanimationstart](ComponentElement.md#onwebkitanimationstart)
- [onwebkittransitionend](ComponentElement.md#onwebkittransitionend)
- [onwheel](ComponentElement.md#onwheel)
- [outerHTML](ComponentElement.md#outerhtml)
- [outerText](ComponentElement.md#outertext)
- [ownerDocument](ComponentElement.md#ownerdocument)
- [parentElement](ComponentElement.md#parentelement)
- [parentNode](ComponentElement.md#parentnode)
- [part](ComponentElement.md#part)
- [popover](ComponentElement.md#popover)
- [prefix](ComponentElement.md#prefix)
- [previousElementSibling](ComponentElement.md#previouselementsibling)
- [previousSibling](ComponentElement.md#previoussibling)
- [props](ComponentElement.md#props)
- [role](ComponentElement.md#role)
- [scrollHeight](ComponentElement.md#scrollheight)
- [scrollLeft](ComponentElement.md#scrollleft)
- [scrollTop](ComponentElement.md#scrolltop)
- [scrollWidth](ComponentElement.md#scrollwidth)
- [shadowRoot](ComponentElement.md#shadowroot)
- [slot](ComponentElement.md#slot)
- [spellcheck](ComponentElement.md#spellcheck)
- [style](ComponentElement.md#style)
- [tabIndex](ComponentElement.md#tabindex)
- [tagName](ComponentElement.md#tagname)
- [textContent](ComponentElement.md#textcontent)
- [title](ComponentElement.md#title)
- [translate](ComponentElement.md#translate)
- [tree](ComponentElement.md#tree)
- [updateFrameId](ComponentElement.md#updateframeid)
- [virtualChild](ComponentElement.md#virtualchild)

### Methods

- [addEventListener](ComponentElement.md#addeventlistener)
- [after](ComponentElement.md#after)
- [animate](ComponentElement.md#animate)
- [append](ComponentElement.md#append)
- [appendChild](ComponentElement.md#appendchild)
- [attachInternals](ComponentElement.md#attachinternals)
- [attachShadow](ComponentElement.md#attachshadow)
- [before](ComponentElement.md#before)
- [blur](ComponentElement.md#blur)
- [checkVisibility](ComponentElement.md#checkvisibility)
- [click](ComponentElement.md#click)
- [cloneNode](ComponentElement.md#clonenode)
- [closest](ComponentElement.md#closest)
- [compareDocumentPosition](ComponentElement.md#comparedocumentposition)
- [computedStyleMap](ComponentElement.md#computedstylemap)
- [connectedCallback](ComponentElement.md#connectedcallback)
- [contains](ComponentElement.md#contains)
- [disconnectedCallback](ComponentElement.md#disconnectedcallback)
- [dispatchEvent](ComponentElement.md#dispatchevent)
- [focus](ComponentElement.md#focus)
- [getAnimations](ComponentElement.md#getanimations)
- [getAttribute](ComponentElement.md#getattribute)
- [getAttributeNS](ComponentElement.md#getattributens)
- [getAttributeNames](ComponentElement.md#getattributenames)
- [getAttributeNode](ComponentElement.md#getattributenode)
- [getAttributeNodeNS](ComponentElement.md#getattributenodens)
- [getBoundingClientRect](ComponentElement.md#getboundingclientrect)
- [getClientRects](ComponentElement.md#getclientrects)
- [getElementsByClassName](ComponentElement.md#getelementsbyclassname)
- [getElementsByTagName](ComponentElement.md#getelementsbytagname)
- [getElementsByTagNameNS](ComponentElement.md#getelementsbytagnamens)
- [getFactory](ComponentElement.md#getfactory)
- [getRootNode](ComponentElement.md#getrootnode)
- [hasAttribute](ComponentElement.md#hasattribute)
- [hasAttributeNS](ComponentElement.md#hasattributens)
- [hasAttributes](ComponentElement.md#hasattributes)
- [hasChildNodes](ComponentElement.md#haschildnodes)
- [hasPointerCapture](ComponentElement.md#haspointercapture)
- [hidePopover](ComponentElement.md#hidepopover)
- [injectContext](ComponentElement.md#injectcontext)
- [insertAdjacentElement](ComponentElement.md#insertadjacentelement)
- [insertAdjacentHTML](ComponentElement.md#insertadjacenthtml)
- [insertAdjacentText](ComponentElement.md#insertadjacenttext)
- [insertBefore](ComponentElement.md#insertbefore)
- [isDefaultNamespace](ComponentElement.md#isdefaultnamespace)
- [isEqualNode](ComponentElement.md#isequalnode)
- [isSameNode](ComponentElement.md#issamenode)
- [listen](ComponentElement.md#listen)
- [lookupNamespaceURI](ComponentElement.md#lookupnamespaceuri)
- [lookupPrefix](ComponentElement.md#lookupprefix)
- [matches](ComponentElement.md#matches)
- [mount](ComponentElement.md#mount)
- [normalize](ComponentElement.md#normalize)
- [prepend](ComponentElement.md#prepend)
- [querySelector](ComponentElement.md#queryselector)
- [querySelectorAll](ComponentElement.md#queryselectorall)
- [releasePointerCapture](ComponentElement.md#releasepointercapture)
- [remove](ComponentElement.md#remove)
- [removeAttribute](ComponentElement.md#removeattribute)
- [removeAttributeNS](ComponentElement.md#removeattributens)
- [removeAttributeNode](ComponentElement.md#removeattributenode)
- [removeChild](ComponentElement.md#removechild)
- [removeEventListener](ComponentElement.md#removeeventlistener)
- [render](ComponentElement.md#render)
- [replaceChild](ComponentElement.md#replacechild)
- [replaceChildren](ComponentElement.md#replacechildren)
- [replaceWith](ComponentElement.md#replacewith)
- [requestFullscreen](ComponentElement.md#requestfullscreen)
- [requestPointerLock](ComponentElement.md#requestpointerlock)
- [requestUpdate](ComponentElement.md#requestupdate)
- [scroll](ComponentElement.md#scroll)
- [scrollBy](ComponentElement.md#scrollby)
- [scrollIntoView](ComponentElement.md#scrollintoview)
- [scrollTo](ComponentElement.md#scrollto)
- [setAll](ComponentElement.md#setall)
- [setAttribute](ComponentElement.md#setattribute)
- [setAttributeNS](ComponentElement.md#setattributens)
- [setAttributeNode](ComponentElement.md#setattributenode)
- [setAttributeNodeNS](ComponentElement.md#setattributenodens)
- [setPointerCapture](ComponentElement.md#setpointercapture)
- [showPopover](ComponentElement.md#showpopover)
- [toggleAttribute](ComponentElement.md#toggleattribute)
- [togglePopover](ComponentElement.md#togglepopover)
- [update](ComponentElement.md#update)
- [webkitMatchesSelector](ComponentElement.md#webkitmatchesselector)

## Constructors

### constructor

• **new ComponentElement**()

#### Inherited from

window.HTMLElement.constructor

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10104

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: ``2``

#### Inherited from

window.HTMLElement.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16203

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: ``4``

node is a CDATASection node.

#### Inherited from

window.HTMLElement.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16207

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: ``8``

node is a Comment node.

#### Inherited from

window.HTMLElement.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16213

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: ``11``

node is a DocumentFragment node.

#### Inherited from

window.HTMLElement.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16219

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: ``9``

node is a document.

#### Inherited from

window.HTMLElement.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16215

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: ``16``

Set when other is a descendant of node.

#### Inherited from

window.HTMLElement.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16230

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: ``8``

Set when other is an ancestor of node.

#### Inherited from

window.HTMLElement.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16228

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: ``1``

Set when node and other are not in the same tree.

#### Inherited from

window.HTMLElement.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16222

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: ``4``

Set when other is following node.

#### Inherited from

window.HTMLElement.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16226

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: ``32``

#### Inherited from

window.HTMLElement.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16231

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: ``2``

Set when other is preceding node.

#### Inherited from

window.HTMLElement.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16224

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: ``10``

node is a doctype.

#### Inherited from

window.HTMLElement.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16217

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: ``1``

node is an element.

#### Inherited from

window.HTMLElement.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16202

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: ``6``

#### Inherited from

window.HTMLElement.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16209

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: ``5``

#### Inherited from

window.HTMLElement.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16208

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: ``12``

#### Inherited from

window.HTMLElement.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16220

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: ``7``

node is a ProcessingInstruction node.

#### Inherited from

window.HTMLElement.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16211

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: ``3``

node is a Text node.

#### Inherited from

window.HTMLElement.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16205

___

### accessKey

• **accessKey**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKey)

#### Inherited from

window.HTMLElement.accessKey

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10051

___

### accessKeyLabel

• `Readonly` **accessKeyLabel**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/accessKeyLabel)

#### Inherited from

window.HTMLElement.accessKeyLabel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10053

___

### ariaAtomic

• **ariaAtomic**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAtomic)

#### Inherited from

window.HTMLElement.ariaAtomic

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2207

___

### ariaAutoComplete

• **ariaAutoComplete**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaAutoComplete)

#### Inherited from

window.HTMLElement.ariaAutoComplete

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2209

___

### ariaBusy

• **ariaBusy**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaBusy)

#### Inherited from

window.HTMLElement.ariaBusy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2211

___

### ariaChecked

• **ariaChecked**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaChecked)

#### Inherited from

window.HTMLElement.ariaChecked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2213

___

### ariaColCount

• **ariaColCount**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColCount)

#### Inherited from

window.HTMLElement.ariaColCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2215

___

### ariaColIndex

• **ariaColIndex**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColIndex)

#### Inherited from

window.HTMLElement.ariaColIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2217

___

### ariaColSpan

• **ariaColSpan**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaColSpan)

#### Inherited from

window.HTMLElement.ariaColSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2219

___

### ariaCurrent

• **ariaCurrent**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaCurrent)

#### Inherited from

window.HTMLElement.ariaCurrent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2221

___

### ariaDisabled

• **ariaDisabled**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaDisabled)

#### Inherited from

window.HTMLElement.ariaDisabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2223

___

### ariaExpanded

• **ariaExpanded**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaExpanded)

#### Inherited from

window.HTMLElement.ariaExpanded

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2225

___

### ariaHasPopup

• **ariaHasPopup**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHasPopup)

#### Inherited from

window.HTMLElement.ariaHasPopup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2227

___

### ariaHidden

• **ariaHidden**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaHidden)

#### Inherited from

window.HTMLElement.ariaHidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2229

___

### ariaInvalid

• **ariaInvalid**: ``null`` \| `string`

#### Inherited from

window.HTMLElement.ariaInvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2230

___

### ariaKeyShortcuts

• **ariaKeyShortcuts**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaKeyShortcuts)

#### Inherited from

window.HTMLElement.ariaKeyShortcuts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2232

___

### ariaLabel

• **ariaLabel**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLabel)

#### Inherited from

window.HTMLElement.ariaLabel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2234

___

### ariaLevel

• **ariaLevel**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLevel)

#### Inherited from

window.HTMLElement.ariaLevel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2236

___

### ariaLive

• **ariaLive**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaLive)

#### Inherited from

window.HTMLElement.ariaLive

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2238

___

### ariaModal

• **ariaModal**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaModal)

#### Inherited from

window.HTMLElement.ariaModal

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2240

___

### ariaMultiLine

• **ariaMultiLine**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiLine)

#### Inherited from

window.HTMLElement.ariaMultiLine

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2242

___

### ariaMultiSelectable

• **ariaMultiSelectable**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaMultiSelectable)

#### Inherited from

window.HTMLElement.ariaMultiSelectable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2244

___

### ariaOrientation

• **ariaOrientation**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaOrientation)

#### Inherited from

window.HTMLElement.ariaOrientation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2246

___

### ariaPlaceholder

• **ariaPlaceholder**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPlaceholder)

#### Inherited from

window.HTMLElement.ariaPlaceholder

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2248

___

### ariaPosInSet

• **ariaPosInSet**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPosInSet)

#### Inherited from

window.HTMLElement.ariaPosInSet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2250

___

### ariaPressed

• **ariaPressed**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaPressed)

#### Inherited from

window.HTMLElement.ariaPressed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2252

___

### ariaReadOnly

• **ariaReadOnly**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaReadOnly)

#### Inherited from

window.HTMLElement.ariaReadOnly

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2254

___

### ariaRequired

• **ariaRequired**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRequired)

#### Inherited from

window.HTMLElement.ariaRequired

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2256

___

### ariaRoleDescription

• **ariaRoleDescription**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRoleDescription)

#### Inherited from

window.HTMLElement.ariaRoleDescription

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2258

___

### ariaRowCount

• **ariaRowCount**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowCount)

#### Inherited from

window.HTMLElement.ariaRowCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2260

___

### ariaRowIndex

• **ariaRowIndex**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowIndex)

#### Inherited from

window.HTMLElement.ariaRowIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2262

___

### ariaRowSpan

• **ariaRowSpan**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaRowSpan)

#### Inherited from

window.HTMLElement.ariaRowSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2264

___

### ariaSelected

• **ariaSelected**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSelected)

#### Inherited from

window.HTMLElement.ariaSelected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2266

___

### ariaSetSize

• **ariaSetSize**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSetSize)

#### Inherited from

window.HTMLElement.ariaSetSize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2268

___

### ariaSort

• **ariaSort**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaSort)

#### Inherited from

window.HTMLElement.ariaSort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2270

___

### ariaValueMax

• **ariaValueMax**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMax)

#### Inherited from

window.HTMLElement.ariaValueMax

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2272

___

### ariaValueMin

• **ariaValueMin**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueMin)

#### Inherited from

window.HTMLElement.ariaValueMin

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2274

___

### ariaValueNow

• **ariaValueNow**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueNow)

#### Inherited from

window.HTMLElement.ariaValueNow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2276

___

### ariaValueText

• **ariaValueText**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/ariaValueText)

#### Inherited from

window.HTMLElement.ariaValueText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2278

___

### assignedSlot

• `Readonly` **assignedSlot**: ``null`` \| `HTMLSlotElement`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/assignedSlot)

#### Inherited from

window.HTMLElement.assignedSlot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:21294

___

### attributeStyleMap

• `Readonly` **attributeStyleMap**: `StylePropertyMap`

#### Inherited from

window.HTMLElement.attributeStyleMap

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7853

___

### attributes

• `Readonly` **attributes**: `NamedNodeMap`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attributes)

#### Inherited from

window.HTMLElement.attributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7598

___

### autocapitalize

• **autocapitalize**: `string`

#### Inherited from

window.HTMLElement.autocapitalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### autofocus

• **autofocus**: `boolean`

#### Inherited from

window.HTMLElement.autofocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12043

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/baseURI)

#### Inherited from

window.HTMLElement.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16072

___

### childElementCount

• `Readonly` **childElementCount**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/childElementCount)

#### Inherited from

window.HTMLElement.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16761

___

### childNodes

• `Readonly` **childNodes**: `NodeListOf`<`ChildNode`\>

Returns the children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/childNodes)

#### Inherited from

window.HTMLElement.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16078

___

### children

• `Readonly` **children**: `HTMLCollection`

Returns the child elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/children)

#### Inherited from

window.HTMLElement.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16767

___

### classList

• `Readonly` **classList**: `DOMTokenList`

Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/classList)

#### Inherited from

window.HTMLElement.classList

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7604

___

### className

• **className**: `string`

Returns the value of element's class content attribute. Can be set to change it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/className)

#### Inherited from

window.HTMLElement.className

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7610

___

### clientHeight

• `Readonly` **clientHeight**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientHeight)

#### Inherited from

window.HTMLElement.clientHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7612

___

### clientLeft

• `Readonly` **clientLeft**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientLeft)

#### Inherited from

window.HTMLElement.clientLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7614

___

### clientTop

• `Readonly` **clientTop**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientTop)

#### Inherited from

window.HTMLElement.clientTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7616

___

### clientWidth

• `Readonly` **clientWidth**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/clientWidth)

#### Inherited from

window.HTMLElement.clientWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7618

___

### contentEditable

• **contentEditable**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/contentEditable)

#### Inherited from

window.HTMLElement.contentEditable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7860

___

### context

• `Private` **context**: [`JSXContext`](../interfaces/JSXContext.md)

Object that stores the component's context data. Updated with state management capabilities for the framework.

#### Defined in

[packages/lander/src/tree/component.ts:53](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L53)

___

### dataset

• `Readonly` **dataset**: `DOMStringMap`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dataset)

#### Inherited from

window.HTMLElement.dataset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12045

___

### dir

• **dir**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dir)

#### Inherited from

window.HTMLElement.dir

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### draggable

• **draggable**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/draggable)

#### Inherited from

window.HTMLElement.draggable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10058

___

### enterKeyHint

• **enterKeyHint**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/enterKeyHint)

#### Inherited from

window.HTMLElement.enterKeyHint

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7862

___

### factory

• `Private` **factory**: ``null`` \| [`JSXFunctionComponent`](../modules.md#jsxfunctioncomponent) = `null`

The factory to execute when this component mounts or update.

#### Defined in

[packages/lander/src/tree/component.ts:47](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L47)

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| `ChildNode`

Returns the first child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/firstChild)

#### Inherited from

window.HTMLElement.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16084

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| `Element`

Returns the first child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/firstElementChild)

#### Inherited from

window.HTMLElement.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16773

___

### hidden

• **hidden**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidden)

#### Inherited from

window.HTMLElement.hidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10060

___

### id

• **id**: `string`

Returns the value of element's id content attribute. Can be set to change it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/id)

#### Inherited from

window.HTMLElement.id

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7624

___

### inert

• **inert**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inert)

#### Inherited from

window.HTMLElement.inert

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10062

___

### innerHTML

• **innerHTML**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)

#### Inherited from

window.HTMLElement.innerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14277

___

### innerText

• **innerText**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/innerText)

#### Inherited from

window.HTMLElement.innerText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10064

___

### inputMode

• **inputMode**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/inputMode)

#### Inherited from

window.HTMLElement.inputMode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7864

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isConnected)

#### Inherited from

window.HTMLElement.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16090

___

### isContentEditable

• `Readonly` **isContentEditable**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/isContentEditable)

#### Inherited from

window.HTMLElement.isContentEditable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7866

___

### lang

• **lang**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/lang)

#### Inherited from

window.HTMLElement.lang

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| `ChildNode`

Returns the last child.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lastChild)

#### Inherited from

window.HTMLElement.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16096

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| `Element`

Returns the last child that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lastElementChild)

#### Inherited from

window.HTMLElement.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16779

___

### lifecycleListeners

• `Private` **lifecycleListeners**: [`LifecycleListeners`](../interfaces/LifecycleListeners.md)

Object containing functions that listen to the various lifecycle events of a component. These functions
will be executed with the current component as their only parameter.

#### Defined in

[packages/lander/src/tree/component.ts:63](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L63)

___

### localName

• `Readonly` **localName**: `string`

Returns the local name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/localName)

#### Inherited from

window.HTMLElement.localName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7630

___

### mounted

• `Private` **mounted**: `boolean` = `false`

Stores whether or not the component has mounted the content of its factory. Will not update
if it has yet to be mounted.

#### Defined in

[packages/lander/src/tree/component.ts:29](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L29)

___

### namespaceURI

• `Readonly` **namespaceURI**: ``null`` \| `string`

Returns the namespace.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/namespaceURI)

#### Inherited from

window.HTMLElement.namespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7636

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| `Element`

Returns the first following sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/nextElementSibling)

#### Inherited from

window.HTMLElement.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16352

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| `ChildNode`

Returns the next sibling.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)

#### Inherited from

window.HTMLElement.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16102

___

### node

• `Private` **node**: ``null`` \| [`TreeNode`](TreeNode.md) = `null`

The TreeNode instance for this component to make sure the two can properly communicate.

#### Defined in

[packages/lander/src/tree/component.ts:82](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L82)

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeName)

#### Inherited from

window.HTMLElement.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16108

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeType)

#### Inherited from

window.HTMLElement.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16114

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/nodeValue)

#### Inherited from

window.HTMLElement.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16116

___

### nonce

• `Optional` **nonce**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/nonce)

#### Inherited from

window.HTMLElement.nonce

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12047

___

### offsetHeight

• `Readonly` **offsetHeight**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetHeight)

#### Inherited from

window.HTMLElement.offsetHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10068

___

### offsetLeft

• `Readonly` **offsetLeft**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetLeft)

#### Inherited from

window.HTMLElement.offsetLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10070

___

### offsetParent

• `Readonly` **offsetParent**: ``null`` \| `Element`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetParent)

#### Inherited from

window.HTMLElement.offsetParent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10072

___

### offsetTop

• `Readonly` **offsetTop**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetTop)

#### Inherited from

window.HTMLElement.offsetTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10074

___

### offsetWidth

• `Readonly` **offsetWidth**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/offsetWidth)

#### Inherited from

window.HTMLElement.offsetWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10076

___

### onabort

• **onabort**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `UIEvent`) => `any`

Fires when the user aborts the download.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

#### Inherited from

window.HTMLElement.onabort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8946

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)

#### Inherited from

window.HTMLElement.onanimationcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8948

___

### onanimationend

• **onanimationend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

window.HTMLElement.onanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8950

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

window.HTMLElement.onanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8952

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `AnimationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

window.HTMLElement.onanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8954

___

### onauxclick

• **onauxclick**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)

#### Inherited from

window.HTMLElement.onauxclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8956

___

### onbeforeinput

• **onbeforeinput**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `InputEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforeinput_event)

#### Inherited from

window.HTMLElement.onbeforeinput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8958

___

### onblur

• **onblur**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `FocusEvent`) => `any`

Fires when the object loses the input focus.

**`Param`**

The focus event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)

#### Inherited from

window.HTMLElement.onblur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8965

___

### oncancel

• **oncancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)

#### Inherited from

window.HTMLElement.oncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8967

___

### oncanplay

• **oncanplay**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when playback is possible, but would require further buffering.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)

#### Inherited from

window.HTMLElement.oncanplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8974

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)

#### Inherited from

window.HTMLElement.oncanplaythrough

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8976

___

### onchange

• **onchange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Fires when the contents of the object or selection have changed.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)

#### Inherited from

window.HTMLElement.onchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8983

___

### onclick

• **onclick**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user clicks the left mouse button on the object

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)

#### Inherited from

window.HTMLElement.onclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8990

___

### onclose

• **onclose**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)

#### Inherited from

window.HTMLElement.onclose

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8992

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)

#### Inherited from

window.HTMLElement.oncontextmenu

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8999

___

### oncopy

• **oncopy**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `ClipboardEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)

#### Inherited from

window.HTMLElement.oncopy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9001

___

### oncuechange

• **oncuechange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)

#### Inherited from

window.HTMLElement.oncuechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9003

___

### oncut

• **oncut**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `ClipboardEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)

#### Inherited from

window.HTMLElement.oncut

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9005

___

### ondblclick

• **ondblclick**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user double-clicks the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)

#### Inherited from

window.HTMLElement.ondblclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9012

___

### ondrag

• **ondrag**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the source object continuously during a drag operation.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)

#### Inherited from

window.HTMLElement.ondrag

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9019

___

### ondragend

• **ondragend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)

#### Inherited from

window.HTMLElement.ondragend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9026

___

### ondragenter

• **ondragenter**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`Param`**

The drag event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)

#### Inherited from

window.HTMLElement.ondragenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9033

___

### ondragleave

• **ondragleave**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`Param`**

The drag event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)

#### Inherited from

window.HTMLElement.ondragleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9040

___

### ondragover

• **ondragover**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)

#### Inherited from

window.HTMLElement.ondragover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9047

___

### ondragstart

• **ondragstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)

#### Inherited from

window.HTMLElement.ondragstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9054

___

### ondrop

• **ondrop**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `DragEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)

#### Inherited from

window.HTMLElement.ondrop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9056

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the duration attribute is updated.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)

#### Inherited from

window.HTMLElement.ondurationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9063

___

### onemptied

• **onemptied**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the media element is reset to its initial state.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)

#### Inherited from

window.HTMLElement.onemptied

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9070

___

### onended

• **onended**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the end of playback is reached.

**`Param`**

The event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)

#### Inherited from

window.HTMLElement.onended

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9077

___

### onerror

• **onerror**: `OnErrorEventHandler`

Fires when an error occurs during object loading.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)

#### Inherited from

window.HTMLElement.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9084

___

### onfocus

• **onfocus**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `FocusEvent`) => `any`

Fires when the object receives focus.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)

#### Inherited from

window.HTMLElement.onfocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9091

___

### onformdata

• **onformdata**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `FormDataEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)

#### Inherited from

window.HTMLElement.onformdata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9093

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`this`: `Element`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenchange_event)

#### Inherited from

window.HTMLElement.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7638

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`this`: `Element`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/fullscreenerror_event)

#### Inherited from

window.HTMLElement.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7640

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

#### Inherited from

window.HTMLElement.ongotpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9095

___

### oninput

• **oninput**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/input_event)

#### Inherited from

window.HTMLElement.oninput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9097

___

### oninvalid

• **oninvalid**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)

#### Inherited from

window.HTMLElement.oninvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9099

___

### onkeydown

• **onkeydown**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `KeyboardEvent`) => `any`

Fires when the user presses a key.

**`Param`**

The keyboard event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)

#### Inherited from

window.HTMLElement.onkeydown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9106

___

### onkeypress

• **onkeypress**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `KeyboardEvent`) => `any`

Fires when the user presses an alphanumeric key.

**`Param`**

The event.

**`Deprecated`**

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)

#### Inherited from

window.HTMLElement.onkeypress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9114

___

### onkeyup

• **onkeyup**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `KeyboardEvent`) => `any`

Fires when the user releases a key.

**`Param`**

The keyboard event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)

#### Inherited from

window.HTMLElement.onkeyup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9121

___

### onload

• **onload**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Fires immediately after the browser loads the object.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)

#### Inherited from

window.HTMLElement.onload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9128

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when media data is loaded at the current playback position.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)

#### Inherited from

window.HTMLElement.onloadeddata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9135

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)

#### Inherited from

window.HTMLElement.onloadedmetadata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9142

___

### onloadstart

• **onloadstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when Internet Explorer begins looking for media data.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)

#### Inherited from

window.HTMLElement.onloadstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9149

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/lostpointercapture_event)

#### Inherited from

window.HTMLElement.onlostpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9151

___

### onmousedown

• **onmousedown**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user clicks the object with either mouse button.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)

#### Inherited from

window.HTMLElement.onmousedown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9158

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)

#### Inherited from

window.HTMLElement.onmouseenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9160

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)

#### Inherited from

window.HTMLElement.onmouseleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9162

___

### onmousemove

• **onmousemove**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse over the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)

#### Inherited from

window.HTMLElement.onmousemove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9169

___

### onmouseout

• **onmouseout**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)

#### Inherited from

window.HTMLElement.onmouseout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9176

___

### onmouseover

• **onmouseover**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user moves the mouse pointer into the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)

#### Inherited from

window.HTMLElement.onmouseover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9183

___

### onmouseup

• **onmouseup**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `MouseEvent`) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`Param`**

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)

#### Inherited from

window.HTMLElement.onmouseup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9190

___

### onpaste

• **onpaste**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `ClipboardEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)

#### Inherited from

window.HTMLElement.onpaste

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9192

___

### onpause

• **onpause**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when playback is paused.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)

#### Inherited from

window.HTMLElement.onpause

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9199

___

### onplay

• **onplay**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the play method is requested.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)

#### Inherited from

window.HTMLElement.onplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9206

___

### onplaying

• **onplaying**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the audio or video has started playing.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)

#### Inherited from

window.HTMLElement.onplaying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9213

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)

#### Inherited from

window.HTMLElement.onpointercancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9215

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)

#### Inherited from

window.HTMLElement.onpointerdown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9217

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)

#### Inherited from

window.HTMLElement.onpointerenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9219

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)

#### Inherited from

window.HTMLElement.onpointerleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9221

___

### onpointermove

• **onpointermove**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)

#### Inherited from

window.HTMLElement.onpointermove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9223

___

### onpointerout

• **onpointerout**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)

#### Inherited from

window.HTMLElement.onpointerout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9225

___

### onpointerover

• **onpointerover**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)

#### Inherited from

window.HTMLElement.onpointerover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9227

___

### onpointerup

• **onpointerup**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `PointerEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)

#### Inherited from

window.HTMLElement.onpointerup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9229

___

### onprogress

• **onprogress**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `ProgressEvent`<`EventTarget`\>) => `any`

Occurs to indicate progress while downloading media data.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)

#### Inherited from

window.HTMLElement.onprogress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9236

___

### onratechange

• **onratechange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the playback rate is increased or decreased.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)

#### Inherited from

window.HTMLElement.onratechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9243

___

### onreset

• **onreset**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Fires when the user resets a form.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)

#### Inherited from

window.HTMLElement.onreset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9250

___

### onresize

• **onresize**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `UIEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)

#### Inherited from

window.HTMLElement.onresize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9252

___

### onscroll

• **onscroll**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)

#### Inherited from

window.HTMLElement.onscroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9259

___

### onscrollend

• **onscrollend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

#### Inherited from

window.HTMLElement.onscrollend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9261

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `SecurityPolicyViolationEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)

#### Inherited from

window.HTMLElement.onsecuritypolicyviolation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9263

___

### onseeked

• **onseeked**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the seek operation ends.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)

#### Inherited from

window.HTMLElement.onseeked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9270

___

### onseeking

• **onseeking**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the current playback position is moved.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)

#### Inherited from

window.HTMLElement.onseeking

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9277

___

### onselect

• **onselect**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Fires when the current selection changes.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)

#### Inherited from

window.HTMLElement.onselect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9284

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)

#### Inherited from

window.HTMLElement.onselectionchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9286

___

### onselectstart

• **onselectstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)

#### Inherited from

window.HTMLElement.onselectstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9288

___

### onslotchange

• **onslotchange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)

#### Inherited from

window.HTMLElement.onslotchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9290

___

### onstalled

• **onstalled**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the download has stopped.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)

#### Inherited from

window.HTMLElement.onstalled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9297

___

### onsubmit

• **onsubmit**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `SubmitEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)

#### Inherited from

window.HTMLElement.onsubmit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9299

___

### onsuspend

• **onsuspend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs if the load operation has been intentionally halted.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)

#### Inherited from

window.HTMLElement.onsuspend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9306

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs to indicate the current playback position.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)

#### Inherited from

window.HTMLElement.ontimeupdate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9313

___

### ontoggle

• **ontoggle**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event)

#### Inherited from

window.HTMLElement.ontoggle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9315

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)

#### Inherited from

window.HTMLElement.ontouchcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9317

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)

#### Inherited from

window.HTMLElement.ontouchend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9319

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)

#### Inherited from

window.HTMLElement.ontouchmove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9321

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TouchEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)

#### Inherited from

window.HTMLElement.ontouchstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9323

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)

#### Inherited from

window.HTMLElement.ontransitioncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9325

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

window.HTMLElement.ontransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9327

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)

#### Inherited from

window.HTMLElement.ontransitionrun

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9329

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `TransitionEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)

#### Inherited from

window.HTMLElement.ontransitionstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9331

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)

#### Inherited from

window.HTMLElement.onvolumechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9338

___

### onwaiting

• **onwaiting**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`Param`**

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)

#### Inherited from

window.HTMLElement.onwaiting

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9345

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

**`Deprecated`**

This is a legacy alias of `onanimationend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

window.HTMLElement.onwebkitanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9351

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

**`Deprecated`**

This is a legacy alias of `onanimationiteration`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

window.HTMLElement.onwebkitanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9357

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

**`Deprecated`**

This is a legacy alias of `onanimationstart`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

window.HTMLElement.onwebkitanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9363

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `Event`) => `any`

**`Deprecated`**

This is a legacy alias of `ontransitionend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

window.HTMLElement.onwebkittransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9369

___

### onwheel

• **onwheel**: ``null`` \| (`this`: `GlobalEventHandlers`, `ev`: `WheelEvent`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)

#### Inherited from

window.HTMLElement.onwheel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9371

___

### outerHTML

• **outerHTML**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/outerHTML)

#### Inherited from

window.HTMLElement.outerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7642

___

### outerText

• **outerText**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/outerText)

#### Inherited from

window.HTMLElement.outerText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10078

___

### ownerDocument

• `Readonly` **ownerDocument**: `Document`

#### Inherited from

window.HTMLElement.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7643

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| `HTMLElement`

Returns the parent element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentElement)

#### Inherited from

window.HTMLElement.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16128

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| `ParentNode`

Returns the parent.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/parentNode)

#### Inherited from

window.HTMLElement.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16134

___

### part

• `Readonly` **part**: `DOMTokenList`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/part)

#### Inherited from

window.HTMLElement.part

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7645

___

### popover

• **popover**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/popover)

#### Inherited from

window.HTMLElement.popover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10080

___

### prefix

• `Readonly` **prefix**: ``null`` \| `string`

Returns the namespace prefix.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/prefix)

#### Inherited from

window.HTMLElement.prefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7651

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| `Element`

Returns the first preceding sibling that is an element, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/previousElementSibling)

#### Inherited from

window.HTMLElement.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16358

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| `ChildNode`

Returns the previous sibling.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/previousSibling)

#### Inherited from

window.HTMLElement.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16140

___

### props

• `Private` **props**: [`JSXProps`](../interfaces/JSXProps.md) = `{}`

Stores the properties of the component given as attributes when the `createNode` function is called.

#### Defined in

[packages/lander/src/tree/component.ts:35](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L35)

___

### role

• **role**: ``null`` \| `string`

#### Inherited from

window.HTMLElement.role

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2279

___

### scrollHeight

• `Readonly` **scrollHeight**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollHeight)

#### Inherited from

window.HTMLElement.scrollHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7653

___

### scrollLeft

• **scrollLeft**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollLeft)

#### Inherited from

window.HTMLElement.scrollLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7655

___

### scrollTop

• **scrollTop**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTop)

#### Inherited from

window.HTMLElement.scrollTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7657

___

### scrollWidth

• `Readonly` **scrollWidth**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollWidth)

#### Inherited from

window.HTMLElement.scrollWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7659

___

### shadowRoot

• `Readonly` **shadowRoot**: ``null`` \| `ShadowRoot`

Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/shadowRoot)

#### Inherited from

window.HTMLElement.shadowRoot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7665

___

### slot

• **slot**: `string`

Returns the value of element's slot content attribute. Can be set to change it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/slot)

#### Inherited from

window.HTMLElement.slot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7671

___

### spellcheck

• **spellcheck**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/spellcheck)

#### Inherited from

window.HTMLElement.spellcheck

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10082

___

### style

• `Readonly` **style**: `CSSStyleDeclaration`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/style)

#### Inherited from

window.HTMLElement.style

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7855

___

### tabIndex

• **tabIndex**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/tabIndex)

#### Inherited from

window.HTMLElement.tabIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12049

___

### tagName

• `Readonly` **tagName**: `string`

Returns the HTML-uppercased qualified name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/tagName)

#### Inherited from

window.HTMLElement.tagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7677

___

### textContent

• **textContent**: ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/textContent)

#### Inherited from

window.HTMLElement.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16142

___

### title

• **title**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/title)

#### Inherited from

window.HTMLElement.title

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### translate

• **translate**: `boolean`

#### Inherited from

window.HTMLElement.translate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10085

___

### tree

• `Private` **tree**: ``null`` \| [`VirtualNode`](../modules.md#virtualnode) = `null`

The tree mounted on this component. When the component updates, this tree is updated in place.

#### Defined in

[packages/lander/src/tree/component.ts:76](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L76)

___

### updateFrameId

• `Private` **updateFrameId**: ``null`` \| `number` = `null`

Saves the animation frame ID where the component expects to be updated. If null, then we are not updating.
Otherwise, we should cancel the last update and trigger a new one if not null.

#### Defined in

[packages/lander/src/tree/component.ts:89](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L89)

___

### virtualChild

• `Private` **virtualChild**: [`VirtualNode`](../modules.md#virtualnode)[] = `[]`

Stores the virtual children that are to be passed to the factory when rendering.

#### Defined in

[packages/lander/src/tree/component.ts:41](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L41)

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: `HTMLElement`, `ev`: `HTMLElementEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10096

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `AddEventListenerOptions` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### after

▸ **after**(`...nodes`): `void`

Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/after)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

window.HTMLElement.after

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5597

___

### animate

▸ **animate**(`keyframes`, `options?`): `Animation`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animate)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | ``null`` \| `PropertyIndexedKeyframes` \| `Keyframe`[] |
| `options?` | `number` \| `KeyframeAnimationOptions` |

#### Returns

`Animation`

#### Inherited from

window.HTMLElement.animate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2429

___

### append

▸ **append**(`...nodes`): `void`

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/append)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

window.HTMLElement.append

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16787

___

### appendChild

▸ **appendChild**<`T`\>(`node`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/appendChild)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Inherited from

window.HTMLElement.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16144

___

### attachInternals

▸ **attachInternals**(): `ElementInternals`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/attachInternals)

#### Returns

`ElementInternals`

#### Inherited from

window.HTMLElement.attachInternals

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### attachShadow

▸ **attachShadow**(`init`): `ShadowRoot`

Creates a shadow root for element and returns it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/attachShadow)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `ShadowRootInit` |

#### Returns

`ShadowRoot`

#### Inherited from

window.HTMLElement.attachShadow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7683

___

### before

▸ **before**(`...nodes`): `void`

Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/before)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

window.HTMLElement.before

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5605

___

### blur

▸ **blur**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/blur)

#### Returns

`void`

#### Inherited from

window.HTMLElement.blur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12051

___

### checkVisibility

▸ **checkVisibility**(`options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `CheckVisibilityOptions` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.checkVisibility

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7684

___

### click

▸ **click**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/click)

#### Returns

`void`

#### Inherited from

window.HTMLElement.click

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### cloneNode

▸ **cloneNode**(`deep?`): `Node`

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/cloneNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

`Node`

#### Inherited from

window.HTMLElement.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16150

___

### closest

▸ **closest**<`K`\>(`selector`): ``null`` \| `HTMLElementTagNameMap`[`K`]

Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/closest)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| `HTMLElementTagNameMap`[`K`]

#### Inherited from

window.HTMLElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7690

▸ **closest**<`K`\>(`selector`): ``null`` \| `SVGElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| `SVGElementTagNameMap`[`K`]

#### Inherited from

window.HTMLElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7691

▸ **closest**<`K`\>(`selector`): ``null`` \| `MathMLElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| `MathMLElementTagNameMap`[`K`]

#### Inherited from

window.HTMLElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7692

▸ **closest**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Inherited from

window.HTMLElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7693

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `Node` |

#### Returns

`number`

#### Inherited from

window.HTMLElement.compareDocumentPosition

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16156

___

### computedStyleMap

▸ **computedStyleMap**(): `StylePropertyMapReadOnly`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/computedStyleMap)

#### Returns

`StylePropertyMapReadOnly`

#### Inherited from

window.HTMLElement.computedStyleMap

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7695

___

### connectedCallback

▸ **connectedCallback**(): `void`

The lifecycle method called by the DOM. Will use the fact that the node has been added to the DOM to
mount the content of the factory.

#### Returns

`void`

#### Defined in

[packages/lander/src/tree/component.ts:114](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L114)

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/contains)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| `Node` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16162

___

### disconnectedCallback

▸ **disconnectedCallback**(): `void`

The lifecycle method called by the DOM with the component is disconnected from it.

#### Returns

`void`

#### Defined in

[packages/lander/src/tree/component.ts:121](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L121)

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8215

___

### focus

▸ **focus**(`options?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/focus)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FocusOptions` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.focus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12053

___

### getAnimations

▸ **getAnimations**(`options?`): `Animation`[]

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAnimations)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `GetAnimationsOptions` |

#### Returns

`Animation`[]

#### Inherited from

window.HTMLElement.getAnimations

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2431

___

### getAttribute

▸ **getAttribute**(`qualifiedName`): ``null`` \| `string`

Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| `string`

#### Inherited from

window.HTMLElement.getAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7701

___

### getAttributeNS

▸ **getAttributeNS**(`namespace`, `localName`): ``null`` \| `string`

Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| `string`

#### Inherited from

window.HTMLElement.getAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7707

___

### getAttributeNames

▸ **getAttributeNames**(): `string`[]

Returns the qualified names of all element's attributes. Can contain duplicates.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNames)

#### Returns

`string`[]

#### Inherited from

window.HTMLElement.getAttributeNames

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7713

___

### getAttributeNode

▸ **getAttributeNode**(`qualifiedName`): ``null`` \| `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| `Attr`

#### Inherited from

window.HTMLElement.getAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7715

___

### getAttributeNodeNS

▸ **getAttributeNodeNS**(`namespace`, `localName`): ``null`` \| `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNodeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| `Attr`

#### Inherited from

window.HTMLElement.getAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7717

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): `DOMRect`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getBoundingClientRect)

#### Returns

`DOMRect`

#### Inherited from

window.HTMLElement.getBoundingClientRect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7719

___

### getClientRects

▸ **getClientRects**(): `DOMRectList`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getClientRects)

#### Returns

`DOMRectList`

#### Inherited from

window.HTMLElement.getClientRects

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7721

___

### getElementsByClassName

▸ **getElementsByClassName**(`classNames`): `HTMLCollectionOf`<`Element`\>

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByClassName)

#### Parameters

| Name | Type |
| :------ | :------ |
| `classNames` | `string` |

#### Returns

`HTMLCollectionOf`<`Element`\>

#### Inherited from

window.HTMLElement.getElementsByClassName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7727

___

### getElementsByTagName

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<`HTMLElementTagNameMap`[`K`]\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagName)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<`HTMLElementTagNameMap`[`K`]\>

#### Inherited from

window.HTMLElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7729

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<`SVGElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<`SVGElementTagNameMap`[`K`]\>

#### Inherited from

window.HTMLElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7730

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<`MathMLElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<`MathMLElementTagNameMap`[`K`]\>

#### Inherited from

window.HTMLElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7731

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): `HTMLCollectionOf`<`HTMLElementDeprecatedTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

`HTMLCollectionOf`<`HTMLElementDeprecatedTagNameMap`[`K`]\>

**`Deprecated`**

#### Inherited from

window.HTMLElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7733

▸ **getElementsByTagName**(`qualifiedName`): `HTMLCollectionOf`<`Element`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`HTMLCollectionOf`<`Element`\>

#### Inherited from

window.HTMLElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7734

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<`HTMLElement`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagNameNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<`HTMLElement`\>

#### Inherited from

window.HTMLElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7736

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<`SVGElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<`SVGElement`\>

#### Inherited from

window.HTMLElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7737

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): `HTMLCollectionOf`<`MathMLElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1998/Math/MathML"`` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<`MathMLElement`\>

#### Inherited from

window.HTMLElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7738

▸ **getElementsByTagNameNS**(`namespace`, `localName`): `HTMLCollectionOf`<`Element`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`HTMLCollectionOf`<`Element`\>

#### Inherited from

window.HTMLElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7739

___

### getFactory

▸ **getFactory**(): ``null`` \| [`JSXFunctionComponent`](../modules.md#jsxfunctioncomponent)

Returns the factory saved inside this component.

#### Returns

``null`` \| [`JSXFunctionComponent`](../modules.md#jsxfunctioncomponent)

#### Defined in

[packages/lander/src/tree/component.ts:250](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L250)

___

### getRootNode

▸ **getRootNode**(`options?`): `Node`

Returns node's root.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `GetRootNodeOptions` |

#### Returns

`Node`

#### Inherited from

window.HTMLElement.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16168

___

### hasAttribute

▸ **hasAttribute**(`qualifiedName`): `boolean`

Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.hasAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7745

___

### hasAttributeNS

▸ **hasAttributeNS**(`namespace`, `localName`): `boolean`

Returns true if element has an attribute whose namespace is namespace and local name is localName.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.hasAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7751

___

### hasAttributes

▸ **hasAttributes**(): `boolean`

Returns true if element has attributes, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasAttributes)

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.hasAttributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7757

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/hasChildNodes)

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16174

___

### hasPointerCapture

▸ **hasPointerCapture**(`pointerId`): `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/hasPointerCapture)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.hasPointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7759

___

### hidePopover

▸ **hidePopover**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidePopover)

#### Returns

`void`

#### Inherited from

window.HTMLElement.hidePopover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### injectContext

▸ **injectContext**(`contextInjector`): [`JSXContext`](../interfaces/JSXContext.md)

Method associated to the context object that allows injecting data during mount and accessing
it during subsequent renders

#### Parameters

| Name | Type |
| :------ | :------ |
| `contextInjector` | {} \| (`context`: [`JSXContext`](../interfaces/JSXContext.md), `listeners`: [`LifecycleListenersSetters`](../interfaces/LifecycleListenersSetters.md)) => [`JSXContext`](../interfaces/JSXContext.md) |

#### Returns

[`JSXContext`](../interfaces/JSXContext.md)

#### Defined in

[packages/lander/src/tree/component.ts:130](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L130)

___

### insertAdjacentElement

▸ **insertAdjacentElement**(`where`, `element`): ``null`` \| `Element`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentElement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | `InsertPosition` |
| `element` | `Element` |

#### Returns

``null`` \| `Element`

#### Inherited from

window.HTMLElement.insertAdjacentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7761

___

### insertAdjacentHTML

▸ **insertAdjacentHTML**(`position`, `text`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentHTML)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `InsertPosition` |
| `text` | `string` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.insertAdjacentHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7763

___

### insertAdjacentText

▸ **insertAdjacentText**(`where`, `data`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentText)

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | `InsertPosition` |
| `data` | `string` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.insertAdjacentText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7765

___

### insertBefore

▸ **insertBefore**<`T`\>(`node`, `child`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/insertBefore)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | ``null`` \| `Node` |

#### Returns

`T`

#### Inherited from

window.HTMLElement.insertBefore

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16176

___

### isDefaultNamespace

▸ **isDefaultNamespace**(`namespace`): `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isDefaultNamespace)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.isDefaultNamespace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16178

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isEqualNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| `Node` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.isEqualNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16184

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/isSameNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| `Node` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.isSameNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16186

___

### listen

▸ **listen**(`hook`, `listener`): `void`

Function that sets a specific lifecycle hook listener. Will do nothing if the lifecycle hook
is unknown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hook` | keyof [`LifecycleListeners`](../interfaces/LifecycleListeners.md) | Hook to listen to. |
| `listener` | (`context`: [`JSXContext`](../interfaces/JSXContext.md)) => `void` | Listener function to set for the given hook. |

#### Returns

`void`

**`See`**

lifecycleListeners

#### Defined in

[packages/lander/src/tree/component.ts:166](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L166)

___

### lookupNamespaceURI

▸ **lookupNamespaceURI**(`prefix`): ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupNamespaceURI)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

window.HTMLElement.lookupNamespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16188

___

### lookupPrefix

▸ **lookupPrefix**(`namespace`): ``null`` \| `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/lookupPrefix)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

window.HTMLElement.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16190

___

### matches

▸ **matches**(`selectors`): `boolean`

Returns true if matching selectors against element's root yields element, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.matches

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7771

___

### mount

▸ **mount**(): `void`

Mount method that is triggered when the component is mounted to the DOM. Will render the tree for the first time
and diff it against the empty DOM.

#### Returns

`void`

#### Defined in

[packages/lander/src/tree/component.ts:176](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L176)

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/normalize)

#### Returns

`void`

#### Inherited from

window.HTMLElement.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16196

___

### prepend

▸ **prepend**(`...nodes`): `void`

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/prepend)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

window.HTMLElement.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16795

___

### querySelector

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| `HTMLElementTagNameMap`[`K`]

Returns the first element that is a descendant of node that matches selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelector)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| `HTMLElementTagNameMap`[`K`]

#### Inherited from

window.HTMLElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16801

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| `SVGElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| `SVGElementTagNameMap`[`K`]

#### Inherited from

window.HTMLElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16802

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| `MathMLElementTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| `MathMLElementTagNameMap`[`K`]

#### Inherited from

window.HTMLElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16803

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| `HTMLElementDeprecatedTagNameMap`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| `HTMLElementDeprecatedTagNameMap`[`K`]

**`Deprecated`**

#### Inherited from

window.HTMLElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16805

▸ **querySelector**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Inherited from

window.HTMLElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16806

___

### querySelectorAll

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<`HTMLElementTagNameMap`[`K`]\>

Returns all element descendants of node that match selectors.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/querySelectorAll)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<`HTMLElementTagNameMap`[`K`]\>

#### Inherited from

window.HTMLElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16812

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<`SVGElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SVGElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<`SVGElementTagNameMap`[`K`]\>

#### Inherited from

window.HTMLElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16813

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<`MathMLElementTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `MathMLElementTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<`MathMLElementTagNameMap`[`K`]\>

#### Inherited from

window.HTMLElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16814

▸ **querySelectorAll**<`K`\>(`selectors`): `NodeListOf`<`HTMLElementDeprecatedTagNameMap`[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementDeprecatedTagNameMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

`NodeListOf`<`HTMLElementDeprecatedTagNameMap`[`K`]\>

**`Deprecated`**

#### Inherited from

window.HTMLElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16816

▸ **querySelectorAll**<`E`\>(`selectors`): `NodeListOf`<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends `Element` = `Element` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`NodeListOf`<`E`\>

#### Inherited from

window.HTMLElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16817

___

### releasePointerCapture

▸ **releasePointerCapture**(`pointerId`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/releasePointerCapture)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.releasePointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7773

___

### remove

▸ **remove**(): `void`

Removes node.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/remove)

#### Returns

`void`

#### Inherited from

window.HTMLElement.remove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5611

___

### removeAttribute

▸ **removeAttribute**(`qualifiedName`): `void`

Removes element's first attribute whose qualified name is qualifiedName.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.removeAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7779

___

### removeAttributeNS

▸ **removeAttributeNS**(`namespace`, `localName`): `void`

Removes element's attribute whose namespace is namespace and local name is localName.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.removeAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7785

___

### removeAttributeNode

▸ **removeAttributeNode**(`attr`): `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/removeAttributeNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `Attr` |

#### Returns

`Attr`

#### Inherited from

window.HTMLElement.removeAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7787

___

### removeChild

▸ **removeChild**<`T`\>(`child`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/removeChild)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

window.HTMLElement.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16198

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: `HTMLElement`, `ev`: `HTMLElementEventMap`[`K`]) => `any` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10098

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| `EventListenerOptions` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### render

▸ `Private` **render**(): ``null`` \| [`VirtualNode`](../modules.md#virtualnode)

Render method used to render the factory using the component's state and properties.

#### Returns

``null`` \| [`VirtualNode`](../modules.md#virtualnode)

Returns the rendered factory.

#### Defined in

[packages/lander/src/tree/component.ts:229](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L229)

___

### replaceChild

▸ **replaceChild**<`T`\>(`node`, `child`): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/replaceChild)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

window.HTMLElement.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16200

___

### replaceChildren

▸ **replaceChildren**(`...nodes`): `void`

Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/replaceChildren)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

window.HTMLElement.replaceChildren

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16825

___

### replaceWith

▸ **replaceWith**(`...nodes`): `void`

Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/CharacterData/replaceWith)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| `Node`)[] |

#### Returns

`void`

#### Inherited from

window.HTMLElement.replaceWith

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5619

___

### requestFullscreen

▸ **requestFullscreen**(`options?`): `Promise`<`void`\>

Displays element fullscreen and resolves promise when done.

When supplied, options's navigationUI member indicates whether showing navigation UI while in fullscreen is preferred or not. If set to "show", navigation simplicity is preferred over screen space, and if set to "hide", more screen space is preferred. User agents are always free to honor user preference over the application's. The default value "auto" indicates no application preference.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestFullscreen)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FullscreenOptions` |

#### Returns

`Promise`<`void`\>

#### Inherited from

window.HTMLElement.requestFullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7795

___

### requestPointerLock

▸ **requestPointerLock**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/requestPointerLock)

#### Returns

`void`

#### Inherited from

window.HTMLElement.requestPointerLock

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7797

___

### requestUpdate

▸ **requestUpdate**(): `void`

Requests and update on the component that will trigger and update if the component is still mounted.

#### Returns

`void`

#### Defined in

[packages/lander/src/tree/component.ts:193](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L193)

___

### scroll

▸ **scroll**(`options?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scroll)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7799

▸ **scroll**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7800

___

### scrollBy

▸ **scrollBy**(`options?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollBy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7802

▸ **scrollBy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7803

___

### scrollIntoView

▸ **scrollIntoView**(`arg?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `boolean` \| `ScrollIntoViewOptions` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.scrollIntoView

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7805

___

### scrollTo

▸ **scrollTo**(`options?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/scrollTo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ScrollToOptions` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7807

▸ **scrollTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7808

___

### setAll

▸ **setAll**(`factory`, `props`, `virtualChild`, `node`): `void`

Update the values of the DOM component from the values passed in parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`JSXFunctionComponent`](../modules.md#jsxfunctioncomponent) | Function to render the component. |
| `props` | [`JSXProps`](../interfaces/JSXProps.md) | Properties to give to the factory. |
| `virtualChild` | ``null`` \| [`VirtualNode`](../modules.md#virtualnode)[] | Child to give to the factory. |
| `node` | [`TreeNode`](TreeNode.md) | Underlying virtual node backing the DOM node. |

#### Returns

`void`

#### Defined in

[packages/lander/src/tree/component.ts:98](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L98)

___

### setAttribute

▸ **setAttribute**(`qualifiedName`, `value`): `void`

Sets the value of element's first attribute whose qualified name is qualifiedName to value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.setAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7814

___

### setAttributeNS

▸ **setAttributeNS**(`namespace`, `qualifiedName`, `value`): `void`

Sets the value of element's attribute whose namespace is namespace and local name is localName to value.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.setAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7820

___

### setAttributeNode

▸ **setAttributeNode**(`attr`): ``null`` \| `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `Attr` |

#### Returns

``null`` \| `Attr`

#### Inherited from

window.HTMLElement.setAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7822

___

### setAttributeNodeNS

▸ **setAttributeNodeNS**(`attr`): ``null`` \| `Attr`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNodeNS)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `Attr` |

#### Returns

``null`` \| `Attr`

#### Inherited from

window.HTMLElement.setAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7824

___

### setPointerCapture

▸ **setPointerCapture**(`pointerId`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/setPointerCapture)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.setPointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7826

___

### showPopover

▸ **showPopover**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/showPopover)

#### Returns

`void`

#### Inherited from

window.HTMLElement.showPopover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### toggleAttribute

▸ **toggleAttribute**(`qualifiedName`, `force?`): `boolean`

If force is not given, "toggles" qualifiedName, removing it if it is present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.

Returns true if qualifiedName is now present, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/toggleAttribute)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `force?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

window.HTMLElement.toggleAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7834

___

### togglePopover

▸ **togglePopover**(`force?`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/togglePopover)

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

window.HTMLElement.togglePopover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### update

▸ **update**(): `void`

Update method that will trigger a new render of this virtual tree and execute the diffing algorithm.

#### Returns

`void`

#### Defined in

[packages/lander/src/tree/component.ts:208](https://github.com/Minivera/lander/blob/a051bab/packages/lander/src/tree/component.ts#L208)

___

### webkitMatchesSelector

▸ **webkitMatchesSelector**(`selectors`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

**`Deprecated`**

This is a legacy alias of `matches`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/matches)

#### Inherited from

window.HTMLElement.webkitMatchesSelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7840
