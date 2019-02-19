/**
 * Web StepIndicator Component
 *
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  registerElement,
  validateDOMAttributes,
  processChildren,
  dispatchCustomElementEvent
} from '../../shared/component-helper'
import { Dummy } from '../tabs/Tabs'

const renderProps = {
  on_change: null
}

export const propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string,
        url_future: PropTypes.string,
        url_passed: PropTypes.string
      })
    )
  ]).isRequired,
  active_item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active_url: PropTypes.string,
  show_numbers: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  class: PropTypes.string,
  /** React props */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func
  ]),
  // Web Component props
  on_change: PropTypes.func
}

export const defaultProps = {
  data: [],
  active_item: 1,
  active_url: null,
  show_numbers: true,
  class: null,
  /** React props */
  className: null,
  children: null,
  // Web Component props
  ...renderProps
}

export default class StepIndicator extends PureComponent {
  static tagName = 'dnb-step-indicator'
  static propTypes = propTypes
  static defaultProps = defaultProps

  static enableWebComponent() {
    registerElement(StepIndicator.tagName, StepIndicator, defaultProps)
  }

  static getData(props) {
    let res = []
    if (props.data) res = props.data
    else res = processChildren(props)
    if (typeof res === 'string')
      return res[0] === '[' ? JSON.parse(res) : []
    return res || []
  }

  static getDerivedStateFromProps(props, state) {
    if (state._listenForPropChanges) {
      if (props.data) {
        if (state._data !== props.data) {
          state._data = props.data
          state.data = StepIndicator.getData(props)
        }
      }
      if (state.active_item !== props.active_item) {
        state.active_item = props.active_item
      }
      if (
        props.active_url !== null &&
        state.active_url !== props.active_url
      ) {
        state.active_url = props.active_url
      }
    }
    state._listenForPropChanges = true
    return state
  }

  constructor(props) {
    super(props)

    this.state = {
      _listenForPropChanges: true,
      active_item: props.active_item,
      active_url: props.active_url,
      _data: props.data || props.children,
      data: StepIndicator.getData(props)
    }
  }

  onChangeHandler = (event, item) => {
    if (typeof this.props.on_change === 'function') {
      dispatchCustomElementEvent(this, 'on_change', { event, item })
    }
  }

  render() {
    const {
      active_item,
      active_url,
      show_numbers,
      className,
      class: _className,
      data: _data, //eslint-disable-line
      children, //eslint-disable-line
      on_change, //eslint-disable-line
      ...attributes
    } = this.props

    const data = StepIndicator.getData(this.props)
    let activeItem = parseFloat(active_item) - 1

    if (
      (active_url || !(parseFloat(active_item) > 0)) &&
      data.length > 0
    ) {
      activeItem = data.reduce(
        (acc, { url }, i) =>
          url && (url === active_item || url === active_url) ? i : acc,
        1
      )
    }

    const params = {
      className: classnames('dnb-step-indicator', className, _className),
      ...attributes
    }

    // also used for code markup simulation
    validateDOMAttributes(this.props, params)

    return (
      <div {...params}>
        {data.length > 0 && (
          <ul className="dnb-step-indicator__list">
            {data.map((props, i) => (
              <li
                key={`bc${i}`}
                className={classnames(
                  'dnb-step-indicator__item',
                  i === activeItem ? 'dnb-step-indicator--active' : null,
                  i < activeItem ? 'dnb-step-indicator--visited' : null
                )}
              >
                <ItemContent
                  {...{
                    activeItem,
                    show_numbers,
                    number: i,
                    ...props
                  }}
                  onChangeHandler={this.onChangeHandler}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

class ItemContent extends PureComponent {
  static propTypes = {
    activeItem: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    onChangeHandler: PropTypes.func,
    url: PropTypes.string,
    url_future: PropTypes.string,
    url_passed: PropTypes.string,
    title: PropTypes.string.isRequired
  }
  static defaultProps = {
    onChangeHandler: null,
    url: null,
    url_future: null,
    url_passed: null
  }

  _onChangeHandler = e => {
    this.props.onChangeHandler.apply(this.props.onChangeHandler, [
      e,
      this.props
    ])
  }

  render() {
    const {
      activeItem,
      title,
      url_future,
      url_passed,
      number,
      ...rest
    } = this.props
    let { url } = this.props
    if (number > activeItem) url = url_future
    if (url_passed !== null && number < activeItem) url = url_passed
    return url ? (
      <a
        className={classnames(
          'dnb-step-indicator-item-content',
          'dnb-step-indicator-item-content--link'
        )}
        href={url}
        onClick={this._onChangeHandler}
      >
        <ItemContentWrapper {...{ title, number, ...rest }} />
      </a>
    ) : (
      <span
        className={classnames(
          'dnb-step-indicator-item-content',
          'dnb-step-indicator-item-content--static'
        )}
      >
        <ItemContentWrapper {...{ number, title, ...rest }} />
      </span>
    )
  }
}

const ItemContentWrapper = ({ number, title, show_numbers }) => (
  <>
    <span className="dnb-step-indicator-number">
      {(show_numbers && `${number + 1}. `) || ''}
    </span>
    <span className="dnb-step-indicator-text">
      {title}
      <Dummy>{title}</Dummy>
    </span>
  </>
)
ItemContentWrapper.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  show_numbers: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired
}
