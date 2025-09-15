---
title: 梳理系统依赖
date: 2025-09-01
category:
  - 文章
---

# 系统库

- base-files & base-passwd

base-files 提供 Debian/Ubuntu 系统的最基本目录结构和一些关键标识文件。base-passwd 管理系统中最基础、保证存在的用户与用户组。

# 系统服务

- cron/anacron

定时调度服务

- appstream

它旨在通过标准化的方式提供软件元数据。

- attr

attr 是一个 Linux 命令行工具，主要用于管理文件的扩展属性。

- bash / zsh

shell

## 账户服务

- accountsservice

accountsservice 是 Linux 桌面系统里的一个 用户账户信息服务，主要提供给桌面环境（如 GNOME、KDE）统一的用户管理接口。

它在系统后台运行（accounts-daemon），通过 D-Bus 提供 API。

桌面环境或登录管理器（如 GDM、LightDM）可以通过它来获取和管理用户账户信息，而不需要直接解析 /etc/passwd、/etc/shadow。

桌面应用（控制面板、登录界面）调用它，底层仍然依赖传统的 Linux 账户机制。

核心用户数据仍在 /etc/passwd

额外信息（如头像、语言）则可能存放在 /var/lib/AccountsService/users/

- acl

ACL 是 systemd 的依赖。

Access Control List 是 Linux/Unix 系统中一种比传统用户/组/其他三类权限更细粒度的权限控制机制。

ACL 允许为多个特定用户或组单独定义访问权限，而不再局限于“所有者/组/其他人”这三种。

- adduser

Ubuntu/Debian 中对 useradd 的友好封装。

作用：创建新用户账号，并自动完成一系列配置工作。

# 桌面服务

- at-spi2

Assistive Technology Service Provider Interface, 主要用于 桌面环境的可访问性。

- adwaita-icon-theme

GNOME 桌面环境的默认图标主题，由 GNOME 项目维护。

- aglfn

Adobe Glyph List For New Fonts 是由 Adobe 提供的一份标准表

- baobab

Baobab 是 GNOME 桌面环境自带的磁盘使用分析工具，全名叫 Disk Usage Analyzer。



# 音声服务

- alsa-*

Advanced Linux Sound Architecture, Linux 提供的音声驱动/用户态工具。

# 硬件与驱动

- amd64-microcode

Ubuntu/Debian 提供的 AMD CPU 的固件更新包，Ubuntu 在启动时通过它给处理器打“补丁”，修复漏洞并提升稳定性。

# 网络

- aria2

- avahi

Avahi 是一个 零配置网络服务（Zeroconf）实现，它提供了 mDNS（Multicast DNS）和 DNS-SD（DNS-based Service Discovery）功能，主要用于在局域网内实现设备和服务的自动发现。

- bind9

Bind9（Berkeley Internet Name Domain, version 9）是目前使用最广泛的 开源 DNS 服务器软件，由 ISC（Internet Systems Consortium） 维护。它实现了 DNS 协议的权威解析和递归解析功能，是互联网域名系统的核心基础设施之一。

# 开发工具

- binutils

GNU binutils（Binary Utilities）是一套处理目标文件、可执行文件和二进制代码的工具集合，是 Linux/Unix 开发环境中的基础组件之一，通常和 GCC、glibc 一起出现。

# 安全

- apparmor

one of LSM

- apport

Ubuntu 的错误报告工具。

- auditd

auditd 是 Linux 系统中的审计守护进程，负责记录和监视系统上的安全相关事件。



# 常见应用软件

- aspell

拼写检查工具。

- bc

任意精度计算器。

## 解压软件

- 7zip

## Android 调试

- adb
- android-lib*
- android-sdk*
