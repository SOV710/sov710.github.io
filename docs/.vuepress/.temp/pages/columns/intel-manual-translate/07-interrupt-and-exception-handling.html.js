import comp from "/home/chris/myworld/git/vuepress/docs/.vuepress/.temp/pages/columns/intel-manual-translate/07-interrupt-and-exception-handling.html.vue"
const data = JSON.parse("{\"path\":\"/columns/intel-manual-translate/07-interrupt-and-exception-handling.html\",\"title\":\"Intel® Manual Chapter 7 | Intel手册第七章中文翻译：中断和异常处理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Intel® Manual Chapter 7 | Intel手册第七章中文翻译：中断和异常处理\",\"category\":\"Intel手册中文翻译\",\"tag\":[\"x86\",\"Intel\"],\"order\":7,\"description\":\"7.1 中断与异常概述 中断（Interrupts）和异常（Exceptions） 表示系统、处理器或当前执行程序中需要处理器注意的特定事件或状况。这些事件通常会使处理器强制跳转到特定的软件程序或任务，即中断处理程序或异常处理程序。处理器对这些事件的响应行为称为中断或异常服务（servicing）或处理（handling）。 中断通常在程序运行期间由硬...\"},\"readingTime\":{\"minutes\":49.32,\"words\":14795},\"filePathRelative\":\"columns/intel-manual-translate/07-interrupt-and-exception-handling.md\",\"excerpt\":\"<h2>7.1 中断与异常概述</h2>\\n<p><strong>中断（Interrupts）和异常（Exceptions）</strong> 表示系统、处理器或当前执行程序中需要处理器注意的特定事件或状况。这些事件通常会使处理器强制跳转到特定的软件程序或任务，即中断处理程序或异常处理程序。处理器对这些事件的响应行为称为中断或异常服务（servicing）或处理（handling）。</p>\\n<p>中断通常在程序运行期间由硬件随机触发，系统硬件通过中断处理处理器外部事件，如外设请求服务。软件也可通过执行<code>INT n</code>指令产生中断。</p>\\n<p>异常则发生在处理器执行指令期间检测到的错误条件，例如除零操作。处理器能检测到多种错误条件，包括保护违规（protection violations）、页错误（page faults）和内部机器故障（internal machine faults）。此外，Pentium 4、Intel Xeon、P6系列及Pentium处理器的机器检查架构（Machine-Check Architecture）还能够在检测到内部硬件错误或总线错误时产生机器检查异常（Machine-Check Exception）。</p>\",\"autoDesc\":true}")
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
