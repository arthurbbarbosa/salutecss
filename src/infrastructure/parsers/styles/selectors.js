const { classes } = require('../../../styles/index.js')
const { resolveCSSClass, valueToPrimitiveValue, getValue } = require('../../../utils/resolve-css-class.js')

function parseSelector(className) {
  const regex = className.match(/:(.*?):\[(.*)\]/)

  if (regex) {
    const primitive = valueToPrimitiveValue(regex[2])
    const value = typeof classes[primitive] === 'function' ? classes[primitive](getValue(regex[2])) : classes[primitive]

    return `.${resolveCSSClass(className)}:${regex[1]}{${value}}`
  } else return null
}

module.exports.parseSelector = parseSelector
