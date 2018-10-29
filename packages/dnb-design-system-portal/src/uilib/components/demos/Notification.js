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
} from 'dnb-ui-lib/src/components/notification/Example'
import InfoComponent from 'dnb-ui-lib/src/components/notification/info.md'
import ExampleCode from 'raw-loader!../examples/Notification.txt'

export default class NotificationDemo extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    InfoComponent: PropTypes.func,
    DemoComponent: PropTypes.func,
    CodeComponent: PropTypes.func,
    hideTabs: PropTypes.bool
  }
  static defaultProps = {
    title: 'Notification',
    id: 'notification',
    ExampleCode,
    InfoComponent,
    DemoComponent,
    CodeComponent,
    callback: CodeComponent.AdditionalCallback || null,
    hideTabs: false
  }
  render() {
    return (
      <ItemWrapper {...NotificationDemo.defaultProps} {...this.props} />
    )
  }
}