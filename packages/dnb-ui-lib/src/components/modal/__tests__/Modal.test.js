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

import Component from '../Modal'

// just to make sure we re-run the test in watch mode due to changes in theese files
import _modal from '../style/_modal.scss' // eslint-disable-line
import dnb_modal from '../style/dnb-modal.scss' // eslint-disable-line

const props = fakeProps(require.resolve('../Modal'), {
  all: true,
  optional: true
})
props.title = 'modal_title'
props.id = 'modal_id'
props.content_id = 'modal_content_id'
props.modal_content = 'unique_modal_content'
props.close_title = 'close_title'
props.direct_dom_return = true
props.preventSetTriggerRef = true // we set preventSetTriggerRef to true, cause jest gives us an error

describe('Modal component', () => {
  const Comp = mount(<Component {...props} />)
  Comp.setState({
    modalActive: true
  })
  it('have to match snapshot', () => {
    expect(toJson(Comp)).toMatchSnapshot()
  })
  it('has to have the correct title', () => {
    expect(Comp.find('h1').text()).toBe(props.title)
  })
  it('has no trigger button once we set trigger_hidden to true', () => {
    Comp.setProps({
      trigger_hidden: true
    })
    expect(Comp.find('button.dnb-modal__trigger').exists()).toBe(false)
    Comp.setProps({
      trigger_hidden: false
    })
  })
  it('has a disabled trigger button once we set trigger_disabled to true', () => {
    Comp.setProps({
      trigger_disabled: true
    })
    expect(
      Comp.find('button.dnb-modal__trigger')
        .instance()
        .hasAttribute('disabled')
    ).toBe(true)
  })
  it('has working open event and close event if "Esc" key gets pressed', async () => {
    const on_close = jest.fn()
    const on_open = jest.fn()
    const Comp = mount(
      <Component {...props} on_close={on_close} on_open={on_open} />
    )
    Comp.find('button').simulate('click')

    await wait(11) // wait for the render to be finished

    Comp.find('div.dnb-modal__content__inner').simulate('keyDown', {
      key: 'Esc',
      keyCode: 27
    })

    expect(on_open).toHaveBeenCalled()
    expect(on_close).toHaveBeenCalled()
  })
  it('runs expected side effects', async () => {
    const Comp = mount(<Component {...props} />)
    const elem = Comp.find('button')
    elem.simulate('click')

    await wait(10) // wait for the render to be finished

    const body = document.querySelector('[data-dnb-modal-active]')
    expect(body.nodeName).toBe('BODY')
    expect(body.style.overflow).toBe('hidden')

    elem.simulate('click')
    await wait(10) // wait for the render to be finished

    expect(body.style.overflow).not.toBe('hidden')
  })
  it('has expected open and close states', () => {
    const Comp = mount(<Component {...props} />)
    Comp.setProps({ open_state: 'opened' })

    expect(Comp.state().modalActive).toBe(true)

    Comp.setProps({ open_state: 'closed' })

    expect(Comp.state().modalActive).toBe(false)
  })
  it('has an opened modal if open_state is set to "opened"', () => {
    const Comp = mount(<Component {...props} />)
    Comp.setProps({
      open_state: 'opened'
    })
    expect(Comp.exists('div.dnb-modal__content')).toBe(true)
    Comp.setProps({
      open_state: 'closed'
    })
    expect(Comp.exists('div.dnb-modal__content')).toBe(false)
  })
  it('has to have the correct aria-describedby', () => {
    expect(
      Comp.find('[aria-describedby]').props()['aria-describedby']
    ).toBe(props.id)
  })
  it('has to have the correct role on aria-modal', () => {
    expect(Comp.find('[aria-modal]').props().role).toBe('dialog')
  })
  it('has to have a close button', () => {
    expect(
      Comp.find(`button[aria-label="${props.close_title}"]`).props()[
        'aria-label'
      ]
    ).toBe(props.close_title)
  })
  it('has to have no icon', () => {
    const Comp1 = mount(<Component trigger_text="Open Modal" />)
    expect(Comp1.find(`.dnb-icon`).exists()).toBe(false)
    const Comp2 = mount(
      <Component
        trigger_text="Open Modal"
        trigger_variant="tertiary"
        trigger_icon={null}
      />
    )
    expect(Comp2.find(`.dnb-icon`).exists()).toBe(false)
  })
  it('has to have an icon', () => {
    const Comp1 = mount(
      <Component trigger_text="Open Modal" trigger_variant="tertiary" />
    )
    expect(Comp1.find(`.dnb-icon`).exists()).toBe(true)
    const Comp2 = mount(
      <Component trigger_text="Open Modal" trigger_icon="add" />
    )
    expect(Comp2.find(`.dnb-icon`).exists()).toBe(true)
  })
  it('should validate with ARIA rules as a dialog', async () => {
    expect(await axeComponent(Comp)).toHaveNoViolations()
  })
})

describe('Modal scss', () => {
  it('have to match snapshot', () => {
    const scss = loadScss(require.resolve('../style/dnb-modal.scss'))
    expect(scss).toMatchSnapshot()
  })
})

const wait = t => new Promise(r => setTimeout(r, t))
