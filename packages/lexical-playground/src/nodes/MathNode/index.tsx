/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type {MathfieldElement} from 'mathlive';

import {
  $createNodeSelection,
  $setSelection,
  DecoratorNode,
  DOMExportOutput,
  EditorConfig,
  isHTMLElement,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical';
import {createRef} from 'react';

import MathComponent from './MathComponent';

export type SerializedMathNode = Spread<
  {type: 'math'; value: string; style: string},
  SerializedLexicalNode
>;

export class MathNode extends DecoratorNode<JSX.Element> {
  __value: string;
  __style: string;
  __mathfieldRef = createRef<MathfieldElement>();

  static getType(): string {
    return 'math';
  }

  static clone(node: MathNode): MathNode {
    return new MathNode(node.__value, node.__style, node.__key);
  }

  constructor(value: string, style: string, key?: NodeKey) {
    super(key);
    this.__value = value;
    this.__style = style;
  }

  static importJSON(serializedNode: SerializedMathNode): MathNode {
    const node = $createMathNode(serializedNode.value, serializedNode.style);
    return node;
  }

  exportJSON(): SerializedMathNode {
    return {
      style: this.getStyle(),
      type: 'math',
      value: this.getValue(),
      version: 1,
    };
  }

  exportDOM(editor: LexicalEditor): DOMExportOutput {
    const {element} = super.exportDOM(editor);
    if (element && isHTMLElement(element)) {
      element.innerHTML = `<math-field>${this.getValue()}</math-field>`;
    }
    return {element};
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement('span');
    const style = this.__style;
    if (style !== '') {
      dom.style.cssText = style;
    }
    const className = config.theme.math;
    if (className !== undefined) {
      dom.className = className;
    }
    return dom;
  }

  updateDOM(prevNode: MathNode, dom: HTMLElement): boolean {
    const prevStyle = prevNode.__style;
    const nextStyle = this.__style;
    if (prevStyle !== nextStyle) {
      dom.style.cssText = nextStyle;
      dom.style.display = 'inline-flex';
      dom.style.maxWidth = '100%';
    }
    return false;
  }

  getMathfield(): MathfieldElement | null {
    return this.__mathfieldRef.current;
  }

  setMathfield(mathfield: MathfieldElement) {
    const writable = this.getWritable();
    writable.__mathfield = mathfield;
  }

  getValue(): string {
    return this.__value;
  }

  setValue(value: string): void {
    const writable = this.getWritable();
    writable.__value = value;
  }

  getStyle(): string {
    const self = this.getLatest();
    return self.__style;
  }

  setStyle(style: string): this {
    const self = this.getWritable();
    self.__style = style;
    return self;
  }

  select() {
    const nodeSelection = $createNodeSelection();
    nodeSelection.add(this.getKey());
    $setSelection(nodeSelection);
  }

  decorate(): JSX.Element {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <MathComponent
        initialValue={this.__value}
        nodeKey={this.__key}
        mathfieldRef={this.__mathfieldRef}
      />
    );
  }
}

export function $createMathNode(value = '', style = ''): MathNode {
  const mathNode = new MathNode(value, style);
  return mathNode;
}

export function $isMathNode(
  node: LexicalNode | null | undefined,
): node is MathNode {
  return node instanceof MathNode;
}
