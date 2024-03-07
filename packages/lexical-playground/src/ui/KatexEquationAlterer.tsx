/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// @ts-ignore
import type {MathfieldElementAttributes} from 'mathlive';

import './KatexEquationAlterer.css';

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
// @ts-ignore
import * as mathe from 'mathlive';
import * as React from 'react';
import {useCallback, useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import Button from '../ui/Button';
import KatexRenderer from './KatexRenderer';

type Props = {
  initialEquation?: string;
  onConfirm: (equation: string, inline: boolean) => void;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['math-field']: MathfieldElementAttributes;
    }
  }
}

export default function KatexEquationAlterer({
  onConfirm,
  initialEquation = '',
}: Props): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [equation, setEquation] = useState<string>(initialEquation);
  const [inline, setInline] = useState<boolean>(true);

  const onClick = useCallback(() => {
    if (equation === '') {
      onConfirm(mathfieldElement.value, inline);
    } else {
      onConfirm(equation, inline);
    }
  }, [onConfirm, equation, inline]);

  const onCheckboxChange = useCallback(() => {
    setInline(!inline);
  }, [setInline, inline]);

  const mathfieldElement = new mathe.MathfieldElement();

  return (
    <>
      <div className="KatexEquationAlterer_defaultRow">Visualization</div>
      <div className="KatexEquationAlterer_centerRow">
        <ErrorBoundary onError={(e) => editor._onError(e)} fallback={null}>
          <KatexRenderer
            equation={equation}
            inline={false}
            onDoubleClick={() => null}
          />
        </ErrorBoundary>
      </div>
      <div className="KatexEquationAlterer_defaultRow">
        Inline
        <input type="checkbox" checked={inline} onChange={onCheckboxChange} />
      </div>
      <div className="KatexEquationAlterer_defaultRow">Equation</div>
      <div className="KatexEquationAlterer_centerRow">
        {inline ? (
          <input
            onChange={(event) => {
              setEquation(event.target.value);
            }}
            value={equation}
            className="KatexEquationAlterer_textArea"
          />
        ) : (
          <textarea
            onChange={(event) => {
              setEquation(event.target.value);
            }}
            value={equation}
            className="KatexEquationAlterer_textArea"
          />
        )}
      </div>
      <div className="KatexEquationAlterer_defaultRow">Math Keyboard</div>

      <div
        ref={(el) => {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          el?.appendChild(mathfieldElement);
        }}>
        {mathfieldElement.innerHTML}
      </div>

      <div className="KatexEquationAlterer_dialogActions">
        <Button onClick={onClick}>Confirm</Button>
      </div>
    </>
  );
}
