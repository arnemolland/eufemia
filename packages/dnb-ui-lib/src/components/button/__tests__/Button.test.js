/**
 * Component Test
 *
 */

import React from 'react'
import {
  mount,
  fakeProps,
  toJson,
  axeComponent,
  loadScss
} from '../../../core/jest/jestSetup'
import Component from '../Button'

// just to make sure we re-run the test in watch mode due to changes in theese files
import _button from '../style/_button.scss' // eslint-disable-line
import dnb_button from '../style/dnb-button.scss' // eslint-disable-line
import dnb_button_theme_ui from '../style/themes/dnb-button-theme-ui.scss' // eslint-disable-line

const props = fakeProps(require.resolve('../Button'), {
  optional: true
})
props.variant = 'primary'
props.icon = 'question'
props.title = 'This is a button title'
props.size = null
props.icon_position = 'right'

describe('Button component', () => {
  it('have to match default button snapshot', () => {
    const Comp = mount(<Component {...props} href={null} />)
    expect(toJson(Comp)).toMatchSnapshot()
  })

  it('have to match href="..." snapshot', () => {
    const Comp = mount(<Component {...props} href="https://url" />)
    expect(toJson(Comp)).toMatchSnapshot()
  })

  it('has a button tag', () => {
    const title = 'title'
    const Comp = mount(<Component {...props} title={title} href={null} />)
    expect(Comp.find('button').exists()).toBe(true)
    expect(Comp.find('button').props().title).toBe(title)
  })

  it('icon only has to have some extra classes', () => {
    const Comp = mount(<Component icon="question" />)

    // size "medium" (32px)
    expect(Comp.find('.dnb-button--size-medium').exists()).toBe(true)

    // has icon class, but not has text
    expect(Comp.find('.dnb-button--has-icon').exists()).toBe(true)
    expect(Comp.find('.dnb-button--has-text').exists()).toBe(false)
  })

  it('has to have a bounding tag if property is set', () => {
    const Comp = mount(<Component bounding={true} />)
    expect(Comp.find('.dnb-button__bounding').exists()).toBe(true)
  })

  it('has a button tag', () => {
    const Comp = mount(<Component {...props} href="https://url" />)
    expect(Comp.find('a').exists()).toBe(true)
  })

  it('has a disabled attribute, once we set disabled to true', () => {
    const Comp = mount(<Component />)
    Comp.setProps({
      disabled: true
    })
    expect(
      Comp.find('button')
        .instance()
        .hasAttribute('disabled')
    ).toBe(true)
  })

  it('has "on_click" event witch will trigger on a click', () => {
    const my_event = jest.fn()
    const myEvent = jest.fn()
    const Comp = mount(<Component on_click={my_event} onClick={myEvent} />)
    Comp.simulate('click')
    expect(my_event.mock.calls.length).toBe(1)
    expect(myEvent.mock.calls.length).toBe(1)
  })

  it('should validate with ARIA rules as a button', async () => {
    const Comp = mount(<Component {...props} />)
    expect(await axeComponent(Comp)).toHaveNoViolations()
  })

  it('should validate with ARIA rules as a anchor', async () => {
    const Comp = mount(<Component {...props} href="https://url" />)
    expect(await axeComponent(Comp)).toHaveNoViolations()
  })
})

describe('Button scss', () => {
  it('have to match snapshot', () => {
    const scss = loadScss(require.resolve('../style/dnb-button.scss'))
    expect(scss).toMatchSnapshot()
  })
  it('have to match default theme snapshot', () => {
    const scss = loadScss(
      require.resolve('../style/themes/dnb-button-theme-ui.scss')
    )
    expect(scss).toMatchSnapshot()
  })
})
