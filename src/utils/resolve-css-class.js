function resolveCSSClass(className) {
  return className.replace(/[\[\]:\-#()\/\+\*]/g, '\\$&')
}

function removeBrackets(className) {
  return className.replace(/[\[\]]/g, '')
}

function valueToPrimitiveValue(className) {
  return className.replace(/\[(.*?)\]/g, '[value]')
}

function getValue(className) {
  const match = className.match(/\[(.+?)\]/)
  return match ? removeBrackets(match[0].replace(/\_/g, ' ')) : ''
}

module.exports = { removeBrackets, resolveCSSClass, valueToPrimitiveValue, getValue }
