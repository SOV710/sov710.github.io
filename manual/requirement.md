    ~

# SOV710 博客项目需求文档

## 1. 项目概述

本项目旨在构建一个基于 VuePress 2 和 vuepress-theme-hope 的个人博客网站，支持 Markdown 撰写、分类/标签、专栏、文章排序、评论系统和全文搜索等功能，并托管在 GitHub Pages 上。

### 1.1 项目目标

- 搭建一个美观、易用的技术博客
- 支持丰富的 Markdown 扩展功能
- 实现文章分类、标签和专栏管理
- 提供评论功能和全文搜索能力
- 自动化部署至 GitHub Pages

## 2. 技术选型

| 组件              | 选型                             | 理由与功能支持                        |
| ----------------- | -------------------------------- | ------------------------------------- |
| 博客框架          | VuePress 2 + vuepress-theme-hope | 支持 Markdown、Vue 组件、强大插件体系 |
| 部署平台          | GitHub Pages                     | 免费部署，无需服务器                  |
| 构建工具          | pnpm                             | 安装快速，缓存机制好                  |
| 评论系统          | Giscus                           | 基于 GitHub Discussions，轻量、易接入 |
| 搜索功能          | 内置搜索插件 / Algolia           | 支持全文搜索                          |
| 登录方式          | GitHub 登录（仅限评论）          | 与 Giscus 绑定，权限最小化            |
| Markdown 扩展插件 | vuepress-plugin-md-enhance       | 支持公式、流程图、任务列表、标注等    |

## 3. 功能需求

### 3.1 必要功能

- **博客基础功能**

  - Markdown 文章撰写
  - 文章分类与标签
  - 专栏功能（可组织系列文章）
  - 文章排序（通过 frontmatter 中的 order 字段）
- **主题与样式**

  - 响应式设计，适配移动设备
  - 深色模式支持
  - 使用vuepress-theme-hope的主题方案

- **评论系统**

  - 使用 Giscus 实现评论功能
  - 评论区 GitHub 账号登录

- **搜索功能**

  - 全文搜索支持

- **自动化部署**

  - GitHub Actions 自动构建和部署
  - 提交代码后自动更新网站

### 3.2 增强功能

- **内容增强**

  - 数学公式支持（KaTeX/MathJax）
  - 流程图支持（Mermaid）
  - 代码块高亮与复制功能
- **用户体验**

  - 目录导航（TOC）
  - 返回顶部按钮
  - 阅读进度条
- **SEO 优化**

  - 自动生成 sitemap
  - 页面元数据优化

## 4. 项目结构

```
my-blog/
├── docs/
│   ├── .vuepress/
│   │   ├── config.ts           # VuePress 主配置文件
│   │   ├── theme.ts            # 主题配置（使用 hope 主题）
│   │   └── public/             # 静态资源，如 logo、favicon
│   ├── README.md               # 首页内容
│   ├── column1/
│   │   ├── 01-intro.md         # 专栏文章，含 frontmatter 配置
│   │   └── 02-deep-dive.md
│   └── column2/
│       └── 01-xxx.md
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署脚本
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```

### 4.1 文章 Frontmatter 配置示例

```markdown
---
title: 入门介绍
category: 专栏1
tags:
  - Vue
  - 博客
order: 1
---
```

## 5. 设计要求

### 5.1 视觉设计

- 整体风格: 使用vuepress-theme-hope默认
- 配色方案: 使用vuepress-theme-hope默认
- Logo 设计: 使用vuepress-theme-hope默认

### 5.2 交互设计

- 导航结构: 使用vuepress-theme-hope默认
- 首页布局: 使用vuepress-theme-hope默认
- 文章页布局: 使用vuepress-theme-hope默认

## 6. 性能要求

- 页面加载速度: 小于1.8s
- 首次内容渲染时间: 小于2.5s

## 7 部署流程

1. 将代码推送至 GitHub 仓库（sov710.github.io）
2. GitHub Actions 自动构建网站
3. 自动部署至 GitHub Pages
