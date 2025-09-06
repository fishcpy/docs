import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import { Underline } from '@theojs/lumen'
import './custom.css'
import './style/index.css'
import 'artalk/dist/Artalk.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp: ({ app }) => {
    app.component('Home', Underline)
  }
}