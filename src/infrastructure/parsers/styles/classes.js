const { classes } = require('../../../styles/index.js')
const { resolveCSSClass, valueToPrimitiveValue, getValue } = require('../../../utils/resolve-css-class.js')

/**
 * @type {import('../../../../index').parseClasses}
 */
function parseClass(className) {
  const regex = valueToPrimitiveValue(className)
  const value = typeof classes[regex] === 'function' ? classes[regex](getValue(className)) : classes[regex]

  return value ? `.${resolveCSSClass(className)}{${value}}` : null
}

module.exports.parseClass = parseClass
