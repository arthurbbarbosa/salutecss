/**
 * CSS Transitions
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions
 */
module.exports = {
  'transition-fade-in': 'transition: opacity 250ms ease-in, visibility 0ms ease-in 0ms',
  'transition-color': 'transition: color, background-color, border-color, text-decoration-color, fill, stroke 150ms linear',
  'transition-[value]': (value) => `transition: ${value}`
}
