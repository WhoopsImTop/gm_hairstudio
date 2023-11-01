import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f26210a = () => interopDefault(import('..\\pages\\jobs\\index.vue' /* webpackChunkName: "pages/jobs/index" */))
const _602858e8 = () => interopDefault(import('..\\pages\\leistungen.vue' /* webpackChunkName: "pages/leistungen" */))
const _1d6f7fc2 = () => interopDefault(import('..\\pages\\jobs\\_slug.vue' /* webpackChunkName: "pages/jobs/_slug" */))
const _625eeb20 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _60a849d8 = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

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
    component: _1f26210a,
    name: "jobs"
  }, {
    path: "/leistungen",
    component: _602858e8,
    name: "leistungen"
  }, {
    path: "/jobs/:slug",
    component: _1d6f7fc2,
    name: "jobs-slug"
  }, {
    path: "/",
    component: _625eeb20,
    name: "index"
  }, {
    path: "/:slug",
    component: _60a849d8,
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
