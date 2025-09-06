import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/artalk@latest/dist/Artalk.css' }],
    ['script', { src: 'https://unpkg.com/artalk@latest/dist/Artalk.js' }]
  ],
  title: "fishcpy docs",
  description: "fishcpy docs",
  base: '/',
  ignoreDeadLinks: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.fis.ink'
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['docs.fis.ink', 'imgse.fishcpy.top'],  
      port: 5173,
      strictPort: false
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'PCL2-CE', link: '/pcl2-ce/' },
      { text: 'Astro Theme Fishcpy', link: '/astro-theme-fishcpy/' },
      { text: '所有文档', link: '/all-docs' }
    ],

    sidebar: {
      '/pcl2-ce/': [
        { 
          text: '什么是 PCL2-CE？', 
          link: '/pcl2-ce/what-is-PCL2ce',
          items: [] 
        },
        {
          text: '如何下载',
          collapsed: true,
          items: [
            { text: '一键下载', link: '/pcl2-ce/download/download_cf' },
            { text: '手动下载前准备工作', link: '/pcl2-ce/download/Beforedownload' },
            { text: '手动下载', link: '/pcl2-ce/download/download_github' }
          ]
        }
      ],
      '/astro-theme-fishcpy/': [
        {
          text: '🚀 快速开始',
          collapsed: false,
          items: [
            { text: '项目概览', link: '/astro-theme-fishcpy/' },
            { text: '快速开始指南', link: '/astro-theme-fishcpy/quick-start' }
          ]
        },
        {
          text: '⚙️ 配置与定制',
          collapsed: false,
          items: [
            { text: '配置文件自定义', link: '/astro-theme-fishcpy/configuration' },
            { text: '内容管理', link: '/astro-theme-fishcpy/content-management' }
          ]
        },
        {
          text: '🚀 部署与维护',
          collapsed: true,
          items: [
            { text: '部署指南', link: '/astro-theme-fishcpy/deployment' },
            { text: '常见问题', link: '/astro-theme-fishcpy/faq' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fishcpy' }
    ],

    footer: {
      message: `
        <div class="footer-custom">
          <a href="https://icp.gov.moe/?keyword=20250110" target="_blank">萌ICP备20250110号</a>
          <br/>
          <a href="https://www.travellings.cn/go.html" target="_blank" rel="noopener" title="开往-友链接力">
            <div align="center">
              <img src="https://www.travellings.cn/assets/logo.gif" alt="开往-友链接力" width="120">
            </div>
          </a>
        </div>
      `,
      copyright: 'Copyright © 2025-2025 fishcpy'
    }
  }
})
