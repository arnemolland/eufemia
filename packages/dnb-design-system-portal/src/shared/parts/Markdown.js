/**
 * Page Component
 *
 */

import React, { Component, Fragment } from 'react'

import PropTypes from 'prop-types'
import { css } from 'react-emotion'
import dnb from 'dnb-ui-lib/src'

// import { CodeRenderer } from './Code'
// import ReactMarkdown from 'react-markdown'
// export default class Markdown extends Component {
//   static propTypes = {
//     children: PropTypes.string.isRequired
//   }
//   render() {
//     const { children } = this.props
//     return (
//       <div css={markdownStyle}>
//         <ReactMarkdown
//           escapeHtml={false}
//           // skipHtml={true}
//           // unwrapDisallowed={true}
//           source={children}
//           renderers={{
//             html: Html,
//             code: CodeRenderer
//             // table: Table
//           }}
//         />
//       </div>
//     )
//   }
// }

export class Html extends Component {
  static propTypes = {
    children: PropTypes.node,
    value: PropTypes.string
  }
  static defaultProps = {
    children: null,
    value: null
  }
  componentDidMount() {
    if (
      this.props.children ||
      (this.props.value && /<dnb/.test(this.props.value))
    ) {
      dnb.enableWebComponents()
    }
    // setTimeout(() => {
    //   this.show()
    // }, 3e3)
  }
  state = {
    visible: true
  }
  // show() {
  //   this.setState({
  //     visible: true
  //   })
  // }
  render() {
    return (
      <Fragment>
        {this.state.visible &&
          this.props.value && (
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.value
              }}
            />
          )}
        {this.state.visible && this.props.children}
      </Fragment>
    )
  }
}

// export class Script extends Component {
//   static propTypes = {
//     children: PropTypes.node,
//     value: PropTypes.string
//   }
//   static defaultProps = {
//     children: null,
//     value: null
//   }
//   render() {
//     console.log('Script', this.props)
//     return <Fragment>Hello</Fragment>
//   }
// }

export const markdownStyle = css`
  *:not([class^='dnb-']) + {
    hr {
      box-sizing: content-box;
      overflow: visible;
      height: 0;
      margin: 1rem 0;
      overflow: hidden;
      background: transparent;
      border: 0;
      border-bottom: 1px solid #dfe2e5;
    }

    hr::before {
      display: table;
      content: '';
    }

    hr::after {
      display: table;
      clear: both;
      content: '';
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
    }

    table {
      display: block;
      width: 100%;
      overflow: auto;
    }

    table th {
      font-weight: 600;
      white-space: nowrap;
    }

    table th,
    table td {
      padding: 0.5rem 0.5rem 0.4375rem 0.5rem;
      border-bottom: 1px solid #dfe2e5;
      border-left: 1px solid #dfe2e5;
      border-right: 1px solid #dfe2e5;
    }

    table tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }

    table td {
      white-space: nowrap;
    }
    table td.selectable {
      position: relative;
      z-index: 1;
      user-select: all;
      cursor: pointer;
      transform: scale(1);
      transition: transform 0.2s ease;
    }
    table td.selectable:hover,
    table td.selectable:active {
      z-index: 2;
      transform: scale(1.1);
      user-select: all;
    }

    table tr:nth-child(2n) {
      background-color: #f6f8fa;
    }

    td,
    th {
      padding: 0;
    }

    blockquote {
      margin: 0;
    }

    ul,
    ol {
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
    }

    ul li,
    ol li {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    ol ol,
    ul ol {
      list-style-type: lower-roman;
    }

    ul ul ol,
    ul ol ol,
    ol ul ol,
    ol ol ol {
      list-style-type: lower-alpha;
    }

    dd {
      margin-left: 0;
    }

    > *:first-child {
      margin-top: 0 !important;
    }

    > *:last-child {
      margin-bottom: 0 !important;
    }

    p,
    blockquote,
    ul,
    ol,
    dl,
    table,
    pre {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    blockquote {
      padding: 0 1rem;
      color: #6a737d;
      border-left: 0.25em solid #dfe2e5;
    }

    blockquote > :first-child {
      margin-top: 0;
    }

    blockquote > :last-child {
      margin-bottom: 0;
    }

    ul,
    ol {
      padding-left: 2rem;
    }

    ul ul,
    ul ol,
    ol ol,
    ol ul {
      margin-top: 0;
      margin-bottom: 0;
    }

    li {
      word-wrap: break-all;
    }

    li > p {
      margin-top: 1rem;
    }

    li + li {
      margin-top: 0.25em;
    }

    dl {
      padding: 0;
    }

    dl dt {
      padding: 0;
      margin-top: 1rem;
      font-size: 1rem;
      font-style: italic;
      font-weight: 600;
    }

    dl dd {
      padding: 0 1rem;
      margin-bottom: 1rem;
    }

    img {
      box-sizing: content-box;
      max-width: 100%;
      border-style: none;
      background-color: #fff;
    }

    img[align='right'] {
      padding-left: 1.2rem;
    }

    img[align='left'] {
      padding-right: 1.2rem;
    }
  }

  .anchor {
    float: left;
    position: relative;
    left: -0.3rem;
    line-height: 65%;
    border: none;
  }

  .anchor:hover svg {
    fill: currentColor;
  }

  .anchor:focus {
    outline: none;
  }

  :checked + .radio-label {
    position: relative;
    z-index: 1;
    border-color: var(--color-sea-green);
  }

  .markdown-body::before {
    display: table;
    content: '';
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: '';
  }

  .octicon {
    vertical-align: text-bottom;
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .pl-1 {
    padding-left: 4px !important;
  }

  .pl-2 {
    padding-left: 8px !important;
  }

  .pl-3 {
    padding-left: 1rem !important;
  }

  .pl-4 {
    padding-left: 24px !important;
  }

  .pl-5 {
    padding-left: 32px !important;
  }

  .pl-6 {
    padding-left: 40px !important;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .task-list-item input {
    margin: 0 0.2rem 0.25em -1.6em;
    vertical-align: middle;
  }
`