<template><div><h1 id="_25-apr-1st-周总结" tabindex="-1"><a class="header-anchor" href="#_25-apr-1st-周总结"><span>25 Apr 1st 周总结</span></a></h1>
<p>哈哈，展现自己无能的时候来咯</p>
<h2 id="前情提要" tabindex="-1"><a class="header-anchor" href="#前情提要"><span>前情提要</span></a></h2>
<ul>
<li><RouteLink to="/posts/d-250401.html">SOV710：每日总结喵 | Apr 1</RouteLink></li>
<li><RouteLink to="/posts/d-250402.html">SOV710：每日总结喵 | Apr 2</RouteLink></li>
<li><RouteLink to="/posts/d-250403.html">SOV710：每日总结喵 | Apr 3</RouteLink></li>
<li><RouteLink to="/posts/d-250404.html">SOV710：每日总结喵 | Apr 4</RouteLink></li>
<li><RouteLink to="/posts/d-250405.html">SOV710：每日总结喵 | Apr 5</RouteLink></li>
</ul>
<p>另外这周中因为出于好奇看了看CPU中断和AGIC的内容，顺手翻了一篇intel手册中关于中断的一章（虽然翻完后发现不完全是我想要看的内容，其实是Intel盛产的众多答辩中的一坨，但是还是忍痛将其吃了下去）</p>
<ul>
<li><RouteLink to="/columns/intel-manual-translate/01-about-this-manual.html">SOV710：Intel® Manual Chapter 7 | Intel手册第七章中文翻译：中断和异常处理</RouteLink></li>
</ul>
<p>Intel手册的答辩程度和国内教材难分伯仲，如果不是没有别的选择真不想读这拖</p>
<h2 id="好的接下来进入我对自己的吐槽环节" tabindex="-1"><a class="header-anchor" href="#好的接下来进入我对自己的吐槽环节"><span>好的接下来进入我对自己的吐槽环节</span></a></h2>
<h3 id="这周做了什么" tabindex="-1"><a class="header-anchor" href="#这周做了什么"><span>这周做了什么</span></a></h3>
<p>事非常无组织无纪律的一周，属于是想学到哪就学到哪……在期中考压力、沟槽实验课和啥呗毕设单的三重压力下，我常常是一边学课外一边在想&quot;哎这b课内再不搞就来不及了&quot;&quot;唉这单子再不做真来得及吗&quot;&quot;哎呀这cs144/os真有意思再学一会&quot;然后继续学，导致后面ddl来临时的安排极其稀碎（这周学的东西也极其稀碎）……这个错误是下周必须要改的，先把ddl完成再学课外吗？有点意思 话说我现在就带着两个ddl在这里敲我的周总结这真的有公信力吗（笑）</p>
<p>虽说ddl很史，但是这周学的还是挺爽的：</p>
<p>首先登场的是cs144，虽说学的是cs144但是实际上是一直在和ChatGPT爽聊，再就是用tshark抓包玩，cs144 lecture大概也就看了30%左右，但是至少对网络的框架是建立起来了……？</p>
<p>有空想写一篇对于中小学生的，关于如何和爸妈进行网络攻防战的科普文章，不过等我赶完ddl先。</p>
<p>然后开始看CPU中断的相关文章，产出了一篇翻译见上。</p>
<p>为什么要看这鬼东西呢？起因是我在看Linux进程调度的时候产生了个疑惑，已知进程的运行就是一串机器指令在CPU上的连续取指运行，又已知OS是有进程调度的，那我问你，CPU是怎么知道自己&quot;应该&quot;停止这个指令并开始运行其他进程的？后来发现结论就是CPU每个核内部集成了一个定时器，这玩意不断给CPU Core发电信号来提醒CPU&quot;要检查这个进程的时间片是否耗尽了&quot;。对虽然具体实现要复杂许多但是大体上就是这个意思……</p>
<p>有空还想就这个话题写一篇科普文，不过后话了（</p>
<p>不断深入搞懂一个东西真的很爽！</p>
<figure><img src="/posts/w-250401-1.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后开始看的就是rust，the book看了一半就开始看源码了（后面证明只看一半还是远远不够，但是对于基础语法和基础特性来说还是够用了）。</p>
<p>看计网看着看着突然对clash的实现开始感兴趣（个人造轮子爱好者，而且之前装gentoo就被它折磨过今天终于大仇得报），并发现了clash-rs这个十万多行的，用rust实现的clash，然后就开始狠狠看源码。看源码，爽！</p>
<p>不得不说看优雅的源码真是一种享受，第一次感受到了所谓&quot;优雅&quot;的代码是什么感觉，条理清晰，模块界限分明，即使是我这种小白，配合GPT讲解也能看懂；虽然没看完（还是缺少部分网络知识，简而言之还是cs144看少了……）不过看的还是非常爽。</p>
<p>然后就被ddl制裁了。</p>
<figure><img src="/posts/w-250401-2.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>然后现在就在赶ddl，不说了，我要去做我的毕设单子+高数大物电路作业+智慧树小测+电路实验报告了。</p>
<h3 id="下周要做什么" tabindex="-1"><a class="header-anchor" href="#下周要做什么"><span>下周要做什么</span></a></h3>
<ul>
<li>希望能做到在ddl刚出的时候火速解决ddl，然后爽爽学东西</li>
<li>学计网，写篇文（挖坑）</li>
<li>再看会AGIC，写篇文（挖坑）</li>
<li>也是时候要开始写hypervisor了，虽然Xen没看KVM没看VTX没看RVM也没看，但是就是不得不要开始了，不然总拖着也不是个事，姑且参考一下这篇教程</li>
</ul>
<p>感觉也做不了多少，而且估计也不会完全按着安排来，就不多说了（</p>
<h2 id="题外话" tabindex="-1"><a class="header-anchor" href="#题外话"><span>题外话</span></a></h2>
<p>因为发日结认识了好多群友，开心</p>
<p><em>发布于 2025-04-06 23:23</em></p>
</div></template>


