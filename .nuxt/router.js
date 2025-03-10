import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _674363db = () => interopDefault(import('..\\pages\\datenschutz.vue' /* webpackChunkName: "pages/datenschutz" */))
const _86798da2 = () => interopDefault(import('..\\pages\\impressum.vue' /* webpackChunkName: "pages/impressum" */))
const _643e9a74 = () => interopDefault(import('..\\pages\\jobs\\index.vue' /* webpackChunkName: "pages/jobs/index" */))
const _05d42ef8 = () => interopDefault(import('..\\pages\\leistungen\\index.vue' /* webpackChunkName: "pages/leistungen/index" */))
const _a648bf2a = () => interopDefault(import('..\\pages\\leistungen\\damen.vue' /* webpackChunkName: "pages/leistungen/damen" */))
const _a3e5b71e = () => interopDefault(import('..\\pages\\ueber-uns\\barber_mo.vue' /* webpackChunkName: "pages/ueber-uns/barber_mo" */))
const _bf224840 = () => interopDefault(import('..\\pages\\ueber-uns\\guelseren.vue' /* webpackChunkName: "pages/ueber-uns/guelseren" */))
const _c7fd87ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6287f92c = () => interopDefault(import('..\\pages\\jobs\\_slug.vue' /* webpackChunkName: "pages/jobs/_slug" */))
const _cb6aca7c = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _674363db,
    name: "datenschutz"
  }, {
    path: "/impressum",
    component: _86798da2,
    name: "impressum"
  }, {
    path: "/jobs",
    component: _643e9a74,
    name: "jobs"
  }, {
    path: "/leistungen",
    component: _05d42ef8,
    name: "leistungen"
  }, {
    path: "/leistungen/damen",
    component: _a648bf2a,
    name: "leistungen-damen"
  }, {
    path: "/ueber-uns/barber_mo",
    component: _a3e5b71e,
    name: "ueber-uns-barber_mo"
  }, {
    path: "/ueber-uns/guelseren",
    component: _bf224840,
    name: "ueber-uns-guelseren"
  }, {
    path: "/",
    component: _c7fd87ec,
    name: "index"
  }, {
    path: "/jobs/:slug",
    component: _6287f92c,
    name: "jobs-slug"
  }, {
    path: "/:slug",
    component: _cb6aca7c,
    name: "slug"
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
