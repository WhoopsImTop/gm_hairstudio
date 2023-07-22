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
      "GM Professional Hairstudio - Freiburgs Bestbewertester Friseursalon",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "GM Professional Hairstudio ist ein Friseursalon in Freiburg im Breisgau. Wir bieten eine breite Palette von Dienstleistungen an, darunter Haarschnitte, Colorationen, Balayage, Highlights, Dauerwellen, Färben, Schneiden, Föhnen, Styling und mehr. Unsere erfahrenen Friseure sind Experten in ihrem Bereich und verwenden nur die besten Produkte, um Ihnen ein perfektes Ergebnis zu bieten. Wir legen großen Wert auf Kundenservice und bieten Ihnen eine entspannte und angenehme Atmosphäre. Wir freuen uns auf Ihren Besuch!",
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
          "GM Professional Hairstudio ist ein Friseursalon in Freiburg im Breisgau. Wir bieten eine breite Palette von Dienstleistungen an, darunter Haarschnitte, Colorationen, Balayage, Highlights, Dauerwellen, Färben, Schneiden, Föhnen, Styling und mehr. Unsere erfahrenen Friseure sind Experten in ihrem Bereich und verwenden nur die besten Produkte, um Ihnen ein perfektes Ergebnis zu bieten. Wir legen großen Wert auf Kundenservice und bieten Ihnen eine entspannte und angenehme Atmosphäre. Wir freuen uns auf Ihren Besuch!",
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
          "GM Professional Hairstudio ist ein Friseursalon in Freiburg im Breisgau. Wir bieten eine breite Palette von Dienstleistungen an, darunter Haarschnitte, Colorationen, Balayage, Highlights, Dauerwellen, Färben, Schneiden, Föhnen, Styling und mehr. Unsere erfahrenen Friseure sind Experten in ihrem Bereich und verwenden nur die besten Produkte, um Ihnen ein perfektes Ergebnis zu bieten. Wir legen großen Wert auf Kundenservice und bieten Ihnen eine entspannte und angenehme Atmosphäre. Wir freuen uns auf Ihren Besuch!",
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
          "friseur, friseursalon, haarschnitt, coloration, balayage, highlights, dauerhafte welle, färben, schneiden, föhnen, styling, freiburg im breisgau, gm professional hairstudio, gülseren, mo, barber, güterbahnhof",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "img/favicon.png" },
      { rel: "canonical", href: "https://www.gmhairstudio.de/" },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
