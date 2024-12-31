import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '节点',
    icon: 'codicon:versions',
    items: [
      { text: '主节点vercel', link: 'https://docs.mengmengmao.cn/' },
      { text: 'github', link: 'https://github.mengmengmao.cn/' },
    ],
  },
])
