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
  modules: ["usebootstrap"],
  usebootstrap: {
    bootstrap: {
      prefix: ``,
    },
    html: {
      prefix: `B`,
    },
  },
});
