// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // h函数
import './style/index.css'
import { Underline } from '@theojs/lumen'
// 组件1
import MyLayout from "./components/MyLayout.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(MyLayout, null, {

      // 这里是其他插槽组件

    })
  },
  enhanceApp: ({ app }) => {
    app.component('Home', Underline)
  }
}