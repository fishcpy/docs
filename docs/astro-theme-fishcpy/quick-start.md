# 🚀 快速开始指南

本指南将帮助您在几分钟内搭建并运行 Astro Theme Fishcpy 博客。

## 📋 前置要求

在开始之前，请确保您的系统已安装：

- **Node.js** >= 20.0.0 ([下载地址](https://nodejs.org/))
- **pnpm** >= 9.0.0 (推荐的包管理器)

### 安装 pnpm

如果您还没有安装 pnpm，可以通过以下命令安装：

```bash
npm install -g pnpm
```

## 🛠️ 安装步骤

### 方法一：直接克隆仓库

```bash
# 1. 克隆项目
git clone https://github.com/fishcpy/astro-theme-fishcpy.git my-blog

# 2. 进入项目目录
cd my-blog

# 3. 安装依赖
pnpm install

# 4. 启动开发服务器
pnpm dev
```

### 方法二：使用模板创建

```bash
# 使用 GitHub 模板创建新仓库
# 1. 访问 https://github.com/fishcpy/astro-theme-fishcpy
# 2. 点击 "Use this template" 按钮
# 3. 创建您的新仓库
# 4. 克隆您的新仓库并安装依赖

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
pnpm install
pnpm dev
```

## 🎯 首次运行

启动开发服务器后，您将看到类似以下的输出：

```
🚀 astro v5.13.5 started in 123ms

┃ Local    http://localhost:4321/
┃ Network  use --host to expose

┃ ready in 456ms
```

打开浏览器访问 `http://localhost:4321`，您应该能看到默认的博客首页。

## ⚙️ 基本配置

### 1. 修改站点信息

编辑 `src/config.ts` 文件，更新您的站点基本信息：

```typescript
export const SITE = {
  title: '您的博客标题',
  description: '您的博客描述',
  defaultLanguage: 'zh-cn',
  author: '您的名字',
  avatar: '/avatar.jpg', // 头像路径
  bio: '您的个人简介'
}

export const SITE_URL = 'https://yourdomain.com'
```

### 2. 自定义主题颜色

在同一文件中修改主题配置：

```typescript
export const THEME = {
  primaryColor: '#3b82f6', // 主色调
  accentColor: '#06b6d4',  // 强调色
  backgroundColor: '#ffffff', // 背景色
  textColor: '#1f2937'     // 文字颜色
}
```

### 3. 配置社交媒体链接

```typescript
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'fa6-brands:github'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'fa6-brands:twitter'
  }
  // 添加更多社交媒体链接
]
```

## 📝 创建您的第一篇文章

在 `src/content/posts/` 目录下创建一个新的 `.md` 文件：

```markdown
---
title: 我的第一篇文章
published: 2025-08-16
description: 这是我的第一篇博客文章
tags: [博客, Astro, 开始]
category: 博客
draft: false
customSlug: "my-first-post"
image: /images/first-post.jpg
---

# 欢迎来到我的博客

这是我使用 Astro Theme Fishcpy 创建的第一篇文章！

## 功能特性

- 支持 Markdown 语法
- 代码高亮
- 数学公式
- 响应式设计

```javascript
console.log("Hello, World!");
```

## 🔍 启用搜索功能

搜索功能默认启用，构建时会自动生成搜索索引。如需自定义搜索配置，编辑 `pagefind.yml`：

```yaml
# pagefind.yml
source: dist
bundle_dir: _pagefind
exclude_selectors:
  - "[data-pagefind-ignore]"
  - ".no-search"
```

## 💬 配置评论系统

### Twikoo 评论

1. 部署 Twikoo 后端服务
2. 在配置文件中启用：

```typescript
export const COMMENT_TWIKOO = {
  enable: true,
  envId: 'your-twikoo-env-id'
}
```

### Artalk 评论

1. 部署 Artalk 服务
2. 在配置文件中启用：

```typescript
export const COMMENT_ARTALK = {
  enable: true,
  server: 'https://your-artalk-server.com',
  site: 'your-site-name'
}
```

## 🚀 构建和部署

### 本地构建

```bash
# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 选择 Astro 预设
4. 点击部署

### 部署到 Netlify

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 中连接仓库
3. 构建命令：`pnpm build`
4. 发布目录：`dist`

## 🔧 常见问题

### Q: 开发服务器启动失败
A: 检查 Node.js 版本是否 >= 20，并确保使用 pnpm 安装依赖。

### Q: 图片不显示
A: 确保图片文件放在 `public/` 目录下，并使用正确的路径引用。

### Q: 样式不生效
A: 检查 Tailwind CSS 类名是否正确，或者清除浏览器缓存。

### Q: 搜索功能不工作
A: 确保已经运行 `pnpm build` 命令生成搜索索引。

## 📚 下一步

现在您已经成功搭建了博客，可以：

1. [⚙️ 查看完整配置文件自定义](./configuration.md)
2. [📝 学习内容管理](./content-management.md)
3. [🔧 探索高级功能](./advanced-features.md)
4. [🚀 部署指南](./deployment.md)

## 🆘 获取帮助

如果遇到问题，可以：

- 查看 [❓ 常见问题](./faq.md)
- 查看 [GitHub Issues](https://github.com/fishcpy/astro-theme-fishcpy/issues)
- 参与 [GitHub Discussions](https://github.com/fishcpy/astro-theme-fishcpy/discussions)
- 查看 [Astro 官方文档](https://docs.astro.build)

祝您使用愉快！🎉