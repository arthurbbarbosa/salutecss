const FONT = require('./font.js')
const OTHERS = require('./others.js')
const CUSTOMIZED = require('./customized.js')
const POSITIONS = require('./positions-properties.js')

const styles = { ...FONT, ...OTHERS, ...POSITIONS, ...CUSTOMIZED }
module.exports.styles = styles
