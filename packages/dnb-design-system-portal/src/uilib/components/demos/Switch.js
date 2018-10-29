/** 
  ATTENTION: This file is auto generated by using "makeDemosFactory".
  Do not change the content!
     */
/**
 * Component Demo setup
 * Ready for imporing in page
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemWrapper from '../../../shared/parts/uilib/ItemWrapper'
import DemoComponent, {
  Example as CodeComponent
} from 'dnb-ui-lib/src/components/switch/Example'
import InfoComponent from 'dnb-ui-lib/src/components/switch/info.md'
import ExampleCode from 'raw-loader!../examples/Switch.txt'

export default class SwitchDemo extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    InfoComponent: PropTypes.func,
    DemoComponent: PropTypes.func,
    CodeComponent: PropTypes.func,
    hideTabs: PropTypes.bool
  }
  static defaultProps = {
    title: 'Switch',
    id: 'switch',
    ExampleCode,
    InfoComponent,
    DemoComponent,
    CodeComponent,
    callback: CodeComponent.AdditionalCallback || null,
    hideTabs: false
  }
  render() {
    return <ItemWrapper {...SwitchDemo.defaultProps} {...this.props} />
  }
}