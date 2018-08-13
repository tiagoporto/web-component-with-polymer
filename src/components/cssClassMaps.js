/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const PREFIX = 'hot-'

const COMPONENTS = new Map()

COMPONENTS
  .set('alert', 'alert')
  .set('badge', 'badge')
  .set('button', 'btn')
  .set('group-button', 'btn-group')
  .set('card', '')
  .set('loading', '')
  .set('modal', '')
  .set('pagination', '')
  .set('progress', '')
  .set('tooltip', '')

const STATES = new Map()

STATES
  .set('active', 'active')
  .set('disabled', 'disabled')
  .set('loading', 'loading')

const EXPAND = new Map()
  .set('block', 'block')

const FILL = new Map()
  .set('clear', '')
  .set('outline', 'outline')

const VARIATIONS = new Map()

VARIATIONS
  .set('primary', 'primary')
  .set('secondary', 'secondary')
  .set('success', 'success')
  .set('error', 'danger')
  .set('warning', 'warning')
  .set('info', 'info')
  .set('muted', 'muted')

const SIZES = new Map()

SIZES
  .set('small', 'sm')
  .set('large', 'lg')

/**
 * Component base class
 * @param  {string} component - The component name. Ex: Button
 * @return {string}           - The component class. Ex: btn
 */
const componentClass = componentName => {
  const className = COMPONENTS.get(componentName)

  if (!className) {
    return console.error(`Component class %c${componentName}`, 'color:#fff', `doesn't exist. Check componets list: `, Array.from(COMPONENTS.keys()))
  }

  return `${PREFIX}${className}`
}

const cssClassMaps = new Map()

cssClassMaps
  .set('variation', {
    map: VARIATIONS,
    errorMessage: param => [`Variation class %c${param}`, 'color:#fff', `doesn't exist. Check variation class list: `]
  })
  .set('fill', {
    map: FILL,
    errorMessage: param => [`Fill class %c${param}`, 'color:#fff', `doesn't exist. Check fill class list: `]
  })
  .set('size', {
    map: SIZES,
    errorMessage: param => [`Size class %c${param}`, 'color:#fff', `doesn't exist. Check size class List: `]
  })
  .set('state', {
    map: STATES,
    errorMessage: param => [`State class %c${param}`, 'color:#fff', `doesn't exist. Check size class List: `]
  })
  .set('expand', {
    map: EXPAND,
    errorMessage: param => [`Expand class %c${param}`, 'color:#fff', `doesn't exist. Check expand class list: `]
  })

const getCssClass = (type, param) => {
  if (!param) {
    return void 0
  }

  const mapItem = cssClassMaps.get(type)
  const cssClass = mapItem.map.get(param)

  if (!cssClass) {
    return console.error(...mapItem.errorMessage(param), Array.from(mapItem.map.keys()))
  }

  return cssClass
}

/**
 * Create Component CSS Class
 * @param  {Object} options     [description]
 * @param  {String} options.component     [description]
 * @param  {String} options.variation     [description]
 * @param  {String} options.state         [description]
 * @param  {String} options.size          [description]
 * @param  {String} options.fill          [description]
 * @param  {String} options.expand        [description]
 * @param  {String} options.externalClass [description]
 * @return {String}                       [description]
 */
export const componentClassName = ({ component, variation, state, size, fill, expand, externalClass }) => {
  const baseClass = componentClass(component)
  const className = [baseClass]
  const cssVariationClass = getCssClass('variation', variation)
  const cssFillClass = getCssClass('fill', fill)

  className.push(cssFillClass ? `${baseClass}--${cssFillClass}-${cssVariationClass}` : `${baseClass}--${cssVariationClass}`)

  if (size) {
    const cssSizeClass = getCssClass('size', size)

    className.push(`${baseClass}--${cssSizeClass}`)
  }

  if (expand) {
    const cssExpandClass = getCssClass('expand', expand)

    className.push(`${baseClass}--${cssExpandClass}`)
  }

  if (state) {
    const cssStateClass = getCssClass('state', state)

    className.push(cssStateClass)
  }

  if (externalClass) {
    className.push(externalClass)
  }

  return className.join(' ')
}
