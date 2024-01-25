import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_59d36d93 from 'nuxt_plugin_plugin_59d36d93' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_markdownit_472c6ef5 from 'nuxt_plugin_markdownit_472c6ef5' // Source: ./markdownit.js (mode: 'all')
import nuxt_plugin_pluginclient_4dee378f from 'nuxt_plugin_pluginclient_4dee378f' // Source: ./content/plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_98b0add2 from 'nuxt_plugin_pluginserver_98b0add2' // Source: ./content/plugin.server.js (mode: 'server')
import nuxt_plugin_axios_d1d1c5ae from 'nuxt_plugin_axios_d1d1c5ae' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_jsonld_593ee954 from 'nuxt_plugin_jsonld_593ee954' // Source: ../plugins/jsonld (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"de"},"title":"GM Professional Hairstudio in Freiburg - Freiburgs Bestbewertester Friseursalon","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Willkommen bei GM Professional Hairstudio, dem bestbewerteten Friseur in Freiburg im Breisgau. Unser Salon bietet erstklassige Dienstleistungen wie Haarschnitte, Colorationen, Balayage, Highlights und vieles mehr. Unsere erfahrenen Friseure nutzen nur hochwertige Produkte, um Ihnen ein herausragendes Styling-Erlebnis zu garantieren. Genießen Sie exzellenten Kundenservice in einer entspannten Atmosphäre. Besuchen Sie uns und erleben Sie die Kunst des Haarstylings bei einem führenden Friseur in Freiburg."},{"property":"og:type","content":"website"},{"property":"og:title","content":"GM Professional Hairstudio - Freiburgs Bestbewertester Friseursalon"},{"property":"og:description","content":"Willkommen bei GM Professional Hairstudio, dem bestbewerteten Friseur in Freiburg im Breisgau. Unser Salon bietet erstklassige Dienstleistungen wie Haarschnitte, Colorationen, Balayage, Highlights und vieles mehr. Unsere erfahrenen Friseure nutzen nur hochwertige Produkte, um Ihnen ein herausragendes Styling-Erlebnis zu garantieren. Genießen Sie exzellenten Kundenservice in einer entspannten Atmosphäre. Besuchen Sie uns und erleben Sie die Kunst des Haarstylings bei einem führenden Friseur in Freiburg."},{"property":"og:url","content":"https:\u002F\u002Fwww.gmhairstudio.de\u002F"},{"property":"og:image","content":"https:\u002F\u002Fgmhairstudio.de\u002Fimg\u002Flogo.svg"},{"property":"og:image:alt","content":"GM Professional Hairstudio Logo"},{"property":"og:site_name","content":"GM Professional Hairstudio"},{"property":"og:locale","content":"de_DE"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:title","content":"GM Professional Hairstudio - Freiburgs Bestbewertester Friseursalon"},{"name":"twitter:description","content":"Willkommen bei GM Professional Hairstudio, dem bestbewerteten Friseur in Freiburg im Breisgau. Unser Salon bietet erstklassige Dienstleistungen wie Haarschnitte, Colorationen, Balayage, Highlights und vieles mehr. Unsere erfahrenen Friseure nutzen nur hochwertige Produkte, um Ihnen ein herausragendes Styling-Erlebnis zu garantieren. Genießen Sie exzellenten Kundenservice in einer entspannten Atmosphäre. Besuchen Sie uns und erleben Sie die Kunst des Haarstylings bei einem führenden Friseur in Freiburg."},{"name":"twitter:image","content":"https:\u002F\u002Fgmhairstudio.de\u002Fimg\u002Flogo.svg"},{"name":"twitter:image:alt","content":"GM Professional Hairstudio Logo"},{"name":"robots","content":"index, follow"},{"name":"googlebot","content":"index, follow"},{"name":"keywords","content":"friseur freiburg, friseur güterbahnhof, barber_mo salon, barber_mo, Gm Professional Hairstudio, Haare schneiden Freiburg"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"img\u002Ffavicon.png"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_59d36d93 === 'function') {
    await nuxt_plugin_plugin_59d36d93(app.context, inject)
  }

  if (typeof nuxt_plugin_markdownit_472c6ef5 === 'function') {
    await nuxt_plugin_markdownit_472c6ef5(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_4dee378f === 'function') {
    await nuxt_plugin_pluginclient_4dee378f(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_98b0add2 === 'function') {
    await nuxt_plugin_pluginserver_98b0add2(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_d1d1c5ae === 'function') {
    await nuxt_plugin_axios_d1d1c5ae(app.context, inject)
  }

  if (typeof nuxt_plugin_jsonld_593ee954 === 'function') {
    await nuxt_plugin_jsonld_593ee954(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
