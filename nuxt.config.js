export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs_auth0',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //
  auth: {
    strategies: {
      auth0: {
        domain: process.env.AUTH0_ISSUER_BASE_URL,
        clientId: process.env.AUTH0_CLIENT_ID,
      },
    },
  },

  //
  router: {
    middleware: ['redirects'],
  },

  //
  server: {
    host: '0',
  },

  //
  tailwindcss: {
    exposeConfig: true,
  },

  //
  env: {
    NEXT_URL: 'https://nextjs-test-swart-two.vercel.app',
  },
}
