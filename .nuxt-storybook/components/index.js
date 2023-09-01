export const SsrCarousel = () => import('../..\\node_modules\\vue-ssr-carousel\\index.js' /* webpackChunkName: "components/ssr-carousel" */).then(c => wrapFunctional(c.default || c))
export const NButton = () => import('../..\\components\\N\\Button\\index.vue' /* webpackChunkName: "components/n-button" */).then(c => wrapFunctional(c.default || c))
export const NModal = () => import('../..\\components\\N\\Modal\\index.vue' /* webpackChunkName: "components/n-modal" */).then(c => wrapFunctional(c.default || c))

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
