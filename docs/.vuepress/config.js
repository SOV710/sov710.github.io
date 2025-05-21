import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SOV710 Blog',
  description: '一个基于 VuePress 的技术博客',
  
  // Use the theme we defined
  theme,
  
  // Configure Markdown
  markdown: {
    lineNumbers: true,
  },
  
  // Use Vite as bundler
  bundler: viteBundler(),
  
  head: [
    // Add favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
});
