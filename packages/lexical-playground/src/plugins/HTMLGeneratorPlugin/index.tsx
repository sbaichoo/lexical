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
import {renderToString} from 'react-dom/server';

const someEditorState: string =
  '{"editorState":{"root":{"children":[{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":" ","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"A small mountain lake has aquatic plants growing under water on the lake bed. Shortly after heavy rainfall, the mud on the lake bed becomes stirred up and the water level rises.","type":"text","version":1}],"direction":"ltr","format":"justify","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"text","version":1}],"direction":null,"format":"left","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Why does this cause the rate of photosynthesis of these plants to fall?","type":"text","version":1}],"direction":"ltr","format":"justify","indent":0,"type":"paragraph","version":1},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"extra carbon dioxide","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"extra dissolved nitrates","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"lower light intensity","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":3},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"lower oxygen concentration","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":4}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":1,"tag":"ol"},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}},"lastSaved":1698570111836,"source":"Playground","version":"0.12.2"}';

const wrapListRadioSelectable = (liElement: JSX.Element): JSX.Element => {
  if (liElement.type !== 'li') {
    return liElement;
  }

  const key = liElement.key as number;

  const map = React.Children.map(liElement.props.children, (child) => {
    return React.createElement(
      'input',
      {
        id: key,
        name: 'listOption',
        type: 'radio',
      },
      child,
    );
  });

  return React.cloneElement(liElement, liElement.props, map[0]);
};

export default function HTMLGeneratorPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let htmlString = '';

  const json = JSON.parse(someEditorState);
  const editorState = editor.parseEditorState(JSON.stringify(json.editorState));

  editor.setEditorState(editorState);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  editorState.read(() => {
    htmlString = $generateHtmlFromNodes(editor);

    const jsxElements = parse(htmlString);
    htmlString = '';

    Array.from(jsxElements as JSX.Element[]).map((value) => {
      if (value.type === 'ol') {
        value?.props?.children.forEach((el: JSX.Element) => {
          // eslint-disable-next-line no-console
          console.log(
            'wrapListRadioSelectable(el)',
            wrapListRadioSelectable(el),
          );
          // eslint-disable-next-line no-console
          console.log('el', el);
          htmlString += renderToString(wrapListRadioSelectable(el));
        });
      }
    });
  });

  // eslint-disable-next-line no-console
  console.log(htmlString);

  return <div dangerouslySetInnerHTML={{__html: htmlString}} />;
}
