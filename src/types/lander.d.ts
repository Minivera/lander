declare namespace Lander {
  export type NodeCreator = (tag: TagTypes, attributes: Attributes, ...children: Lander.ChildTypes[]) => Node;

  export type TextNodeTag = { text: string };

  export type TagTypes = string | FunctionNode | TextNodeTag;

  export type AttributeValue = string | number | boolean | object | EventListenerOrEventListenerObject;

  export type Attributes = {[n: string]: AttributeValue};

  export type ChildTypes = string | Node;

  export type FunctionNode = (attributes: Attributes, ...children: Lander.ChildTypes[]) => Node;
}
