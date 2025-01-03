import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '菜单',
    icon: 'codicon:versions',
    items: [
      { text: 'MC', link: '/mc/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '开往🚇', link: 'https://www.travellings.cn/go.html' },
  {
    text: '节点',
    icon: 'codicon:versions',
    items: [
      { text: '主节点vercel', link: 'https://docs.mengmengmao.cn/' },
      { text: 'github', link: 'https://github.mengmengmao.cn/' },
    ],
  },
])