export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { hid:'jquery', src: 'js/jquery.js'},
      { hid:'bootstrap-bundle',src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js', async: true, defer: true},
      { hid:'owl',src: 'js/owl.js', module: 'client', defer: true},
      { hid:'slick',src: 'js/slick.js', module: 'client', defer: true},
      { hid:'isotope',src: 'js/isotope.js', module: 'client', defer: true},
      { hid:'accordions',src: 'js/accordions.js', module: 'client', defer: true}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.css',
    '@/assets/css/flex-slider.css',
    '@/assets/css/owl.css',
    '@/assets/css/templatemo-sixteen.css',
    '@/assets/css/fontawesome.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/vue-meta.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jquery: 'jquery',
    //     'window.jQuery': 'jquery',
    //     jQuery: 'jquery'
    //   })
    // ],
    // extend (config, { isDev, isClient }) {
    //
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
