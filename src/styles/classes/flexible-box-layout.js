/**
 * CSS Flexible Box Layout
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
 */
module.exports = {
  'flex-[value]': (value) => `flex: ${value}`,
  'flex-column': 'flex-direction: column',
  'flex-row': 'flex-direction: row',
  'flex-reverse-column': 'flex-direction: column-reverse',
  'flex-reverse-row': 'flex-direction: row-reverse',
  'flex-wrap': 'flex-wrap: wrap',
  'flex-nowrap': 'flex-wrap: nowrap',
  'flex-reverse-wrap': 'flex-wrap: wrap-reverse'
}
