/**
 * Jest Setup for Screenshot testing
 *
 */

const fs = require('fs-extra')
const packpath = require('packpath')
const path = require('path')
const { create } = require('tar')
const chalk = require('chalk')
const rimraf = require('rimraf')
const isCi = require('is-ci')
const liveServer = require('live-server')
import {
  commitToBranch,
  getCurrentBranchName
} from '../../../scripts/prepub/commitToBranch'
const { DIR } = require('./jestSetupScreenshots').config

module.exports = async function() {
  if (isCi) {
    console.log(chalk.yellow('Teardown Puppeteer.'))
  }

  if (liveServer.shutdown) {
    liveServer.shutdown()
  }
  // close the browser instance
  await global.__BROWSER_GLOBAL__.close()

  // commit a tar of the reports if we are on a CI
  if (isCi) {
    console.log(
      chalk.yellow('Will commit "jest-screenshot-report" to git.')
    )
    const reportPath = path.resolve(
      packpath.self(),
      './jest-screenshot-report'
    )
    if (fs.existsSync(reportPath)) {
      const branchName = (await getCurrentBranchName()).replace(/\//g, '-')
      const file = `${branchName}-jest-screenshot-report.tgz`
      const filePath = path.resolve(packpath.self(), `./reports/${file}`)
      await create(
        {
          gzip: true,
          file: filePath
        },
        ['./jest-screenshot-report']
      )
      await commitToBranch({
        skipCI: true,
        requiredBranch: [
          'develop',
          'release',
          'beta',
          'alpha',
          'rc/*',
          'ftr/*'
        ],
        what: 'reports',
        filePathsWhitelist: [file],
        isNotAFeature: [file]
      })
    } else {
      console.log(
        chalk.red(`reportPath did not exists commit: ${reportPath}`)
      )
    }
  }

  // clean-up the wsEndpoint file
  rimraf.sync(DIR)
}
