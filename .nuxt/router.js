import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _643e9a74 = () => interopDefault(import('..\\pages\\jobs\\index.vue' /* webpackChunkName: "pages/jobs/index" */))
const _2273eb84 = () => interopDefault(import('..\\pages\\leistungen.vue' /* webpackChunkName: "pages/leistungen" */))
const _6287f92c = () => interopDefault(import('..\\pages\\jobs\\_slug.vue' /* webpackChunkName: "pages/jobs/_slug" */))
const _c7fd87ec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
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
    path: "/jobs",
    component: _643e9a74,
    name: "jobs"
  }, {
    path: "/leistungen",
    component: _2273eb84,
    name: "leistungen"
  }, {
    path: "/jobs/:slug",
    component: _6287f92c,
    name: "jobs-slug"
  }, {
    path: "/",
    component: _c7fd87ec,
    name: "index"
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
