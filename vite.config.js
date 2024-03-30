// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src\\index.ts'),
      name: 'RVGeo',
      // the proper extensions will be added
      fileName: 'rvgeo',
    },
  },
  // https://github.com/qmhc/vite-plugin-dts/blob/main/README.zh-CN.md
  plugins: [dts({ rollupTypes: true })]
})
