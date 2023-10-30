/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {createHeadlessEditor} from '@lexical/headless';
import {$generateHtmlFromNodes} from '@lexical/html';
import React from 'react';

const editorState2: string =
  '{"editorState":{"root":{"children":[{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":" ","type":"text","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"A small mountain lake has aquatic plants growing under water on the lake bed. Shortly after heavy rainfall, the mud on the lake bed becomes stirred up and the water level rises.","type":"text","version":1}],"direction":"ltr","format":"justify","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"text","version":1}],"direction":null,"format":"left","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Why does this cause the rate of photosynthesis of these plants to fall?","type":"text","version":1}],"direction":"ltr","format":"justify","indent":0,"type":"paragraph","version":1},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"extra carbon dioxide","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"extra dissolved nitrates","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"lower light intensity","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":3},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"lower oxygen concentration","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":4}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"number","start":1,"tag":"ol"},{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}},"lastSaved":1698570111836,"source":"Playground","version":"0.12.2"}';
const Home = () => {
  const editor = createHeadlessEditor({
    nodes: [],
    onError: () => {},
  });

  let htmlString = '';

  const json = JSON.parse(editorState2);
  const editorState = editor.parseEditorState(JSON.stringify(json.editorState));

  editor.setEditorState(editorState);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  editorState.read(() => {
    htmlString = $generateHtmlFromNodes(editor);
  });

  // eslint-disable-next-line no-console
  console.log(htmlString);

  return <div dangerouslySetInnerHTML={{__html: htmlString}} />;
};

export default Home;
