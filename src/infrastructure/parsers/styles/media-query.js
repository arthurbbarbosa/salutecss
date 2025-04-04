const { media_query, classes } = require('../../../styles/index.js')
const { getValue, resolveCSSClass, valueToPrimitiveValue, removeBrackets } = require('../../../utils/resolve-css-class.js')

/**
 * @type {import('../../../../index').parseMediaQuery}
 */
function parseMediaQuery(className) {
  const regex = className.match(/media-(max|min)-(sm|md|lg|xl|xxl|\[(.*?)\]):\[(.*)\]/)

  if (regex) {
    const primitive = valueToPrimitiveValue(regex[4])
    const value = typeof classes[primitive] === 'function' ? classes[primitive](getValue(regex[4])) : classes[primitive]

    return `${media_query[valueToPrimitiveValue(className)](resolveCSSClass(className), value, removeBrackets(regex[2]))}`
  } else return null
}

module.exports.parseMediaQuery = parseMediaQuery
