# SOV710 博客

[English](./README.md) | 中文

欢迎来到 SOV710 博客项目仓库！本博客基于 [VuePress v2](https://v2.vuepress.vuejs.org/) 构建，并使用了功能强大的 [vuepress-theme-hope](https://theme-hope.vuejs.press/) 主题。项目包含每日和每周总结、技术专栏（如 Intel 手册翻译）以及一个友情链接页面，全部使用 `pnpm` 进行管理。

## ✨ 主要特性

* **VuePress v2**: 现代化的静态站点生成器。
* **vuepress-theme-hope**: 功能丰富且高度可定制的主题。
* **Markdown 内容**:所有内容均使用 Markdown 编写。
* **自动化文章列表**: `scripts/update-posts-list.js` 脚本自动生成文章列表。
* **自定义专栏**: "Intel手册中文翻译"专属区域。
* **友情链接页面**: 一个展示朋友博客/网站链接的时尚页面。
* **GitHub Pages 部署**: 通过 GitHub Actions 实现自动化部署。
* **Giscus 评论系统**: (已规划并提供设置文档)。
* **PNPM 包管理**: 高效快速的包管理工具。

## 📂 项目结构

```
.github/
└── workflows/
    └── deploy.yml        # GitHub Actions 部署工作流
docs/
├── .vuepress/
│   ├── dist/             # 构建输出目录 (自动生成)
│   ├── public/           # 静态资源 (图标、友链头像等)
│   │   └── friends/
│   ├── styles/           # 自定义样式 (如有)
│   ├── config.js         # VuePress 站点级别配置文件
│   └── theme.ts          # vuepress-theme-hope 主题配置文件
├── columns/
│   └── intel-manual-translate/ # Intel 手册翻译内容
│       ├── README.md
│       └── *.md
├── posts/                  # 博客文章 (日总结与周总结)
│   ├── README.md           # 主要文章列表 (脚本自动生成)
│   └── *.md
├── README.md               # 网站首页内容
├── friends.md              # 友情链接页面内容
└── about.md                # 关于我页面内容
scripts/
└── update-posts-list.js  # 用于生成 docs/posts/README.md 的脚本
.gitignore
package.json
pnpm-lock.yaml
README.md                   # 项目英文 README
README-zh.md                # 本文件 (项目中文 README)
```

## 🚀 先决条件

在开始之前，请确保您已安装以下软件：

* [Node.js](https://nodejs.org/) (版本建议参考 `.github/workflows/deploy.yml` 中指定，例如 v20 或更新版本)
* [pnpm](https://pnpm.io/installation) (版本参考 `package.json` 文件中 `packageManager` 字段指定，例如 v10.11.0)

## 本地开发

1. **克隆仓库:**

   ```bash
   git clone https://github.com/SOV710/sov710.github.io.git
   cd sov710.github.io
   ```
2. **安装依赖:**

   ```bash
   pnpm install
   ```
3. **更新文章列表 (如需手动触发):**
   `update-posts` 脚本通常在启动开发服务器或构建之前运行。您也可以手动运行它：

   ```bash
   pnpm update-posts
   ```

   此脚本会读取您的文章文件并更新 `docs/posts/README.md`。
4. **运行开发服务器:**

   ```bash
   pnpm docs:dev
   ```

   此命令将启动本地开发服务器。当您更改内容或配置文件时，VuePress 会自动更新浏览器。如果希望每次启动时完全自动化，`update-posts` 脚本最好成为 `docs:dev` 的一部分或一个预开发脚本。当前的 GitHub Actions 工作流会在构建前运行它。
5. **清理缓存并运行开发服务器 (如需要):**

   ```bash
   pnpm docs:clean-dev
   ```
6. **构建生产版本:**
   要创建站点的生产版本：

   ```bash
   pnpm docs:build
   ```

   静态文件将生成在 `docs/.vuepress/dist` 目录中。

## ✍️ 内容管理

### 添加新博客文章 (日总结/周总结)

1. 在 `docs/posts/` 目录下创建一个新的 Markdown 文件 (例如，日总结使用 `d-YYMMDD.md`，周总结使用 `w-YYMMDD.md`)。
2. 为您的文章添加 frontmatter。示例：

   ```yaml
   ---
   title: 每日总结喵 | 4月10日 # 或 "25年4月X周 周总结"
   date: YYYY-MM-DD
   category:
     - 日总结 # 或 "周结"
   tag:
     - 具体技术标签1
     - 具体技术标签2
   # 根据需要添加其他 vuepress-theme-hope frontmatter 选项
   # icon: ...
   # breadcrumb: ...
   ---

   #您的文章标题 (可以与 frontmatter 中的标题相同)

   您的 Markdown 内容...
   ```
3. 添加或修改文章后，运行 `pnpm update-posts` 以重新生成 `docs/posts/README.md` 列表。

### 添加"Intel手册中文翻译"专栏文章

1. 在 `docs/columns/intel-manual-translate/` 目录下创建一个新的 Markdown 文件 (例如, `02-章节名.md`)。
2. 添加 frontmatter。示例：

   ```yaml
   ---
   title: Intel手册第七章中文翻译：中断和异常处理
   date: YYYY-MM-DD
   # category: # 对于专栏文章可选，或定义一个特定的分类
   # tag: # 可选
   order: 2 # 可选: 用于在专栏侧边栏中排序 (如果不使用基于文件的排序)
   icon: book-open # 示例图标
   # 根据需要添加其他 vuepress-theme-hope frontmatter 选项
   ---

   # 您的文章标题

   您的翻译内容...
   ```

## ⚙️ 自定义配置

* **主题配置**: 大多数主题相关的视觉和功能配置 (导航栏、侧边栏、博客选项、插件) 均在 `docs/.vuepress/theme.ts` 文件中。
* **站点配置**: 全局 VuePress 设置 (如标题、描述、head 元素、vite 打包器选项) 均在 `docs/.vuepress/config.js` 文件中。
* **首页**: 首页内容在 `docs/README.md` 文件中。
* **友情链接页面**: 在 `docs/friends.md` 中管理。友链头像存储在 `docs/.vuepress/public/friends/` 目录下。

## 🛠️ 部署

### GitHub Pages (通过 GitHub Actions 自动部署)

本仓库已配置通过 `.github/workflows/deploy.yml` 中定义的工作流自动部署到 GitHub Pages。

**自动部署先决条件:**

1. **仓库名称**: 此工作流专为名为 `SOV710.github.io` 的仓库定制，其中 `SOV710` 是您的 GitHub 用户名。如果您的仓库名称不同 (例如 `my-blog`)，可能需要在 `docs/.vuepress/config.js` 中调整基础路径 (通常是 `base` 选项，尽管 `vuepress-theme-hope` 通常能为 GitHub Pages 很好地处理此问题)。
2. **GitHub Pages 设置**: 在您的 `SOV710/sov710.github.io` 仓库的 GitHub 设置中：
   * 转到 **Settings** -> **Pages** (在 "Code and automation" 部分下)。
   * 在 "Build and deployment" 下，确保 **Source** 设置为 **"GitHub Actions"**。

**部署流程:**

1. **推送到 `main` 分支**: 当代码推送到 `main` 分支 (或您配置的默认分支) 时，GitHub Actions 工作流将自动触发。
2. **工作流步骤** (在 `deploy.yml` 中定义):
   * 检出代码。
   * 设置 Node.js 和 pnpm 环境。
   * 安装依赖 (`pnpm install --frozen-lockfile`)。
   * 运行您的自定义脚本以更新文章列表 (`pnpm update-posts`)。
   * 构建 VuePress 站点 (`pnpm run docs:build`)。输出位于 `docs/.vuepress/dist`。
   * 配置 GitHub Pages。
   * 上传 `docs/.vuepress/dist` 中的构建产物。
   * 将产物部署到 GitHub Pages。
3. 您可以在 GitHub 仓库的 **Actions** 标签页中监控工作流的进度。
4. 部署成功后，您的站点将托管在 `https://SOV710.github.io/`。

### 手动部署 / 其他平台

如果您希望手动部署站点或将其部署到其他平台 (例如 Netlify、Vercel、自定义服务器)：

1. **构建站点**: 在本地运行构建命令：

   ```bash
   pnpm update-posts # 确保内容是更新的
   pnpm run docs:build
   ```
2. **定位构建输出**: 静态站点文件将生成在 `docs/.vuepress/dist/` 目录中。
3. **部署**: 将 `docs/.vuepress/dist/` 目录的内容上传到您选择的托管服务提供商。大多数静态站点托管平台都会提供部署静态 HTML、CSS 和 JavaScript 文件目录的说明。

   * **Netlify/Vercel**: 连接您的 GitHub 仓库，它们通常可以检测到 VuePress 项目。将构建命令设置为 `pnpm update-posts && pnpm run docs:build` (如果其 UI 允许，也可设为单独命令)，并将发布目录设置为 `docs/.vuepress/dist`。
   * **自托管 (例如 Nginx, Apache)**: 配置您的 Web 服务器以从 `docs/.vuepress/dist` 目录提供文件服务。

## 💬 Giscus 评论系统 (设置指南)

本博客计划使用 [Giscus](https://giscus.app/) 作为评论系统。Giscus 使用 GitHub Discussions 作为评论的后端存储。

**配置步骤 (在您的站点部署并上线后):**

1. **创建公共 GitHub 仓库**: 如果您还没有，创建一个新的 **公共** GitHub 仓库用于存储评论 (例如 `my-blog-comments`)。此仓库不需要包含任何代码；Giscus 将使用其 "Discussions" 功能。
2. **启用 Discussions**: 在您新创建的评论仓库中，转到 **Settings** 并确保 **Discussions** 功能已启用 (在 "Features" 部分下)。
3. **安装 Giscus GitHub App**: 访问 [giscus.app](https://giscus.app/)。

   * 向下滚动到 "Configuration" 部分。
   * 在 "Repository" 字段中输入您的评论仓库名称 (例如 `SOV710/my-blog-comments`)。
   * Giscus 将引导您安装其 GitHub App，并为其授权访问选定的评论仓库 (或者，如果您选择，所有仓库)。
4. **在 giscus.app 上配置 Giscus**: 在 [giscus.app](https://giscus.app/) 页面上，选择您的仓库后，您将进一步配置选项：

   * **页面 ↔️ Discussion 映射**: 选择 Giscus 应如何将您的博客页面映射到 discussion 主题。常见选项有：
     * `pathname`: Discussion 标题将是页面的路径名。
     * `url`: Discussion 标题将是页面的完整 URL。
     * `title`: Discussion 标题将是页面的 HTML `<title>` 标签。
     * `og:title`: Discussion 标题将是页面的 OpenGraph 标题元标签。
   * **Discussion 分类**: 在您的评论仓库中选择一个 discussion 分类，Giscus 将在该分类下为新的博客文章创建新的 discussion。您可能需要首先在评论仓库的 Discussions 标签页中创建一个分类，如 "Blog Comments" 或 "General"。
   * **特性**: 选择如启用表情回应、发送元数据等特性。
   * **主题**: 选择一个与您博客匹配的 Giscus 主题 (或选择 "Theme from `<meta>` tag" 以允许它通过 meta 标签适应您的 `vuepress-theme-hope` 浅色/深色模式)。
5. **获取 Giscus 配置值**: 在 giscus.app 上配置完成后，它将为您提供一组 `<script>` 属性。您需要提取这些值：

   * `data-repo`
   * `data-repo-id`
   * `data-category`
   * `data-category-id`
   * `data-mapping`
   * `data-reactions-enabled`
   * `data-emit-metadata`
   * `data-theme` (或 `data-light-theme` / `data-dark-theme`)
6. **将 Giscus 配置添加到 `vuepress-theme-hope`**:
   打开您的 `docs/.vuepress/theme.ts` 文件。
   找到 `plugins` 部分。`vuepress-theme-hope` 通常有一个 `comment` 插件选项用于集成评论系统。

   ```typescript
   // docs/.vuepress/theme.ts
   // ... 其他导入和主题选项 ...

   export default hopeTheme({
     // ... 其他主题配置 ...

     plugins: {
       // ... 其他插件，如 blog, copyCode, catalog, components, search, icon ...

       comment: {
         provider: "Giscus", // 指定 Giscus 作为提供商
         repo: "您的用户名/您的评论仓库名", // 例如 SOV710/my-blog-comments
         repoId: "您的仓库ID",              // 从 giscus.app 获取
         category: "您的Discussion分类名", // 例如 General, Announcements
         categoryId: "您的分类ID",          // 从 giscus.app 获取
         mapping: "pathname",               // 或您选择的映射方式
         reactionsEnabled: true,          // 或 false
         inputPosition: "top",            // 或 "bottom"
         // theme: "light", // 或您偏好的主题，或使用 lightTheme/darkTheme
         // lightTheme: "light",
         // darkTheme: "dark_dimmed",
         // lang: "zh-CN", // 可选：设置 Giscus 语言
       },
     },

     // ... 其他主题配置 ...
   });
   ```

   * 将占位符值 (`您的用户名/您的评论仓库名`, `您的仓库ID` 等) 替换为您从 giscus.app 获取的实际值。
   * 请参阅 [vuepress-theme-hope 评论插件文档](https://theme-hope.vuejs.press/config/plugins/comment.html) 以获取在主题内配置 Giscus 的最新和特定选项。
7. **提交和部署**: 将 Giscus 配置添加到 `theme.ts` 后，提交更改并将其推送到您的 `main` 分支。GitHub Actions 工作流将重新构建和部署您的站点。Giscus 评论届时应出现在您的博客文章上。

## 📜 脚本说明

* **`pnpm update-posts`** (运行 `node scripts/update-posts-list.js`):
  * 此脚本自动扫描 `docs/posts/` 目录下的 Markdown 文件。
  * 它从每篇文章中提取 frontmatter (标题、日期、分类、标签)。
  * 它生成/更新 `docs/posts/README.md` 文件，以创建您所有博客文章的结构化列表，通常按年份或分类分组。
  * 在 GitHub Actions 部署工作流中，它会在站点构建之前自动运行。
  * 如果您希望在本地开发服务器中立即看到更新的文章列表或在提交之前更新，则应在本地添加新文章后手动运行它。

## 📄 许可证

本项目采用 [MIT 许可证](./LICENSE) (如果您还没有 LICENSE 文件，则需要创建一个，此类项目通常使用标准的 MIT 许可证)。

---

*此 README 由 AI 模型协助生成。请审阅并根据您的项目具体情况进行调整。*
