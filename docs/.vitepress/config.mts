import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "fishcpy docs",
  description: "fishcpy docs",
  base: '/docs/',
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['docs.fishcpy.top'],
      port: 5173,
      strictPort: false
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'PCL2-CE', link: '/pcl2-ce/What-is-PCL2ce' },
      { text: '所有文档', link: '/all-docs' }
    ],

    sidebar: {
      '/pcl2-ce/': [
        { 
          text: '什么是 PCL2-CE？', 
          link: '/pcl2-ce/What-is-PCL2ce',
          items: [] 
        },
        {
          text: '如何下载',
          collapsed: true,
          items: [
            { text: '下载前准备工作', link: '/pcl2-ce/download/Beforedownload' },
            { text: '下载', link: '/pcl2-ce/download/download' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
