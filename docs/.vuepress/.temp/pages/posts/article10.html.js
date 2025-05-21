import comp from "/home/chris/myworld/git/vuepress/docs/.vuepress/.temp/pages/posts/article10.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article10.html\",\"title\":\"Article 10\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-10T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag C\",\"tag D\"],\"description\":\"Article 10 Heading 2 Here is the content. Heading 3 Here is the content.\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Article 10\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-10T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"SOV710\\\",\\\"url\\\":\\\"https://github.com/sov710\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://sov710.github.io/posts/article10.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SOV710 Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Article 10\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Article 10 Heading 2 Here is the content. Heading 3 Here is the content.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"tag D\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"tag C\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-10T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":0.09,\"words\":28},\"filePathRelative\":\"posts/article10.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\",\"autoDesc\":true}")
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
