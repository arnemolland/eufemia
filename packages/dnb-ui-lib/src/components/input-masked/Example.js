/**
 * UI lib Component Example
 *
 */

import React, { Component, Fragment } from 'react'
import InputMasked from './InputMasked'
import { css } from 'react-emotion'

import createNumberMask from 'text-mask-addons/dist/createNumberMask' // https://github.com/text-mask/text-mask
const numberMask = createNumberMask({
  allowDecimal: false,
  prefix: '',
  suffix: ' kr.'
})

class Example extends Component {
  constructor(props) {
    super(props)
    this._ref = React.createRef()
  }
  componentDidMount() {
    this.setState({
      icon: 'chevron-right'
    })
    // use this only in case of using web-components - so the tag should then be <dnb-input-masked ref={}> insted if <InputMasked>
    if (this._ref.current.addEvent) {
      InputMasked.enableWebComponent()
      const cb = e => {
        console.log('on_change', e)
      }
      const eventId = this._ref.current.addEvent('on_change', cb)

      setTimeout(() => {
        this._ref.current.fireEvent('on_change', {
          value:
            'Hello from an auto fired event with a new value. But the event listener gets removed in 2 seconds.'
        })
        setTimeout(() => {
          this._ref.current.removeEvent(eventId)
        }, 2e3)
      }, 2e3)
    }
  }
  handleInputMaskedChange = ({ value }) => {
    console.log(value)
  }
  render() {
    return (
      <Fragment>
        <InputMasked
          mask={[
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/
          ]}
          show_mask="true"
          attributes={{
            'data-fake:show_mask': 'true'
          }}
          ref={this._ref}
        />

        <InputMasked
          id="text-input-masked-large"
          autocomplete="off"
          size="large"
          mask={numberMask}
          align="right"
          placeholder="Enter an amount"
          on_change={this.handleInputMaskedChange}
        />

        <InputMasked
          id="text-input-masked-large"
          autocomplete="off"
          size="large"
          value="1000000"
          mask={numberMask}
          show_mask="true"
          align="right"
          on_change={this.handleInputMaskedChange}
        />
      </Fragment>
    )
  }
}

export { Example }
export default () => (
  <div
    css={css`
      display: block;
      width: 100%;

      .dnb-input {
        margin: 1rem 0;
      }
    `}
  >
    <Example />
  </div>
)