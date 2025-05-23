---
title: Intel® Manual Chapter 1 | Intel手册第一章中文翻译：关于本手册
category: Intel手册中文翻译
tag:
  - x86
  - Intel
order: 1
---

英特尔® 64 与 IA-32 架构软件开发手册第 3A 卷：《系统编程指南，第 1 部分》（订购号 253668）、第 3B 卷：《系统编程指南，第 2 部分》（订购号 253669）、第 3C 卷：《系统编程指南，第 3 部分》（订购号 326019）以及第 3D 卷：《系统编程指南，第 4 部分》（订购号 332831）共同构成了一套文档，用于描述 Intel 64 与 IA-32 架构处理器的体系结构及其编程环境。


该文档集中的其他卷包括：

* 英特尔® 64 与 IA-32 架构软件开发手册第 1 卷：《基础架构》（订购号 253665）
* 英特尔® 64 与 IA-32 架构软件开发手册第 2A、2B、2C 与 2D 卷：《指令集参考》（订购号分别为 253666、253667、326018 和 334569）
* 英特尔® 64 与 IA-32 架构软件开发手册第 4 卷：《特定型号寄存器（Model-Specific Registers）》（订购号 335592）

第 1 卷介绍了 Intel 64 与 IA-32 处理器的**基本架构**和**编程环境**。
第 2A、2B、2C 和 2D 卷详细描述了处理器的**指令集**及其**操作码结构**，适用于应用程序开发者以及编写操作系统或管理程序的开发者。
第 3A、3B、3C 和 3D 卷则描述了 Intel 64 与 IA-32 处理器的**操作系统支持环境**，其目标读者为操作系统及 BIOS 的设计者。

此外，第 3B 和第 3C 卷还涉及了**承载操作系统的软件类别的编程环境**（例如虚拟机监控器等）。
第 4 卷则专门描述了 Intel 64 与 IA-32 处理器的**型号特定寄存器（MSRs）**。

::: tip 译者注
这个专栏翻译的部分是intel manual volume 3，也就是3A, 3B, 3C, & 3D部分（也是我们一般语境下的intel手册），不涉及其他部分
:::

## 1.1 系统编程指南概述

本手册的内容概述如下：

* **第1章 — 关于本手册**
  概述了 Intel® 64 与 IA-32 架构软件开发手册的所有卷，并提供了当前卷的章节说明。

* **第2章 — 系统架构概览**
  描述 Intel 64 与 IA-32 处理器所支持的运行模式，以及体系结构为支持操作系统和管理程序所提供的机制，包括面向系统的寄存器、数据结构和指令。还介绍了实地址模式与保护模式之间的切换步骤。

* **第3章 — 保护模式下的内存管理**
  介绍支持段式和分页管理的数据结构、寄存器和指令，说明它们如何用于实现“平坦”内存模型（无分段）或分段内存模型。

* **第4章 — 线性地址预处理**
  描述线性地址在地址转换前所需经历的检查过程，包括线性地址空间隔离（LASS）和规范性检查（canonicality），以及线性地址掩码（LAM）处理。

* **第5章 — 分页**
  描述 Intel 64 与 IA-32 处理器支持的各种分页模式。

* **第6章 — 保护机制**
  描述 Intel 架构提供的分页与分段保护机制，包含特权规则的实现、堆栈切换、指针验证、用户模式与特权模式。

* **第7章 — 中断与异常处理**
  说明架构中定义的中断机制、中断与异常如何与保护机制相关联，以及各类异常的处理方式。还包括对 LINT0 和 LINT1 引脚编程的说明与示例。

* **第8章 — 用户中断**
  描述 Intel 64 与 IA-32 处理器支持的用户中断功能。

* **第9章 — 任务管理**
  说明架构提供的支持多任务与任务间保护的机制。

* **第10章 — 多处理器管理**
  描述用于支持共享内存、多处理器操作和 Intel® 超线程技术的指令与标志位，包括 P6 系列处理器的多处理器初始化流程及 MP 协议启动示例。

* **第11章 — 处理器管理与初始化**
  定义处理器在复位初始化后的状态，说明如何配置处理器进入实地址模式或保护模式，以及模式切换方法。

* **第12章 — 高级可编程中断控制器（APIC）**
  描述本地 APIC 的编程接口以及与 I/O APIC 的接口概要，包括 APIC 总线的消息格式，适用于 P6 系列和 Pentium 处理器。

* **第13章 — 内存缓存控制（Memory Cache Control）**
  概述缓存的基本概念与架构支持的缓存机制，介绍内存类型范围寄存器（MTRRs）及其映射用途，同时讲解 Pentium III、Pentium 4 与 Intel Xeon 引入的新型缓存控制和内存流指令。

* **第14章 — Intel® MMX™ 技术系统编程**
  说明系统级对 Intel® MMX™ 技术的支持要求，包括任务切换、异常处理以及与现有系统环境的兼容性。

* **第15章 — 指令集扩展与处理器扩展状态的系统编程**
  描述操作系统对 SSE/SSE2/SSE3/SSSE3/SSE4 扩展指令的支持需求，包括任务切换、异常处理与兼容性。后半部分介绍了支持扩展处理器状态的可扩展框架，涵盖超出 SSE 系列的其他指令集扩展。

* **第16章 — 功耗与热管理**
  描述架构在功耗管理与温度监控方面的支持设施。

* **第17章 — 机器检查架构（Machine-Check Architecture）**
  描述机器检查机制（Machine-Check Exception, MCE），以及软件响应硬件更正错误的信号机制。

* **第18章 — 机器检查错误码解释**
  举例说明如何解释发生在 P6 系列处理器上的机器检查错误码。

* **第19章 — 调试、分支分析、TSC 与Intel® 资源监控技术特性**
  描述处理器提供的调试寄存器与调试机制，以及时间戳计数器（TSC）。

* **第20章 — 最近分支记录（Last Branch Records, LBR）**
  描述架构特性“最近分支记录”的功能与使用。

* **第21章 — 性能监控**
  描述架构支持的性能监控功能。

* **第22章 — 8086 模拟**
  描述 IA-32 架构中的实地址模式和虚拟 8086 模式。

* **第23章 — 混合使用 16 位与 32 位代码**
  说明如何在同一程序或任务中混用 16 位与 32 位代码模块。

* **第24章 — IA-32 架构兼容性**
  说明 IA-32 处理器之间的架构兼容性。

* **第25章 — 虚拟机扩展（VMX）简介**
  概述 Intel® 64 与 IA-32 架构中的虚拟机基本架构与扩展机制。

* **第26章 — 虚拟机控制结构（VMCS）**
  描述 VMX 操作相关的管理组件，包括当前工作 VMCS 指针和控制 VMCS 指针。

* **第27章 — VMX 非根模式操作（Non-Root Operation）**
  说明 VMX 非根模式下的处理器行为及其引发的控制转移机制。

* **第28章 — VM 进入（VM Entry）**
  描述虚拟机进入过程，由 VMLAUNCH 或 VMRESUME 指令执行，将处理器从根模式切换至非根模式。

* **第29章 — VM 退出（VM Exit）**
  说明在 VMX 非根模式中发生的各种导致退出的事件与条件，亦包括失败的 VM 进入导致的 VM 退出。

* **第30章 — 地址转换支持的 VMX 扩展**
  描述 VMX 对地址转换及物理内存虚拟化的支持。

* **第31章 — APIC 虚拟化与虚拟中断**
  描述 VMCS 中用于启用中断与 APIC 虚拟化的控制字段。

* **第32章 — VMX 指令参考**
  描述虚拟机扩展（VMX）所提供的指令集，VMX 由系统管理层用于支持多客户环境的硬件虚拟化。

* **第33章 — 系统管理模式（System Management Mode, SMM）**
  描述架构中系统管理模式的功能。

* **第34章 — Intel® Processor Trace（PT）**
  描述 Intel® Processor Trace 的详细实现。

* **第35章 — Intel® SGX 简介**
  提供对 Intel® SGX 指令集的概览。

* **第36章 — Enclave 访问控制与数据结构**
  描述 SGX Enclave 的访问控制机制及其使用的数据结构。

* **第37章 — Enclave 操作**
  讲解 Enclave 的创建与初始化、页添加与度量、以及 Enclave 的进入与退出过程。

* **第38章 — Enclave 退出事件（EEE）**
  描述 Enclave 异步退出（AEX）与其他退出事件。

* **第39章 — SGX 指令参考**
  描述 Intel SGX 提供的 supervisor/user 级指令集。

* **第40章 — Intel® SGX与IA-32 / Intel® 64架构的交互**
  描述 SGX 指令如何在支持 IA-32 与 Intel 64 架构的处理器上创建受保护执行环境。

* **第41章 — Enclave 代码调试与分析**
  描述用于 Enclave 程序的调试方法与分析选项。

* **附录 A — VMX 能力报告机制**
  描述 VMX 能力的特定 MSR。通过读取这些 MSR 可判断是否支持特定的 VMX 功能。

* **附录 B — VMCS 字段编码**
  枚举 VMCS 中所有字段及其编码，按宽度（16/32/64 位）和类型（访客状态、主机状态等）分类。

* **附录 C — VMX 退出基本原因**
  描述编码 VM 退出原因的 32 位字段，包括软件中断、异常、陷阱、NMI、外部中断、三重错误等情况。

