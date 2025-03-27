const { globSync } = require('fast-glob')
const { resolve } = require('node:path')
const { writeFileSync, readFileSync } = require('node:fs')

const { resolve_html } = require('./utils/resolve_html.js')
const { load_config } = require('./utils/load_config.js')

/**
 * @type {import('../index').build}
 */
function build(args) {
  const { input, output = 'salute.css', defer = [] } =
    args.input ? args : load_config()

  const css = globSync(input).reduce((acc, file) => {
    const html = resolve_html(readFileSync(resolve(file), 'utf-8'), defer)
    return acc + html
  }, '')

  writeFileSync(resolve(output), css)
}

module.exports.build = build
