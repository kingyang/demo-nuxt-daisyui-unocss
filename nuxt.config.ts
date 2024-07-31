// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'light',
        'lang': 'zh-Hans',
      },
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
    },
    layoutTransition: true,
    pageTransition: true,
  },

  modules: [
    '@unocss/nuxt',
  ],

  sourcemap: {
    client: process.env.NODE_ENV === 'development',
    server: process.env.NODE_ENV === 'development',
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        allowArbitraryExtensions: true,
      },
      exclude: [fileURLToPath(new URL('./eslint.config.js', import.meta.url))],
    },
  },

  vite: {
    // https://vitejs.dev/config/build-options.html
    build: {
      sourcemap: false,
    },
    plugins: [
      topLevelAwait(),
    ],
    worker: {
      format: 'es',
      plugins: () => [
        topLevelAwait(),
      ],
    },
  },

  compatibilityDate: '2024-07-31',
})