import comp from "/home/chris/myworld/git/vuepress/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"SOV710 Blog\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"SOV710 Blog\",\"bgImage\":\"/background.jpg\",\"bgImageDark\":\"/background.jpg\",\"heroText\":\"SOV710 Blog\",\"tagline\":\"Let's play arch & robotics!\",\"heroFullScreen\":true,\"projects\":[{\"icon\":\"fa-brands fa-github\",\"name\":\"Github\",\"desc\":\"博主的github喵\",\"link\":\"https://github.com/SOV710\"},{\"icon\":\"fa-brands fa-zhihu\",\"name\":\"知乎\",\"desc\":\"博主的知乎链接喵\",\"link\":\"https://www.zhihu.com/people/sov710\"},{\"icon\":\"fa-solid fa-file-lines\",\"name\":\"Intel手册中文翻译\",\"link\":\"/columns/intel-manual-translate/\"}],\"footer\":\"MIT Licensed | Copyright © 2025 SOV710\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"SOV710 Blog\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://sov710.github.io/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SOV710 Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SOV710 Blog\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0.28,\"words\":85},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
