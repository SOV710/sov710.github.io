import comp from "/home/chris/myworld/git/vuepress/docs/.vuepress/.temp/pages/friends.html.vue"
const data = JSON.parse("{\"path\":\"/friends.html\",\"title\":\"朋友们\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"朋友们\",\"icon\":\"user-group\",\"breadcrumb\":false,\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"prev\":false,\"next\":false,\"comment\":false,\"description\":\"友情链接 感谢每一位朋友的支持与陪伴! 知言 知言 任豚收收味 访问网站 申请友链 可以通过以下方式联系我喵~： 申请请至少提供： 本站信息\"},\"readingTime\":{\"minutes\":2.6,\"words\":780},\"filePathRelative\":\"friends.md\",\"excerpt\":\"\\n<div class=\\\"friend-title\\\">感谢每一位朋友的支持与陪伴!</div>\\n<div class=\\\"friend-links-container\\\">\\n  <div class=\\\"friend-card\\\">\\n    <div class=\\\"friend-card-cover\\\">\\n      <img src=\\\"/friends/ljq.png\\\" alt=\\\"知言\\\">\\n    </div>\\n    <div class=\\\"friend-card-content\\\">\\n      <div class=\\\"friend-name\\\">知言</div>\\n      <div class=\\\"friend-desc\\\">任豚收收味</div>\\n      <a href=\\\"https://timlin15.github.io/\\\" target=\\\"_blank\\\" class=\\\"friend-link\\\">访问网站</a>\\n    </div>\\n  </div>\\n</div>\",\"autoDesc\":true}")
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
