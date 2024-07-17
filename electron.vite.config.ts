import path, { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

const tsconfigPaths = tsconfigPathsPlugin({
  projects: [path.resolve('tsconfig.json')],
})

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],

    publicDir: resolve('resources'),
  },
  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()]
  },
  renderer: {
    define: {
      'process.plataform': JSON.stringify(process.platform),
    },
    css:{
      postcss: {
        plugins: [
          tailwindcss({
            config: './src/renderer/tailwind.config.js'
          }),
        ],
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [tsconfigPaths, react()]
  }
})
