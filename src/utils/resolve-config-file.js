const { resolve } = require('node:path')

/**
 * @type {import('../../index').resolveConfigFile}
 */
function resolveConfigFile() {
  const config = require(resolve(process.cwd(), 'salute.config.js'))

  return {
    input: config.content || config.default?.content,
    output: config.output || config.default?.output || 'salute.css',
    defer: config.defer || config.default?.defer || []
  }
}

module.exports.resolveConfigFile = resolveConfigFile
