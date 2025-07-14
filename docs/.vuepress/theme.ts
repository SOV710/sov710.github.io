import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  // Basic configuration
  hostname: "https://sov710.github.io",
  author: {
    name: "SOV710",
    url: "https://github.com/sov710",
  },

  // Enhanced navbar styling
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Search", "Outlook", "Repo"],
  },
  
  // Add logo to navbar
  logo: "/logo.jpg",
  logoDark: "/logo.jpg",
  
  // Navigation with enhanced styling
  navbar: [
    "/",
    {
      text: "总结",
      icon: "pen-to-square",
      link: "/posts/",
    },
    {
      text: "文章",
      icon: "book-open",
      link: "/articles/",
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
        { text: "Intel手册中文翻译", icon: "book", link: "intel-manual-translate/" },
        { text: "我的prompt库", icon: "wheelchair-move", link: "my-prompt-library/"},
      ],
    },
    {
      text: "时间线",
      icon: "clock",
      link: "/timeline/",
    },
    {
      text: "友链",
      icon: "user-group",
      link: "/friends.html",
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
        text: "总结",
        icon: "pen-to-square",
        prefix: "",
        children: "structure",
      },
    ],
    "/articles/": [
      {
        text: "文章",
        icon: "book-open",
        prefix: "",
        children: "structure",
      },
    ],
    "/columns/intel-manual-translate/": [
      {
        text: "Intel手册中文翻译",
        icon: "book",
        prefix: "",
        children: "structure",
      },
    ],
    "/columns/my-prompt-library/": [
      {
        text: "我的prompt库",
        icon: "wheelchair-move",
        prefix: "",
        children: "structure",
      },
    ],
  },

  // Blog settings
  blog: {
    name: "SOV710's Blog",
    description: "Let's play arch & robotics!",
    intro: "/about.html",
    medias: {
      GitHub: "https://github.com/sov710",
    },
    articleInfo: ["Date", "Category", "Tag", "ReadingTime"],
  },

  // Markdown configuration - Centralized and corrected
  markdown: {
    breaks: true, 
    linkify: true,
    highlighter: {
      type: "prismjs",
      preloadLanguages: ['markdown', 'javascript', 'typescript', 'bash', 'css'],
    },
    figure: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    gfm: true,        // Enables GFM features including tables and standard bold/italic
    footnote: true,   // Enables footnotes
    tasklist: true,   // Enables task lists
    align: true,      // Enables text alignment (via ::: center/right)
    mark: true,       // Enables ==highlighted text==
  },

  // Plugin configuration
  plugins: {
    blog: true,
    copyCode: {},
    catalog: {},
    components: {
      components: ["Badge"]
    },
    search: {
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
      assets: "fontawesome-with-brands",
    },
    comment: {
      provider: "Giscus",
      repo: "SOV710/sov710.github.io",
      repoId: "R_kgDOOuq_dA",
      category: "Comments",
      categoryId: "DIC_kwDOOuq_dM4Cqd-N",
      mapping: "pathname",
      strict: false,
      lazyLoading: "lazy",
      reactionsEnabled: true,
      metadataEnabled: false,
      inputPosition: "bottom",
      theme: "preferred_color_scheme",
      lang: "zh-CN",
    }
  },

  // UI Enhanced features
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  
  // Style customization
  fullscreen: true,
  pure: false,

  // Dark mode settings
  darkmode: "toggle",

  // Display footer
  displayFooter: true,
  footer: "MIT Licensed | Copyright © 2024 SOV710",

  // Post-related configurations
  locales: {
    "/": {
      // Modify "Posts" to "Summaries"
      blogLocales: {
        article: "总结",
        articleList: "所有总结",
        category: "分类",
        tag: "标签",
        timeline: "时间线",
        timelineTitle: "昨日不再！",
        all: "全部",
        intro: "个人介绍",
        star: "收藏",
        slides: "幻灯片",
        encrypt: "加密",
      },
    },
  },
}); 
