# ⚙️ 配置文件自定义

::: tip 🤖 AI 辅助编写
本文档由 AI 辅助编写，内容经过人工审核和优化。如发现任何错误或需要改进的地方，欢迎提交 Issue 或 PR。
:::

本指南详细介绍了 Astro Theme Fishcpy 的配置选项。**所有配置都在 `src/config.ts` 文件中进行，这是唯一的配置文件。**

## 📁 配置文件位置

```
src/
└── config.ts          # 唯一配置文件，包含所有配置选项
```

## 🌐 站点基本配置 (siteConfig)

编辑 `src/config.ts` 文件中的 `siteConfig` 对象：

```typescript
export const siteConfig: SiteConfig = {
  title: "fishcpy主题",           // 站点标题
  subtitle: "",                   // 站点副标题
  lang: "zh_CN",                 // 语言设置: 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  
  // 主题色配置
  themeColor: {
    hue: 260,                     // 主题色调，取值范围0-360
                                  // 例如：红色:0，蓝绿色:200，青色:250，粉色:345
    fixed: true,                  // 对访客隐藏主题色选择器
  },
  
  theme: AUTO_MODE,               // 主题模式: AUTO_MODE(默认), LIGHT_MODE(强制浅色), DARK_MODE(强制深色)
  
  // 横幅配置
  banner: {
    enable: true,                 // 是否启用横幅
    type: "video",               // 'image' 或 'video'，指定banner类型
    src: "https://www.fis.ink/wj/video/mc.mp4", // 横幅资源路径
    position: "center",          // CSS object-position属性：'top','center','bottom'
    
    // 版权信息
    credit: {
      enable: false,             // 是否显示横幅图片的版权信息
      text: "Steam @基里曼的蓝精灵", // 版权文本
      url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3426980000", // 原作品链接
    },
    
    // 横幅文字
    text: {
      enable: true,              // 是否在banner中显示文字
      title: "Hello👋",          // banner主标题
      subtitle: "Welcome to my blog", // banner副标题
    },
  },
  
  // 页面背景
  pageBackground: {
    enable: true,                // 是否启用页面背景
    type: "image",              // 'image' 或 'video'
    src: "https://api.fis.ink/mc", // 背景资源路径
  },
  
  // 目录配置
  toc: {
    enable: true,                // 在文章右侧显示目录
    depth: 2,                    // 目录中显示的最大标题层级，取值范围1-3
  },
  
  // 文章配置
  post: {
    showCover: false,            // 是否在文章页面显示封面
  },
  
  // 网站图标配置
  favicon: [
    {
      src: "https://www.fis.ink/img/logo_c.png", // favicon路径，相对于/public目录
      // theme: 'light',          // (可选) 'light'或'dark'，仅在为浅色和深色模式设置了不同favicon时使用
      // sizes: '32x32',          // (可选) favicon尺寸，仅在设置了不同尺寸的favicon时使用
    },
  ],
};
```

## 🧭 导航栏配置 (navBarConfig)

```typescript
export const navBarConfig: NavBarConfig = {
  links: [
    {
      name: "归档",                // 导航项名称
      url: "/archive/",           // 链接地址
      icon: "fa6-solid:box-archive", // 图标
    },
    {
      name: "友链",
      url: "#",                   // 使用 # 表示下拉菜单
      icon: "fa6-solid:link",
      children: [                 // 子菜单
        {
          name: "友链",
          url: "/friends/",
          icon: "fa6-solid:user-group",
        },
        {
          name: "朋友圈",
          url: "/circle/",
          icon: "fa6-solid:circle-nodes",
        },
        {
          name: "留言板",
          url: "/comments/",
          icon: "fa6-solid:message",
        },
      ],
    },
    {
      name: "其他",
      url: "#",
      icon: "fa6-solid:chart-line",
      children: [
        {
          name: "服务监控",
          url: "https://status.fishcpy.top/status/web",
          external: true,          // 外部链接
          icon: "fa6-solid:chart-line",
        },
        {
          name: "节点监控",
          url: "https://node.fishcpy.top",
          external: true,
          icon: "fa6-solid:chart-line",
        },
      ],
    },
  ],
  
  showHomeIcon: false,            // 控制是否显示home图标
  
  // 搜索框左侧图标
  searchLeftIcons: [
    {
      name: "travellings",
      url: "https://www.travellings.cn/go.html",
      icon: "fa6-solid:train-subway",
      external: true,
    },
    {
      name: "rss",
      url: "/rss.xml",
      icon: "ic:twotone-rss-feed",
      external: true,
    },
  ],
};
```

## 👤 个人资料配置 (profileConfig)

```typescript
export const profileConfig: ProfileConfig = {
  avatar: "https://www.fis.ink/img/logo.png", // 头像路径
  name: "fishcpy",                            // 显示名称
  bio: "非淡泊无以明志，非宁静无以致远",        // 个人简介
  
  // 社交链接
  links: [
    {
      name: "Rss",
      icon: "ic:twotone-rss-feed",            // 图标代码请访问 https://icones.js.org/
      url: "/rss.xml",
    },
    {
      name: "Steam",
      icon: "fa6-brands:steam",
      url: "https://steamcommunity.com/id/fishcpy",
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/fishcpy",
    },
  ],
  
  // 统计信息配置
  showStats: true,                            // 统计信息总开关
  statsConfig: {
    showPosts: true,                          // 是否显示文章数
    showTags: true,                           // 是否显示标签数
    showCategories: true,                     // 是否显示分类数
  },
};
```

## 📄 许可证配置 (licenseConfig)

```typescript
export const licenseConfig: LicenseConfig = {
  enable: true,                               // 是否启用许可证显示
  name: "CC BY-NC-SA 4.0",                  // 许可证名称
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", // 许可证链接
};
```

## 💻 代码高亮配置 (expressiveCodeConfig)

```typescript
export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // 注意：某些样式(如背景色)会被覆盖，请查看astro.config.mjs文件
  theme: "github-dark",                       // 代码高亮主题
};
```

## 💬 评论系统配置 (commentConfig)

```typescript
export const commentConfig: CommentConfig = {
  enable: true,                               // 是否启用评论系统
  type: "artalk",                            // 评论系统类型: "twikoo" 或 "artalk"
  
  // Twikoo 配置
  twikoo: {
    envId: "https://twikoo.example.com/",     // Twikoo 环境 ID 或服务器地址
  },
  
  // Artalk 配置
  artalk: {
    server: "https://artalk.fis.ink",         // Artalk 服务器地址
    site: "fishcpy主题",                      // 站点名称
    darkMode: false,                          // 强制浅色模式，不跟随浏览器主题
  },
};
```

## 📱 响应式断点配置 (screensConfig)

```typescript
// 如果不生效，请修改 /tailwind.config.cjs
export const screensConfig = {
  sm: "768px",                                // 小屏幕断点
  md2: "726px",                              // 中小屏幕断点
  md: "924px",                               // 中屏幕断点
  lg: "1400px",                              // 大屏幕断点
  xl: "1536px",                              // 超大屏幕断点
};
```

## 🎴 卡片配置 (cardConfig)

```typescript
export const cardConfig = {
  opacity: 0.85,                             // 卡片半透明度，取值范围0-1
};
```

## 📐 布局配置 (layoutConfig)

```typescript
export const layoutConfig = {
  // 文章列表布局
  postList: {
    type: "grid",                             // "grid" 或 "list"，网格布局或列表布局
    grid: {
      columns: {
        sm: 1,                                // 小屏幕列数
        md2: 2,                               // 726px以上显示2列
        md: 2,                                // 中屏幕列数
        lg: 3,                                // 大屏幕列数，最大为3，超出会变成2个每行
      },
      gap: "gap-4",                           // 网格间距，对应Tailwind的gap-4
    },
  },
  
  // 友链页面布局
  friends: {
    grid: {
      columns: {
        sm: 1,                                // 小屏幕列数
        md: 2,                                // 中屏幕列数
        lg: 3,                                // 大屏幕列数
      },
      gap: "gap-x-6 gap-y-8",                 // 网格间距
    },
  },
};
```

### 布局使用示例：

1. **网格布局**：`type: "grid"`
2. **列表布局**：`type: "list"`
3. **自定义网格列数**：修改 `columns` 中的 `sm/md/lg` 值
4. **调整间距**：修改 `gap` 值（1-12）

## 🎨 美化配置 (beautifyConfig)

```typescript
// 注意：此配置可能不可用
export const beautifyConfig: BeautifyConfig = {
  enable: true,                               // 是否启用美化
  field: "post",                             // 应用字段
  titlePrefixIcon: "\uf863",                 // 标题前缀图标
  titlePrefixIconColor: "#ff7849",           // 前缀图标颜色
  
  // 动画配置
  animation: {
    enable: true,                             // 是否启用动画
    speed: 1.6,                              // 动画速度
    direction: "counterclockwise",            // 动画方向
    rotate: true,                            // 是否旋转
  },
  
  // 悬停效果
  hover: {
    enable: true,                             // 是否启用悬停效果
    slowSpeed: 3.2,                          // 慢速度
    color: "#49b1f5",                        // 悬停颜色
  },
  
  // 标题颜色配置
  colors: {
    h1: "#ef50a8",                           // H1 标题颜色
    h2: "#fb7061",                           // H2 标题颜色
    h3: "#ffbf00",                           // H3 标题颜色
    h4: "#a9e000",                           // H4 标题颜色
    h5: "#57c850",                           // H5 标题颜色
    h6: "#5ec1e0",                           // H6 标题颜色
  },
  
  // 标题大小配置
  sizes: {
    h1: "1.3rem",                            // H1 标题大小
    h2: "1.1rem",                            // H2 标题大小
    h3: "0.95rem",                           // H3 标题大小
    h4: "0.8rem",                            // H4 标题大小
    h5: "0.7rem",                            // H5 标题大小
    h6: "0.66rem",                           // H6 标题大小
  },
};
```

## 🎯 图标使用指南

主题使用 [Iconify](https://icones.js.org/) 图标系统。常用图标集：

- **Font Awesome 6**: `fa6-solid:`, `fa6-brands:`
- **Material Symbols**: `material-symbols:`
- **Tabler Icons**: `tabler:`
- **Heroicons**: `heroicons:`

### 添加新图标集

如果需要使用新的图标集，需要安装对应的包：

```bash
pnpm add @iconify-json/<icon-set-name>
```

例如：
```bash
pnpm add @iconify-json/mdi
pnpm add @iconify-json/lucide
```

## 🔧 配置验证

为确保配置正确，请注意以下几点：

1. **必填字段**：确保 `title`、`name` 等必填字段不为空
2. **URL 格式**：所有 URL 字段必须是有效的网址格式
3. **颜色格式**：颜色值使用十六进制格式（如 `#ff7849`）
4. **图标名称**：确保图标名称格式正确且已安装对应图标集
5. **文件路径**：检查所有文件路径是否存在且可访问

## 🚀 应用配置

修改配置后：

1. **重启开发服务器**：
   ```bash
   pnpm dev
   ```

2. **清理缓存**（如果样式未更新）：
   ```bash
   rm -rf .astro dist
   pnpm dev
   ```

3. **构建生产版本**：
   ```bash
   pnpm build
   ```

## 📚 下一步

配置完成后，您可以：

1. [📝 了解内容管理](./content-management.md)
3. [🚀 查看部署指南](./deployment.md)

如有问题，请查看 [❓ 常见问题](./faq.md) 或提交 [GitHub Issue](https://github.com/fishcpy/astro-theme-fishcpy/issues)。