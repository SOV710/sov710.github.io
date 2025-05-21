import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  // Basic configuration
  hostname: "https://sov710.github.io",
  author: {
    name: "SOV710",
    url: "https://github.com/sov710",
  },

  // Navigation
  navbar: [
    "/",
    {
      text: "文章",
      icon: "pen-to-square",
      prefix: "/posts/",
      children: [
        { text: "所有文章", icon: "book", link: "" },
        { text: "示例文章", icon: "book", link: "article1" },
      ],
    },
    {
      text: "分类",
      icon: "folder",
      link: "/category/",
    },
    {
      text: "标签",
      icon: "tags",
      link: "/tag/",
    },
    {
      text: "专栏",
      icon: "book",
      prefix: "/columns/",
      children: [
        { text: "专栏1", icon: "book", link: "columns1/" },
      ],
    },
    {
      text: "时间线",
      icon: "clock",
      link: "/timeline/",
    },
    {
      text: "关于我",
      icon: "user",
      link: "/about.html",
    },
  ],

  // Sidebar configuration
  sidebar: {
    "/posts/": [
      {
        text: "文章",
        icon: "book",
        prefix: "",
        children: "structure",
      },
    ],
    "/columns/columns1/": [
      {
        text: "专栏1",
        icon: "book",
        prefix: "",
        children: "structure",
      },
    ],
  },

  // Blog settings
  blog: {
    name: "SOV710's Blog",
    description: "一个基于VuePress的技术博客",
    intro: "/about.html",
    medias: {
      GitHub: "https://github.com/sov710",
    },
    articleInfo: ["Date", "Category", "Tag", "ReadingTime"],
  },

  // Plugin configuration
  plugins: {
    blog: true,
    
    // Copy code
    copyCode: {},
    
    // Enable auto-catalog
    catalog: {},
    
    // Components
    components: {
      components: ["Badge"]
    },

    // Add search functionality
    search: {
      provider: "local",
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: [{ key: "s", ctrl: true }],
      locales: {
        "/": {
          placeholder: "搜索文档",
        },
      },
    },

    icon: {
      assets: "fontawesome",
    }
  },

  // Dark mode settings
  darkmode: "toggle",

  // Display footer
  displayFooter: true,
  footer: "MIT Licensed | Copyright © 2024 SOV710",
}); 