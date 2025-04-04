const { writeFileSync, readFileSync } = require('node:fs')
const { resolve } = require('node:path')

const { resolveConfigFile } = require('./utils/resolve-config-file.js')
const { parseStyle } = require('./infrastructure/index.js')
const { glob } = require('./utils/glob.js')

/**
 * @type {import('../index').build}
 */
function build(args) {
  try {
    const { input, output = 'salute.css', defer = [] } = args?.input !== undefined ? args : resolveConfigFile()

    const file = glob(input).map((file) => readFileSync(resolve(file), 'utf-8')).join('')
    const stylesheet = parseStyle(file, defer)

    writeFileSync(resolve(output), stylesheet)
  } catch(err) {
    console.log(`SaluteCSS Error: ${err}`)
  }
}

module.exports.build = build
