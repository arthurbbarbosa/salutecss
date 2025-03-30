/**
 * CSS Text Decoration
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text_decoration
 */
module.exports = {
  'text-underline': 'text-decoration: underline',
  'text-underline-solid': 'text-decoration-style: solid',
  'text-underline-double': 'text-decoration-style: double',
  'text-underline-dotted': 'text-decoration-style: dotted',
  'text-underline-dashed': 'text-decoration-style: dashed',
  'text-underline-wavy': 'text-decoration-style: wavy',
  'text-nodecoration': 'text-decoration: none',
  'text-decoration-[value]': (value) => `text-decoration-color: ${value}`,
}
