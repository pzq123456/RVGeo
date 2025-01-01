import { defineConfig } from 'vitepress';
import typedocSidebar from "../api/typedoc-sidebar.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RVGeo",
  base: '/RVGeo/',
  description: "Raster & Vector Geospatial",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/documents' },
      { text: 'API', link: '/api' }
    ],

    sidebar: [

      { text: 'Docs', link: '/documents' },
      {
        text: 'API',
        items: typedocSidebar,
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pzq123456/RVGeo' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      copyright: `Released under the MIT License. Copyright © 2022-present <a href="https://github.com/pzq123456"> pzq123456 </a> `
    },
  },
  markdown: {
    math: true
  }
})
