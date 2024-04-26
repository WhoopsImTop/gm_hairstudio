import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f61ec4a = () => interopDefault(import('..\\pages\\datenschutz.vue' /* webpackChunkName: "pages/datenschutz" */))
const _38805f2f = () => interopDefault(import('..\\pages\\impressum.vue' /* webpackChunkName: "pages/impressum" */))
const _356b7f18 = () => interopDefault(import('..\\pages\\jobs\\index.vue' /* webpackChunkName: "pages/jobs/index" */))
const _d765e2f8 = () => interopDefault(import('..\\pages\\leistungen\\index.vue' /* webpackChunkName: "pages/leistungen/index" */))
const _4412c66b = () => interopDefault(import('..\\pages\\leistungen\\damen.vue' /* webpackChunkName: "pages/leistungen/damen" */))
const _0b9df824 = () => interopDefault(import('..\\pages\\leistungen\\herren.vue' /* webpackChunkName: "pages/leistungen/herren" */))
const _6e87831e = () => interopDefault(import('..\\pages\\ueber-uns\\barber_mo.vue' /* webpackChunkName: "pages/ueber-uns/barber_mo" */))
const _89c41440 = () => interopDefault(import('..\\pages\\ueber-uns\\guelseren.vue' /* webpackChunkName: "pages/ueber-uns/guelseren" */))
const _2041620a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _38d8c1a8 = () => interopDefault(import('..\\pages\\jobs\\_slug.vue' /* webpackChunkName: "pages/jobs/_slug" */))

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
    component: _2f61ec4a,
    name: "datenschutz"
  }, {
    path: "/impressum",
    component: _38805f2f,
    name: "impressum"
  }, {
    path: "/jobs",
    component: _356b7f18,
    name: "jobs"
  }, {
    path: "/leistungen",
    component: _d765e2f8,
    name: "leistungen"
  }, {
    path: "/leistungen/damen",
    component: _4412c66b,
    name: "leistungen-damen"
  }, {
    path: "/leistungen/herren",
    component: _0b9df824,
    name: "leistungen-herren"
  }, {
    path: "/ueber-uns/barber_mo",
    component: _6e87831e,
    name: "ueber-uns-barber_mo"
  }, {
    path: "/ueber-uns/guelseren",
    component: _89c41440,
    name: "ueber-uns-guelseren"
  }, {
    path: "/",
    component: _2041620a,
    name: "index"
  }, {
    path: "/jobs/:slug",
    component: _38d8c1a8,
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
