/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {$generateHtmlFromNodes} from '@lexical/html';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import parse from 'html-react-parser';
import * as React from 'react';
import {MouseEventHandler, useState} from 'react';

import {EditorProps} from '../../Editor';

const someEditorState: string =
  '{"editorState":{"root":{"children":[{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":" ","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"A small mountain lake has aquatic plants growing under water on the lake bed. Shortly after heavy rainfall, the mud on the lake bed becomes stirred up and the water level rises.","type":"text","version":1}],"direction":"ltr","format":"justify","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"text","version":1}],"direction":null,"format":"left","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Why does this cause the rate of photosynthesis of these plants to fall?","type":"text","version":1}],"direction":"ltr","format":"justify","indent":0,"type":"paragraph","version":1},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"extra carbon dioxide","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"extra dissolved nitrates","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"lower light intensity","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":3},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"lower oxygen concentration","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":4}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":1,"tag":"ol"},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}},"lastSaved":1698570111836,"source":"Playground","version":"0.12.2"}';

function convertToLetter(number: number) {
  switch (Number(number)) {
    case 0:
      return 'A';
    case 1:
      return 'B';
    case 2:
      return 'C';
    case 3:
      return 'D';
    default:
      return 'Invalid input';
  }
}

function getRandomAngle() {
  return Math.floor(Math.random() * 81) + 40;
}

class ListAlphaItem extends React.Component<{
  activeElem: number;
  angle: number | -60;
  el: JSX.Element;
  onClick: MouseEventHandler<HTMLSpanElement>;
}> {
  render() {
    const anotherStyle = {
      cursor: 'pointer',
      display: 'inline-block',
    };
    const style = {
      '--angle': `${this.props.angle}px`,
      ...anotherStyle,
    } as React.CSSProperties;
    return (
      <span>
        <span
          className={
            this.props.activeElem === this.props.el.key
              ? 'PlaygroundEditorThemeV1__ol2__onClick'
              : ''
          }
          style={style}
          onClick={this.props.onClick}>
          {convertToLetter(this.props.el.key as number)}
        </span>
        {this.props.el.props.children}
      </span>
    );
  }
}

export default function HTMLGeneratorPlugin({
  editEnabled,
}: EditorProps): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  const [activeElem, setActive] = useState(0);
  const [angle, setAngle] = useState(60);

  const handle = (num: number) => {
    setActive(num);
    setAngle(getRandomAngle);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let htmlString = '';

  const json = JSON.parse(someEditorState);
  const editorState = editor.parseEditorState(JSON.stringify(json.editorState));

  // eslint-disable-next-line no-console
  console.log('editEnabled', editEnabled);

  // eslint-disable-next-line no-unused-expressions
  if (editEnabled) {
    // eslint-disable-next-line no-console
    console.log('state is set');
    editor.setEditorState(editorState);
  }

  let liText: JSX.Element[] = [];

  let htmlFromNodes = '';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  editorState.read(() => {
    htmlFromNodes = $generateHtmlFromNodes(editor);

    const jsxElements = parse(htmlFromNodes);
    htmlString = '';

    liText = Array.from(jsxElements as JSX.Element[]).map((value) => {
      if (value.type === 'ol') {
        const map = Array.from(value?.props?.children as JSX.Element[]).map(
          (el) => {
            return React.cloneElement(
              {
                ...el,
              },
              {
                ...el.props,
                children: (
                  <ListAlphaItem
                    key={el.key}
                    activeElem={activeElem}
                    el={el}
                    angle={angle}
                    onClick={() => {
                      handle(el.key as number);
                    }}
                  />
                ),
              },
            );
          },
        );

        return React.cloneElement(
          {
            ...value,
          },
          {
            ...value.props,
            children: <span>{map}</span>,
          },
        );
      }
      return value;
    });
  });

  return !editEnabled ? (
    <div className={'ContentEditable__root'}>{liText}</div>
  ) : null;
}
