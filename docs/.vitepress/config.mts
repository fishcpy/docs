import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "fishcpy docs",
  description: "fishcpy docs",
  base: '/docs/', // 添加这行，'docs' 替换为你的仓库名
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
    ]
  }
})
