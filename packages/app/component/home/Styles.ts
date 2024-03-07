/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {CSSProperties} from 'react';

export const navBarContainerStyles: CSSProperties = {
  WebkitBoxAlign: 'center',
  WebkitBoxPack: 'justify',
  alignItems: 'center',
  alignSelf: 'stretch',
  backgroundColor: 'rgb(255, 255, 255)',
  borderBottom: '1px solid rgb(232, 237, 235)',
  boxSizing: 'border-box',
  display: 'flex',
  fontSize: '13px',
  height: '60px',
  justifyContent: 'space-between',
  lineHeight: '15px',
  outline: '0px',
  padding: '0px 16px',
  position: 'relative',
  width: '100%',
  zIndex: 1,
};

export const navBarLogoContainerStyles: CSSProperties = {
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  gap: '12px',
  outline: '0px',
  position: 'relative',
};

export const navBarLogoLinkStyles: CSSProperties = {
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  color: '#016BF8',
  marginRight: '4px',
  outline: '0px',
  position: 'relative',
  textDecoration: 'none',
  zIndex: 1,
};

export const navBarLogoSVGStyles: CSSProperties = {
  borderRadius: '4px',
  boxSizing: 'border-box',
  height: '32px',
  margin: '-1px',
  outline: '0px',
  outlineOffset: '-1px',
  overflow: 'hidden',
  padding: '1px',
  transition: 'box-shadow 100ms ease-in-out 0s',
  width: 'auto',
};
