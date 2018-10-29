/**
 * UI lib Component Example
 *
 */

import React, { Component, Fragment } from 'react'
import Button from './Button'
import { css } from 'react-emotion'
import { bell as Bell, question } from '../../../icons'

class Example extends Component {
  clickHandler = () => {
    alert('You clicked a button with a click function attached to it')
  }
  render() {
    return (
      <Fragment>
        <Button
          text="Primary button with text only"
          title="This is a button title"
          on_click={this.clickHandler}
          attributes={{
            'data-fake:on_click': 'clickme()'
          }}
        />
        <Button
          text="Secondary button with text only"
          variant="secondary"
          title="This is a button title"
        />
        <Button
          text="Disabled primary button"
          title="This is a button title"
          disabled
        />
        <Button
          text="Disabled secondary button"
          variant="secondary"
          title="This is a button title"
          disabled
        />
        <Button
          text="Primary button with icon"
          title="This is a button title"
          icon="chevron-right"
        />
        <Button
          text="Primary button with icon on left"
          title="This is a button title"
          icon_position="left"
          icon="chevron-left"
        />
        <Button
          variant="teritary"
          text="Teritary button with icon on left"
          title="This is a button title"
          icon_position="left"
          icon="chevron-left"
        />
        <Button
          variant="teritary"
          text="Teritary button with icon on left"
          title="This is a button title"
          icon_position="left"
          icon="chevron-left"
          disabled
        />
        <Button
          text="Primary button with href"
          href="?no-cache=1"
          title="This is a link"
          icon_position="right"
          icon="chevron-right"
        />
        <Button
          variant="primary"
          title="Button with Icon only"
          icon={question}
        />
        <Button
          variant="secondary"
          title="Button with Icon only"
          icon={Bell}
        />
        <Button
          variant="signal"
          text="Signal Button (big size)"
          size="big"
          icon="bell"
          icon_size="24"
        />
        <Button
          variant="signal"
          text="Disabled Signal Button"
          icon={<Bell width="24" />}
          disabled
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

      .dnb-button {
        margin: 1rem 0.2rem;
      }
    `}
  >
    <Example />
  </div>
)