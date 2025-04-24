import { defineConfig } from 'vitepress';
import { themeConfig } from './themeConfig';
import { viteConfig } from './viteConfig';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RVGeo",
  base: '/RVGeo/',
  description: "Raster & Vector Geospatial",
  lastUpdated: true,
  themeConfig: themeConfig,
  vite: viteConfig,
  markdown: {
    math: true
  }
})
