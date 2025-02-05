/**
 * dnb-ui-lib Component Story
 *
 */

import React /* , { useState, useEffect } */ from 'react'
import { Wrapper, Box } from '../helpers'
// import styled from '@emotion/styled'

import { Switch, FormLabel } from '../../src/components'

export default [
  'Switch',
  () => (
    <Wrapper>
      <Box>
        Text: <FormLabel for_id="switch">Unchecked:</FormLabel>
        <Switch id="switch" checked={false} />
      </Box>
      <Box>
        <p className="dnb-p">
          <Switch label="Checked:" checked label_position="left" />
        </p>
      </Box>
      <Box>
        Text:{' '}
        <Switch
          label="Unchecked disabled:"
          checked={false}
          disabled
          label_position="left"
        />
      </Box>
      <Box>
        Text: <Switch label="Checked disabled" checked disabled />
      </Box>
      <Box>
        <Switch
          label="Unchecked status error:"
          label_position="left"
          checked={false}
          status="error"
        />
      </Box>
      <Box>
        <Switch
          label="Label:"
          label_position="left"
          checked
          status="Error message Vulputate consequat pellentesque senectus conubia proin sapien felis inceptos eu"
          status_state="info"
        />
      </Box>
      <Box>
        <Switch
          label="Label"
          checked
          status="Error message Vulputate consequat pellentesque senectus conubia proin sapien felis inceptos eu"
        />
      </Box>
    </Wrapper>
  )
]
