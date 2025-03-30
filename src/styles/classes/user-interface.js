/**
 * CSS Basic User Interface
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_basic_user_interface
 */
module.exports = {
  'accent-[value]': (value) => `accent-color: ${value}`,

  'appearance-none': 'appearance: none',
  'appearance-auto': 'appearance: auto',
  'appearance-textfield': 'appearance: textfield',

  'cursor-[value]': (value) => `cursor: ${value}`,
  'cursor-pointer': 'cursor: pointer',
  'cursor-wait': 'cursor: wait',
  'cursor-not-allowed': 'cursor: not-allowed',
  'cursor-grab': 'cursor: grab',
  'cursor-none': 'cursor: none',
  'cursor-text': 'cursor: text',
  'cursor-resize': 'cursor: all-resize',

  'outline-[value]': (value) => `outline: ${value}`,

  'no-resize': 'resize: none',
  'resize-all': 'resize: both',
  'resize-x': 'resize: horizontal',
  'resize-y': 'resize: vertical',

  'select-none': 'user-select: none',
  'select-text': 'user-select: text',
  'select-all': 'user-select: all'
}
