/**
 * Make all the pages files
 *
 */

import path from 'path'
import camelCase from 'camelcase'
import extractJSX from './tasks/extractJSX'
import runFactory from './tasks/makerFactory'
import processAllPartsFile from './tasks/processAllPartsFile'

if (require.main === module && process.env.NODE_ENV !== 'test') {
  const ignoreUiLibList = [
    'web-components',
    'style',
    'icon-with-all-icons'
  ]
  const keepFiles = [] //'!**/footer/*'
  const autoAdvice = `
  ATTENTION: This file is auto generated by using "makeDemosFactory".
  Do not change the content!
    `

  // make components demos
  runFactory({
    removeFiles: true,
    templateNameToRename: 'Template',
    tempalteFilePath: path.resolve(
      __dirname,
      '../components/demos/Template.js'
    ),
    processToNamesList: path.resolve(
      __dirname,
      '../../../../dnb-ui-lib/src/components/'
    ),
    processToNamesIgnoreList: ignoreUiLibList,
    processToNamesListByUsingFolders: true,
    processDestFilePath: path.resolve(__dirname, '../components/demos'),
    prepareDestFileCallback: file => camelCase(file, { pascalCase: true })
  }).then(files => {
    processAllPartsFile('components', files, {
      autoAdvice: `
        /** ${autoAdvice} */
      `
    })

    extractJSX('components', files)
  })

  // make components pages
  runFactory({
    removeFiles: keepFiles,
    templateNameToRename: 'Template',
    tempalteFilePath: path.resolve(
      __dirname,
      // '../../pages/uilib/components/template.md' // we can not have a template inside here, else it will be a valid page
      '../components/page-template.md'
    ),
    processDestFileExt: '.md',
    processDestFileContent: (content, i) => `${content.replace(
      /(order: )([0-9])/g,
      `$1${i + 1}`
    )}
    `,
    processToNamesIgnoreList: ignoreUiLibList, // in case we want to remove an additional component form the menu list: .concat(['body'])
    processToNamesList: path.resolve(
      __dirname,
      '../../../../dnb-ui-lib/src/components/'
    ),
    processToNamesListByUsingFolders: true,
    processDestFilePath: path.resolve(
      __dirname,
      '../../pages/uilib/components'
    ),
    // processDestFileFilter: ({ file }) => {
    //   return !['input-masked.md'].includes(
    //     file //.replace(/\.js|\.md/, '')
    //   )
    // },
    preprocessContent: ({ file, content }) => {
      if (/input-masked/.test(file)) {
        return content.replace('draft: false', 'draft: true')
      }
      return content
    },
    prepareDestFileCallback: file => file.toLowerCase()
  })

  // make patterns demos
  runFactory({
    // removeFiles: true,
    templateNameToRename: 'Template',
    tempalteFilePath: path.resolve(
      __dirname,
      '../patterns/demos/Template.js'
    ),
    processToNamesList: path.resolve(
      __dirname,
      '../../../../dnb-ui-lib/src/patterns/'
    ),
    processToNamesIgnoreList: ignoreUiLibList,
    processToNamesListByUsingFolders: true,
    processDestFilePath: path.resolve(__dirname, '../patterns/demos'),
    prepareDestFileCallback: file => camelCase(file, { pascalCase: true })
  }).then(files => {
    processAllPartsFile('patterns', files, {
      autoAdvice: `
          /** ${autoAdvice} */
        `
    })
    extractJSX('patterns', files)
  })

  // make patterns pages
  runFactory({
    removeFiles: keepFiles,
    templateNameToRename: 'Template',
    tempalteFilePath: path.resolve(
      __dirname,
      // '../../pages/uilib/patterns/template.md' // we can not have a template inside here, else it will be a valid page
      '../patterns/page-template.md'
    ),
    processDestFileExt: '.md',
    processToNamesIgnoreList: ignoreUiLibList,
    processToNamesList: path.resolve(
      __dirname,
      '../../../../dnb-ui-lib/src/patterns/'
    ),
    processToNamesListByUsingFolders: true,
    processDestFilePath: path.resolve(
      __dirname,
      '../../pages/uilib/patterns'
    ),
    // processDestFileFilter: ({ file }) => {
    //   return !['input-masked.md'].includes(
    //     file //.replace(/\.js|\.md/, '')
    //   )
    // },
    // preprocessContent: ({ file, content }) => {
    //   return content
    // },
    prepareDestFileCallback: file => file.toLowerCase()
  })
}

// for testing proposes
export { runFactory }