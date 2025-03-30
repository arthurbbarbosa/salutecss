/**
 * CSS Grid Layout
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
 */
module.exports = {
  'grid-[value]': (value) => `grid: ${value}`,
  'grid-columns-[value]': (value) => `grid-column: ${value}`,
  'grid-rows-[value]': (value) => `grid-rows: ${value}`,
  'grid-template-columns-[value]': (value) => `grid-template-columns: ${value}`,
  'grid-template-rows-[value]': (value) => `grid-template-rows: ${value}`
}
