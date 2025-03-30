/**
 * CSS Box Alignment
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment
 */
module.exports = {
  'align-start': 'align-items: flex-start',
  'align-end': 'align-items: flex-end',
  'align-center': 'align-items: center',
  'align-baseline': 'align-items: baseline',
  'align-stretch': 'align-items: stretch',
  'align-[value]': (value) => `align-items: ${value}`,

  'gap-[value]': (value) => `gap: ${value}`,

  'justify-start': 'justify-content: start',
  'justify-end': 'justify-content: end',
  'justify-center': 'justify-content: center',
  'justify-between': 'justify-content: space-between',
  'justify-around': 'justify-content: space-around',
  'justify-evenly': 'justify-content: space-evenly',
  'justify-stretch': 'justify-content: stretch',

  'place-start': 'place-content: start',
  'place-end': 'place-content: end',
  'place-center': 'place-content: center',
  'place-between': 'place-content: space-between',
  'place-around': 'place-content: space-around',
  'place-evenly': 'place-content: space-evenly',
  'place-stretch': 'place-content: stretch'
}
