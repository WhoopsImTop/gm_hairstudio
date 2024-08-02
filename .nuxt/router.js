import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _222aea71 = () => interopDefault(import('..\\pages\\datenschutz.vue' /* webpackChunkName: "pages/datenschutz" */))
const _a0312576 = () => interopDefault(import('..\\pages\\impressum.vue' /* webpackChunkName: "pages/impressum" */))
const _1f26210a = () => interopDefault(import('..\\pages\\jobs\\index.vue' /* webpackChunkName: "pages/jobs/index" */))
const _30a7a69a = () => interopDefault(import('..\\pages\\leistungen\\index.vue' /* webpackChunkName: "pages/leistungen/index" */))
const _3f2542fe = () => interopDefault(import('..\\pages\\leistungen\\damen.vue' /* webpackChunkName: "pages/leistungen/damen" */))
const _0ad33a64 = () => interopDefault(import('..\\pages\\leistungen\\herren.vue' /* webpackChunkName: "pages/leistungen/herren" */))
const _4433349e = () => interopDefault(import('..\\pages\\leistungen\\herren-mo.vue' /* webpackChunkName: "pages/leistungen/herren-mo" */))
const _4976b2ca = () => interopDefault(import('..\\pages\\ueber-uns\\barber_mo.vue' /* webpackChunkName: "pages/ueber-uns/barber_mo" */))
const _64b343ec = () => interopDefault(import('..\\pages\\ueber-uns\\guelseren.vue' /* webpackChunkName: "pages/ueber-uns/guelseren" */))
const _625eeb20 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1d6f7fc2 = () => interopDefault(import('..\\pages\\jobs\\_slug.vue' /* webpackChunkName: "pages/jobs/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/datenschutz",
    component: _222aea71,
    name: "datenschutz"
  }, {
    path: "/impressum",
    component: _a0312576,
    name: "impressum"
  }, {
    path: "/jobs",
    component: _1f26210a,
    name: "jobs"
  }, {
    path: "/leistungen",
    component: _30a7a69a,
    name: "leistungen"
  }, {
    path: "/leistungen/damen",
    component: _3f2542fe,
    name: "leistungen-damen"
  }, {
    path: "/leistungen/herren",
    component: _0ad33a64,
    name: "leistungen-herren"
  }, {
    path: "/leistungen/herren-mo",
    component: _4433349e,
    name: "leistungen-herren-mo"
  }, {
    path: "/ueber-uns/barber_mo",
    component: _4976b2ca,
    name: "ueber-uns-barber_mo"
  }, {
    path: "/ueber-uns/guelseren",
    component: _64b343ec,
    name: "ueber-uns-guelseren"
  }, {
    path: "/",
    component: _625eeb20,
    name: "index"
  }, {
    path: "/jobs/:slug",
    component: _1d6f7fc2,
    name: "jobs-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
