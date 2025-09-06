# 🚀 部署指南

::: tip 🤖 AI 辅助编写
本文档由 AI 辅助编写，内容经过人工审核和优化。如发现任何错误或需要改进的地方，欢迎提交 Issue 或 PR。
:::

::: info 📖 官方部署文档
Astro 支持部署到 Vercel、Netlify、GitHub Pages、Cloudflare Pages 等多种平台。

**我们强烈建议您直接查阅 [Astro 官方部署指南](https://docs.astro.build/zh-cn/guides/deploy/)，以获取最准确、最全面的部署信息。**
:::

## 🚀 快速部署指南

### 1. 上传项目到 GitHub

首先，您需要将项目上传到一个 **私有** GitHub 仓库。

#### a. 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录。
2. 点击右上角的 "+" 按钮，选择 "New repository"。
3. 填写仓库信息：
   - **Repository name**: 输入您的博客名称（例如 `my-blog`）。
   - **Description**: (可选) 简短描述您的博客。
   - **⚠️ 重要**: 选择 **Private**（私人仓库）以保护您的代码和内容。
4. **不要** 勾选 "Add a README file"、"Add .gitignore" 或 "Choose a license"。
5. 点击 "Create repository"。

#### b. 上传本地项目

在您的项目文件夹中打开终端，并执行以下命令：

```bash
# 初始化 Git 仓库（如果尚未初始化）
git init -b main

# 添加所有文件到暂存区
git add .

# 创建首次提交
git commit -m "Initial commit"

# 关联远程仓库（请将 URL 替换为您自己的仓库地址）
git remote add origin https://github.com/your-username/your-repo-name.git

# 推送到主分支
git push -u origin main
```

### 2. 使用内置工作流自动部署

本项目已内置 GitHub Actions 工作流，默认使用 `main` 分支进行部署。

1.  **推送代码到 `main` 分支**
    将您的代码推送到远程仓库的 `main` 分支即可触发自动部署。
2.  **在部署平台配置**
    - 将您的 GitHub 仓库连接到您选择的部署平台（如 Vercel, Netlify）。
    - 在项目设置中，将部署分支设置为 `blog`。
    - **重要**: 如果平台需要选择框架预设，请选择 **Other**。

### 部署 `main` 分支或其他分支

如果您希望从 `main` 分支或自定义分支进行部署，则需要自行配置构建流程。具体方法请参考 [Astro 官方部署指南](https://docs.astro.build/zh-cn/guides/deploy/)。