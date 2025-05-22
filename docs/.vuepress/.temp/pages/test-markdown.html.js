import comp from "/home/chris/myworld/git/vuepress/docs/.vuepress/.temp/pages/test-markdown.html.vue"
const data = JSON.parse("{\"path\":\"/test-markdown.html\",\"title\":\"Markdown Test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Markdown Test\",\"icon\":\"pen\",\"breadcrumb\":false,\"description\":\"Markdown Test Page Bold Text Test This text has bold formatting within it. Here's another way to do bold formatting. Table Test (General) Specific Table Test (Interrupts) 向量 助记符...\"},\"readingTime\":{\"minutes\":2.27,\"words\":680},\"filePathRelative\":\"test-markdown.md\",\"excerpt\":\"\\n<h2>Bold Text Test</h2>\\n<p>This text has <strong>bold formatting</strong> within it.</p>\\n<p>Here's another way to do <strong>bold formatting</strong>.</p>\\n<h2>Table Test (General)</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Header 1</th>\\n<th>Header 2</th>\\n<th>Header 3</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Cell 1</td>\\n<td>Cell 2</td>\\n<td>Cell 3</td>\\n</tr>\\n<tr>\\n<td>Cell 4</td>\\n<td>Cell 5</td>\\n<td>Cell 6</td>\\n</tr>\\n<tr>\\n<td>Cell 7</td>\\n<td>Cell 8</td>\\n<td>Cell 9</td>\\n</tr>\\n</tbody>\\n</table>\",\"autoDesc\":true}")
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
