<template><div><h2 id="_7-1-中断与异常概述" tabindex="-1"><a class="header-anchor" href="#_7-1-中断与异常概述"><span>7.1 中断与异常概述</span></a></h2>
<p><strong>中断（Interrupts）和异常（Exceptions）</strong> 表示系统、处理器或当前执行程序中需要处理器注意的特定事件或状况。这些事件通常会使处理器强制跳转到特定的软件程序或任务，即中断处理程序或异常处理程序。处理器对这些事件的响应行为称为中断或异常服务（servicing）或处理（handling）。</p>
<p>中断通常在程序运行期间由硬件随机触发，系统硬件通过中断处理处理器外部事件，如外设请求服务。软件也可通过执行<code v-pre>INT n</code>指令产生中断。</p>
<p>异常则发生在处理器执行指令期间检测到的错误条件，例如除零操作。处理器能检测到多种错误条件，包括保护违规（protection violations）、页错误（page faults）和内部机器故障（internal machine faults）。此外，Pentium 4、Intel Xeon、P6系列及Pentium处理器的机器检查架构（Machine-Check Architecture）还能够在检测到内部硬件错误或总线错误时产生机器检查异常（Machine-Check Exception）。</p>
<p>当接收到中断或检测到异常时，处理器会暂停当前程序或任务的执行，转而执行对应的中断或异常处理程序。处理程序完成后，处理器会恢复执行被中断或发生异常的程序。如果异常是可恢复的，或者中断未导致程序终止，程序执行将无缝继续，不会丢失上下文。</p>
<p>本章将详细介绍处理器在保护模式下的中断与异常处理机制。</p>
<hr>
<h2 id="_7-2-异常与中断向量" tabindex="-1"><a class="header-anchor" href="#_7-2-异常与中断向量"><span>7.2 异常与中断向量</span></a></h2>
<p>为了辅助处理中断和异常，每一个架构定义的异常以及每一个需要处理器特殊处理的中断条件都会被分配一个唯一的标识号，称为向量号（vector number）。处理器使用该异常或中断对应的向量号作为索引，查找中断描述符表 (IDT) 中的条目。该表提供了异常或中断处理程序的入口点（详见第 7.10 节）。</p>
<p>向量号的范围是 0 到 255。其中 0 到 31 的向量号由 Intel 64 和 IA-32 架构保留，用于架构定义的异常和中断。并非所有这些向量号目前都有定义的功能。该范围内未分配的向量号仍然是保留的，不得使用这些保留的向量号。</p>
<p>向量号范围 32 到 255 被定义为用户自定义中断，不被 Intel 64 和 IA-32 架构保留。这些中断通常会被分配给外部 I/O 设备，使得这些设备可以通过外部硬件中断机制之一向处理器发送中断请求（详见第 7.3 节，&quot;中断来源&quot;）。</p>
<p><strong>表 7-1</strong> 展示了为架构定义的异常和 NMI 中断（Non-Maskable Interrupt，不可屏蔽中断）所分配的向量号。该表列出了异常类型（详见第 7.5 节，&quot;异常分类&quot;），并指出对于某些异常，是否会将错误代码保存在栈中。同时也说明了每个预定义异常和 NMI 中断的来源</p>
<hr>
<h2 id="_7-3-中断来源" tabindex="-1"><a class="header-anchor" href="#_7-3-中断来源"><span>7.3 中断来源</span></a></h2>
<p>处理器可以从两个来源接收中断：</p>
<ul>
<li>外部中断（由硬件产生）</li>
<li>软件产生的中断</li>
</ul>
<h3 id="_7-3-1-外部中断" tabindex="-1"><a class="header-anchor" href="#_7-3-1-外部中断"><span>7.3.1 外部中断</span></a></h3>
<p>外部中断是通过处理器上的引脚或通过本地 APIC（Local APIC，常见缩写为 LAPIC）接收的。<br>
在 Pentium 4, Intel Xeon, P6 系列和 Pentium 处理器中，主要的中断引脚是 LINT[1:0] 引脚，这些引脚连接到本地 APIC（详见第 12 章，&quot;高级可编程中断控制器（APIC）&quot;）。当启用了本地 APIC 时，可以通过 APIC 的本地向量表（LVT）对 LINT[1:0] 引脚进行编程，使其与处理器的任意异常或中断向量相关联。</p>
<p>当本地 APIC 被全局/硬件禁用时，这些引脚被分别配置为 INTR 和 NMI 引脚：</p>
<ul>
<li>触发 INTR 引脚表示发生了外部中断。此时处理器会从系统总线（System bus）上读取外部中断控制器（例如 8259A¹）提供的中断向量号（详见第 7.2 节，&quot;异常和中断向量&quot;）。</li>
<li>触发 NMI 引脚表示发生了不可屏蔽中断（NMI），它被分配到中断向量号 2。</li>
</ul>
<blockquote>
<p>¹译者注：8259A是intel在APIC之前设计的PIC，因为向后兼容而作为外部中断控制器而被保留</p>
</blockquote>
<h3 id="受保护模式下的异常与中断-table-7-1" tabindex="-1"><a class="header-anchor" href="#受保护模式下的异常与中断-table-7-1"><span>受保护模式下的异常与中断（Table 7-1）</span></a></h3>
<table>
<thead>
<tr>
<th>向量</th>
<th>助记符</th>
<th>描述</th>
<th>类型</th>
<th>错误码</th>
<th>来源</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>#DE</td>
<td>除零错误</td>
<td>Fault（故障）</td>
<td>否</td>
<td>DIV 和 IDIV 指令</td>
</tr>
<tr>
<td>1</td>
<td>#DB</td>
<td>调试异常</td>
<td>Fault / Trap（故障/陷阱）</td>
<td>否</td>
<td>指令、数据、I/O 断点，单步执行等</td>
</tr>
<tr>
<td>2</td>
<td>---</td>
<td>不可屏蔽中断（NMI）</td>
<td>Interrupt（中断）</td>
<td>否</td>
<td>不可屏蔽的外部中断</td>
</tr>
<tr>
<td>3</td>
<td>#BP</td>
<td>断点</td>
<td>Trap（陷阱）</td>
<td>否</td>
<td>INT3 指令</td>
</tr>
<tr>
<td>4</td>
<td>#OF</td>
<td>溢出</td>
<td>Trap（陷阱）</td>
<td>否</td>
<td>INTO 指令</td>
</tr>
<tr>
<td>5</td>
<td>#BR</td>
<td>BOUND 范围超限</td>
<td>Fault（故障）</td>
<td>否</td>
<td>BOUND 指令</td>
</tr>
<tr>
<td>6</td>
<td>#UD</td>
<td>无效操作码（未定义操作码）</td>
<td>Fault（故障）</td>
<td>否</td>
<td>UD 指令或保留操作码</td>
</tr>
<tr>
<td>7</td>
<td>#NM</td>
<td>设备不可用（无数学协处理器）</td>
<td>Fault（故障）</td>
<td>否</td>
<td>浮点指令或 WAIT/FWAIT</td>
</tr>
<tr>
<td>8</td>
<td>#DF</td>
<td>双重故障</td>
<td>Abort（终止）</td>
<td>是（0）</td>
<td>任意可能引发异常、NMI 或 INTR 的指令</td>
</tr>
<tr>
<td>9</td>
<td>---</td>
<td>协处理器段溢出（已保留）</td>
<td>Fault（故障）</td>
<td>否</td>
<td>浮点指令¹</td>
</tr>
<tr>
<td>10</td>
<td>#TS</td>
<td>无效 TSS</td>
<td>Fault（故障）</td>
<td>是</td>
<td>任务切换或 TSS 访问</td>
</tr>
<tr>
<td>11</td>
<td>#NP</td>
<td>段不存在</td>
<td>Fault（故障）</td>
<td>是</td>
<td>加载段寄存器或访问系统段</td>
</tr>
<tr>
<td>12</td>
<td>#SS</td>
<td>栈段错误</td>
<td>Fault（故障）</td>
<td>是</td>
<td>栈操作或加载 SS 寄存器</td>
</tr>
<tr>
<td>13</td>
<td>#GP</td>
<td>常规保护错误</td>
<td>Fault（故障）</td>
<td>是</td>
<td>内存访问和其他保护检查</td>
</tr>
<tr>
<td>14</td>
<td>#PF</td>
<td>页错误</td>
<td>Fault（故障）</td>
<td>是</td>
<td>任意内存访问</td>
</tr>
<tr>
<td>15</td>
<td>---</td>
<td>（Intel 保留，不可使用）</td>
<td>---</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>16</td>
<td>#MF</td>
<td>x87 FPU 浮点错误（数学错误）</td>
<td>Fault（故障）</td>
<td>否</td>
<td>x87 FPU 浮点或 WAIT/FWAIT 指令</td>
</tr>
<tr>
<td>17</td>
<td>#AC</td>
<td>对齐检查</td>
<td>Fault（故障）</td>
<td>是</td>
<td>任意内存中的数据引用²</td>
</tr>
<tr>
<td>18</td>
<td>#MC</td>
<td>机器检查</td>
<td>Abort（终止）</td>
<td>否</td>
<td>错误码（如有）和来源取决于具体型号³</td>
</tr>
<tr>
<td>19</td>
<td>#XM</td>
<td>SIMD 浮点异常</td>
<td>Fault（故障）</td>
<td>否</td>
<td>SSE/SSE2/SSE3 浮点指令⁴</td>
</tr>
<tr>
<td>20</td>
<td>#VE</td>
<td>虚拟化异常</td>
<td>Fault（故障）</td>
<td>否</td>
<td>EPT 违规⁵</td>
</tr>
<tr>
<td>21</td>
<td>#CP</td>
<td>控制保护异常</td>
<td>Fault（故障）</td>
<td>是</td>
<td>RET、IRET、RSTORSSP、SETSSBSY；或 CET 启用时缺少 ENDBRANCH</td>
</tr>
<tr>
<td>22--31</td>
<td>---</td>
<td>Intel 保留，不可使用</td>
<td>---</td>
<td>---</td>
<td>---</td>
</tr>
<tr>
<td>32--255</td>
<td>---</td>
<td>用户自定义（未保留）中断</td>
<td>Interrupt（中断）</td>
<td>否</td>
<td>外部中断或 INT n 指令</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">注释</p>
<ol>
<li>在 Intel386 之后的处理器中不会再产生该异常。</li>
<li>该异常首次在 Intel486 处理器中引入。</li>
<li>该异常在 Pentium 处理器中引入，并在 P6 系列处理器中得到了增强。</li>
<li>该异常首次在 Pentium III 处理器中引入</li>
<li>仅当处理器支持虚拟机执行控制中的 &quot;EPT-violation #VE&quot; 设置为 1 时，该异常才可能发生。</li>
</ol>
</div>
<p>处理器的本地 APIC（Local APIC）通常连接到一个基于系统的 I/O APIC。在这种架构中，I/O APIC 引脚接收到的外部中断可以通过系统总线（适用于 Pentium 4、Intel Core Duo、Intel Core 2、Intel Atom 和 Intel Xeon 处理器）或 APIC 串行总线（适用于 P6 系列和 Pentium 处理器）传送到本地 APIC。I/O APIC 会决定该中断的向量号，并将此向量号发送给本地 APIC。</p>
<p>当系统中包含多个处理器时，处理器之间也可以通过系统总线（Pentium 4、Intel Core Duo、Intel Core 2、Intel Atom 和 Intel Xeon）或 APIC 串行总线（P6 系列和 Pentium）互相发送中断。</p>
<p>对于 Intel486 处理器和那些不含片上本地 APIC 的早期 Pentium 处理器，LINT[1:0] 引脚是不可用的。这类处理器拥有专用的 NMI 和 INTR 引脚。此时外部中断通常由系统中的中断控制器（如 8259A）产生，并通过 INTR 引脚向处理器发出中断信号。</p>
<p>需要注意的是，还有一些其他处理器引脚也可能触发中断，但这些中断不属于本章描述的中断与异常机制。这类引脚包括：</p>
<ul>
<li><code v-pre>RESET#</code></li>
<li><code v-pre>FLUSH#</code></li>
<li><code v-pre>STPCLK#</code></li>
<li><code v-pre>SMI#</code></li>
<li><code v-pre>R/S#</code></li>
<li><code v-pre>INIT#</code></li>
</ul>
<p>这些引脚是否存在取决于具体处理器的实现。各处理器的引脚功能可参考对应的数据手册。<br>
关于 <code v-pre>SMI#</code> 引脚的详细说明，请参考第 33 章：&quot;系统管理模式（System Management Mode）&quot;。</p>
<hr>
<h3 id="_7-3-2-可屏蔽硬件中断" tabindex="-1"><a class="header-anchor" href="#_7-3-2-可屏蔽硬件中断"><span>7.3.2 可屏蔽硬件中断</span></a></h3>
<p>通过 INTR 引脚或通过本地 APIC 传送给处理器的任何外部中断，都称为可屏蔽硬件中断（maskable hardware interrupt）。</p>
<ul>
<li>通过 INTR 引脚可以传送的中断包括 IA-32 架构定义的所有中断向量（0 到 255）。</li>
<li>通过 本地 APIC 可以传送的中断向量范围是 16 到 255。</li>
</ul>
<p>在 EFLAGS 寄存器中的 IF（中断使能标志）可以用来对所有可屏蔽硬件中断进行整体屏蔽（详见第 7.8.1 节，&quot;屏蔽可屏蔽硬件中断&quot;）。</p>
<p>需要注意的是：如果向量号 0 到 15 的中断是通过本地 APIC 传送的，APIC 会将其识别为非法向量（illegal vector）</p>
<hr>
<h3 id="_7-3-3-软件生成的中断" tabindex="-1"><a class="header-anchor" href="#_7-3-3-软件生成的中断"><span>7.3.3 软件生成的中断</span></a></h3>
<p><code v-pre>INT n</code> 指令允许通过软件生成中断，其操作数为中断向量号。例如，<code v-pre>INT 35</code> 指令会强制调用中断向量号为 35 的中断处理程序。</p>
<p>在此指令中，可以使用 0 到 255 之间的任意中断向量号作为参数。但如果使用了处理器预定义的 NMI 向量（向量号 2），处理器的响应将不会等同于正常方式产生的 NMI（不可屏蔽中断）。当使用向量号 2（NMI 向量）执行该指令时，虽然会调用 NMI 的中断处理程序，但处理器的 NMI 处理硬件不会被激活。</p>
<p>通过 <code v-pre>INT n</code> 指令生成的软件中断不会被 EFLAGS 寄存器中的 IF 标志屏蔽。</p>
<hr>
<h2 id="_7-4-异常的来源" tabindex="-1"><a class="header-anchor" href="#_7-4-异常的来源"><span>7.4 异常的来源</span></a></h2>
<p>处理器从以下三种来源接收异常：</p>
<ul>
<li>由处理器检测到的程序错误异常</li>
<li>由软件生成的异常</li>
<li>机器检查异常</li>
</ul>
<hr>
<h3 id="_7-4-1-程序错误异常-program-error-exceptions" tabindex="-1"><a class="header-anchor" href="#_7-4-1-程序错误异常-program-error-exceptions"><span>7.4.1 程序错误异常（Program-Error Exceptions）</span></a></h3>
<p>当处理器在应用程序、操作系统或系统执行体中执行指令时检测到程序错误，会生成一个或多个异常。Intel 64 和 IA-32 架构为每一种可由处理器检测的异常分配了一个向量号。这些异常被分类为故障（Fault）、陷阱（Trap）和终止（Abort）（详见第 7.5 节，&quot;异常分类&quot;）。</p>
<hr>
<h3 id="_7-4-2-软件生成的异常-software-generated-exceptions" tabindex="-1"><a class="header-anchor" href="#_7-4-2-软件生成的异常-software-generated-exceptions"><span>7.4.2 软件生成的异常（Software-Generated Exceptions）</span></a></h3>
<p><code v-pre>INTO</code>, <code v-pre>INT1</code>, <code v-pre>INT3</code> 和 <code v-pre>BOUND</code> 指令允许通过软件生成异常。这些指令支持在指令流中的特定位置执行异常条件的检测。</p>
<p>例如，<code v-pre>INT3</code> 指令会触发一个断点异常。</p>
<p><code v-pre>INT n</code> 指令也可以用来在软件中模拟异常，但它存在一个限制¹：如果 <code v-pre>INT n</code> 提供的是一个架构定义的异常向量号，处理器会对该向量生成中断（从而访问异常处理程序），但不会将错误码压入栈中。</p>
<p>即使对应的硬件异常通常会生成错误码，使用 <code v-pre>INT n</code> 也不会如此处理。</p>
<p>然而，异常处理程序仍会尝试从栈中弹出一个错误码。在没有错误码被压栈的情况下，它会错误地弹出并丢弃 EIP（指令指针），把它当作错误码，从而导致返回地址错误，程序跳转回了错误的位置。</p>
<hr>
<h3 id="_7-4-3-机器检查异常-machine-check-exceptions" tabindex="-1"><a class="header-anchor" href="#_7-4-3-机器检查异常-machine-check-exceptions"><span>7.4.3 机器检查异常（Machine-Check Exceptions）</span></a></h3>
<p>P6 系列和 Pentium 处理器提供了内部和外部的机器检查机制（Machine-Check Mechanism），用于检测芯片内部硬件以及总线事务的运行状态。这些机制的具体实现取决于处理器的设计（即实现相关）。</p>
<p>当检测到机器检查错误时，处理器会触发一个机器检查异常（向量号 18），并返回一个错误码。</p>
<p>有关机器检查机制的更多信息，参见：</p>
<ul>
<li>第 7 章：&quot;中断 18 ------ 机器检查异常（#MC）&quot;</li>
<li>第 17 章：&quot;机器检查架构（Machine-Check Architecture）&quot;</li>
</ul>
<hr>
<p>1： <code v-pre>INT n</code> 指令的操作码是 <code v-pre>CD</code>，后跟一个立即数字节来编码 <code v-pre>n</code> 的值； 而 <code v-pre>INT1</code> 的操作码是 <code v-pre>F1</code>, <code v-pre>INT3</code> 的操作码是 <code v-pre>CC</code>。</p>
<hr>
<h2 id="_7-5-异常分类" tabindex="-1"><a class="header-anchor" href="#_7-5-异常分类"><span>7.5 异常分类</span></a></h2>
<p>异常根据其报告方式以及是否允许在不中断程序或任务连续性的前提下重新启动触发异常的指令，可分为三类：</p>
<h3 id="•-故障-faults" tabindex="-1"><a class="header-anchor" href="#•-故障-faults"><span>• 故障（Faults）</span></a></h3>
<p>故障是一种通常可以被纠正的异常，在纠正后，程序可以无损地重新启动。当报告一个故障时，处理器会将机器状态恢复到该指令开始执行之前的状态。故障处理程序所保存的返回地址（即 CS 和 EIP 寄存器的内容）指向的，是触发故障的那条指令本身，而不是它之后的指令。</p>
<h3 id="•-陷阱-traps" tabindex="-1"><a class="header-anchor" href="#•-陷阱-traps"><span>• 陷阱（Traps）</span></a></h3>
<p>陷阱是一种在触发指令执行完之后立即报告的异常。陷阱允许程序或任务继续执行，不会丢失执行上下文。陷阱处理程序的返回地址指向的是触发指令之后的下一条指令。</p>
<h3 id="•-终止-aborts" tabindex="-1"><a class="header-anchor" href="#•-终止-aborts"><span>• 终止（Aborts）</span></a></h3>
<p>终止异常是一种异常，它无法精确报告触发异常的指令位置，也不允许重新启动引发异常的程序或任务。终止通常用于报告严重错误，例如硬件故障，或系统表中存在不一致或非法值。</p>
<div class="hint-container info">
<p class="hint-container-title">注意</p>
<p>某些通常被归类为故障的异常，实际上是不可重启的。这种异常会导致处理器状态部分丢失。</p>
<p>例如，当执行 <code v-pre>POPAD</code> 指令时，若其操作导致栈帧越过栈段末端，会触发一个故障。在这种情况下，异常处理程序看到的指令指针（<code v-pre>CS:EIP</code>）被恢复得好像 <code v-pre>POPAD</code> 根本没有执行过，但此时处理器的内部状态（如通用寄存器）已经被改变。</p>
<p>这类情况被视为程序错误。出现此类异常的应用程序应当由操作系统终止执行。</p>
</div>
<hr>
<h2 id="_7-6-程序或任务的重启" tabindex="-1"><a class="header-anchor" href="#_7-6-程序或任务的重启"><span>7.6 程序或任务的重启</span></a></h2>
<p>为了允许在异常或中断处理完成后重新启动程序或任务，所有异常（除终止类外）都保证在指令边界上报告；所有中断也都保证在指令边界上被处理。</p>
<hr>
<h3 id="对于故障类-fault-异常" tabindex="-1"><a class="header-anchor" href="#对于故障类-fault-异常"><span>对于故障类（Fault）异常：</span></a></h3>
<p>返回的指令指针（由处理器在产生异常时保存）指向触发异常的指令。因此，在故障处理完成后重新启动程序或任务时，故障指令将被重新执行。</p>
<p>重启故障指令是处理因操作数访问受阻而引发异常的常见方式。</p>
<p>最典型的例子是页错误异常（#PF）：当程序访问一个尚未加载到内存的页面时，会触发该异常。处理程序可以将该页面加载到内存中，然后通过重新执行故障指令来恢复程序或任务的执行。</p>
<p>为了确保这种重启对当前正在执行的程序或任务透明无感，处理器会保存必要的寄存器和栈指针状态，以便在故障指令执行前恢复原始状态。</p>
<h3 id="对于陷阱类-trap-异常" tabindex="-1"><a class="header-anchor" href="#对于陷阱类-trap-异常"><span>对于陷阱类（Trap）异常：</span></a></h3>
<p>返回的指令指针指向触发异常的那条指令之后的下一条指令。</p>
<p>如果陷阱发生在一条改变控制流的指令中，返回地址会反映该跳转行为。</p>
<p>例如：若在执行 <code v-pre>JMP</code> 指令时发生陷阱异常，返回地址会指向 <code v-pre>JMP</code> 的目标地址，而不是 <code v-pre>JMP</code> 指令之后的下一条指令。</p>
<p>所有陷阱类异常都允许在不中断程序连续性的前提下重启程序或任务。</p>
<p>一个典型例子是溢出异常（Overflow Exception），属于陷阱类异常。在此情形下，返回地址指向 <code v-pre>INTO</code> 指令（用于检测 EFLAGS 中 OF 溢出标志）之后的那条指令。异常处理程序解决溢出问题后，程序或任务会从 <code v-pre>INTO</code> 指令之后的指令继续执行。</p>
<h3 id="对于终止类-abort-异常" tabindex="-1"><a class="header-anchor" href="#对于终止类-abort-异常"><span>对于终止类（Abort）异常：</span></a></h3>
<p>终止类异常不支持可靠的程序或任务重启。</p>
<p>这类异常的处理程序主要用于收集诊断信息，了解异常发生时处理器的状态，并尽可能优雅地关闭应用程序或系统。</p>
<h3 id="对于中断-interrupts" tabindex="-1"><a class="header-anchor" href="#对于中断-interrupts"><span>对于中断（Interrupts）：</span></a></h3>
<p>中断严格保证程序或任务的可重启性，不会丢失上下文。</p>
<p>中断返回指令指针指向的是处理器接收中断时的指令边界的下一条指令。如果被中断的指令具有重复前缀（如 REP），则中断会在当前迭代完成后发生，并且寄存器状态会设置好以便进行下一次迭代。</p>
<h3 id="关于-p6-系列处理器的说明" tabindex="-1"><a class="header-anchor" href="#关于-p6-系列处理器的说明"><span>关于 P6 系列处理器的说明：</span></a></h3>
<p>P6 系列处理器支持指令的推测执行，但这不会影响中断的发生。中断是在指令执行的退休阶段（retirement phase）检测到的指令边界处触发的，因此中断总是在乱序执行流恢复为&quot;顺序执行流&quot;后发生。</p>
<p>详见《Intel® 64 和 IA-32 架构软件开发手册 第1卷》第2章，了解 P6 系列微架构及其对乱序执行的支持。</p>
<h3 id="关于早期-ia-32-处理器" tabindex="-1"><a class="header-anchor" href="#关于早期-ia-32-处理器"><span>关于早期 IA-32 处理器：</span></a></h3>
<p>Pentium 及更早的 IA-32 处理器也支持不同程度的指令预取和预译码，但这些处理器同样只在真正&quot;顺序执行&quot;时才触发异常和中断。</p>
<p>对于任意一段代码，在不同家族的 IA-32 处理器上执行时，异常的触发行为是一致的（除非该代码使用了新定义的异常或操作码）。</p>
<hr>
<h2 id="_7-7-不可屏蔽中断-nmi" tabindex="-1"><a class="header-anchor" href="#_7-7-不可屏蔽中断-nmi"><span>7.7 不可屏蔽中断（NMI）</span></a></h2>
<p>不可屏蔽中断（NMI）可以通过以下两种方式之一产生：</p>
<ul>
<li>外部硬件触发处理器的 NMI 引脚</li>
<li>处理器通过系统总线（Pentium 4、Intel Core Duo、Intel Core 2、Intel Atom 和 Intel Xeon 处理器）或 APIC 串行总线（P6 系列和 Pentium 处理器）接收到一个传递模式为 NMI 的消息</li>
</ul>
<p>当处理器从上述任一来源收到 NMI 时，会立即调用中断向量号 2 所指向的 NMI 中断处理程序。同时，处理器会启用某些硬件条件，确保在 NMI 处理程序执行完成前，不再接收其他任何中断，包括其他 NMI 中断（参见 7.7.1 节，&quot;多个 NMI 的处理&quot;）。</p>
<p>另外，通过上述任一方式接收到的 NMI 中断，都无法被 EFLAGS 寄存器中的 IF 标志屏蔽。</p>
<p>虽然可以通过 INTR 引脚发送一个可屏蔽硬件中断到向量 2，以调用 NMI 中断处理程序，但这种方式产生的并非真正的 NMI 中断。只有通过上述机制产生的 NMI 才会真正激活处理器内部的 NMI 处理硬件。</p>
<hr>
<h3 id="_7-7-1-处理多个nmi中断" tabindex="-1"><a class="header-anchor" href="#_7-7-1-处理多个nmi中断"><span>7.7.1 处理多个NMI中断</span></a></h3>
<p>当一个NMI中断处理程序正在执行时，处理器会阻止接收后续的NMI中断，直到下一次执行IRET指令为止。这种对NMI的阻止防止了NMI处理程序的嵌套执行。建议通过中断门（interrupt gate）访问NMI中断处理程序，以便禁用可屏蔽的硬件中断（参见7.8.1节，&quot;屏蔽可屏蔽硬件中断&quot;）。</p>
<p>即使IRET指令执行时产生故障，也会解除NMI中断的阻止。例如，如果IRET指令在EFLAGS.VM = 1且IOPL &lt; 3的情况下执行，会产生一个常规保护异常（参见22.2.7节，&quot;敏感指令&quot;）。在这种情况下，在异常处理程序被调用之前，NMI中断已经重新被允许接收。</p>
<hr>
<h2 id="_7-8-enabling-and-disabling-interrupts" tabindex="-1"><a class="header-anchor" href="#_7-8-enabling-and-disabling-interrupts"><span>7.8 ENABLING AND DISABLING INTERRUPTS</span></a></h2>
<p>The processor inhibits the generation of some interrupts, depending on the state of the processor and of the IF and RF flags in the EFLAGS register, as described in the following sections.</p>
<h3 id="_7-8-1-屏蔽可屏蔽硬件中断" tabindex="-1"><a class="header-anchor" href="#_7-8-1-屏蔽可屏蔽硬件中断"><span>7.8.1 屏蔽可屏蔽硬件中断</span></a></h3>
<p>IF 标志能够屏蔽处理器通过 INTR 引脚或本地 APIC 接收到的可屏蔽硬件中断。当 IF 标志清零时，处理器会阻止通过 INTR 引脚或本地 APIC 传送的中断生成内部中断请求。当 IF 标志置位时，这些中断将作为正常的外部中断处理。</p>
<p>IF 标志不影响通过 NMI 引脚或本地 APIC 以 NMI 模式发送的不可屏蔽中断，也不会影响处理器生成的异常。与 EFLAGS 寄存器中的其他标志类似，处理器在硬件复位时会自动清除 IF 标志。</p>
<p>需要注意的是，由于可屏蔽硬件中断的范围包括了中断和异常向量 0 到 32，这可能会造成一些混淆。从架构角度讲，当 IF 标志被设置后，通过 INTR 引脚可向处理器发送向量号为 0 到 32 的任意中断，通过本地 APIC 可发送向量号 16 到 32 的中断。处理器会产生相应的中断，并调用对应向量号的中断或异常处理程序。例如，通过 INTR 引脚调用页故障处理程序（向量号14）是可行的，但此时产生的并非真正的页故障异常，而是一个中断。同 <code v-pre>INT n</code> 指令类似，当通过 INTR 引脚向异常向量号发送中断时，处理器不会将错误码压入栈中，这可能导致异常处理程序无法正常工作。</p>
<p>IF 标志可以通过 STI（设置中断使能标志）和 CLI（清除中断使能标志）指令进行设置或清除。这两条指令只有在 CPL（当前权限级）小于或等于 IOPL（I/O权限级）时才能执行。如果 CPL 大于 IOPL，执行这些指令将引发常规保护异常 (#GP)。当 IF = 0 时，在执行 STI 指令后的下一条指令边界上，可屏蔽硬件中断仍然会被暂时抑制。这种抑制状态会在另一个事件（如异常）被处理后或执行下一条指令后解除。</p>
<p>以下操作也会影响 IF 标志：</p>
<ul>
<li>PUSHF 指令将所有标志压入栈中，允许检查和修改这些标志。POPF 指令则可用于将修改后的标志重新载入 EFLAGS 寄存器。</li>
<li>任务切换以及 POPF 和 IRET 指令都会重新加载 EFLAGS 寄存器，因此可用于修改 IF 标志。</li>
<li>通过中断门处理的中断，会自动清除 IF 标志，从而禁用可屏蔽硬件中断（而通过陷阱门处理的中断不会清除 IF 标志）。</li>
</ul>
<p>有关 CLI、STI、PUSHF、POPF 和 IRET 指令的详细描述，请参考 Intel® 64 和 IA-32 架构软件开发手册第2A卷的第3章和第2B卷的第4章。</p>
<hr>
<h3 id="_7-8-2-屏蔽指令断点" tabindex="-1"><a class="header-anchor" href="#_7-8-2-屏蔽指令断点"><span>7.8.2 屏蔽指令断点</span></a></h3>
<p>EFLAGS 寄存器中的 RF（恢复）标志控制处理器对指令断点的响应方式（RF 标志的详细说明见第2.3节，&quot;EFLAGS寄存器中的系统标志和字段&quot;）。</p>
<p>当 RF 置位时，将阻止指令断点产生调试异常 (#DB)；当 RF 清零时，指令断点会产生调试异常。RF 标志的主要作用是避免处理器因指令断点而陷入调试异常的死循环。有关该标志更多信息，请参见第19.3.1.1节，&quot;指令断点异常条件&quot;。</p>
<p>如7.8.3节所述，使用 MOV 或 POP 指令加载 SS 寄存器的操作，也会抑制下一条指令的指令断点（效果与设置 EFLAGS.RF 为 1 相同）。</p>
<div class="hint-container tip">
<p class="hint-container-title">注释</p>
<ol>
<li>当通过在 CR4 控制寄存器中设置 VME 标志启用虚拟模式扩展时，IOPL 对上述指令的影响会稍有变化（参见第22.3节，&quot;虚拟8086模式下的中断与异常处理&quot;）。同时，行为也会受到 PVI 标志影响（参见第22.4节，&quot;保护模式虚拟中断&quot;）。</li>
<li>在执行 STI 指令后的下一条指令边界上，非屏蔽中断（NMI）和系统管理中断（SMI）也可能暂时被抑制。</li>
</ol>
</div>
<hr>
<h2 id="_7-9-并发事件的优先级" tabindex="-1"><a class="header-anchor" href="#_7-9-并发事件的优先级"><span>7.9 并发事件的优先级</span></a></h2>
<p>如果在指令边界（两条指令执行之间）有多个事件同时等待处理，处理器会以一种确定的顺序对它们进行处理。表 7-2 展示了不同事件类别之间的优先级顺序。</p>
<p><strong>Table 7-2：并发事件的优先级</strong></p>
<table>
<thead>
<tr>
<th>优先级（Priority）</th>
<th>描述（Description）</th>
</tr>
</thead>
<tbody>
<tr>
<td>1（最高）</td>
<td>硬件复位和机器检查 – RESET、机器检查 (#MC)</td>
</tr>
<tr>
<td>2</td>
<td>任务切换陷阱 – TSS 中的 T 标志被置位 (#DB)</td>
</tr>
<tr>
<td>3</td>
<td>外部硬件干预事件 – FLUSH、STOPCLK、SMI、INIT</td>
</tr>
<tr>
<td>4</td>
<td>上一条指令导致的陷阱 – 陷阱类调试异常（由于 TF 标志或数据/I-O 断点引起的 #DB）</td>
</tr>
<tr>
<td>5</td>
<td>不可屏蔽中断（NMI）¹</td>
</tr>
<tr>
<td>6</td>
<td>可屏蔽硬件中断¹</td>
</tr>
<tr>
<td>7</td>
<td>故障类调试异常（由于指令断点引起的 #DB）</td>
</tr>
<tr>
<td>8</td>
<td>取下一条指令时的故障 – 代码段界限违规 (#GP)、代码页错误 (#PF)</td>
</tr>
<tr>
<td>9（最低）</td>
<td>解码下一条指令时的故障 – 间接调用或跳转目标处缺少 ENDBRANCH 导致的控制保护异常 (#CP)、指令长度超过 15 字节 (#GP)、无效操作码 (#UD)、协处理器不可用 (#NM)</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">注释</p>
<p>¹ Intel® 486 及更早处理器将不可屏蔽中断（NMI）与可屏蔽中断放在同一级别进行优先级处理。</p>
</div>
<p>处理器首先处理来自具有最高优先级类别的待处理事件，将执行转移到该事件处理程序的第一条指令。优先级较低的异常会被丢弃，优先级较低的中断则仍然保持挂起状态。当事件处理程序将执行返回到程序或任务发生原始事件的位置时，被丢弃的异常可能会被再次生成。虽然表 7-2 中列出的类别之间的优先级在不同处理器实现中是一致的，但每个类别内事件的具体优先级则取决于具体实现，不同处理器可能会有所不同。</p>
<p>表 7-2 指定的是在指令边界上可能挂起的事件优先级顺序，它并未指定指令执行或事件传递过程中产生的故障（如 #BR、#TS、#NP、#SS、#GP、#PF、#AC、#MF、#XM、#VE 或 #CP）的优先级。此外，它也不适用于由调用中断程序指令（INT n, INTO, INT3 和 INT1）产生的事件，因为这些事件属于指令执行过程的一部分，不会在两条指令之间发生。</p>
<hr>
<h2 id="_7-10-中断描述符表-idt" tabindex="-1"><a class="header-anchor" href="#_7-10-中断描述符表-idt"><span>7.10 中断描述符表（IDT）</span></a></h2>
<p>中断描述符表（Interrupt Descriptor Table, IDT）用于将每个异常或中断向量与处理该异常或中断的程序或任务的门描述符（gate descriptor）关联起来。与GDT和LDT一样，IDT是一个由多个8字节描述符组成的数组（在保护模式下）。但与GDT不同，IDT的第一个条目可以包含有效的描述符。处理器通过将异常或中断向量乘以8（门描述符的字节数），来计算IDT中的索引。由于中断或异常向量只有256个，因此IDT最多只需要包含256个描述符。但IDT也可以少于256个描述符，因为仅对可能发生的中断或异常向量才需要描述符。IDT中所有未使用的描述符项，应将描述符的存在位（present flag）置为0。</p>
<p>为了最大化缓存行填充性能，IDT的基地址应以8字节边界对齐。IDT的界限值（limit）以字节为单位，加上基地址后得出最后一个有效字节的地址。当界限值为0时，意味着正好只有1个有效字节。由于每个IDT条目总是8字节长，因此界限值应始终设置为8的整数倍减1（即8N-1）。</p>
<p>IDT可位于线性地址空间的任何位置。如图7-1所示，处理器使用IDTR寄存器定位IDT。该寄存器保存了IDT的32位基地址和16位的界限值。</p>
<ul>
<li><code v-pre>LIDT</code>（Load IDT register）和<code v-pre>SIDT</code>（Store IDT register）指令分别用于加载和保存IDTR寄存器内容。<code v-pre>LIDT</code>指令将内存操作数中存放的基地址和界限值加载到IDTR寄存器中。该指令只能在CPL（当前特权级）为0时执行，通常由操作系统的初始化代码用于创建IDT，或用于操作系统切换IDT. <code v-pre>SIDT</code>指令则将IDTR寄存器的基地址和界限值复制到内存中，该指令可以在任何特权级别执行。</li>
</ul>
<p>如果某个向量引用了超出IDT界限的描述符，将产生一个常规保护异常（#GP）。</p>
<div class="hint-container info">
<p class="hint-container-title">注意</p>
<p>由于中断仅向处理器核心传递一次，因此错误配置的IDT可能导致中断处理不完整，甚至阻塞后续中断的传递。</p>
<p>在设置IDTR寄存器的基地址、界限值和访问字段以及门描述符中的每个字段时，都必须遵守IA-32架构的规则。Intel 64架构同样适用。这包括通过GDT或LDT隐式引用目标代码段，以及对栈的访问。</p>
</div>
<figure><img src="https://pic4.zhimg.com/v2-974385e746fb795b05e7730c582fa323_1440w.jpg" alt="Figure 7-1. IDTR 与 IDT 的关系" tabindex="0" loading="lazy"><figcaption>Figure 7-1. IDTR 与 IDT 的关系</figcaption></figure>
<hr>
<h2 id="_7-11-idt描述符" tabindex="-1"><a class="header-anchor" href="#_7-11-idt描述符"><span>7.11 IDT描述符</span></a></h2>
<p>IDT 中可以包含以下三种门描述符（gate descriptors）中的任意一种：</p>
<ul>
<li>任务门描述符（Task-gate descriptor）</li>
<li>中断门描述符（Interrupt-gate descriptor）</li>
<li>陷阱门描述符（Trap-gate descriptor）</li>
</ul>
<p>图7-2 显示了任务门、中断门和陷阱门描述符的格式。在 IDT 中使用的任务门描述符格式，与 GDT 或 LDT 中使用的任务门描述符格式完全相同（参见第9.2.5节，&quot;任务门描述符&quot;）。任务门中包含了异常或中断处理任务的TSS（任务状态段）的段选择子。</p>
<p>中断门和陷阱门与调用门（call gate）非常相似（参见第6.8.3节，&quot;调用门&quot;）。它们都包含一个远指针（段选择子和偏移地址），处理器利用该指针将程序执行转移到异常或中断处理代码段中的处理程序。这两种门之间的区别在于处理器处理EFLAGS寄存器中IF标志的方式不同（参见第7.12.1.3节，&quot;异常或中断处理程序中的标志使用&quot;）。</p>
<figure><img src="https://pic2.zhimg.com/v2-784af5078ce6c8d12bb0751ebb721829_1440w.jpg" alt="Figure 7-2. IDT 门描述符" tabindex="0" loading="lazy"><figcaption>Figure 7-2. IDT 门描述符</figcaption></figure>
<hr>
<h2 id="_7-12-异常和中断处理" tabindex="-1"><a class="header-anchor" href="#_7-12-异常和中断处理"><span>7.12 异常和中断处理</span></a></h2>
<p>处理器对异常和中断处理程序的调用方式与使用CALL指令调用过程或任务的方式类似。当响应异常或中断时，处理器使用异常或中断的向量号作为索引，找到IDT中的描述符：</p>
<ul>
<li>如果索引指向的是中断门（interrupt gate）或陷阱门（trap gate），则处理器以类似通过调用门（call gate）调用过程的方式调用异常或中断处理程序（参见第6.8.2节&quot;门描述符&quot;，至第6.8.6节&quot;从调用过程返回&quot;）。</li>
<li>如果索引指向的是任务门（task gate），则处理器以类似通过任务门调用任务的方式，执行任务切换到异常或中断处理任务（参见第9.3节&quot;任务切换&quot;）</li>
</ul>
<hr>
<h3 id="_7-12-1-异常或中断处理程序" tabindex="-1"><a class="header-anchor" href="#_7-12-1-异常或中断处理程序"><span>7.12.1 异常或中断处理程序</span></a></h3>
<p>中断门（interrupt gate）或陷阱门（trap gate）引用的异常或中断处理程序将在当前执行任务的上下文中运行（参见图7-3）。门描述符中的段选择子（segment selector）指向位于 GDT 或当前 LDT 中的可执行代码段的段描述符。门描述符的偏移字段（offset field）指向异常或中断处理程序的入口点。</p>
<figure><img src="https://pic2.zhimg.com/v2-dfb03d90996ff918c78b198b66d903f7_1440w.jpg" alt="Figure 7-3. 中断程序调用" tabindex="0" loading="lazy"><figcaption>Figure 7-3. 中断程序调用</figcaption></figure>
<p>当处理器调用异常或中断处理程序时：</p>
<ul>
<li>
<p>如果处理程序将在数值上更低的特权级执行，将发生一次栈切换（stack switch）。<br>
在发生栈切换时：</p>
<ul>
<li>a. 处理程序所使用的栈段选择子和栈指针将从当前任务的 TSS（任务状态段）中获取。处理器会在新栈上压入被中断程序的栈段选择子和栈指针。</li>
<li>b. 接着，处理器会将当前 EFLAGS、CS 和 EIP 寄存器的状态保存在新栈中（见图 7-4）。</li>
<li>c. 如果异常需要保存一个错误码（error code），则该错误码会在 EIP 的值之后被压入新栈中。</li>
</ul>
</li>
<li>
<p>如果处理程序将在与被中断程序相同的特权级执行：</p>
<ul>
<li>a. 处理器会将当前 EFLAGS、CS 和 EIP 寄存器的状态保存在当前栈中（见图 7-4）。</li>
<li>b. 如果异常需要保存一个错误码，则该错误码会在 EIP 的值之后被压入当前栈中。</li>
</ul>
</li>
</ul>
<figure><img src="https://pic2.zhimg.com/v2-2f80b96183b7d50fcc8465507856f9df_1440w.jpg" alt="Figure 7-4. 中断与异常处理例程中的堆栈使用" tabindex="0" loading="lazy"><figcaption>Figure 7-4. 中断与异常处理例程中的堆栈使用</figcaption></figure>
<p>要从异常或中断处理程序返回，处理程序必须使用 <code v-pre>IRET</code>（或 <code v-pre>IRETD</code>）指令。</p>
<p><code v-pre>IRET</code> 指令与 <code v-pre>RET</code> 指令类似，不同的是它会将之前保存的标志寄存器内容恢复到 <code v-pre>EFLAGS</code> 寄存器中。其中，<code v-pre>EFLAGS</code> 寄存器的 <code v-pre>IOPL</code> 字段仅在当前特权级（CPL）为 0 时才会被恢复。<code v-pre>IF</code> 标志仅当当前特权级（CPL）小于或等于 <code v-pre>IOPL</code> 时才会发生改变。</p>
<p><code v-pre>IRET</code> 指令的完整操作过程，请参阅 Intel® 64 和 IA-32 架构软件开发手册第2A卷的第3章&quot;指令集参考，A-L&quot;。</p>
<p>若在调用处理程序时发生了栈切换（stack switch），<code v-pre>IRET</code> 指令在返回时会重新切换回被中断程序原本的栈。</p>
<hr>
<h3 id="_7-12-1-1-转移到中断和异常处理程序时影子栈的使用" tabindex="-1"><a class="header-anchor" href="#_7-12-1-1-转移到中断和异常处理程序时影子栈的使用"><span>7.12.1.1 转移到中断和异常处理程序时影子栈的使用</span></a></h3>
<p>当处理器调用异常或中断处理程序时：</p>
<ul>
<li>
<p>如果处理程序将在数值上更低的特权级执行，将发生一次影子栈切换（shadow stack switch）。发生影子栈切换时：</p>
<ul>
<li>a. 当从特权级 3 转移时，如果特权级 3 启用了影子栈，则会将当前的影子栈指针（SSP）保存到 IA32_PL3_SSP MSR 中。</li>
<li>b. 如果处理程序所执行的特权级启用了影子栈，则处理程序使用的影子栈将根据处理程序执行时的特权级，从以下 MSR 中获得： - 如果处理程序在特权级 2 执行，则使用 IA32_PL2_SSP。 - 如果处理程序在特权级 1 执行，则使用 IA32_PL1_SSP。 - 如果处理程序在特权级 0 执行，则使用 IA32_PL0_SSP。</li>
<li>c. 随后，处理器会验证所获取的 SSP，确保其指向一个有效且当前未被使用的监管影子栈（supervisory shadow stack）。该验证过程包括检查 SSP 所指向的地址处的监管影子栈令牌（supervisor shadow stack token）。对监管影子栈令牌的验证及将其标记为&quot;忙碌&quot;（busy）的具体操作，详见 Intel® 64 和 IA-32 架构软件开发手册第1卷第18.2.3节。</li>
<li>d. 在新的影子栈上，如果被中断的程序执行在小于3的特权级，处理器会依次压入被中断程序的 <code v-pre>CS</code>、<code v-pre>LIP (CS.base + EIP)</code> 和 <code v-pre>SSP</code> 寄存器的内容；参见图7-5¹。</li>
</ul>
</li>
<li>
<p>如果处理程序将在与被中断程序相同的特权级执行，并且当前特权级启用了影子栈：</p>
<ul>
<li>a. 处理器会在当前的影子栈上依次保存当前的 <code v-pre>CS</code>、<code v-pre>LIP (CS.base + EIP)</code> 和 <code v-pre>SSP</code> 寄存器的内容；参见图7-5。</li>
</ul>
</li>
</ul>
<figure><img src="https://pic1.zhimg.com/v2-54a2c23abcdcaf462ccab41f46c1176c_1440w.jpg" alt="Figure 7-5. 中断和异常处理例程跳转中的 Shadow Stack 使用" tabindex="0" loading="lazy"><figcaption>Figure 7-5. 中断和异常处理例程跳转中的 Shadow Stack 使用</figcaption></figure>
<p>¹ 如果上述任何压栈操作导致异常或 VM 退出，监督级影子栈令牌将保持为忙状态。</p>
<hr>
<p>从异常或中断处理程序返回时，处理程序必须使用 <code v-pre>IRET</code>（或<code v-pre>IRETD</code>）指令。<br>
当执行的异常或中断处理程序与被中断程序在相同特权级时，处理器会执行以下动作以强制实施返回地址保护：</p>
<ul>
<li>
<p>将 <code v-pre>CS</code> 和 <code v-pre>EIP</code> 寄存器恢复为中断或异常发生前的值。</p>
</li>
<li>
<p>如果启用了影子栈（Shadow Stack）：</p>
<ul>
<li>比较影子栈上地址 <code v-pre>SSP+8</code>（LIP）和 <code v-pre>SSP+16</code>（CS）处的值，与从栈中弹出的 <code v-pre>CS</code> 和 <code v-pre>(CS.base + EIP)</code> 是否一致。如果不一致，处理器将产生一个控制保护异常 (<code v-pre>#CP(FAR-RET/IRET)</code>)。</li>
<li>将影子栈顶端的值（中断或异常发生前的SSP）弹出到 <code v-pre>SSP</code> 寄存器中。</li>
</ul>
</li>
</ul>
<p>当执行的异常或中断处理程序与被中断程序在不同特权级时，处理器会执行以下动作：</p>
<ul>
<li>
<p>如果当前特权级启用了影子栈：</p>
<ul>
<li>
<p>若 <code v-pre>SSP</code> 未按照8字节对齐，处理器将产生控制保护异常 (<code v-pre>#CP(FAR-RET/IRET)</code>)。</p>
</li>
<li>
<p>如果返回目标过程的特权级小于3（返回到监督模式）：</p>
<ul>
<li>比较影子栈上地址 <code v-pre>SSP+8</code>（LIP）和 <code v-pre>SSP+16</code>（CS）处的值，与从栈中弹出的 <code v-pre>CS</code> 和 <code v-pre>(CS.base + EIP)</code> 是否一致。如果不一致，则产生控制保护异常 (<code v-pre>#CP(FAR-RET/IRET)</code>)。</li>
<li>临时内部保存栈顶值（即返回目标过程的SSP）。</li>
</ul>
</li>
<li>
<p>如果在影子栈地址 <code v-pre>SSP+24</code> 处存在一个已被标记为忙（busy）的监督级影子栈令牌，则按照 Intel® 64 与 IA-32 架构软件开发手册第1卷第18.2.3节所述，将该令牌标记为自由（free）状态。</p>
</li>
<li>
<p>如果返回目标过程的特权级小于3（返回到监督模式），则从上述内部保存值中恢复SSP寄存器。</p>
</li>
<li>
<p>如果返回目标过程的特权级等于3（返回到用户模式），并且特权级3已启用影子栈，则处理器会使用<code v-pre>IA32_PL3_SSP</code> MSR中的值恢复SSP寄存器。</p>
</li>
</ul>
</li>
</ul>
<h3 id="_7-12-1-2-异常和中断处理程序的保护" tabindex="-1"><a class="header-anchor" href="#_7-12-1-2-异常和中断处理程序的保护"><span>7.12.1.2 异常和中断处理程序的保护</span></a></h3>
<p>异常和中断处理程序的特权级保护类似于通过调用门（Call Gate）进行普通过程调用时的保护机制（参见第6.8.4节，&quot;通过调用门访问代码段&quot;）。处理器不允许执行权转移到特权级比当前特权级（CPL）更低（数值上更大）的代码段中的异常或中断处理程序。</p>
<p>若试图违反这一规则，处理器会产生一个常规保护异常（#GP）。但异常和中断处理程序的保护机制在以下方面有所不同：</p>
<ul>
<li>由于中断和异常向量没有请求特权级（RPL），因此处理器在对异常和中断处理程序进行隐式调用时不会检查RPL。</li>
<li>只有当使用<code v-pre>INT n</code>、<code v-pre>INT3</code>或<code v-pre>INTO</code>指令生成异常或中断时，处理器才会检查中断门或陷阱门的描述符特权级（DPL）¹。在此情况下，当前特权级（CPL）必须小于或等于门的DPL。这一限制可以防止运行在特权级3的应用程序或过程，通过软件中断访问关键的异常处理程序（例如页错误处理程序），前提是这些处理程序被放置在更高特权级（数值上更低）的代码段内。对于硬件生成的中断和处理器检测到的异常，处理器会忽略中断门和陷阱门的DPL。</li>
</ul>
<p>由于异常和中断通常无法在可预测的时刻发生，上述特权级规则实际上对异常和中断处理程序的运行特权级施加了限制。可以使用以下方法之一来避免违反特权级的情况发生：</p>
<ul>
<li>将异常或中断处理程序放置在一致代码段（conforming code segment）中。这种方法适用于仅需访问栈中数据的处理程序（如除零错误异常处理程序）。但若处理程序需要访问数据段的数据，则该数据段需允许特权级3访问，这会导致数据段缺乏保护。</li>
<li>将异常或中断处理程序放置在特权级0的非一致代码段（nonconforming code segment）中。这种情况下，无论被中断的程序或任务的CPL是多少，处理程序都始终可以执行。</li>
</ul>
<h3 id="_7-12-1-3-异常或中断处理程序中对标志寄存器的使用" tabindex="-1"><a class="header-anchor" href="#_7-12-1-3-异常或中断处理程序中对标志寄存器的使用"><span>7.12.1.3 异常或中断处理程序中对标志寄存器的使用</span></a></h3>
<p>当通过中断门（Interrupt Gate）或陷阱门（Trap Gate）调用异常或中断处理程序时，处理器会在将 <code v-pre>EFLAGS</code> 寄存器的内容压入栈中之后，自动清除 <code v-pre>EFLAGS</code> 中的 <code v-pre>TF</code> 标志（调用异常和中断处理程序时，处理器还会清除 <code v-pre>EFLAGS</code> 寄存器中的 <code v-pre>VM</code>、<code v-pre>RF</code> 和 <code v-pre>NT</code> 标志，这些标志也先被保存在栈上）。<br>
清除 <code v-pre>TF</code> 标志可以避免指令跟踪对中断响应造成影响，并确保在处理程序被调用之后不会再产生单步执行异常（Single-step Exception）。后续的 <code v-pre>IRET</code> 指令会将栈中保存的 <code v-pre>EFLAGS</code> 的值恢复到 <code v-pre>TF</code>（以及 <code v-pre>VM</code>、<code v-pre>RF</code> 和 <code v-pre>NT</code>）标志中。</p>
<p>中断门和陷阱门的唯一区别在于处理器对 <code v-pre>EFLAGS</code> 寄存器中 <code v-pre>IF</code> 标志的处理方式。当通过中断门调用异常或中断处理程序时，处理器会清除 <code v-pre>IF</code> 标志，以防止其他中断干扰当前中断处理程序。后续执行的 <code v-pre>IRET</code> 指令会将 <code v-pre>IF</code> 标志恢复到栈中保存的原值。</p>
<p>而当通过陷阱门调用处理程序时，处理器不会改变 <code v-pre>IF</code> 标志。</p>
<hr>
<h3 id="_7-12-2-中断任务-interrupt-tasks" tabindex="-1"><a class="header-anchor" href="#_7-12-2-中断任务-interrupt-tasks"><span>7.12.2 中断任务（Interrupt Tasks）</span></a></h3>
<p>当通过 IDT 中的任务门（Task Gate）访问异常或中断处理程序时，会导致任务切换（Task Switch）。使用单独的任务来处理异常或中断有以下几个优点：</p>
<ul>
<li>被中断的程序或任务的整个上下文（context）会自动被保存。</li>
<li>可以给中断处理任务单独的地址空间（例如提供单独的 LDT），从而进一步将该任务与其他任务隔离。</li>
<li>通过提供新的 TSS（任务状态段），处理程序可以在处理异常或中断时使用一个新的特权级0的栈（PL0 Stack）。如果当前的特权级0的栈已损坏，使用任务门访问处理程序可提供一个全新的特权级0栈，从而防止系统崩溃。</li>
</ul>
<p>然而，使用单独任务处理中断的缺点是，任务切换时需要保存大量的机器状态，导致处理速度慢于使用中断门，从而增加了中断处理的延迟（Interrupt Latency）。</p>
<p>IDT 中的任务门引用的是 GDT 中的 TSS 描述符（参见图 7-6）。切换到处理程序任务的方式与普通任务切换相同（参见第9.3节，&quot;任务切换&quot;）。返回被中断任务的链接会存储在处理程序任务的 TSS 中的前一任务链接字段（previous task link field）中。如果异常生成了错误码（Error Code），则该错误码会被复制到新任务的栈中。</p>
<p>当操作系统使用异常或中断处理任务时，实际上存在两种可用的任务调度机制：</p>
<ul>
<li>软件调度器（Software Scheduler，属于操作系统的一部分）</li>
<li>硬件调度器（Hardware Scheduler，属于处理器中断机制的一部分）</li>
</ul>
<p>其中软件调度器必须能够处理在启用中断时可能被硬件调度的中断任务。</p>
<div class="hint-container info">
<p class="hint-container-title">注意</p>
<p>由于 IA-32 架构中的任务（tasks）不是可重入的，因此中断处理任务（interrupt-handler task）在完成中断处理到执行 IRET 指令的这段时间内，必须禁用中断。这样做可以防止在中断任务的 TSS（任务状态段）仍被标记为忙（busy）状态时再次发生中断，否则会导致触发常规保护异常（#GP）。</p>
</div>
<figure><img src="https://pic4.zhimg.com/v2-ec258b954c52a068b7926bd3c149bbd1_1440w.jpg" alt="Figure 7-6. 中断任务切换" tabindex="0" loading="lazy"><figcaption>Figure 7-6. 中断任务切换</figcaption></figure>
<hr>
<h2 id="_7-13-错误码-error-code" tabindex="-1"><a class="header-anchor" href="#_7-13-错误码-error-code"><span>7.13 错误码（Error Code）</span></a></h2>
<p>当某个异常情况涉及到特定的段选择子（Segment Selector）或 IDT 向量时，处理器会将一个错误码压入异常处理程序的栈（无论处理程序是过程还是任务）。错误码的格式如图 7-7 所示。</p>
<p>错误码看起来类似于一个段选择子，但不同于段选择子中的 TI 标志和 RPL 字段，它包含以下三个标志位：</p>
<ul>
<li>EXT（外部事件，位0）<br>
当该位为1时，表示该异常是在处理外部事件（例如中断或更早的异常）时发生的。¹<br>
如果异常是在处理软件中断（如 INT n、INT3 或 INTO 指令）时发生的，则该位被清零。</li>
<li>IDT（描述符位置，位1）<br>
当该位为1时，表示错误码的索引部分指向 IDT 中的门描述符。<br>
当该位为0时，表示索引部分指向的是 GDT 或当前 LDT 中的描述符。</li>
<li>TI（GDT/LDT，位2）<br>
该位仅在 IDT 标志为0时有效。当该位为1时，表示错误码中的索引部分指向的是 LDT 中的段描述符或门描述符。<br>
当该位为0时，表示索引部分指向的是当前 GDT 中的描述符。</li>
</ul>
<p>¹ 外部事件通常是指程序之外的事件，如外部硬件中断或先前异常的处理过程。</p>
<figure><img src="https://pic4.zhimg.com/v2-d5fd39ddd695097917ff7d44835f60ff_1440w.jpg" alt="Figure 7-7. 错误码" tabindex="0" loading="lazy"><figcaption>Figure 7-7. 错误码</figcaption></figure>
<p>段选择子索引字段（Segment Selector Index field）提供了一个指向IDT、GDT或当前LDT中被错误码引用的段描述符或门描述符的索引。</p>
<p>在某些情况下，错误码可能为空（除EXT位可能置位之外，其余位均为0）。空错误码表示该错误并非由引用某个特定段引起，或在操作中引用了一个空的段选择子（null segment selector）。</p>
<p>页故障异常（#PF）的错误码格式与上述不同。具体格式请参见本章中&quot;中断14---页故障异常（#PF）&quot;¹一节。</p>
<p>控制保护异常（#CP）的错误码格式也不同。具体格式请参见本章中&quot;中断21---控制保护异常（#CP）&quot;²一节。</p>
<p>错误码被作为双字（doubleword，32位）或字（word，16位）压入栈中（具体取决于默认的中断门、陷阱门或任务门大小）。为保持栈在双字压栈时的对齐，错误码的高半部分保留未使用。</p>
<p>需要注意的是，当使用IRET指令从异常处理程序返回时，错误码并不会被自动弹出。因此，异常处理程序在执行返回前必须自行移除栈中的错误码。</p>
<p>通过外部方式（如INTR引脚或LINT[1:0]引脚）或通过INT n指令产生的异常，即使对应的异常通常会产生错误码，处理器也不会将错误码压入栈中。</p>
<blockquote>
<p>译者注：</p>
<ol>
<li>此段属于7.15 Reference部分，暂时还没翻</li>
<li>同上</li>
</ol>
</blockquote>
<hr>
<h2 id="_7-14-64位模式下的异常与中断处理" tabindex="-1"><a class="header-anchor" href="#_7-14-64位模式下的异常与中断处理"><span>7.14 64位模式下的异常与中断处理</span></a></h2>
<p>在64位模式下，异常和中断的处理方式与非64位模式大体类似，但存在以下区别：</p>
<ul>
<li>所有通过IDT指定的中断处理程序都必须是64位代码（SMI处理程序除外）。</li>
<li>中断压栈的数据大小固定为64位；处理器使用8字节（64位）的零扩展方式进行存储。</li>
<li>在发生中断时，栈指针（SS:RSP）始终会无条件压入栈中。而在传统模式（legacy modes）下，这一操作是有条件的，仅在发生特权级（CPL）改变时进行压栈。</li>
<li>如果发生CPL变化，新的SS会被设置为NULL。</li>
<li>IRET指令的行为发生了改变。</li>
<li>引入了新的中断栈切换机制和中断影子栈（Shadow Stack）切换机制。</li>
<li>中断栈帧的对齐方式有所不同。</li>
</ul>
<hr>
<h3 id="_7-14-1-64位模式下的idt" tabindex="-1"><a class="header-anchor" href="#_7-14-1-64位模式下的idt"><span>7.14.1 64位模式下的IDT</span></a></h3>
<p>在64位模式下，中断门（Interrupt Gate）和陷阱门（Trap Gate）描述符的长度为16字节，以便为指令指针（RIP）提供完整的64位偏移量。通过这种方式，引用64位RIP的中断门描述符允许中断处理程序位于线性地址空间的任何位置。</p>
<p>具体格式参见图7-8。</p>
<figure><img src="https://pic1.zhimg.com/v2-53ecaec82288994913870e8935aa18b6_1440w.jpg" alt="Figure 7-8. 64 位 IDT 门描述符" tabindex="0" loading="lazy"><figcaption>Figure 7-8. 64 位 IDT 门描述符</figcaption></figure>
<p>在64位模式中，IDT索引的计算方法是将中断向量号乘以16。在64位模式中，中断门描述符的前8字节（字节7:0）与传统32位中断门类似，但不完全相同：</p>
<ul>
<li>类型字段（在字节7:4中的第11:8位）的含义参见表3-2。</li>
<li>IST（中断栈表，Interrupt Stack Table）字段（在字节7:4中的第4:0位）用于栈切换机制（参见第7.14.5节，&quot;中断栈表&quot;）。</li>
<li>字节11:8保存目标RIP（中断段偏移地址）的高32位，必须是规范（canonical）形式。如果软件尝试引用一个目标RIP非规范形式的中断门，将触发常规保护异常（#GP）。</li>
</ul>
<p>中断门引用的目标代码段必须是64位代码段（即 <code v-pre>CS.L = 1</code>，<code v-pre>CS.D = 0</code>）。若目标代码段不是64位代码段，将触发常规保护异常（#GP），并以对应的IDT向量号作为错误码。</p>
<p>在IA-32e模式（64位模式和兼容模式）中只能使用64位中断门和陷阱门。传统32位中断或陷阱门类型（0EH或0FH）在IA-32e模式下被重新定义为64位中断和陷阱门类型。在IA-32e模式下不存在32位中断或陷阱门类型。如果试图引用16位中断或陷阱门（06H或07H），将触发常规保护异常（#GP(0)）。</p>
<hr>
<h3 id="_7-14-2-64位模式下的栈帧-stack-frame" tabindex="-1"><a class="header-anchor" href="#_7-14-2-64位模式下的栈帧-stack-frame"><span>7.14.2 64位模式下的栈帧（Stack Frame）</span></a></h3>
<p>在传统模式（legacy mode）下，IDT项的大小（16位或32位）决定了中断栈帧压栈时的数据大小。仅在特权级（CPL）改变时才会压入<code v-pre>SS:ESP</code>。而在64位模式下，中断栈帧的数据大小固定为8字节，因为只能引用64位模式的门。同时，无论特权级是否发生变化，都将无条件压入<code v-pre>SS:RSP</code>。</p>
<p>当在中断处理程序的特权级启用了影子栈（shadow stack），且被中断的程序不是在特权级3执行时，处理器会在中断处理程序的影子栈上压入被中断程序的 <code v-pre>CS:LIP:SSP</code>（其中LIP为返回地址的线性地址）。</p>
<p>除了错误码外，无条件压入<code v-pre>SS:RSP</code>使得操作系统在所有中断情况下都能获得大小一致的中断栈帧。为保持一致性，处理由<code v-pre>INT n</code>指令或外部<code v-pre>INTR#</code>信号产生的中断的服务程序入口点，可额外压入一个错误码占位符。</p>
<p>在传统模式中，当中断或异常引起栈帧被压入时，栈指针可能未进行任何对齐，导致栈帧以及后续中断处理程序的压栈操作也处于任意对齐状态。而在IA-32e模式中，RSP会在压入栈帧前自动对齐到16字节边界，因此当调用中断处理程序时，中断栈帧本身也对齐在16字节边界。处理器可以在中断时任意重新对齐新的RSP，因为之前的（可能未对齐的）RSP会被无条件地保存在新的对齐栈上，随后在IRET返回时会自动恢复原始的RSP。</p>
<p>栈的对齐使异常和中断帧能在中断重新启用之前保持16字节边界对齐。这种设计允许栈以优化方式存储16字节的XMM寄存器，因此中断处理程序能够使用更高效的16字节对齐加载和存储指令（如使用MOVAPS，而非MOVUPS）来保存和恢复XMM寄存器。</p>
<p>尽管在LMA=1时始终进行RSP对齐，但实际上只有在内核模式下（未进行栈切换或IST时）这种对齐才具有实际意义。若进行了栈切换或使用了IST（中断栈表），操作系统应在TSS中预先放置适当对齐的RSP值。</p>
<hr>
<h3 id="_7-14-3-ia-32e模式下的iret指令" tabindex="-1"><a class="header-anchor" href="#_7-14-3-ia-32e模式下的iret指令"><span>7.14.3 IA-32e模式下的IRET指令</span></a></h3>
<p>在IA-32e模式下，IRET指令使用8字节的操作数大小。这一要求并非强制的，而是因为栈的结构使得IRET在8字节的操作数大小下能够正确执行。</p>
<p>由于在IA-32e模式中中断栈帧压栈大小始终为8字节，IRET指令必须从栈中弹出8字节的数据项。这是通过在IRET前添加一个64位操作数大小前缀实现的。具体弹出大小取决于指令的地址大小，而SS/ESP/RSP大小的调整则由栈的大小确定。</p>
<p>在64位模式中执行IRET时，无论特权级是否改变，都会无条件地从中断栈帧中弹出SS:RSP。在兼容模式下，只有发生特权级变化时才弹出SS:RSP。这使得传统的应用程序在兼容模式中仍能正确执行。64位模式下的中断服务程序使用IRET返回时，即使目标代码段处于64位模式或CPL=0，也无条件地从中断栈帧中弹出SS:RSP。这是因为初始中断时总是压入了SS:RSP。</p>
<p>当影子栈（shadow stack）启用且目标特权级不为3时，会将影子栈上的CS:LIP与栈中CS:EIP形成的返回线性地址进行对比。如果两者不匹配，则处理器会触发一个控制保护异常（#CP(FAR-RET/IRET)）；否则，处理器从影子栈中弹出被中断程序的SSP。如果目标特权级为3且在特权级3启用了影子栈，则会从<code v-pre>IA32_PL3_SSP</code> MSR中恢复被中断程序的SSP。</p>
<p>在IA-32e模式下，IRET在特定条件下允许加载一个空的SS选择子（NULL SS）。若目标模式是64位模式且目标CPL ≤ 3，IRET允许将SS加载为NULL。作为栈切换机制的一部分，中断或异常会将新的SS设置为NULL，而非从TSS中获取一个新的SS选择子并从GDT或LDT加载对应的描述符。新的SS选择子设为NULL的目的是为了正确处理后续嵌套的远调用返回（far transfers）。如果被调用的过程本身又发生中断，则NULL的SS会被压入栈帧中。在随后的IRET中，栈中的NULL SS会作为一个标志，告知处理器不要加载新的SS描述符。</p>
<hr>
<h3 id="_7-14-4-ia-32e模式下的栈切换" tabindex="-1"><a class="header-anchor" href="#_7-14-4-ia-32e模式下的栈切换"><span>7.14.4 IA-32e模式下的栈切换</span></a></h3>
<p>IA-32架构提供了一种在响应中断时自动切换栈帧的机制。Intel 64架构的64位扩展实现了传统栈切换机制的改进版，并引入了一种称为&quot;中断栈表（IST）&quot;的替代栈切换机制。</p>
<ul>
<li>在传统IA-32模式中，栈切换机制保持不变。</li>
<li>在IA-32e模式中，对传统栈切换机制进行了修改。当64位模式下因特权级变化（由中断引起）发生栈切换时，不再加载新的SS描述符，而仅从TSS中加载新的内层RSP。新的SS选择子强制设为NULL，并将SS选择子的RPL字段设置为新的CPL。将新SS设为NULL，是为了处理嵌套的远转移（如远CALL、INT、中断和异常）。旧的SS和RSP被保存在新栈上（参见图7-9）。在随后的IRET中，旧的SS会从栈中弹出并加载回SS寄存器。</li>
</ul>
<p>总之，IA-32e模式下的栈切换类似传统的栈切换，唯一的不同是不会再从TSS中加载新的SS选择子，而是将新SS强制设为NULL</p>
<figure><img src="https://pica.zhimg.com/v2-fd562e9dd0306356dfdde487bd5a4254_1440w.jpg" alt="Figure 7-9. 特权级变化后的 IA-32e 模式堆栈使用情况" tabindex="0" loading="lazy"><figcaption>Figure 7-9. 特权级变化后的 IA-32e 模式堆栈使用情况</figcaption></figure>
<hr>
<h3 id="_7-14-5-中断栈表-ist" tabindex="-1"><a class="header-anchor" href="#_7-14-5-中断栈表-ist"><span>7.14.5 中断栈表（IST）</span></a></h3>
<p>在 IA-32e 模式下，除了前述的修改版传统栈切换机制外，还引入了一种新的中断栈表（Interrupt Stack Table，简称 IST）机制。启用该机制后，它会无条件地进行栈切换。IST可以针对每个中断向量单独启用，即某些中断向量可以继续使用修改版传统机制，而其他中断向量可以使用IST机制。</p>
<p>IST 机制仅在 IA-32e 模式中可用，是 64 位模式下 TSS（任务状态段）的一部分。IST 机制的初衷是为某些特定的中断（如不可屏蔽中断（NMI）、双重故障、机器检查等）提供一种始终能在安全且可靠的栈上执行的方法。在传统模式下，中断可使用任务切换机制，通过 IDT 中的任务门调用中断服务程序，以建立一个已知安全的栈。然而，在 IA-32e 模式下不再支持传统的任务切换机制。</p>
<p>IST 机制在 TSS 中最多提供七个 IST 指针。这些指针通过 IDT（中断描述符表）中的中断门描述符引用；参见图 7-8。门描述符中包含一个 3 位 IST 索引字段，用于在 TSS 的 IST 部分中确定偏移位置。使用 IST 机制时，处理器会将指定 IST 指针的值加载到 RSP 中。</p>
<p>当发生中断时，新的 SS 选择子被强制设为 NULL，且 SS 选择子的 RPL 字段被设置为新的 CPL。旧的 SS、RSP、RFLAGS、CS 和 RIP 会依次被压入新栈中，之后继续进行正常的中断处理。如果 IST 索引为 0，则使用上文描述的修改版传统栈切换机制。</p>
<p>为了在启用影子栈（shadow stack）时支持该栈切换机制，处理器提供了一个 MSR 寄存器：<code v-pre>IA32_INTERRUPT_SSP_TABLE</code>。该寄存器用于设置一个包含七个影子栈指针的表的线性地址，表中的条目通过中断门描述符中的 IST 索引进行选择。要切换到该表中选定的影子栈（由 <code v-pre>IA32_INTERRUPT_SSP_TABLE</code> 指向的中断影子栈表），处理器要求该表中设置的影子栈地址指向一个有效的监督级影子栈令牌（supervisor shadow stack token）；参见图 7-10。</p>
<figure><img src="https://pic2.zhimg.com/v2-2dea464e7a2d8b992f523e3a2353e311_1440w.jpg" alt="Figure 7-10. 中断 Shadow Stack 表" tabindex="0" loading="lazy"><figcaption>Figure 7-10. 中断 Shadow Stack 表</figcaption></figure>
<hr>
<h3 id="_7-15-exception-and-interrupt-reference" tabindex="-1"><a class="header-anchor" href="#_7-15-exception-and-interrupt-reference"><span>7.15 EXCEPTION AND INTERRUPT REFERENCE</span></a></h3>
<p>（略，现在reference我实在不想再翻了，等哪天我有心情了可能会翻吧，想找reference的可以去看原版<a href="https://link.zhihu.com/?target=https%3A//www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html" target="_blank" rel="noopener noreferrer">intel manual</a>吧</p>
<hr>
<p>PS：如有错漏请随时通知我！</p>
<p>PS2：很喜欢这篇：<a href="https://zhuanlan.zhihu.com/p/393195942" target="_blank" rel="noopener noreferrer">Rand：再谈中断(APIC)</a>，很适合的APIC入门文章</p>
</div></template>


