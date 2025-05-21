import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    host: true,
  },

  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),

    // https://github.com/posva/unplugin-vue-router
    VueRouter(),

    Vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'pinia',
        '@vueuse/head',
        '@vueuse/core',
        VueRouterAutoImports,
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components(),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ],
})
