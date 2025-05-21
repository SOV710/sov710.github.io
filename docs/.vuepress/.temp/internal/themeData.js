export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"SOV710\",\"url\":\"https://github.com/sov710\"},\"navbarLayout\":{\"start\":[\"Brand\"],\"center\":[\"Links\"],\"end\":[\"Search\",\"Outlook\",\"Repo\"]},\"logo\":\"/logo.jpg\",\"logoDark\":\"/logo.jpg\",\"blog\":{\"name\":\"SOV710's Blog\",\"description\":\"Let's play arch & robotics!\",\"intro\":\"/about.html\",\"medias\":{\"GitHub\":\"https://github.com/sov710\"},\"articleInfo\":[\"Date\",\"Category\",\"Tag\",\"ReadingTime\"]},\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"],\"fullscreen\":true,\"pure\":false,\"darkmode\":\"toggle\",\"displayFooter\":true,\"footer\":\"MIT Licensed | Copyright © 2024 SOV710\",\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"blogLocales\":{\"article\":\"总结\",\"articleList\":\"所有总结\",\"category\":\"分类\",\"tag\":\"标签\",\"timeline\":\"时间线\",\"timelineTitle\":\"昨日不再！\",\"all\":\"全部\",\"intro\":\"个人介绍\",\"star\":\"收藏\",\"empty\":\"$text 为空\",\"slides\":\"幻灯片\",\"encrypt\":\"加密\"},\"paginationLocales\":{\"prev\":\"上一页\",\"next\":\"下一页\",\"navigate\":\"跳转到\",\"action\":\"前往\",\"errorText\":\"请输入 1 到 $page 之前的页码！\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"routerLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\"},\"navbar\":[\"/\",{\"text\":\"总结\",\"icon\":\"pen-to-square\",\"link\":\"/posts/\"},{\"text\":\"分类\",\"icon\":\"folder\",\"link\":\"/category/\"},{\"text\":\"标签\",\"icon\":\"tags\",\"link\":\"/tag/\"},{\"text\":\"专栏\",\"icon\":\"book\",\"prefix\":\"/columns/\",\"children\":[{\"text\":\"Intel手册中文翻译\",\"icon\":\"book\",\"link\":\"columns1/\"}]},{\"text\":\"时间线\",\"icon\":\"clock\",\"link\":\"/timeline/\"},{\"text\":\"关于我\",\"icon\":\"user\",\"link\":\"/about.html\"}],\"sidebar\":{\"/posts/\":[{\"text\":\"总结\",\"icon\":\"book\",\"prefix\":\"\",\"children\":\"structure\"}],\"/columns/columns1/\":[{\"text\":\"Intel手册中文翻译\",\"icon\":\"book\",\"prefix\":\"\",\"children\":\"structure\"}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
