import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './siderbar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog-doc/",
  title: "晓枫博客",
  srcDir: "src",
  description: "个人学习记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
