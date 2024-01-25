export default {
  target: "static",
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "de",
    },
    title:
      "GM Professional Hairstudio in Freiburg - Freiburgs Bestbewertester Friseursalon",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Willkommen bei GM Professional Hairstudio, dem bestbewerteten Friseur in Freiburg im Breisgau. Unser Salon bietet erstklassige Dienstleistungen wie Haarschnitte, Colorationen, Balayage, Highlights und vieles mehr. Unsere erfahrenen Friseure nutzen nur hochwertige Produkte, um Ihnen ein herausragendes Styling-Erlebnis zu garantieren. Genießen Sie exzellenten Kundenservice in einer entspannten Atmosphäre. Besuchen Sie uns und erleben Sie die Kunst des Haarstylings bei einem führenden Friseur in Freiburg.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content:
          "GM Professional Hairstudio - Freiburgs Bestbewertester Friseursalon",
      },
      {
        property: "og:description",
        content:
          "Willkommen bei GM Professional Hairstudio, dem bestbewerteten Friseur in Freiburg im Breisgau. Unser Salon bietet erstklassige Dienstleistungen wie Haarschnitte, Colorationen, Balayage, Highlights und vieles mehr. Unsere erfahrenen Friseure nutzen nur hochwertige Produkte, um Ihnen ein herausragendes Styling-Erlebnis zu garantieren. Genießen Sie exzellenten Kundenservice in einer entspannten Atmosphäre. Besuchen Sie uns und erleben Sie die Kunst des Haarstylings bei einem führenden Friseur in Freiburg.",
      },
      { property: "og:url", content: "https://www.gmhairstudio.de/" },
      {
        property: "og:image",
        content: "https://gmhairstudio.de/img/logo.svg",
      },
      { property: "og:image:alt", content: "GM Professional Hairstudio Logo" },
      { property: "og:site_name", content: "GM Professional Hairstudio" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "GM Professional Hairstudio - Freiburgs Bestbewertester Friseursalon",
      },
      {
        name: "twitter:description",
        content:
          "Willkommen bei GM Professional Hairstudio, dem bestbewerteten Friseur in Freiburg im Breisgau. Unser Salon bietet erstklassige Dienstleistungen wie Haarschnitte, Colorationen, Balayage, Highlights und vieles mehr. Unsere erfahrenen Friseure nutzen nur hochwertige Produkte, um Ihnen ein herausragendes Styling-Erlebnis zu garantieren. Genießen Sie exzellenten Kundenservice in einer entspannten Atmosphäre. Besuchen Sie uns und erleben Sie die Kunst des Haarstylings bei einem führenden Friseur in Freiburg.",
      },
      {
        name: "twitter:image",
        content: "https://gmhairstudio.de/img/logo.svg",
      },
      { name: "twitter:image:alt", content: "GM Professional Hairstudio Logo" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      {
        name: "keywords",
        content:
          "friseur freiburg, friseur güterbahnhof, barber_mo salon, barber_mo, Gm Professional Hairstudio, Haare schneiden Freiburg",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "img/favicon.png" },
      { rel: "canonical", href: "https://gmhairstudio.de/" },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/jsonld'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-compress"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/markdownit",
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://gmhairstudio.de',
    gzip: true,
    routes: [
      '/',
      '/leistungen',
    ]
  },

  "nuxt-compress": {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },

  markdownit: {
    runtime: true, // Support `$md()`
    preset: "default",
    linkify: true,
    breaks: true,
    html: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  generate: {
    dir: "public",
    fallback: true,
  },
};
