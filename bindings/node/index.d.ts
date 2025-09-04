type BaseNode = {
  type: string;
  named: boolean;
};

type ChildNode = {
  multiple: boolean;
  required: boolean;
  types: BaseNode[];
};

type NodeInfo = BaseNode & {
  subtypes?: BaseNode[];
  childrenTypes?: Map<string, ChildNode[]>;
};

type Language = {
  name: string;
  language: unknown;
  nodeTypeInfo: NodeInfo[];
};

declare const language: Language;
export = language;