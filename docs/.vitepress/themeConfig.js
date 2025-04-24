import typedocSidebar from "../api/typedoc-sidebar.json";

export const themeConfig = {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/documents' },
      { text: 'API', link: '/api' },
      { text: 'playground', link: '/playground' }
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
  }