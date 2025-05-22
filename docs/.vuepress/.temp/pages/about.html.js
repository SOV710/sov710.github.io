import comp from "/home/chris/myworld/git/vuepress/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"关于\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于\",\"icon\":\"info\",\"description\":\"关于本站 Who am I? 我是SOV710，你会在我的小站里看到： 计算机体系结构（x86 / RISC-V） Hypervisor 与嵌入式虚拟化 FPGA / Zynq 开发 联系方式 GitHub：https://github.com/sov710 Email：example@example.com 版权声明 除特别注明外，本站所有文章均采用...\"},\"readingTime\":{\"minutes\":0.33,\"words\":98},\"filePathRelative\":\"about.md\",\"excerpt\":\"\\n<h2>Who am I?</h2>\\n<p>我是SOV710，你会在我的小站里看到：</p>\\n<ul>\\n<li>计算机体系结构（x86 / RISC-V）</li>\\n<li>Hypervisor 与嵌入式虚拟化</li>\\n<li>FPGA / Zynq 开发</li>\\n<li><s>日常发病</s></li>\\n</ul>\\n<h2>联系方式</h2>\\n<ul>\\n<li><strong>GitHub</strong>：<a href=\\\"https://github.com/sov710\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://github.com/sov710</a></li>\\n<li><strong>Email</strong>：<a href=\\\"mailto:example@example.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">example@example.com</a></li>\\n</ul>\",\"autoDesc\":true}")
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
