// Color and Background
const accent_color = { 'accent-[value]': (value) => `accent-color: ${value}` }
const color = { 'color-[value]': (value) => `color: ${value}` }
const background = { 'background-[value]': (value) => `background: ${value}` }
const backdrop = { 'backdrop-[value]': (value) => `backdrop-filter: ${value}` }
const shadow = { 'shadow-[value]': (value) => `box-shadow: ${value}` }
const caret = { 'caret-[value]': (value) => `caret-color: ${value}` }

// Animation and Transition
const animation = { 'animate-[value]': (value) => `animation: ${value}` }
const transition = {
  'transition-fade-in': 'transition: opacity 250ms ease-in, visibility 0ms ease-in 0ms',
  'transition-color': 'transition: color, background-color, border-color, text-decoration-color, fill, stroke 150ms linear',
  'transition-[value]': (value) => `transition: ${value}`
}

// Alignment
const align_content = {
  'align-content-center': 'align-content: center',
  'align-content-start': 'align-content: start',
  'align-content-end': 'align-content: end',
  'align-content-normal': 'align-content: normal',
  'align-content-between': 'align-content: space-between',
  'align-content-around': 'align-content: space-around',
  'align-content-evenly': 'align-content: space-evenly',
  'align-content-baseline': 'align-content: baseline',
  'align-content-stretch': 'align-content: stretch',
  'align-content-[value]': (value) => `align-content: ${value}`
}

const align_items = {
  'align-items-start': 'align-items: flex-start',
  'align-items-end': 'align-items: flex-end',
  'align-items-center': 'align-items: center',
  'align-items-baseline': 'align-items: baseline',
  'align-items-stretch': 'align-items: stretch',
  'align-items-[value]': (value) => `align-items: ${value}`
}

const align_self = {
  'align-self-auto': 'align-self: auto',
  'align-self-start': 'align-self: flex-start',
  'align-self-end': 'align-self: flex-end',
  'align-self-center': 'align-self: center',
  'align-self-stretch': 'align-self: stretch',
  'align-self-baseline': 'align-self: baseline',
  'align-self-[value]': (value) => `align-self: ${value}`
}

// Visibility and Opacity
const visibility = {
  'visible': 'visibility: visible',
  'invisible': 'visibility: hidden'
}

const opacity = {
  'opacity-0': 'opacity: 0',
  'opacity-25': 'opacity: .25',
  'opacity-50': 'opacity: .50',
  'opacity-75': 'opacity: .75',
  'opacity-1': 'opacity: 1',
  'opacity-[value]': (value) => `opacity: ${value}`
}

// Appearance
const appearance = {
  'appearance-none': 'appearance: none',
  'appearance-auto': 'appearance: auto',
  'appearance-textfield': 'appearance: textfield'
}

// Border
const border = {
  'border-size-[value]': (value) => `border-width: ${value}`,
  'border-[value]': (value) => `border: ${value}`,
  'border-top-size-[value]': (value) => `border-top-width: ${value}`,
  'border-top-[value]': (value) => `border-top: ${value}`,
  'border-bottom-size-[value]': (value) => `border-bottom-width: ${value}`,
  'border-bottom-[value]': (value) => `border-bottom: ${value}`,
  'border-left-size-[value]': (value) => `border-left-width: ${value}`,
  'border-left-[value]': (value) => `border-left: ${value}`,
  'border-right-size-[value]': (value) => `border-right-width: ${value}`,
  'border-right-[value]': (value) => `border-right: ${value}`
}

// Positioning
const position = {
  'static': 'position: static',
  'relative': 'position: relative',
  'absolute': 'position: absolute',
  'fixed': 'position: fixed',
  'sticky': 'position: sticky'
}

// Size
const size = {
  'height-[value]': (value) => `height: ${value}`,
  'width-[value]': (value) => `width: ${value}`,
  'size-[value]': (value) => `width: ${value}; height: ${value}`,
  'max-height-[value]': (value) => `max-height: ${value}`,
  'max-width-[value]': (value) => `max-width: ${value}`,
  'max-size-[value]': (value) => `max-width: ${value}; max-height: ${value}`,
  'min-height-[value]': (value) => `min-height: ${value}`,
  'min-width-[value]': (value) => `min-width: ${value}`,
  'min-size-[value]': (value) => `min-width: ${value}; min-height: ${value}`,
  'height-auto': 'height: auto',
  'width-auto': 'width: auto',
  'size-auto': 'width: auto; height: auto',
  'height-fit': 'height: fit-content',
  'width-fit': 'width: fit-content',
  'size-fit': 'width: fit-content; height: fit-content',
  'height-full': 'height: 100%',
  'width-full': 'width: 100%',
  'size-full': 'width: 100%; height: 100%',
  'height-screen': 'height: 100vh',
  'width-screen': 'width: 100vh',
  'size-screen': 'width: 100vh; height: 100vh'
}

// Other properties
const cursor = {
  'cursor-[value]': (value) => `cursor: ${value}`,
  'cursor-pointer': 'cursor: pointer',
  'cursor-wait': 'cursor: wait',
  'cursor-crosshair': 'cursor: crosshair',
  'cursor-not-allowed': 'cursor: not-allowed',
  'cursor-grab': 'cursor: grab',
  'cursor-none': 'cursor: none',
  'cursor-auto': 'cursor: auto',
  'cursor-caret': 'cursor: text',
  'cursor-resize': 'cursor: all-resize'
}

const display = {
  'block': 'display: block',
  'inline': 'display: inline',
  'flex': 'display: flex',
  'grid': 'display: grid'
}

const clip = {
  'clip-[value]': (value) => `clip-path: ${value}`,
  'clip-nonzero': 'clip-rule: nonzero',
  'clip-evenodd': 'clip-rule: evenodd'
}

const line_height = {
  'line-height-[value]': (value) => `line-height: ${value}`,
  '\-line-height-[value]': (value) => `line-height: -${value}`,
}

const overflow = {
  'overflow-visible': 'overflow: visible',
  'overflow-hidden': 'overflow: hidden',
  'overflow-x-visible': 'overflow-x: visible',
  'overflow-x-hidden': 'overflow-x: hidden',
  'overflow-y-visible': 'overflow-y: visible',
  'overflow-y-hidden': 'overflow-y: hidden'
}

const rotate = {
  'rotate-[value]': (value) => `rotate: ${value}`
}

const text_align = {
  'text-center': 'text-align: center',
  'text-start': 'text-align: start',
  'text-end': 'text-align: end',
  'text-left': 'text-align: left',
  'text-right': 'text-align: right'
}

const text_decoration = {
  'underline': 'text-decoration: underline',
  'underline-[value]': (value) => `text-decoration-color: ${value}`,
  'underline-solid': 'text-decoration-style: solid',
  'underline-double': 'text-decoration-style: double',
  'underline-dotted': 'text-decoration-style: dotted',
  'underline-dashed': 'text-decoration-style: dashed',
  'underline-wavy': 'text-decoration-style: wavy'
}

const text_transform = {
  'capitalize': 'text-transform: capitalize',
  'uppercase': 'text-transform: uppercase',
  'lowercase': 'text-transform: lowercase'
}

const text_wrap = {
  'text-wrap': 'text-wrap: wrap',
  'text-nowrap': 'text-wrap: nowrap'
}

const transform = {
  'transform-[value]': (value) => `transform: ${value}`,
}

const translate = {
  '\-translate-[value]': (value) => `translate: ${value}`,
  'translate-[value]': (value) => `translate: ${value}`
}

const border_radius = {
  'round-[value]': (value) => `border-radius: ${value}`
}

const user_select = {
  'select-none': 'user-select: none',
  'select-text': 'user-select: text',
  'select-all': 'user-select: all'
}

const vertical_align = {
  'align-baseline': 'vertical-align: baseline',
  'align-top': 'vertical-align: top',
  'align-middle': 'vertical-align: middle',
  'align-bottom': 'vertical-align: bottom'
}

const white_space = {
  'space-pre': 'white-space: pre',
  'space-prewrap': 'white-space: pre-wrap',
  'space-preline': 'white-space: pre-line',
  'space-wrap': 'white-space: wrap',
  'space-collapse': 'white-space: collapse'
}

const word_break = {
  'word-break': 'word-break: break-all',
  'word-keep': 'word-break: keep-all'
}

const z_index = {
  '\-index-[value]': (value) => `z-index: -${value}`,
  'index-[value]': (value) => `z-index: ${value}`
}

module.exports = {
  ...accent_color,
  ...color,
  ...background,
  ...border_radius,
  ...backdrop,
  ...shadow,
  ...caret,
  ...animation,
  ...transition,
  ...align_content,
  ...align_items,
  ...align_self,
  ...visibility,
  ...opacity,
  ...appearance,
  ...border,
  ...position,
  ...size,
  ...cursor,
  ...display,
  ...line_height,
  ...clip,
  ...overflow,
  ...rotate,
  ...text_align,
  ...text_decoration,
  ...text_transform,
  ...text_wrap,
  ...transform,
  ...translate,
  ...user_select,
  ...vertical_align,
  ...white_space,
  ...word_break,
  ...z_index
}
