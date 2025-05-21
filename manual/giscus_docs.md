# Giscus 评论系统配置指南

Giscus 是一个基于 GitHub Discussions 的评论系统，可以轻松集成到 VuePress 站点中。本文档将指导你在 GitHub Pages 上线后如何配置 Giscus。

## 前置条件

1. 已经成功部署博客到 GitHub Pages (sov710.github.io)
2. 拥有该仓库的管理员权限
3. 仓库必须是公开的
4. GitHub Discussions 功能已启用
5. [Giscus GitHub App](https://github.com/apps/giscus) 已安装并授权访问你的仓库

## 步骤 1: 启用 GitHub Discussions

1. 前往你的 GitHub 仓库 (sov710.github.io)
2. 点击仓库顶部的 "Settings" 选项卡
3. 在设置页面中，向下滚动至 "Features" 部分
4. 选中 "Discussions" 复选框
5. 点击 "Save" 按钮保存设置

## 步骤 2: 安装 Giscus GitHub App

1. 访问 [Giscus App 页面](https://github.com/apps/giscus)
2. 点击 "Install" 按钮
3. 选择要安装 Giscus 的仓库 (sov710.github.io)
4. 确认安装

## 步骤 3: 获取 Giscus 配置参数

1. 访问 [Giscus 配置页面](https://giscus.app/)
2. 在 "Configuration" 部分，填写以下信息：
   - Repository: 输入 `sov710/sov710.github.io`
   - Page-Discussions Mapping: 选择 "Discussion title contains page URL"
   - Discussion Category: 选择 "Announcements" 或创建新的专用分类
   - Features: 根据需要启用或禁用功能
   - Theme: 选择适合你博客的主题
   
3. Giscus 会自动生成配置代码，记下以下参数：
   - `repo`
   - `repoId`
   - `category`
   - `categoryId`

## 步骤 4: 配置 VuePress Theme Hope

在 VuePress Theme Hope 中配置 Giscus 评论系统非常简单，只需在 `.vuepress/theme.ts` 文件中添加以下配置：

```js
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  // 其他主题配置...
  
  plugins: {
    comment: {
      provider: "Giscus",
      repo: "sov710/sov710.github.io",
      repoId: "你的repoId",
      category: "Announcements",
      categoryId: "你的categoryId",
      mapping: "pathname",
      reactionsEnabled: true,
      inputPosition: "bottom",
    },
  },
});
```

## 步骤 5: 测试评论系统

1. 部署更新后的站点
2. 访问任意文章页面
3. 滚动到页面底部，确认 Giscus 评论区已正确加载
4. 测试发表评论（需要使用 GitHub 账号登录）

## 步骤 6: 自定义和管理

### 评论管理

作为仓库管理员，你可以：
- 在 GitHub Discussions 中管理所有评论
- 锁定、删除或标记评论
- 将讨论标记为已解决

### 自定义外观

你可以在 `.vuepress/theme.ts` 文件中修改评论系统的设置：

```js
comment: {
  provider: "Giscus",
  // 其他配置...
  
  // 自定义外观
  theme: "preferred_color_scheme", // 可选值: light, dark, preferred_color_scheme
  lang: "zh-CN", // 评论系统语言
  lazyLoading: true, // 延迟加载评论区
}
```

## 故障排除

1. **评论区未加载**
   - 检查 Giscus App 是否正确安装并授权访问你的仓库
   - 验证仓库是否为公开
   - 确认 GitHub Discussions 已启用

2. **配置参数错误**
   - 重新访问 Giscus 配置页面获取正确的参数
   - 确保 `repoId` 和 `categoryId` 值正确

3. **样式与博客不匹配**
   - 调整 `theme` 参数以适配博客主题
   - 考虑使用 `darkTheme` 参数提供深色模式支持

## 参考资源

- [Giscus 官方文档](https://github.com/giscus/giscus)
- [VuePress Theme Hope 评论插件文档](https://theme-hope.vuejs.press/zh/guide/feature/comment.html)
- [GitHub Discussions 文档](https://docs.github.com/en/discussions) 