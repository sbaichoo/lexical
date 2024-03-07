/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {EditorThemeClasses} from 'lexical';

import './PlaygroundEditorThemeV1.css';

const theme: EditorThemeClasses = {
  blockCursor: 'PlaygroundEditorThemeV1__blockCursor',
  characterLimit: 'PlaygroundEditorThemeV1__characterLimit',
  code: 'PlaygroundEditorThemeV1__code',
  codeHighlight: {
    atrule: 'PlaygroundEditorThemeV1__tokenAttr',
    attr: 'PlaygroundEditorThemeV1__tokenAttr',
    boolean: 'PlaygroundEditorThemeV1__tokenProperty',
    builtin: 'PlaygroundEditorThemeV1__tokenSelector',
    cdata: 'PlaygroundEditorThemeV1__tokenComment',
    char: 'PlaygroundEditorThemeV1__tokenSelector',
    class: 'PlaygroundEditorThemeV1__tokenFunction',
    'class-name': 'PlaygroundEditorThemeV1__tokenFunction',
    comment: 'PlaygroundEditorThemeV1__tokenComment',
    constant: 'PlaygroundEditorThemeV1__tokenProperty',
    deleted: 'PlaygroundEditorThemeV1__tokenProperty',
    doctype: 'PlaygroundEditorThemeV1__tokenComment',
    entity: 'PlaygroundEditorThemeV1__tokenOperator',
    function: 'PlaygroundEditorThemeV1__tokenFunction',
    important: 'PlaygroundEditorThemeV1__tokenVariable',
    inserted: 'PlaygroundEditorThemeV1__tokenSelector',
    keyword: 'PlaygroundEditorThemeV1__tokenAttr',
    namespace: 'PlaygroundEditorThemeV1__tokenVariable',
    number: 'PlaygroundEditorThemeV1__tokenProperty',
    operator: 'PlaygroundEditorThemeV1__tokenOperator',
    prolog: 'PlaygroundEditorThemeV1__tokenComment',
    property: 'PlaygroundEditorThemeV1__tokenProperty',
    punctuation: 'PlaygroundEditorThemeV1__tokenPunctuation',
    regex: 'PlaygroundEditorThemeV1__tokenVariable',
    selector: 'PlaygroundEditorThemeV1__tokenSelector',
    string: 'PlaygroundEditorThemeV1__tokenSelector',
    symbol: 'PlaygroundEditorThemeV1__tokenProperty',
    tag: 'PlaygroundEditorThemeV1__tokenProperty',
    url: 'PlaygroundEditorThemeV1__tokenOperator',
    variable: 'PlaygroundEditorThemeV1__tokenVariable',
  },
  embedBlock: {
    base: 'PlaygroundEditorThemeV1__embedBlock',
    focus: 'PlaygroundEditorThemeV1__embedBlockFocus',
  },
  hashtag: 'PlaygroundEditorThemeV1__hashtag',
  heading: {
    h1: 'PlaygroundEditorThemeV1__h1',
    h2: 'PlaygroundEditorThemeV1__h2',
    h3: 'PlaygroundEditorThemeV1__h3',
    h4: 'PlaygroundEditorThemeV1__h4',
    h5: 'PlaygroundEditorThemeV1__h5',
    h6: 'PlaygroundEditorThemeV1__h6',
  },
  image: 'editor-image',
  indent: 'PlaygroundEditorThemeV1__indent',
  inlineImage: 'inline-editor-image',
  layoutContainer: 'PlaygroundEditorThemeV1__layoutContaner',
  layoutItem: 'PlaygroundEditorThemeV1__layoutItem',
  link: 'PlaygroundEditorThemeV1__link',
  list: {
    listitem: 'PlaygroundEditorThemeV1__listItem',
    listitemChecked: 'PlaygroundEditorThemeV1__listItemChecked',
    listitemUnchecked: 'PlaygroundEditorThemeV1__listItemUnchecked',
    nested: {
      listitem: 'PlaygroundEditorThemeV1__nestedListItem',
    },
    olDepth: [
      'PlaygroundEditorThemeV1__ol2',
      'PlaygroundEditorThemeV1__ol1',
      'PlaygroundEditorThemeV1__ol3',
      'PlaygroundEditorThemeV1__ol4',
      'PlaygroundEditorThemeV1__ol5',
    ],
    ul: 'PlaygroundEditorThemeV1__ul',
  },
  ltr: 'PlaygroundEditorThemeV1__ltr',
  mark: 'PlaygroundEditorThemeV1__mark',
  markOverlap: 'PlaygroundEditorThemeV1__markOverlap',
  paragraph: 'PlaygroundEditorThemeV1__paragraph',
  quote: 'PlaygroundEditorThemeV1__quote',
  rtl: 'PlaygroundEditorThemeV1__rtl',
  table: 'PlaygroundEditorThemeV1__table',
  tableAddColumns: 'PlaygroundEditorThemeV1__tableAddColumns',
  tableAddRows: 'PlaygroundEditorThemeV1__tableAddRows',
  tableCell: 'PlaygroundEditorThemeV1__tableCell',
  tableCellActionButton: 'PlaygroundEditorThemeV1__tableCellActionButton',
  tableCellActionButtonContainer:
    'PlaygroundEditorThemeV1__tableCellActionButtonContainer',
  tableCellEditing: 'PlaygroundEditorThemeV1__tableCellEditing',
  tableCellHeader: 'PlaygroundEditorThemeV1__tableCellHeader',
  tableCellPrimarySelected: 'PlaygroundEditorThemeV1__tableCellPrimarySelected',
  tableCellResizer: 'PlaygroundEditorThemeV1__tableCellResizer',
  tableCellSelected: 'PlaygroundEditorThemeV1__tableCellSelected',
  tableCellSortedIndicator: 'PlaygroundEditorThemeV1__tableCellSortedIndicator',
  tableResizeRuler: 'PlaygroundEditorThemeV1__tableCellResizeRuler',
  tableSelected: 'PlaygroundEditorThemeV1__tableSelected',
  tableSelection: 'PlaygroundEditorThemeV1__tableSelection',
  text: {
    bold: 'PlaygroundEditorThemeV1__textBold',
    code: 'PlaygroundEditorThemeV1__textCode',
    italic: 'PlaygroundEditorThemeV1__textItalic',
    strikethrough: 'PlaygroundEditorThemeV1__textStrikethrough',
    subscript: 'PlaygroundEditorThemeV1__textSubscript',
    superscript: 'PlaygroundEditorThemeV1__textSuperscript',
    underline: 'PlaygroundEditorThemeV1__textUnderline',
    underlineStrikethrough:
      'PlaygroundEditorThemeV1__textUnderlineStrikethrough',
  },
};

export default theme;
