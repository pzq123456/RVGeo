import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RVGeo",
  description: "Raster & Vector Geospatial",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/documents' },
      { text: 'API', link: '/api/globals' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Docs', link: '/documents' },
          { text: 'API', link: '/api/globals' }
        ]
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
  }
})
