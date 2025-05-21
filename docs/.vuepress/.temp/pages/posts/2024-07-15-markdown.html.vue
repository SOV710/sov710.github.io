<template><div><h1 id="markdown-语法增强指南" tabindex="-1"><a class="header-anchor" href="#markdown-语法增强指南"><span>Markdown 语法增强指南</span></a></h1>
<p>VuePress Theme Hope 通过 <code v-pre>vuepress-plugin-md-enhance</code> 插件为 Markdown 添加了更多语法和新功能。本文将介绍一些常用的 Markdown 增强功能。</p>
<h2 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h2>
<p>你可以使用任务列表来展示待办事项：</p>
<ul>
<li>[X] 计划任务 1</li>
<li>[X] 计划任务 2</li>
<li>[ ] 计划任务 3</li>
</ul>
<h2 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器"><span>自定义容器</span></a></h2>
<p>VuePress 主题内置了多种自定义容器：</p>
<div class="hint-container info">
<p class="hint-container-title">信息</p>
<p>这是一个信息容器</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">笔记</p>
<p>这是一个笔记容器</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这是一个提示容器</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>这是一个警告容器</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">危险</p>
<p>这是一个危险容器</p>
</div>
<details class="hint-container details"><summary>点击查看详情</summary>
<p>这是一些隐藏的细节内容</p>
</details>
<h2 id="标记" tabindex="-1"><a class="header-anchor" href="#标记"><span>标记</span></a></h2>
<p>你可以使用 <code v-pre>==</code> 来标记文本 ==重要内容==。</p>
<h2 id="上下标" tabindex="-1"><a class="header-anchor" href="#上下标"><span>上下标</span></a></h2>
<ul>
<li>使用 <code v-pre>^</code> 来表示上标: 例如 x^2^</li>
<li>使用 <code v-pre>~</code> 来表示下标: 例如 H~2~O</li>
</ul>
<h2 id="代码组" tabindex="-1"><a class="header-anchor" href="#代码组"><span>代码组</span></a></h2>
<p>你可以并排展示多个代码块：</p>
<p>:::: code-group
::: code-group-item yarn</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> vuepress-theme-hope</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>:<VPIcon icon="" />: code-group-item npm</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> vuepress-theme-hope</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>:<VPIcon icon="" />: code-group-item pnpm</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> vuepress-theme-hope</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>:<VPIcon icon="" />::</p>
<h2 id="图表支持" tabindex="-1"><a class="header-anchor" href="#图表支持"><span>图表支持</span></a></h2>
<p>除了常规的 Markdown 语法外，VuePress Theme Hope 还支持各种图表：</p>
<h3 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h3>
<div class="language-flow line-numbers-mode" data-highlighter="prismjs" data-ext="flow"><pre v-pre><code><span class="line">st<span class="token operator">=></span>start<span class="token operator">:</span> 开始</span>
<span class="line">op<span class="token operator">=></span>operation<span class="token operator">:</span> 操作</span>
<span class="line">cond<span class="token operator">=></span>condition<span class="token operator">:</span> 是否满足条件？</span>
<span class="line">e<span class="token operator">=></span>end<span class="token operator">:</span> 结束</span>
<span class="line"></span>
<span class="line">st<span class="token operator">-</span><span class="token operator">></span>op<span class="token operator">-</span><span class="token operator">></span>cond</span>
<span class="line"><span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>e</span>
<span class="line"><span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>op</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="echarts-图表" tabindex="-1"><a class="header-anchor" href="#echarts-图表"><span>ECharts 图表</span></a></h3>
<div class="language-echarts line-numbers-mode" data-highlighter="prismjs" data-ext="echarts"><pre v-pre><code><span class="line">{</span>
<span class="line">  &quot;title&quot;: {</span>
<span class="line">    &quot;text&quot;: &quot;ECharts 示例&quot;</span>
<span class="line">  },</span>
<span class="line">  &quot;tooltip&quot;: {},</span>
<span class="line">  &quot;legend&quot;: {</span>
<span class="line">    &quot;data&quot;: [&quot;销量&quot;]</span>
<span class="line">  },</span>
<span class="line">  &quot;xAxis&quot;: {</span>
<span class="line">    &quot;data&quot;: [&quot;衬衫&quot;, &quot;羊毛衫&quot;, &quot;雪纺衫&quot;, &quot;裤子&quot;, &quot;高跟鞋&quot;, &quot;袜子&quot;]</span>
<span class="line">  },</span>
<span class="line">  &quot;yAxis&quot;: {},</span>
<span class="line">  &quot;series&quot;: [</span>
<span class="line">    {</span>
<span class="line">      &quot;name&quot;: &quot;销量&quot;,</span>
<span class="line">      &quot;type&quot;: &quot;bar&quot;,</span>
<span class="line">      &quot;data&quot;: [5, 20, 36, 10, 10, 20]</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入代码块" tabindex="-1"><a class="header-anchor" href="#导入代码块"><span>导入代码块</span></a></h2>
<p>你可以导入文件中的代码：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">@<span class="token url">[<span class="token content">code</span>](<span class="token url">./example.js</span>)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2>
<p>你可以添加注释让内容在页面中隐藏：</p>
<!-- 这是一条注释，不会显示在页面上 -->
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>Markdown 增强插件极大地扩展了 Markdown 的功能，使你的文档更加丰富和交互式。更多功能和用法，可以参考 <a href="https://plugin-md-enhance.vuejs.press/zh/" target="_blank" rel="noopener noreferrer">vuepress-plugin-md-enhance 文档</a>。</p>
</div></template>


