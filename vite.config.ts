import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'

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
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: 'src/typings/typed-router.d.ts',
    }),

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
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: 'src/typings/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:port/__inspect/ to see the inspector
    Inspect(),
  ],
})
