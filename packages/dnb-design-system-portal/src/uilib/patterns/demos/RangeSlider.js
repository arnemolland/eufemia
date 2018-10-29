/** 
  ATTENTION: This file is auto generated by using "makeDemosFactory".
  Do not change the content!
     */
/**
 * Element Demo setup
 * Ready for imporing in page
 *
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemWrapper from '../../../shared/parts/uilib/ItemWrapper'
import DemoComponent, {
  Example as CodeComponent
} from 'dnb-ui-lib/src/patterns/range-slider/Example'
import InfoComponent from 'dnb-ui-lib/src/patterns/range-slider/info.md'
import ExampleCode from 'raw-loader!../examples/RangeSlider.txt'

export default class RangeSliderDemo extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    InfoComponent: PropTypes.func,
    DemoComponent: PropTypes.func,
    CodeComponent: PropTypes.func,
    hideTabs: PropTypes.bool
  }
  static defaultProps = {
    title: 'RangeSlider',
    id: 'range-slider',
    ExampleCode,
    InfoComponent,
    DemoComponent,
    CodeComponent,
    callback: CodeComponent.AdditionalCallback || null,
    hideTabs: false
  }
  render() {
    return (
      <ItemWrapper {...RangeSliderDemo.defaultProps} {...this.props} />
    )
  }
}