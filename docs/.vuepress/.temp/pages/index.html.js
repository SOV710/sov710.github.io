import comp from "/home/chris/myworld/git/vuepress/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"SOV710 Blog\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"SOV710 Blog\",\"heroImage\":\"/logo.png\",\"heroText\":\"SOV710 Blog\",\"tagline\":\"Let's play arch & robotics!\",\"heroFullScreen\":true,\"projects\":[{\"icon\":\"project\",\"name\":\"Github\",\"desc\":\"博主的github喵\",\"link\":\"https://github.com/SOV710\"},{\"icon\":\"link\",\"name\":\"知乎\",\"desc\":\"博主的知乎链接喵\",\"link\":\"https://www.zhihu.com/people/sov710\"},{\"icon\":\"book\",\"name\":\"书籍名称\",\"desc\":\"书籍详细描述\",\"link\":\"https://你的书籍链接\"},{\"icon\":\"article\",\"name\":\"文章名称\",\"desc\":\"文章详细描述\",\"link\":\"https://你的文章链接\"},{\"icon\":\"friend\",\"name\":\"伙伴名称\",\"desc\":\"伙伴详细描述\",\"link\":\"https://你的伙伴链接\"},{\"icon\":\"/logo.png\",\"name\":\"自定义项目\",\"desc\":\"自定义详细描述\",\"link\":\"https://你的自定义链接\"}],\"footer\":\"MIT Licensed | Copyright © 2025 SOV710\"},\"readingTime\":{\"minutes\":0.51,\"words\":154},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
