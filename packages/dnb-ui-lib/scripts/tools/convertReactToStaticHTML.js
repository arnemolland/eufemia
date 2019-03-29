/**
 * Converts a React Component into a static HTML
 *
 *
 */

import { log } from '../lib'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import path from 'path'
import fs from 'fs-extra'
import prettier from 'prettier'

import { Button } from '../../src'

convertReactToHTML(Button, {
  text: `{text}`
})

async function convertReactToHTML(Component, props, children = null) {
  try {
    const comp = <Component {...props}>{children}</Component>
    const html = ReactDOMServer.renderToStaticMarkup(comp)

    const formattedHTML = prettier.format(html, {
      printWidth: 75,
      tabWidth: 2,
      singleQuote: true,
      bracketSpacing: true,
      useTabs: false,
      semi: false,
      trailingComma: 'es5',
      filepath: 'file.html'
    })

    const staticExportDir = path.resolve(__dirname, `./static-export`)
    if (!fs.existsSync(staticExportDir)) {
      await fs.mkdir(staticExportDir)
    }

    const fileName = `${Component.tagName}.html`
    const exportedFilePath = path.resolve(staticExportDir, fileName)
    fs.writeFile(exportedFilePath, formattedHTML)

    log.succeed(`> Successfully written static export: ${fileName}`)
  } catch (e) {
    log.fail('Failed to run the convertReactToHTML')
    log.fail(e)
  }
}
