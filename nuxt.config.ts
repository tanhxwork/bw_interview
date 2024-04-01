// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/scss/styles.scss",
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "bootstrap/scss/bootstrap.scss",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/fontawesome.js"],
  modules: ["usebootstrap", "@nuxt/ui", '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  usebootstrap: {
    bootstrap: {
      prefix: ``,
    },
    html: {
      prefix: `B`,
    },
  },
  routeRules: {
    '/api/**': {cors:true}
  }
  // proxy: {
  //   '/api' : 'http://localhost:8080'
  // },
  // render: {
  //   bundleRenderer: {
  //     shouldPreload: (file, type) => {
  //       // Disable cache-busting for images
  //       if (type === "image") return false;
  //       // Cache-bust other file types
  //       return true;
  //     },
  //   },
  // },
  // serverMiddleware: [
  //   { path: '/api', handler: '~/server-middleware/proxy.js' }
  // ]
});
