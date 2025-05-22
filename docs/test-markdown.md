---
title: Markdown Test
icon: pen
breadcrumb: false
---

# Markdown Test Page

## Bold Text Test

This text has **bold formatting** within it.

Here's another way to do __bold formatting__.

## Table Test (General)

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
| Cell 7   | Cell 8   | Cell 9   |

## Specific Table Test (Interrupts)

  --------- -------- ------------------------------ --------------------------- --------- ------------------------------------------------------------
  向量      助记符   描述                           类型                        错误码    来源
  0         #DE      除零错误                       Fault（故障）               否        DIV 和 IDIV 指令
  1         #DB      调试异常                       Fault / Trap（故障/陷阱）   否        指令、数据、I/O 断点，单步执行等
  2         ---      不可屏蔽中断（NMI）            Interrupt（中断）           否        不可屏蔽的外部中断
  3         #BP      断点                           Trap（陷阱）                否        INT3 指令
  4         #OF      溢出                           Trap（陷阱）                否        INTO 指令
  5         #BR      BOUND 范围超限                 Fault（故障）               否        BOUND 指令
  6         #UD      无效操作码（未定义操作码）     Fault（故障）               否        UD 指令或保留操作码
  7         #NM      设备不可用（无数学协处理器）   Fault（故障）               否        浮点指令或 WAIT/FWAIT
  8         #DF      双重故障                       Abort（终止）               是（0）   任意可能引发异常、NMI 或 INTR 的指令
  9         ---      协处理器段溢出（已保留）       Fault（故障）               否        浮点指令¹
  10        #TS      无效 TSS                       Fault（故障）               是        任务切换或 TSS 访问
  11        #NP      段不存在                       Fault（故障）               是        加载段寄存器或访问系统段
  12        #SS      栈段错误                       Fault（故障）               是        栈操作或加载 SS 寄存器
  13        #GP      常规保护错误                   Fault（故障）               是        内存访问和其他保护检查
  14        #PF      页错误                         Fault（故障）               是        任意内存访问
  15        ---      （Intel 保留，不可使用）       ---                         ---       --- 
  16        #MF      x87 FPU 浮点错误（数学错误）   Fault（故障）               否        x87 FPU 浮点或 WAIT/FWAIT 指令
  17        #AC      对齐检查                       Fault（故障）               是        任意内存中的数据引用²
  18        #MC      机器检查                       Abort（终止）               否        错误码（如有）和来源取决于具体型号³
  19        #XM      SIMD 浮点异常                  Fault（故障）               否        SSE/SSE2/SSE3 浮点指令⁴
  20        #VE      虚拟化异常                     Fault（故障）               否        EPT 违规⁵
  21        #CP      控制保护异常                   Fault（故障）               是        RET、IRET、RSTORSSP、SETSSBSY；或 CET 启用时缺少 ENDBRANCH
  22--31    ---      Intel 保留，不可使用           ---                         ---       ---
  32--255   ---      用户自定义（未保留）中断       Interrupt（中断）           否        外部中断或 INT n 指令
  --------- -------- ------------------------------ --------------------------- --------- ------------------------------------------------------------

## Container Test

::: info Information Container
This is an information container.
:::

::: tip Tip Container
This is a tip container.
:::

::: warning Warning Container
This is a warning container.
:::

::: danger Danger Container
This is a danger container.
:::

## Task List Test

- [x] Task 1 (completed)
- [ ] Task 2 (not completed)
- [x] Task 3 (completed)

## Text Alignment Test

::: center
This text should be centered.
:::

::: right
This text should be right-aligned.
:::

## Mark Test

==This text should be highlighted==

## Footnote Test

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.

## Other Formatting

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list item 3

- Unordered list item
- Another unordered item
- One more item

> This is a blockquote that should be properly formatted.

```javascript
// Code block test
const test = "Hello World";
console.log(test);
```

*Italic text* and _more italic text_.

~~Strikethrough text~~.

[Link test](https://example.com)

![Image alt text](https://via.placeholder.com/150) 