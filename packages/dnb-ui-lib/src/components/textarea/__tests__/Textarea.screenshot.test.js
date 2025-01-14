/**
 * Screenshot Test
 * This file will not run on "test:staged" because we dont require any related files
 */

import {
  testPageScreenshot,
  setupPageScreenshot
} from '../../../core/jest/jestSetupScreenshots'

describe('Textarea screenshot', () => {
  const style = {
    width: '14rem' // make sure our textarea gets an explicit width, because of mac/linux rendering differences
  }
  setupPageScreenshot({ url: '/uilib/components/textarea' })
  it('have to match the "default" textarea style', async () => {
    const screenshot = await testPageScreenshot({
      style,
      selector: '[data-dnb-test="textarea-default"]',
      // Only for screenshot testing - make textarea having same width on linux chromium
      styleSelector: '[data-dnb-test="textarea-default"] textarea'
    })
    expect(screenshot).toMatchImageSnapshot()
  })
  // we do not make a active state, due to the differences of font rendering
  it('have to match the "focus" textarea style', async () => {
    const screenshot = await testPageScreenshot({
      style,
      selector: '[data-dnb-test="textarea-default"]',
      simulateSelector: '[data-dnb-test="textarea-default"] textarea',
      simulate: 'focus',
      // Only for screenshot testing - make textarea having same width on linux chromium
      styleSelector: '[data-dnb-test="textarea-default"] textarea'
    })
    expect(screenshot).toMatchImageSnapshot()
  })
  // we do not make a active state, due to the differences of font rendering
  it('have to match the "hover" textarea style', async () => {
    const screenshot = await testPageScreenshot({
      style,
      selector: '[data-dnb-test="textarea-default"]',
      simulateSelector: '[data-dnb-test="textarea-default"] textarea',
      simulate: 'hover',
      // Only for screenshot testing - make textarea having same width on linux chromium
      styleSelector: '[data-dnb-test="textarea-default"] textarea'
    })
    expect(screenshot).toMatchImageSnapshot()
  })
  it('have to match the default error textarea style', async () => {
    const screenshot = await testPageScreenshot({
      style,
      selector: '[data-dnb-test="textarea-error"]',
      // Only for screenshot testing - make textarea having same width on linux chromium
      styleSelector: '[data-dnb-test="textarea-error"] textarea'
    })
    expect(screenshot).toMatchImageSnapshot()
  })
  it('have to match stretched textarea style', async () => {
    const screenshot = await testPageScreenshot({
      style: {
        width: '30rem' // make sure our textarea gets an explicit width, because of mac/linux rendering differences
      },
      // Only for screenshot testing - make textarea having same width on linux chromium
      // styleSelector: '[data-dnb-test="textarea-stretch"]',
      selector: '[data-dnb-test="textarea-stretch"]'
    })
    expect(screenshot).toMatchImageSnapshot()
  })
})
