import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.ts";
import { markdownExtPlugin } from "@vuepress/plugin-markdown-ext";
import { markdownHintPlugin } from "@vuepress/plugin-markdown-hint";
import { markdownStylizePlugin } from "@vuepress/plugin-markdown-stylize";

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SOV710 Blog',
  description: 'Let\'s play arch & robotics!',
  
  // Use the theme we defined
  theme,
  
  // Use Vite as bundler
  bundler: viteBundler(),
  
  // Add markdown plugins directly
  plugins: [
    // Add GitHub Flavored Markdown support
    markdownExtPlugin({
      gfm: true,
      sup: true,
      sub: true,
      tabs: true,
      tasklist: true,
      footnote: true,
      checkbox: true,
    }),
    
    // Add container support
    markdownHintPlugin({
      hint: true,
    }),
    
    // Add stylize support
    markdownStylizePlugin({
      mark: true,
      align: true,
      sub: true,
    }),
  ],
  
  head: [
    // Enhanced favicon configuration
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512x512.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
});
