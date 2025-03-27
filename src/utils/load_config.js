const { resolve } = require('node:path')

/**
 * @type {import('../../index.d.ts').load_config}
 */
function load_config() {
  const config = require(resolve(process.cwd(), 'salute.config.js'))

  return {
    input: config.content,
    output: config.output || 'salute.css',
    defer: config.defer || []
  }
}

module.exports.load_config = load_config
