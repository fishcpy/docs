import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://blogpng.mengmengmao.cn/mengmengmao/2024/12/07/6753bbbc609ce.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: '/' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
   copyright: true,

   prevPage: true,   // 是否启用上一页链接
   nextPage: true,   // 是否启用下一页链接
   createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
   footer: {
     message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a> & <a target="_blank" href="https://github.com">github</a> & <a target="_blank" href="https://vercel.com">vercel </a> <br /> <a href="https://icp.gov.moe/?keyword=20250110" target="_blank">萌ICP备20250110号</a> <br />    <a href="https://www.travellings.cn/go.html" target="_blank" rel="noopener" title="开往-友链接力"> <div align="center"> <img src="https://www.travellings.cn/assets/logo.gif" alt="开往-友链接力" width="120"> </a>',
     copyright: '©2024 fishcpy. All rights reserved',
   },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://blogpng.mengmengmao.cn/mengmengmao/2024/12/07/6753bbbc609ce.png',
    name: 'fishcpy docs',
    description: 'fishcpy docs',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
   bulletin: {
     layout: 'top-right',
     contentType: 'markdown',
     title: '公告板标题',
     content: '公告板内容',
   },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
   transition: {
     page: true,        // 启用 页面间跳转过渡动画
     postList: true,    // 启用 博客文章列表过渡动画
     appearance: 'true',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
   },

})
