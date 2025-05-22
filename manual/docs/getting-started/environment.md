# 开发环境搭建

本文档介绍如何搭建SOV710博客的开发环境，包括所需软件、依赖安装和环境配置。

## 系统要求

SOV710博客可以在以下操作系统上开发：

- **Windows**: Windows 10或更高版本
- **macOS**: macOS 10.15 (Catalina)或更高版本
- **Linux**: 任何现代Linux发行版，如Ubuntu, Debian, Fedora等

## 前置软件

在开始之前，请确保您的系统已安装以下软件：

1. **Node.js**: 版本 18.x 或更高（推荐使用LTS版本）
2. **pnpm**: 版本 10.x 或更高

### 安装Node.js

#### Windows/macOS
访问 [Node.js官网](https://nodejs.org/) 下载并安装LTS版本。

#### Linux (使用nvm)
推荐使用[nvm](https://github.com/nvm-sh/nvm)安装Node.js：

```bash
# 安装nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 重新加载shell配置
source ~/.bashrc  # 或 source ~/.zshrc

# 安装Node.js LTS版本
nvm install --lts

# 设为默认版本
nvm use --lts
```

### 安装pnpm

使用npm安装pnpm：

```bash
# 使用npm全局安装pnpm
npm install -g pnpm

# 验证安装
pnpm --version
```

## 获取项目代码

### 通过Git克隆

如果您有项目的Git仓库访问权限，可以使用以下命令克隆：

```bash
# 克隆仓库
git clone https://github.com/sov710/sov710.github.io.git

# 进入项目目录
cd sov710.github.io
```

### 通过下载ZIP文件

如果没有Git访问权限，也可以下载项目的ZIP文件并解压：

1. 访问GitHub仓库页面
2. 点击"Code"按钮
3. 选择"Download ZIP"
4. 解压下载的文件到本地目录

## 项目初始化

### 安装依赖

在项目根目录中执行以下命令安装所有依赖：

```bash
# 使用pnpm安装依赖
pnpm install
```

这会根据`package.json`文件安装所有必要的依赖包。

### 安装特定依赖

如果需要安装特定的依赖，可以使用以下命令：

```bash
# 安装搜索插件
pnpm add -D @vuepress/plugin-search@next

# 安装代码高亮插件
pnpm add -D @vuepress/plugin-prismjs@next
```

## 配置IDE/编辑器

推荐使用Visual Studio Code (VS Code)作为开发工具，并安装以下扩展：

- **Volar**: Vue语言支持
- **ESLint**: JavaScript代码质量检查
- **Prettier**: 代码格式化
- **Markdown All in One**: Markdown编辑增强
- **SCSS IntelliSense**: SCSS智能提示

### VS Code配置

在项目根目录创建`.vscode/settings.json`文件：

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## 验证环境

安装完成后，可以通过启动开发服务器来验证环境是否正确搭建：

```bash
# 启动开发服务器
pnpm docs:dev
```

如果一切正常，您应该能在终端看到类似以下的输出：

```
vite v6.3.5 dev server running at:

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://172.x.x.x:8080/
```

然后可以在浏览器中访问`http://localhost:8080`查看网站。

## 故障排除

### 常见问题

1. **依赖安装失败**

   ```bash
   # 清除pnpm缓存
   pnpm store prune
   
   # 重新安装
   pnpm install
   ```

2. **启动开发服务器失败**

   ```bash
   # 清除缓存并启动
   pnpm docs:clean-dev
   ```

3. **模块未找到错误**

   ```bash
   # 检查是否缺少依赖
   pnpm install @vuepress/plugin-search@next @vuepress/plugin-prismjs@next
   ```

### 版本兼容性问题

如果遇到版本兼容性问题，请检查`package.json`中的依赖版本是否一致。VuePress主题和插件版本需要相互兼容。

## 更新依赖

定期更新依赖可以获取最新的功能和修复：

```bash
# 更新VuePress相关包
pnpm docs:update-package
```

[返回上级](./index.md) | [返回文档首页](../index.md) 