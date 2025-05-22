import comp from "/home/chris/myworld/git/vuepress/docs/.vuepress/.temp/pages/columns/index.html.vue"
const data = JSON.parse("{\"path\":\"/columns/\",\"title\":\"Columns\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Columns\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Columns\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://sov710.github.io/columns/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SOV710 Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Columns\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
