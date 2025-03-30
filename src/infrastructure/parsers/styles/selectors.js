const { classes } = require('../../../styles/index.js')
const { resolveCSSClass } = require('../../../utils/resolve-css-class.js')

/**
 * @type {import('../../../../index').parseSelector}
 */
function parseSelector(className) {
  const regex = className.match(/\:(.*?)\:\[(.*?)\]/)
  return regex ? `.${resolveCSSClass(className)}:${regex[1]}{${classes[regex[2]]}}` : className
}

module.exports.parseSelector = parseSelector
