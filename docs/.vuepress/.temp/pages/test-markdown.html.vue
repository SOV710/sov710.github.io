<template><div><h1 id="markdown-test-page" tabindex="-1"><a class="header-anchor" href="#markdown-test-page"><span>Markdown Test Page</span></a></h1>
<h2 id="bold-text-test" tabindex="-1"><a class="header-anchor" href="#bold-text-test"><span>Bold Text Test</span></a></h2>
<p>This text has <strong>bold formatting</strong> within it.</p>
<p>Here's another way to do <strong>bold formatting</strong>.</p>
<h2 id="table-test-general" tabindex="-1"><a class="header-anchor" href="#table-test-general"><span>Table Test (General)</span></a></h2>
<table>
<thead>
<tr>
<th>Header 1</th>
<th>Header 2</th>
<th>Header 3</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cell 1</td>
<td>Cell 2</td>
<td>Cell 3</td>
</tr>
<tr>
<td>Cell 4</td>
<td>Cell 5</td>
<td>Cell 6</td>
</tr>
<tr>
<td>Cell 7</td>
<td>Cell 8</td>
<td>Cell 9</td>
</tr>
</tbody>
</table>
<h2 id="specific-table-test-interrupts" tabindex="-1"><a class="header-anchor" href="#specific-table-test-interrupts"><span>Specific Table Test (Interrupts)</span></a></h2>
<hr>
<p>向量      助记符   描述                           类型                        错误码    来源<br>
0         #DE      除零错误                       Fault（故障）               否        DIV 和 IDIV 指令<br>
1         #DB      调试异常                       Fault / Trap（故障/陷阱）   否        指令、数据、I/O 断点，单步执行等<br>
2         ---      不可屏蔽中断（NMI）            Interrupt（中断）           否        不可屏蔽的外部中断<br>
3         #BP      断点                           Trap（陷阱）                否        INT3 指令<br>
4         #OF      溢出                           Trap（陷阱）                否        INTO 指令<br>
5         #BR      BOUND 范围超限                 Fault（故障）               否        BOUND 指令<br>
6         #UD      无效操作码（未定义操作码）     Fault（故障）               否        UD 指令或保留操作码<br>
7         #NM      设备不可用（无数学协处理器）   Fault（故障）               否        浮点指令或 WAIT/FWAIT<br>
8         #DF      双重故障                       Abort（终止）               是（0）   任意可能引发异常、NMI 或 INTR 的指令<br>
9         ---      协处理器段溢出（已保留）       Fault（故障）               否        浮点指令¹<br>
10        #TS      无效 TSS                       Fault（故障）               是        任务切换或 TSS 访问<br>
11        #NP      段不存在                       Fault（故障）               是        加载段寄存器或访问系统段<br>
12        #SS      栈段错误                       Fault（故障）               是        栈操作或加载 SS 寄存器<br>
13        #GP      常规保护错误                   Fault（故障）               是        内存访问和其他保护检查<br>
14        #PF      页错误                         Fault（故障）               是        任意内存访问<br>
15        ---      （Intel 保留，不可使用）       ---                         ---       ---<br>
16        #MF      x87 FPU 浮点错误（数学错误）   Fault（故障）               否        x87 FPU 浮点或 WAIT/FWAIT 指令<br>
17        #AC      对齐检查                       Fault（故障）               是        任意内存中的数据引用²<br>
18        #MC      机器检查                       Abort（终止）               否        错误码（如有）和来源取决于具体型号³<br>
19        #XM      SIMD 浮点异常                  Fault（故障）               否        SSE/SSE2/SSE3 浮点指令⁴<br>
20        #VE      虚拟化异常                     Fault（故障）               否        EPT 违规⁵<br>
21        #CP      控制保护异常                   Fault（故障）               是        RET、IRET、RSTORSSP、SETSSBSY；或 CET 启用时缺少 ENDBRANCH<br>
22--31    ---      Intel 保留，不可使用           ---                         ---       ---<br>
32--255   ---      用户自定义（未保留）中断       Interrupt（中断）           否        外部中断或 INT n 指令</p>
<hr>
<h2 id="container-test" tabindex="-1"><a class="header-anchor" href="#container-test"><span>Container Test</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">Information Container</p>
<p>This is an information container.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tip Container</p>
<p>This is a tip container.</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning Container</p>
<p>This is a warning container.</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Danger Container</p>
<p>This is a danger container.</p>
</div>
<h2 id="task-list-test" tabindex="-1"><a class="header-anchor" href="#task-list-test"><span>Task List Test</span></a></h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Task 1 (completed)</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Task 2 (not completed)</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> Task 3 (completed)</label></li>
</ul>
<h2 id="text-alignment-test" tabindex="-1"><a class="header-anchor" href="#text-alignment-test"><span>Text Alignment Test</span></a></h2>
<div style="text-align:center">
<p>This text should be centered.</p>
</div>
<div style="text-align:right">
<p>This text should be right-aligned.</p>
</div>
<h2 id="mark-test" tabindex="-1"><a class="header-anchor" href="#mark-test"><span>Mark Test</span></a></h2>
<p><mark>This text should be highlighted</mark></p>
<h2 id="footnote-test" tabindex="-1"><a class="header-anchor" href="#footnote-test"><span>Footnote Test</span></a></h2>
<p>Here's a sentence with a footnote.<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p>
<h2 id="other-formatting" tabindex="-1"><a class="header-anchor" href="#other-formatting"><span>Other Formatting</span></a></h2>
<ol>
<li>Ordered list item 1</li>
<li>Ordered list item 2</li>
<li>Ordered list item 3</li>
</ol>
<ul>
<li>Unordered list item</li>
<li>Another unordered item</li>
<li>One more item</li>
</ul>
<blockquote>
<p>This is a blockquote that should be properly formatted.</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Code block test</span></span>
<span class="line"><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token string">"Hello World"</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Italic text</em> and <em>more italic text</em>.</p>
<p><s>Strikethrough text</s>.</p>
<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Link test</a></p>
<figure><img src="https://via.placeholder.com/150" alt="Image alt text" tabindex="0" loading="lazy"><figcaption>Image alt text</figcaption></figure>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>This is the footnote content. <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>


