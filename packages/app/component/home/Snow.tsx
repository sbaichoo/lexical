/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';

export default function Snow() {
  return (
    <>
      <nav
        id="toc"
        style={{
          border: '0px solid rgb(229, 231, 235)',
          boxSizing: 'border-box',
          scrollbarColor: 'auto',
          scrollbarWidth: 'auto',
        }}>
        <ol
          style={{
            border: '0px solid rgb(229, 231, 235)',
            boxSizing: 'border-box',
            listStyle: 'none',
            margin: '0px',
            padding: '0px',
            scrollbarColor: 'auto',
            scrollbarWidth: 'auto',
          }}>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              id="selected-item"
              className="hover:bg-level-3 bg-highlight text-blue-60 dark:text-blue-30 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                backgroundColor: 'rgb(214 230 255/1)',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                color: 'rgb(8 91 215/1)',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer"
                title="Overview"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Overview
                </span>
              </a>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}
            />
          </li>
          <li
            className="mx-5 px-3 py-1 pt-3"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              marginLeft: '1.25rem',
              marginRight: '1.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <span
              className="text-sm font-bold"
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                fontSize: '0.875rem',
                fontWeight: 700,
                lineHeight: '1.25rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              Snowpark Library
            </span>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/snowpark/index"
                title="Snowpark API"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Snowpark API
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/snowpark-ml/index"
                title="Snowpark ML"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Snowpark ML
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="mx-5 px-3 py-1 pt-3"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              marginLeft: '1.25rem',
              marginRight: '1.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <span
              className="text-sm font-bold"
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                fontSize: '0.875rem',
                fontWeight: 700,
                lineHeight: '1.25rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              Snowpark Runtime
            </span>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/snowpark-container-services/overview"
                title="Snowpark Container Services"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Snowpark Container Services
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/extensibility"
                title="Functions and Procedures"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Functions and Procedures
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="mx-5 px-3 py-1 pt-3"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              marginLeft: '1.25rem',
              marginRight: '1.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <span
              className="text-sm font-bold"
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                fontSize: '0.875rem',
                fontWeight: 700,
                lineHeight: '1.25rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              Apps
            </span>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/streamlit/about-streamlit"
                title="Streamlit in Snowflake"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Streamlit in Snowflake
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/native-apps/native-apps-about"
                title="Snowflake Native App Framework"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Snowflake Native App Framework
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="mx-5 px-3 py-1 pt-3"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              marginLeft: '1.25rem',
              marginRight: '1.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <span
              className="text-sm font-bold"
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                fontSize: '0.875rem',
                fontWeight: 700,
                lineHeight: '1.25rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              External System Integration
            </span>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/sql-reference/external-functions"
                title="External Functions"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  External Functions
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/user-guide/connectors"
                title="Kafka and Spark Connectors"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Kafka and Spark Connectors
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="mx-5 px-3 py-1 pt-3"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              marginLeft: '1.25rem',
              marginRight: '1.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <span
              className="text-sm font-bold"
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                fontSize: '0.875rem',
                fontWeight: 700,
                lineHeight: '1.25rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              Snowflake Scripting
            </span>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/snowflake-scripting/index"
                title="Snowflake Scripting Developer Guide"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Snowflake Scripting Developer Guide
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="mx-5 px-3 py-1 pt-3"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              marginLeft: '1.25rem',
              marginRight: '1.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <span
              className="text-sm font-bold"
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                fontSize: '0.875rem',
                fontWeight: 700,
                lineHeight: '1.25rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              Snowflake APIs
            </span>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/snowflake-python-api/snowflake-python-overview"
                title="Snowflake Python API"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Snowflake Python API
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/sql-api/index"
                title="SQL REST API"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  SQL REST API
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="mx-5 px-3 py-1 pt-3"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              marginLeft: '1.25rem',
              marginRight: '1.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '0.75rem',
              paddingRight: '0.75rem',
              paddingTop: '0.75rem',
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <span
              className="text-sm font-bold"
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                fontSize: '0.875rem',
                fontWeight: 700,
                lineHeight: '1.25rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              Drivers
            </span>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/drivers"
                title="Overview"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Overview
                </span>
              </a>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}
            />
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/golang/go-driver"
                title="Go"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Go
                </span>
              </a>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}
            />
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/jdbc/jdbc"
                title="JDBC"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  JDBC
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/dotnet/dotnet-driver"
                title=".NET"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  .NET
                </span>
              </a>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}
            />
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/node-js/nodejs-driver"
                title="Node.js"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Node.js
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/odbc/odbc"
                title="ODBC"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  ODBC
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/php-pdo/php-pdo-driver"
                title="PHP"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  PHP
                </span>
              </a>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}
            />
          </li>
          <li
            className="font-normal"
            style={{
              border: '0px solid rgb(229, 231, 235)',
              boxSizing: 'border-box',
              fontWeight: 400,
              scrollbarColor: 'auto',
              scrollbarWidth: 'auto',
            }}>
            <div
              className="hover:bg-level-3 mx-5 flex items-center justify-between rounded-md px-3 text-sm"
              style={{
                alignItems: 'center',
                border: '0px solid rgb(229, 231, 235)',
                borderRadius: '0.375rem',
                boxSizing: 'border-box',
                display: 'flex',
                fontSize: '0.875rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                marginLeft: '1.25rem',
                marginRight: '1.25rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <a
                className="w-full overflow-hidden text-ellipsis py-2 text-sm leading-4"
                href="https://docs.snowflake.com/en/developer-guide/python-connector/python-connector"
                title="Python"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  color: 'inherit',
                  fontSize: '0.875rem',
                  lineHeight: '1rem',
                  overflow: 'hidden',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  textDecoration: 'inherit',
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}>
                <span
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}>
                  Python
                </span>
              </a>
              <div
                className="flex h-5 w-5 cursor-pointer select-none items-center justify-center py-2"
                style={{
                  alignItems: 'center',
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  display: 'flex',
                  height: '1.25rem',
                  justifyContent: 'center',
                  paddingBottom: '0.5rem',
                  paddingTop: '0.5rem',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                  transform: 'rotate(0deg)',
                  userSelect: 'none',
                  width: '1.25rem',
                }}>
                <svg
                  height="8"
                  width="6"
                  fill="none"
                  viewBox="0 0 6 8"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    display: 'block',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                    verticalAlign: 'middle',
                  }}>
                  <path
                    d="M2 6.5L4.5 4L2 1.5"
                    stroke="#8A96AD"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{
                      border: '0px solid rgb(229, 231, 235)',
                      boxSizing: 'border-box',
                      scrollbarColor: 'auto',
                      scrollbarWidth: 'auto',
                    }}
                  />
                </svg>
              </div>
            </div>
            <ul
              style={{
                border: '0px solid rgb(229, 231, 235)',
                boxSizing: 'border-box',
                listStyle: 'none',
                margin: '0px',
                padding: '0px',
                scrollbarColor: 'auto',
                scrollbarWidth: 'auto',
              }}>
              <ol
                className="overflow-hidden"
                style={{
                  border: '0px solid rgb(229, 231, 235)',
                  boxSizing: 'border-box',
                  height: '0px',
                  listStyle: 'none',
                  margin: '0px',
                  opacity: 0,
                  overflow: 'hidden',
                  padding: '0px',
                  scrollbarColor: 'auto',
                  scrollbarWidth: 'auto',
                }}>
                <div
                  style={{
                    border: '0px solid rgb(229, 231, 235)',
                    boxSizing: 'border-box',
                    scrollbarColor: 'auto',
                    scrollbarWidth: 'auto',
                  }}
                />
              </ol>
            </ul>
          </li>
        </ol>
      </nav>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scrollbar-color: auto;
  scrollbar-width: auto;
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
}

body {
  border: 0px solid rgb(229, 231, 235);
  box-sizing: border-box;
  scrollbar-color: auto;
  scrollbar-width: auto;
  font-family: Inter, sans-serif;
  color: rgb(44 47 52/1);
  background-color: rgb(255 255 255/1);
  font-weight: 300;
  height: 100vh;
  margin: 0px;
  line-height: inherit;
}
`,
        }}
      />
    </>
  );
}
