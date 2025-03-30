const ANIMATION = require('./classes/animation.js')
const BACKGROUND_AND_BORDERS = require('./classes/background-and-borders.js')
const BOX_ALIGNMENT = require('./classes/box-alignment.js')
const BOX_MODEL = require('./classes/box-model.js')
const BOX_SIZING = require('./classes/box-sizing.js')
const COLORS = require('./classes/colors.js')
const DISPLAY = require('./classes/display.js')
const FILTER = require('./classes/filter.js')
const FLEXIBLE_BOX_LAYOUT = require('./classes/flexible-box-layout.js')
const FONTS = require('./classes/fonts.js')
const GRID_LAYOUT = require('./classes/grid-layout.js')
const INLINE_LAYOUT = require('./classes/inline-layout.js')
const LISTS_AND_COUNTERS = require('./classes/lists-and-counters.js')
const OVERFLOW = require('./classes/overflow.js')
const POSITIONED_LAYOUT = require('./classes/positioned-layout.js')
const TEXT_DECORATION = require('./classes/text-decoration.js')
const TEXT = require('./classes/text.js')
const TRANSFORMS = require('./classes/transforms.js')
const TRANSITIONS = require('./classes/transitions.js')
const USER_INTERFACE = require('./classes/user-interface.js')
const CUSTOM = require('./customized.js')

const MEDIA_QUERY = require('./media/media-query.js')

module.exports.media_query = MEDIA_QUERY

module.exports.classes = {
  ...ANIMATION,
  ...BACKGROUND_AND_BORDERS,
  ...BOX_ALIGNMENT,
  ...BOX_MODEL,
  ...BOX_SIZING,
  ...COLORS,
  ...DISPLAY,
  ...FILTER,
  ...FLEXIBLE_BOX_LAYOUT,
  ...FONTS,
  ...GRID_LAYOUT,
  ...INLINE_LAYOUT,
  ...LISTS_AND_COUNTERS,
  ...OVERFLOW,
  ...POSITIONED_LAYOUT,
  ...TEXT_DECORATION,
  ...TEXT,
  ...TRANSFORMS,
  ...TRANSITIONS,
  ...USER_INTERFACE,
  ...CUSTOM,
}
