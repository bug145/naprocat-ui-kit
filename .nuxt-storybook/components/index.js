export { default as SsrCarousel } from '../..\\node_modules\\vue-ssr-carousel\\index.js'
export { default as NButton } from '../..\\components\\N\\Button\\index.vue'
export { default as NLoading } from '../..\\components\\N\\Loading\\index.vue'
export { default as NModal } from '../..\\components\\N\\Modal\\index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
