# SOV710 博客项目

这是一个基于 [VuePress](https://vuepress.vuejs.org/) 和 [vuepress-theme-hope](https://theme-hope.vuejs.press/) 构建的个人博客项目。

## 项目结构

```
sov710-blog/
├── docs/                     # 文档目录
│   ├── .vuepress/            # VuePress 配置目录
│   │   ├── config.js         # VuePress 配置文件
│   │   ├── theme.ts          # 主题配置文件
│   │   └── public/           # 静态资源目录
│   ├── columns/              # 专栏文章目录
│   │   └── columns1/         # 专栏1
│   │       ├── 01-intro.md   # 专栏文章1
│   │       └── 02-basic.md   # 专栏文章2
│   ├── posts/                # 博客文章目录
│   │   ├── 2024-07-10-intro.md # 博客文章1
│   │   └── 2024-07-15-markdown.md # 博客文章2
│   ├── about.md              # 关于页面
│   ├── get-started.md        # 入门指南
│   └── README.md             # 首页
├── .github/                  # GitHub相关配置
│   └── workflows/            # GitHub Actions工作流
│       └── deploy-docs.yml   # 部署文档的工作流
├── giscus_docs.md            # Giscus配置文档
├── 需求文档.md               # 项目需求文档
├── package.json              # 项目依赖配置
├── pnpm-lock.yaml           # pnpm锁文件
└── README.md                # 项目说明文档
```

## 功能特性

- **Markdown 写作**：支持丰富的 Markdown 扩展语法
- **文章分类与标签**：便于内容组织和检索
- **专栏功能**：系统化学习特定主题
- **评论系统**：支持 Giscus 评论（配置后生效）
- **全文搜索**：快速找到需要的内容
- **响应式设计**：适配各种设备
- **深色模式**：护眼模式切换
- **自动部署**：通过 GitHub Actions 自动部署到 GitHub Pages

## 快速开始

### 安装依赖

```bash
# 推荐使用 pnpm
pnpm install
```

### 本地开发

```bash
# 启动开发服务器
pnpm docs:dev
```

### 构建站点

```bash
# 构建生产版本
pnpm docs:build
```

### 部署

项目配置了 GitHub Actions 自动部署流程。只需将代码推送到 GitHub 仓库的 main 分支，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 添加新内容

### 添加博客文章

在 `docs/posts/` 目录下创建新的 Markdown 文件，文件名推荐使用 `YYYY-MM-DD-name.md` 格式。

文章 frontmatter 示例：

```markdown
---
title: 文章标题
date: 2024-07-10
category:
  - 分类名称
tag:
  - 标签1
  - 标签2
---

文章内容...
```

### 添加专栏文章

在 `docs/columns/专栏名称/` 目录下创建新的 Markdown 文件，文件名推荐使用 `序号-name.md` 格式。

专栏文章 frontmatter 示例：

```markdown
---
title: 专栏文章标题
category: 专栏名称
tag:
  - 标签1
  - 标签2
order: 1  # 序号，用于排序
---

专栏文章内容...
```

## 自定义配置

- 主题配置：修改 `docs/.vuepress/theme.ts` 文件
- 站点配置：修改 `docs/.vuepress/config.js` 文件
- 首页配置：修改 `docs/README.md` 文件的 frontmatter 部分

## Giscus 评论系统

关于如何配置 Giscus 评论系统，请参考项目根目录下的 `giscus_docs.md` 文档，该文档详细说明了在 GitHub Pages 上线后如何配置 Giscus。

## 注意事项

- 在本地开发时，某些功能（如评论系统）可能无法正常工作，这是正常的，部署后将正常显示。
- 推荐使用 pnpm 作为包管理器，以获得更快的安装速度和更好的依赖管理。

## 许可证

MIT
