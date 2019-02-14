/**
 * Jest Setup for Screenshot testing
 *
 */

const isCI = require('is-ci')
const { setupJestScreenshot } = require('jest-screenshot')

jest.setTimeout(30e3)

setupJestScreenshot({
  detectAntialiasing: true,
  // local we check for 0.1% accuracy
  // due to the differences of font rendering between the os (linux/mac/win)
  // we have to have a hight threshold of 10%
  pixelThresholdRelative: isCI ? 0.1 : 0.001
})