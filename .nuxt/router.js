import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25adfb66 = () => interopDefault(import('../pages/datenschutz.vue' /* webpackChunkName: "pages/datenschutz" */))
const _6374377a = () => interopDefault(import('../pages/impressum.vue' /* webpackChunkName: "pages/impressum" */))
const _0c958566 = () => interopDefault(import('../pages/jobs/index.vue' /* webpackChunkName: "pages/jobs/index" */))
const _70f2d196 = () => interopDefault(import('../pages/leistungen/index.vue' /* webpackChunkName: "pages/leistungen/index" */))
const _20b8897d = () => interopDefault(import('../pages/leistungen/damen.vue' /* webpackChunkName: "pages/leistungen/damen" */))
const _789ed15c = () => interopDefault(import('../pages/leistungen/herren.vue' /* webpackChunkName: "pages/leistungen/herren" */))
const _5e6bb2ad = () => interopDefault(import('../pages/leistungen/herren-mo.vue' /* webpackChunkName: "pages/leistungen/herren-mo" */))
const _a7eac676 = () => interopDefault(import('../pages/ueber-uns/barber_mo.vue' /* webpackChunkName: "pages/ueber-uns/barber_mo" */))
const _c3275798 = () => interopDefault(import('../pages/ueber-uns/guelseren.vue' /* webpackChunkName: "pages/ueber-uns/guelseren" */))
const _45eb17d5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0adee41e = () => interopDefault(import('../pages/jobs/_slug.vue' /* webpackChunkName: "pages/jobs/_slug" */))

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
    component: _25adfb66,
    name: "datenschutz"
  }, {
    path: "/impressum",
    component: _6374377a,
    name: "impressum"
  }, {
    path: "/jobs",
    component: _0c958566,
    name: "jobs"
  }, {
    path: "/leistungen",
    component: _70f2d196,
    name: "leistungen"
  }, {
    path: "/leistungen/damen",
    component: _20b8897d,
    name: "leistungen-damen"
  }, {
    path: "/leistungen/herren",
    component: _789ed15c,
    name: "leistungen-herren"
  }, {
    path: "/leistungen/herren-mo",
    component: _5e6bb2ad,
    name: "leistungen-herren-mo"
  }, {
    path: "/ueber-uns/barber_mo",
    component: _a7eac676,
    name: "ueber-uns-barber_mo"
  }, {
    path: "/ueber-uns/guelseren",
    component: _c3275798,
    name: "ueber-uns-guelseren"
  }, {
    path: "/",
    component: _45eb17d5,
    name: "index"
  }, {
    path: "/jobs/:slug",
    component: _0adee41e,
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
