# 📝 内容管理指南

本指南将详细介绍如何在 Astro Theme Fishcpy 中创建、管理和优化您的博客内容。

## 📁 内容结构

### 目录组织

Astro Theme Fishcpy 支持两种文章组织方式：

#### 方式一：单独 Markdown 文件

```
src/content/posts/
├── hello-world.md
├── astro-guide.md
├── javascript-tips.md
└── css-tricks.md
```

#### 方式二：文件夹形式（推荐）

```
src/content/posts/
├── hello-world/
│   ├── index.md        # 文章内容（必需）
│   └── cover.jpeg      # 封面图片（必需）
├── astro-guide/
│   ├── index.md
│   ├── cover.jpeg
│   └── demo.png        # 其他相关图片
├── javascript-tips/
│   ├── index.md
│   └── cover.jpeg
└── css-tricks/
    ├── index.md
    └── cover.jpeg
```

**文件夹形式的优势：**
- 每篇文章有独立的目录空间
- 可以存放文章相关的图片和资源
- 更好的文件组织和管理
- 支持相对路径引用图片

### 封面图片配置

#### 单独文件形式
```markdown
---
title: "文章标题"
image: "/images/posts/article-cover.jpg"  # 绝对路径
---
```

#### 文件夹形式
```markdown
---
title: "文章标题"  
image: "./cover.jpeg"  # 相对路径，指向同目录下的 cover.jpeg
---
```

### 手动创建

#### 单独 Markdown 文件

在 `src/content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: 深入理解 Astro 静态站点生成
published: 2025-08-16
description: 全面介绍 Astro 框架的核心概念、特性和最佳实践
tags: [Astro, SSG, JavaScript, 性能优化]
category: 前端开发
draft: false
customSlug: "astro-deep-dive"
image: /images/posts/astro-deep-dive.jpg
---

#### 文件夹形式（推荐）

创建文件夹 `src/content/posts/astro-guide/`，包含以下文件：

**index.md**：
```markdown
---
title: 深入理解 Astro 静态站点生成
published: 2025-08-16
description: 全面介绍 Astro 框架的核心概念、特性和最佳实践
tags: [Astro, SSG, JavaScript, 性能优化]
category: 前端开发
draft: false
customSlug: "astro-deep-dive"
image: "./cover.jpeg"
---

# 深入理解 Astro 静态站点生成

Astro 是一个现代化的静态站点生成器...

![示例图片](./demo.png)
```

**cover.jpeg**：文章封面图片

**demo.png**：文章中使用的示例图片（可选）

### Front Matter 字段说明

| 字段 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `title` | string | ✅ | 文章标题 |
| `published` | date | ✅ | 发布日期，格式：YYYY-MM-DD |
| `description` | string | ✅ | 文章描述，用于 SEO 和摘要 |
| `tags` | array | ✅ | 标签数组，如：[标签1, 标签2] |
| `category` | string | ✅ | 文章分类 |
| `draft` | boolean | ✅ | 是否为草稿，true=不公开显示 |
| `customSlug` | string | ❌ | 自定义 URL 路径，如：abc → /posts/abc/ |
| `image` | string | ❌ | 封面图片路径 |

### 图片路径说明

- **单独文件形式**：`image: /images/posts/cover.jpg`（绝对路径）
- **文件夹形式**：`image: "./cover.jpeg"`（相对路径，推荐）

## 📸 相册管理

相册功能通过 `src/assets/album.json` 文件管理：

用于管理相册功能的数据结构：

```json
[
  {
    "id": 1,
    "title": "风景摄影",
    "slug": "1",
    "description": "记录大自然的美丽瞬间",
    "cover": "https://cdn.fis.ink/img/2025/07/24/6881fcb459da3.webp",
    "tags": ["风景", "自然", "摄影"],
    "created": "2025-08-29",
    "images": [
      {
        "id": 1,
        "url": "https://cdn.fis.ink/img/2025/07/24/6881f86b1baf2.webp",
        "title": "山间晨雾",
        "description": "清晨山间的薄雾缭绕",
        "tags": ["山景", "晨雾", "测试"],
        "date": "2025-08-29"
      }
    ]
  }
]
```

**字段说明：**
- `id`: 相册唯一标识
- `title`: 相册标题
- `slug`: URL 路径标识
- `description`: 相册描述
- `cover`: 相册封面图片
- `tags`: 相册标签
- `created`: 创建日期
- `images`: 相册中的图片列表

## ⏰ 时间盒管理

时间盒功能通过 `src/assets/chronobox.json` 文件管理，用于记录观看的影视作品：

```json
[
  {
    "id": 1,
    "title": "非人哉",
    "type": "番剧",
    "status": "看过",
    "rating": 5,
    "description": "中国古典神话传说中的\"著名\"精怪是如何在现代社会生存下去...",
    "cover": "https://cdn.fis.ink/cdn/2025/08/21/68a6d7ce373e1.webp",
    "year": 2018,
    "tags": ["国创", "日常", "搞笑"],
    "url": "https://www.bilibili.com/bangumi/play/ss24298"
  }
]
```

**字段说明：**
- `id`: 作品唯一标识
- `title`: 作品标题
- `type`: 作品类型（番剧、电影等）
- `status`: 观看状态（看过、在看等）
- `rating`: 评分（1-5星）
- `description`: 作品描述
- `cover`: 封面图片
- `year`: 发布年份
- `tags`: 标签
- `url`: 相关链接

## 💭 瞬间管理

瞬间功能通过 `src/assets/essay.json` 文件管理，用于记录生活瞬间和短文：

```json
[
  {
    "id": 1,
    "content": "测试图片",
    "time": "2025-08-13",
    "tags": ["测试图片"],
    "images": [
      "https://www.fis.ink/img/logo.png",
      "https://www.fis.ink/img/logo_c.png"
    ]
  }
]
```

**字段说明：**
- `id`: 瞬间唯一标识
- `content`: 文字内容
- `time`: 发布时间
- `tags`: 标签
- `images`: 图片列表（可选）

## 🔗 友链管理

友链功能通过 `src/assets/friends.json` 文件管理：

```json
[
  {
    "title": "fishcpy的小破站",
    "imgurl": "https://www.fis.ink/img/logo.png",
    "desc": "非淡泊无以明志，非宁静无以致远",
    "siteurl": "https://blog.fis.ink",
    "category": "博客",
    "tags": [""],
    "openInNewTab": true
  }
]
```

**字段说明：**
- `title`: 网站标题
- `imgurl`: 网站图标/头像
- `desc`: 网站描述
- `siteurl`: 网站链接
- `category`: 分类
- `tags`: 标签
- `openInNewTab`: 是否在新标签页打开

## 📝 编辑注意事项

编辑这些 JSON 文件时请注意：

1. **JSON 格式**：确保文件符合 JSON 格式规范
2. **字符编码**：使用 UTF-8 编码保存文件
3. **图片链接**：建议使用 HTTPS 链接
4. **日期格式**：统一使用 YYYY-MM-DD 格式
5. **备份数据**：修改前建议备份原文件