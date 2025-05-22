# 项目清理指南

为确保项目结构清晰和代码简洁，请执行以下清理步骤。

## 删除示例文章文件

以下文件是示例文件，在实际开发中可以删除：

```bash
# 在项目根目录下执行以下命令
cd /home/chris/myworld/git/vuepress

# 删除示例文章
rm -f docs/posts/article{1..12}.md
rm -f docs/posts/archive{1,2}.md
rm -f docs/posts/sticky.md docs/posts/sticky2.md
```

## 代码精简

### 1. 配置文件精简

确保没有重复的配置。主要检查点：

- 确保markdown配置只在theme.ts中存在，不在config.js中重复配置
- 移除未使用的插件配置
- 确保资源路径正确使用根路径(以/开头)

### 2. 依赖清理

检查package.json中的依赖是否都在使用：

```bash
# 分析项目依赖
pnpm dlx depcheck
```

### 3. 样式文件精简

- 检查`.vuepress/styles/index.scss`中的样式是否有冗余
- 移除未使用的CSS类和规则

## 图片资源优化

1. 确保所有图片资源都放在`.vuepress/public`目录下
2. 检查图片大小，优化大于100KB的图片：

```bash
# 列出大于100KB的图片文件
find docs/.vuepress/public -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" -o -name "*.gif" -o -name "*.ico" \) -size +100k -exec ls -lh {} \;
```

3. 优化图片使用适当的工具:

```bash
# 安装图片优化工具
pnpm add -D imagemin-cli

# 优化图片
npx imagemin docs/.vuepress/public/*.{jpg,png} --out-dir=docs/.vuepress/public/optimized
```

然后用优化后的图片替换原图片。

## 路径修复检查清单

以下是需要检查的图片路径引用位置：

1. **主题配置 (theme.ts)**:
   - logo和logoDark应使用`/logo.jpg`格式
   - 确保没有使用`./public/logo.jpg`这样的格式

2. **站点配置 (config.js)**:
   - favicon引用应使用`/favicon.ico`格式
   - 确保没有使用`./public/favicon.ico`这样的格式

3. **首页配置 (README.md)**:
   - heroImage应使用`/logo.jpg`格式

4. **Markdown文件中的图片**:
   - 检查所有Markdown文件中的图片引用
   - 更正所有不以`/`开头的图片路径

## 检查警告修复

运行开发服务器检查是否还有警告：

```bash
pnpm docs:dev
```

确保以下警告都已解决：

1. ✅ "markdown.highlighter" 已移至theme.ts
2. ✅ "layout: BlogHome" 已更新为"layout: Blog"
3. ✅ 代码块语言标识已完整拼写（例如`javascript`而非`js`） 