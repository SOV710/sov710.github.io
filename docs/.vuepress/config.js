import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SOV710 Blog',
  description: 'Let\'s play arch & robotics!',
  
  // Use the theme we defined
  theme,
  
  // Use Vite as bundler
  bundler: viteBundler(),
  
  // Markdown configuration
  markdown: {
    highlighter: {
      // Use PrismJS through theme's integration
      type: "prismjs",
      preloadLanguages: ['markdown', 'javascript', 'typescript', 'bash', 'css'],
    },
  },
  
  head: [
    // Add favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
});
