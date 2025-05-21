import comp from "/home/chris/myworld/git/vuepress/docs/.vuepress/.temp/pages/Articles/sticky.html.vue"
const data = JSON.parse("{\"path\":\"/Articles/sticky.html\",\"title\":\"Sticky Article\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2021-01-01T00:00:00.000Z\",\"category\":[\"Category C\"],\"tag\":[\"tag E\"],\"sticky\":true,\"excerpt\":\"<p>A sticky article demo.</p>\",\"description\":\"Sticky Article Heading 2 Here is the content. Heading 3 Here is the content.\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Sticky Article\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2021-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"SOV710\\\",\\\"url\\\":\\\"https://github.com/sov710\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://sov710.github.io/Articles/sticky.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SOV710 Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Sticky Article\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Sticky Article Heading 2 Here is the content. Heading 3 Here is the content.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"tag E\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-01-01T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":0.11,\"words\":33},\"filePathRelative\":\"Articles/sticky.md\",\"autoDesc\":true}")
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
