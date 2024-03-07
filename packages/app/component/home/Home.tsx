/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import {
  navBarContainerStyles,
  navBarLogoContainerStyles,
  navBarLogoLinkStyles,
  navBarLogoSVGStyles,
} from './Styles';

export default function Home() {
  return (
    <>
      <nav
        className="navBarLogoStyles"
        aria-label="organization navigation"
        style={navBarContainerStyles}>
        <div
          className="leafygreen-ui-1xbw0mb"
          style={navBarLogoContainerStyles}>
          <a
            className="leafygreen-ui-664lvj"
            href="https://cloud.mongodb.com/v2#/org/654c74f7059d4654dc5d1eeb/"
            style={navBarLogoLinkStyles}>
            <svg
              className="leafygreen-ui-l72deg lg-ui-logo-0000"
              height="32"
              aria-label="Go to the Organization Home"
              fill="none"
              role="img"
              viewBox="0 0 80 32"
              xmlns="http://www.w3.org/2000/svg"
              style={navBarLogoSVGStyles}>
              <path
                d="M10.2503 3.56662C8.90729 1.97316 7.75079 0.354795 7.51452 0.0186734C7.48964 -0.00622447 7.45233 -0.00622447 7.42746 0.0186734C7.19118 0.354795 6.03469 1.97316 4.69165 3.56662C-6.83603 18.2688 6.50725 28.1906 6.50725 28.1906L6.61915 28.2653C6.71864 29.7965 6.96735 32 6.96735 32H7.96219C7.96219 32 8.21091 29.809 8.31039 28.2653L8.4223 28.1782C8.43473 28.1906 21.778 18.2688 10.2503 3.56662ZM7.46477 27.9665C7.46477 27.9665 6.86787 27.4561 6.70621 27.1947V27.1698L7.42746 11.1605C7.42746 11.1107 7.50208 11.1107 7.50208 11.1605L8.22333 27.1698V27.1947C8.06167 27.4561 7.46477 27.9665 7.46477 27.9665Z"
                fill="#00684A"
                style={{boxSizing: 'border-box', outline: '0px'}}
              />
              <path
                d="M38.5245 26.9447C38.1012 26.9447 37.8272 26.6957 37.7027 26.372L31.4272 10.9074L31.228 10.7082H30.6304L30.4311 10.9074L24.0809 26.2475C23.8568 26.7704 23.5082 26.9447 23.1097 26.9447H22.6117L22.4125 27.144V27.9409L22.6117 28.1401H27.1191L27.3183 27.9409V27.144L27.1191 26.9447H26.1728C25.7245 26.9447 25.5751 26.7206 25.5751 26.4467C25.5751 26.2724 25.6249 26.0981 25.6996 25.8988L26.621 23.6576H34.1416L35.0381 25.8988C35.1128 26.0981 35.1626 26.2724 35.1626 26.4467C35.1626 26.7206 34.9883 26.9447 34.5401 26.9447H33.7681L33.5689 27.144V27.9409L33.7681 28.1401H39.0973L39.2965 27.9409V27.144L39.0973 26.9447H38.5245ZM30.4311 14.4436L33.6685 22.4623H27.1191L30.4311 14.4436Z"
                fill="#00684A"
                style={{boxSizing: 'border-box', outline: '0px'}}
              />
              <path
                d="M44.308 28.4887C46.4496 28.4887 47.4208 26.9198 47.5951 26.2226L47.5453 26.0233L47.1469 25.8241L46.9477 25.8988C46.2753 26.7455 45.6029 26.9946 44.8309 26.9946C43.8099 26.9946 43.1624 26.1977 43.1624 25.1767V17.0335H46.4745L46.6737 16.8342V16.0374L46.4745 15.8381H43.1624V13.049L42.9632 12.8498H42.2411L40.6722 15.8381H39.3523L39.1531 16.0374V16.8342L39.3523 17.0335H41.1702V25.3012C41.1702 27.144 42.1912 28.4887 44.308 28.4887Z"
                fill="#00684A"
                style={{boxSizing: 'border-box', outline: '0px'}}
              />
              <path
                d="M53.6981 28.1401L53.8973 27.9409V27.144L53.6981 26.9447H53.2498C52.7518 26.9447 52.4031 26.5961 52.4031 26.0981V11.8288L52.5525 10.3844L52.4031 10.2101H51.8054L49.116 11.1813L48.9167 11.4304V11.9035L49.1658 12.1525H49.5393C50.0374 12.1525 50.4109 12.4016 50.4109 12.9992V26.0981C50.4109 26.5961 50.0623 26.9447 49.5642 26.9447H49.116L48.9167 27.144V27.9409L49.116 28.1401H53.6981Z"
                fill="#00684A"
                style={{boxSizing: 'border-box', outline: '0px'}}
              />
              <path
                d="M68.6078 26.9447C68.1097 26.9447 67.7611 26.5961 67.7611 26.0981V16.0374L67.5619 15.8381H66.8397L65.8187 17.6809H65.6942C64.9471 16.6101 63.5774 15.4895 61.3113 15.4895C58.2482 15.4895 55.3595 17.9051 55.3595 21.9891C55.3595 26.5463 58.2483 28.4887 61.1868 28.4887C62.8054 28.4887 64.5237 27.9409 65.7689 25.8988V27.9409L65.9681 28.1401H69.056L69.2553 27.9409V27.144L69.056 26.9447H68.6078ZM61.5354 27.3183C58.7712 27.3183 57.4514 24.7533 57.4514 21.9891C57.4514 19.2 58.7712 16.6599 61.5354 16.6599C64.2249 16.6599 65.6195 19.2 65.6195 21.9891C65.6195 24.7533 64.2249 27.3183 61.5354 27.3183Z"
                fill="#00684A"
                style={{boxSizing: 'border-box', outline: '0px'}}
              />
              <path
                d="M75.2823 28.4887C77.6979 28.4887 79.5407 26.9696 79.5407 24.6786C79.5407 22.7362 77.922 21.7899 76.2535 21.1175C73.8379 20.1463 73.1656 19.4739 73.1656 18.4031C73.1656 17.3323 74.0372 16.5354 75.2823 16.5354C76.7765 16.5354 77.6481 17.6311 77.7228 19.2996L77.9718 19.5486H78.5446L78.7936 19.2996L78.6691 16.5603L78.4948 16.3113C77.6481 15.863 76.6519 15.4895 75.3819 15.4895C72.8916 15.4895 71.2481 16.884 71.2481 19.0506C71.2481 20.6942 72.5928 21.6654 74.6099 22.4623C76.129 23.0599 77.5235 23.6825 77.5235 25.4257C77.5235 26.6957 76.627 27.4677 75.3072 27.4677C73.9874 27.4677 72.4185 26.621 72.5928 24.4545L72.3438 24.2054H71.8706L71.6216 24.4545L70.9741 27.0693L71.0986 27.3183C72.02 27.9409 73.5142 28.4887 75.2823 28.4887Z"
                fill="#00684A"
                style={{boxSizing: 'border-box', outline: '0px'}}
              />
            </svg>
          </a>
          <div
            className="leafygreen-ui-1n367eq"
            style={{
              WebkitBoxAlign: 'center',
              WebkitBoxPack: 'center',
              alignItems: 'center',
              boxSizing: 'border-box',
              display: 'flex',
              height: '30px',
              justifyContent: 'center',
              outline: '0px',
              position: 'relative',
              zIndex: 0,
            }}>
            <button
              className="lg-ui-button-0000 leafygreen-ui-a9df7i"
              type="button"
              aria-disabled="false"
              aria-expanded="false"
              style={{
                WebkitBoxAlign: 'center',
                alignItems: 'center',
                appearance: 'none',
                backgroundColor: 'rgb(255, 255, 255)',
                border: '1px solid rgb(232, 237, 235)',
                borderRadius: '5px 0px 0px 5px',
                boxSizing: 'border-box',
                color: 'rgb(0, 30, 43)',
                cursor: 'pointer',
                display: 'inline-flex',
                font: 'inherit',
                fontFamily:
                  '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                height: '100%',
                lineHeight: '20px',
                margin: '0px',
                outline: '0px',
                overflow: 'visible',
                padding: 'unset',
                position: 'relative',
                textDecoration: 'none',
                textTransform: 'none',
                transition: 'all 150ms ease-in-out 0s',
                width: '152px',
                zIndex: 0,
              }}>
              <div
                className="leafygreen-ui-v038xi"
                style={{
                  borderRadius: '5px',
                  boxSizing: 'border-box',
                  inset: '0px',
                  outline: '0px',
                  overflow: 'hidden',
                  position: 'absolute',
                }}
              />
              <div
                className="leafygreen-ui-v95oty"
                style={{
                  WebkitBoxAlign: 'center',
                  WebkitBoxPack: 'center',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  display: 'grid',
                  gap: '6px',
                  gridAutoFlow: 'column',
                  gridTemplateColumns: '16px 1fr 16px',
                  height: '100%',
                  justifyContent: 'center',
                  outline: '0px',
                  padding: '0px 8px',
                  pointerEvents: 'none',
                  position: 'relative',
                  width: '100%',
                  zIndex: 0,
                }}>
                <svg
                  className="leafygreen-ui-15wfe7w"
                  height="14"
                  width="14"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 16 16"
                  style={{
                    boxSizing: 'border-box',
                    color: 'rgb(136, 147, 151)',
                    flexShrink: 0,
                    height: '16px',
                    justifySelf: 'right',
                    outline: '0px',
                    overflow: 'hidden',
                    width: '16px',
                  }}>
                  <path
                    clipRule="evenodd"
                    d="M1 2C1 1.44772 1.44772 1 2 1H7C7.55228 1 8 1.44772 8 2V7.5V10.5V15H6V13H4V15H1V11H5.5C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10H1V8H5.5C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7H1V5H5.5C5.77614 5 6 4.77614 6 4.5C6 4.22386 5.77614 4 5.5 4H1V2ZM9 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H9V8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H9V5C9 4.44772 9.44772 4 10 4H15C15.5523 4 16 4.44772 16 5V15H14V13H12V15H9V11Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    style={{boxSizing: 'border-box', outline: '0px'}}
                  />
                </svg>
                <span
                  className="leafygreen-ui-asvhsp"
                  style={{
                    WebkitBoxFlex: '1',
                    boxSizing: 'border-box',
                    flexGrow: 1,
                    fontSize: '13px',
                    fontWeight: 'bolder',
                    outline: '0px',
                    overflow: 'hidden',
                    textAlign: 'left',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                  Stephan's Org - 2023-11-09
                </span>
                <svg
                  className="leafygreen-ui-fn50nl"
                  height="14"
                  width="14"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 16 16"
                  style={{
                    boxSizing: 'border-box',
                    color: 'rgb(136, 147, 151)',
                    flexShrink: 0,
                    height: '16px',
                    justifySelf: 'left',
                    outline: '0px',
                    overflow: 'hidden',
                    width: '16px',
                  }}>
                  <path
                    d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z"
                    fill="currentColor"
                    style={{boxSizing: 'border-box', outline: '0px'}}
                  />
                </svg>
              </div>
            </button>
            <a
              className="lg-ui-button-0000 leafygreen-ui-8gm6m3"
              aria-disabled="false"
              aria-label="settings"
              href="https://cloud.mongodb.com/v2#/org/654c74f7059d4654dc5d1eeb/settings/general"
              tabIndex={0}
              style={{
                WebkitBoxAlign: 'center',
                WebkitBoxPack: 'center',
                alignItems: 'center',
                appearance: 'none',
                backgroundColor: 'rgb(255, 255, 255)',
                borderBottomColor: 'rgb(232, 237, 235)',
                borderBottomStyle: 'solid',
                borderImage: 'initial',
                borderLeftColor: 'initial',
                borderLeftStyle: 'initial',
                borderRadius: '0px 5px 5px 0px',
                borderRightColor: 'rgb(232, 237, 235)',
                borderRightStyle: 'solid',
                borderTopColor: 'rgb(232, 237, 235)',
                borderTopStyle: 'solid',
                borderWidth: '1px 1px 1px 0px',
                boxSizing: 'border-box',
                color: 'rgb(136, 147, 151)',
                cursor: 'pointer',
                display: 'inline-flex',
                fontFamily:
                  '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                height: '100%',
                justifyContent: 'center',
                lineHeight: '20px',
                margin: '0px',
                outline: 'none',
                padding: '0px',
                position: 'relative',
                textDecoration: 'none',
                transition: 'all 150ms ease-in-out 0s',
                width: '28px',
                zIndex: 0,
              }}>
              <div
                className="leafygreen-ui-v038xi"
                style={{
                  borderRadius: '5px',
                  boxSizing: 'border-box',
                  inset: '0px',
                  outline: '0px',
                  overflow: 'hidden',
                  position: 'absolute',
                }}
              />
              <div
                className="leafygreen-ui-v95oty"
                style={{
                  WebkitBoxAlign: 'center',
                  WebkitBoxPack: 'center',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  display: 'grid',
                  gap: '6px',
                  gridAutoFlow: 'column',
                  height: '100%',
                  justifyContent: 'center',
                  outline: '0px',
                  padding: '0px 6px',
                  pointerEvents: 'none',
                  position: 'relative',
                  width: '100%',
                  zIndex: 0,
                }}>
                <svg
                  className="leafygreen-ui-1mtu3yb"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 16 16"
                  style={{
                    boxSizing: 'border-box',
                    color: 'rgb(136, 147, 151)',
                    flexShrink: 0,
                    height: '16px',
                    justifySelf: 'left',
                    outline: '0px',
                    overflow: 'hidden',
                    transition: 'color 150ms ease-in-out 0s',
                    width: '16px',
                  }}>
                  <path
                    clipRule="evenodd"
                    d="M10.2068 1.06716C9.88875 0.935661 9.52203 1.03749 9.31733 1.31414L8.94293 1.82012C8.30664 1.72253 7.66857 1.72598 7.04948 1.8218L6.67408 1.31582C6.46902 1.03944 6.10217 0.938077 5.7843 1.06998L4.65819 1.53728C4.34032 1.66918 4.15301 2.0005 4.20388 2.34087L4.29701 2.96397C3.79197 3.33462 3.33892 3.78396 2.95865 4.30338L2.33602 4.21114C1.99558 4.1607 1.66451 4.34843 1.53301 4.66647L1.06716 5.79319C0.935661 6.11122 1.03749 6.47794 1.31414 6.68265L1.82012 7.05705C1.72253 7.69334 1.72598 8.33142 1.8218 8.9505L1.31583 9.32589C1.03945 9.53096 0.938089 9.89781 1.06999 10.2157L1.53729 11.3418C1.6692 11.6597 2.00051 11.847 2.34088 11.7961L2.96398 11.703C3.33462 12.208 3.78396 12.6611 4.30338 13.0413L4.21114 13.664C4.1607 14.0044 4.34843 14.3355 4.66647 14.467L5.79319 14.9328C6.11122 15.0643 6.47794 14.9625 6.68265 14.6858L7.05705 14.1799C7.69335 14.2774 8.33142 14.274 8.95051 14.1782L9.3259 14.6841C9.53096 14.9605 9.89781 15.0619 10.2157 14.93L11.3418 14.4627C11.6597 14.3308 11.847 13.9995 11.7961 13.6591L11.703 13.036C12.208 12.6654 12.6611 12.216 13.0413 11.6966L13.664 11.7888C14.0044 11.8393 14.3355 11.6515 14.467 11.3335L14.9328 10.2068C15.0643 9.88875 14.9625 9.52203 14.6858 9.31733L14.1799 8.94293C14.2774 8.30663 14.274 7.66856 14.1782 7.04947L14.6841 6.67408C14.9605 6.46902 15.0619 6.10217 14.93 5.7843L14.4627 4.65819C14.3308 4.34032 13.9995 4.15301 13.6591 4.20388L13.036 4.29701C12.6654 3.79197 12.216 3.33892 11.6966 2.95865L11.7888 2.33602C11.8393 1.99558 11.6515 1.66451 11.3335 1.53301L10.2068 1.06716ZM10.5413 9.05074C9.96102 10.4543 8.35278 11.1216 6.94924 10.5413C5.54569 9.96102 4.87833 8.35278 5.45865 6.94924C6.03896 5.54569 7.6472 4.87833 9.05074 5.45865C10.4543 6.03896 11.1216 7.6472 10.5413 9.05074Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    style={{boxSizing: 'border-box', outline: '0px'}}
                  />
                </svg>
              </div>
            </a>
          </div>
          <button
            className="leafygreen-ui-18wl2ep"
            aria-disabled="false"
            aria-expanded="false"
            style={{
              appearance: 'button',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              boxSizing: 'border-box',
              color: 'rgb(0, 30, 43)',
              cursor: 'pointer',
              font: 'inherit',
              fontFamily:
                '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: 'normal',
              margin: '0px',
              outline: '0px',
              overflow: 'visible',
              padding: '9px',
              position: 'relative',
              textDecoration: 'none',
              textTransform: 'none',
              transition: 'box-shadow 100ms ease-in-out 0s',
            }}>
            <span
              className="leafygreen-ui-108pujl"
              style={{boxSizing: 'border-box', outline: '0px'}}>
              <span
                className="lg-ui-wrapper-0000"
                style={{
                  WebkitBoxAlign: 'center',
                  WebkitBoxPack: 'center',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  display: 'flex',
                  gap: '4px',
                  justifyContent: 'center',
                  outline: '0px',
                  position: 'relative',
                }}>
                Access Manager
                <svg
                  className="lg-ui-caret-0000 leafygreen-ui-1ebs75t"
                  height="16"
                  width="16"
                  aria-label="Caret Down Icon"
                  role="img"
                  viewBox="0 0 16 16"
                  style={{
                    boxSizing: 'border-box',
                    color: 'rgb(136, 147, 151)',
                    flexShrink: 0,
                    outline: '0px',
                    overflow: 'hidden',
                    transition: 'color 150ms ease-in-out 0s',
                  }}>
                  <path
                    d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z"
                    fill="currentColor"
                    style={{boxSizing: 'border-box', outline: '0px'}}
                  />
                </svg>
              </span>
            </span>
          </button>
          <a
            className="leafygreen-ui-18wl2ep"
            aria-disabled="false"
            href="https://cloud.mongodb.com/v2#/org/654c74f7059d4654dc5d1eeb/billing/overview"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              boxSizing: 'border-box',
              color: 'rgb(0, 30, 43)',
              cursor: 'pointer',
              fontFamily:
                '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '13px',
              outline: '0px',
              padding: '9px',
              position: 'relative',
              textDecoration: 'none',
              transition: 'box-shadow 100ms ease-in-out 0s',
            }}>
            <span
              className="leafygreen-ui-108pujl"
              style={{boxSizing: 'border-box', outline: '0px'}}>
              <span
                className="lg-ui-wrapper-0000"
                style={{
                  WebkitBoxAlign: 'center',
                  WebkitBoxPack: 'center',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  display: 'flex',
                  gap: '4px',
                  justifyContent: 'center',
                  outline: '0px',
                  position: 'relative',
                }}>
                Billing
              </span>
            </span>
          </a>
        </div>
        <div
          className="leafygreen-ui-1xbw0mb"
          style={{
            WebkitBoxAlign: 'center',
            alignItems: 'center',
            boxSizing: 'border-box',
            display: 'flex',
            gap: '12px',
            outline: '0px',
            position: 'relative',
          }}>
          <a
            className="leafygreen-ui-18wl2ep"
            aria-disabled="false"
            href="https://cloud.mongodb.com/v2#/clusters"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              boxSizing: 'border-box',
              color: 'rgb(0, 30, 43)',
              cursor: 'pointer',
              fontFamily:
                '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '13px',
              outline: '0px',
              padding: '9px',
              position: 'relative',
              textDecoration: 'none',
              transition: 'box-shadow 100ms ease-in-out 0s',
            }}>
            <span
              className="leafygreen-ui-108pujl"
              style={{boxSizing: 'border-box', outline: '0px'}}>
              <span
                className="lg-ui-wrapper-0000"
                style={{
                  WebkitBoxAlign: 'center',
                  WebkitBoxPack: 'center',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  display: 'flex',
                  gap: '4px',
                  justifyContent: 'center',
                  outline: '0px',
                  position: 'relative',
                }}>
                All Clusters
              </span>
            </span>
          </a>
          <div
            className="leafygreen-ui-1xbw0mb"
            style={{
              WebkitBoxAlign: 'center',
              alignItems: 'center',
              boxSizing: 'border-box',
              display: 'flex',
              gap: '12px',
              outline: '0px',
              position: 'relative',
            }}>
            <button
              className="leafygreen-ui-18wl2ep"
              aria-disabled="false"
              style={{
                appearance: 'button',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '8px',
                boxSizing: 'border-box',
                color: 'rgb(0, 30, 43)',
                cursor: 'pointer',
                font: 'inherit',
                fontFamily:
                  '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: '0px',
                outline: '0px',
                overflow: 'visible',
                padding: '9px',
                position: 'relative',
                textDecoration: 'none',
                textTransform: 'none',
                transition: 'box-shadow 100ms ease-in-out 0s',
              }}>
              <span
                className="leafygreen-ui-108pujl"
                style={{boxSizing: 'border-box', outline: '0px'}}>
                <span
                  className="lg-ui-wrapper-0000"
                  style={{
                    WebkitBoxAlign: 'center',
                    WebkitBoxPack: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    display: 'flex',
                    gap: '4px',
                    justifyContent: 'center',
                    outline: '0px',
                    position: 'relative',
                  }}>
                  Get Help
                  <svg
                    className="lg-ui-caret-0000 leafygreen-ui-1ebs75t"
                    height="16"
                    width="16"
                    aria-label="Caret Down Icon"
                    role="img"
                    viewBox="0 0 16 16"
                    style={{
                      boxSizing: 'border-box',
                      color: 'rgb(136, 147, 151)',
                      flexShrink: 0,
                      outline: '0px',
                      overflow: 'hidden',
                      transition: 'color 150ms ease-in-out 0s',
                    }}>
                    <path
                      d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z"
                      fill="currentColor"
                      style={{boxSizing: 'border-box', outline: '0px'}}
                    />
                  </svg>
                </span>
              </span>
            </button>
            <button
              className="lg-ui-button-0000 leafygreen-ui-exv5t"
              type="button"
              aria-disabled="false"
              aria-expanded="false"
              style={{
                WebkitBoxAlign: 'stretch',
                alignItems: 'stretch',
                appearance: 'none',
                backgroundColor: 'rgb(255, 255, 255)',
                border: '1px solid rgb(232, 237, 235)',
                borderRadius: '15px',
                boxSizing: 'border-box',
                color: 'rgb(0, 30, 43)',
                cursor: 'pointer',
                display: 'inline-flex',
                font: 'inherit',
                fontFamily:
                  '"Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                height: '30px',
                lineHeight: '20px',
                margin: '0px',
                outline: '0px',
                overflow: 'visible',
                padding: '0px',
                position: 'relative',
                textDecoration: 'none',
                textTransform: 'none',
                transition: 'all 150ms ease-in-out 0s',
                zIndex: 0,
              }}>
              <div
                className="leafygreen-ui-v038xi"
                style={{
                  borderRadius: '5px',
                  boxSizing: 'border-box',
                  inset: '0px',
                  outline: '0px',
                  overflow: 'hidden',
                  position: 'absolute',
                }}
              />
              <div
                className="leafygreen-ui-v95oty"
                style={{
                  WebkitBoxAlign: 'center',
                  WebkitBoxPack: 'center',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  display: 'grid',
                  gap: '6px',
                  gridAutoFlow: 'column',
                  height: '100%',
                  justifyContent: 'center',
                  outline: '0px',
                  padding: '0px 11px',
                  pointerEvents: 'none',
                  position: 'relative',
                  width: '100%',
                  zIndex: 0,
                }}>
                <span
                  className="leafygreen-ui-l7fyiq"
                  style={{
                    boxSizing: 'border-box',
                    fontWeight: 400,
                    maxWidth: '162px',
                    outline: '0px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: 'fit-content',
                  }}>
                  Stephan
                </span>
                <svg
                  className="leafygreen-ui-fn50nl"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 16 16"
                  style={{
                    boxSizing: 'border-box',
                    color: 'rgb(136, 147, 151)',
                    flexShrink: 0,
                    height: '16px',
                    justifySelf: 'left',
                    outline: '0px',
                    overflow: 'hidden',
                    width: '16px',
                  }}>
                  <path
                    d="M8.67903 10.7962C8.45271 11.0679 8.04729 11.0679 7.82097 10.7962L4.63962 6.97649C4.3213 6.59428 4.5824 6 5.06866 6L11.4313 6C11.9176 6 12.1787 6.59428 11.8604 6.97649L8.67903 10.7962Z"
                    fill="currentColor"
                    style={{boxSizing: 'border-box', outline: '0px'}}
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  outline: 0px;
  text-size-adjust: 100%;
  font-size: 9px;
  -webkit-tap-highlight-color: transparent;
  font-family: "Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #001E2B;
  -webkit-font-smoothing: antialiased;
  height: 100%;
}

body {
  box-sizing: border-box;
  outline: 0px;
  margin: 0px;
  font-size: 14px;
  line-height: 1.42857;
  background-color: rgb(255, 255, 255);
  font-family: "Euclid Circular A", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #001E2B;
  -webkit-font-smoothing: antialiased;
  height: 100%;
}
`,
        }}
      />
    </>
  );
}
