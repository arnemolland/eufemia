/**
 * Prepublish
 *
 *
 */

import fs from 'fs'
import path from 'path'
import postcss from 'postcss'
// import sass from 'node-sass'
import extractCustomProperties from 'postcss-extract-custom-properties'

// css to be processed
const scssFile = path.resolve(
  __dirname,
  // '../../src/style/core/properties.scss'
  '../../src/style/core/properties.css'
)

const css = fs.readFileSync(scssFile, 'utf8')
// const { css } = sass.renderSync({
//   // data: scss
//   file: scssFile
// })

// console.log('css', css)

// file path to write results
// const outputFile = path.resolve(__dirname, './output.json')

// var postcssOptions = {
//   from: undefined
//   // to: path_1.basename(sassConfig.outFile),
//   // map: autoPrefixerMapOptions
// }

// process css using postcss-extract-custom-properties
postcss()
  .use(extractCustomProperties)
  .process(css)
  .then(result => {
    // console.log('result', result)
    const data = result.contents
    console.log('data', data)

    // Deal with warnings
    result.warnings().forEach(warn => {
      console.log(warn.word.toString())
    })

    // Write JSON string to file
    // const string = JSON.stringify(data).replace(/ /g, '')
    // fs.writeFileSync(outputFile, string)
  })
