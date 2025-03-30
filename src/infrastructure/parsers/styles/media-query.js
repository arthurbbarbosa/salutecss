const { media_query, classes } = require('../../../styles/index.js')
const { resolveCSSClass, valueToPrimitiveValue, removeBrackets } = require('../../../utils/resolve-css-class.js')

/**
 * @type {import('../../../../index').parseMediaQuery}
 */
function parseMediaQuery(className) {
  const regex = className.match(/media-(max|min)-(sm|md|lg|xl|xxl|\[(.*?)\]):\[(.*?)\]/)
  return regex ? `${media_query[valueToPrimitiveValue(className)](resolveCSSClass(className), classes[regex[4]], removeBrackets(regex[2]))}` : className
}

module.exports.parseMediaQuery = parseMediaQuery
