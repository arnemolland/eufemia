/**
 * dnb-ui-lib Component Story
 *
 */

import React, { useState } from 'react'
import { Wrapper, Box } from '../helpers'
import styled from '@emotion/styled'

import { Slider, Input, FormRow, FormLabel } from '../../src/components'

import '../../src/components/slider/style/dnb-range.scss'

const VerticalWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: column;

  max-width: 10rem;

  .dnb-slider__inner {
    min-height: 20rem;
  }

  .dnb-input {
    width: 4rem;
    margin-top: 1rem;
  }
`

const SliderStory = () => {
  const [value, setValue] = useState(70)
  return (
    <Wrapper>
      <Box>
        Text
        <Slider
          // hide_buttons
          label="Label:"
          // min={'50'}
          max={100}
          value={value}
          step={10}
          // reverse
          on_change={({ value, raw_value }) => {
            console.log('on_change:', value, raw_value)
            setValue(value)
          }}
          status="Long status message Lobortis lacus ac ligula vehicula Metus nullam ut at pellentesque"
        />
      </Box>
      <Box>
        <VerticalWrapper>
          <Slider
            label="Label Lobortis lacus ac ligula vehicula Metus nullam ut at pellentesque:"
            label_direction="vertical"
            min={0}
            max={100}
            value={value}
            step={1}
            // reverse
            vertical
            on_change={({ value, raw_value }) => {
              console.log('on_change:', value, raw_value)
              setValue(value)
            }}
            status="Long status message Lobortis lacus ac ligula vehicula"
            // on_state_update={({ value }) => {
            //   console.log('on_state_update:', value)
            // }}
            // attributes={{
            //   'data-fake:on_change': 'SliderDemo.onChangeHandler()',
            //   'data-fake:on_state_update':
            //     'SliderDemo.onStateUpdateHandler()'
            // }}
          />
          <Input
            align="center"
            value={String(value)}
            on_change={({ value }) => {
              setValue(parseFloat(value))
            }}
          />
        </VerticalWrapper>
      </Box>
      <Box>
        <Slider label="Disabled:" value="20" reverse disabled={true} />
      </Box>
      <Box>
        <FormRow>
          <FormLabel
            id="range-slider-label"
            for_id="range-slider"
            text="Native Range Slider"
          />
          <input
            id="range-slider"
            type="range"
            min="0"
            max="100"
            step="5"
            defaultValue="20"
            onChange={event => {
              console.log('range-slider:', event.currentTarget.value)
            }}
          />
        </FormRow>
      </Box>
    </Wrapper>
  )
}

export default ['Slider', () => <SliderStory />]
