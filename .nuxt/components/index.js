export { default as AboutUs } from '../..\\components\\aboutUs.vue'
export { default as Divider } from '../..\\components\\divider.vue'
export { default as EliasEnglenLogo } from '../..\\components\\EliasEnglenLogo.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as MainHeader } from '../..\\components\\mainHeader.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Preisliste } from '../..\\components\\preisliste.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as UnserePreise } from '../..\\components\\unserePreise.vue'
export { default as UnsereProdukte } from '../..\\components\\unsereProdukte.vue'

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
