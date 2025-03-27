const { resolve } = require('node:path')

/**
 * @type {import('../../index.d.ts').load_config}
 */
function load_config() {
  const config = require(resolve(process.cwd(), 'salute.config.js'))

  return {
    input: config.content || config.default?.content,
    output: config.output || config.default?.output || 'salute.css',
    defer: config.defer || config.default?.defer || []
  }
}

module.exports.load_config = load_config
