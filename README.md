# Multiple Page Portfolio

一个使用 Next.js 15 构建的现代响应式作品集网站，包含多个页面，包括博客系统、项目展示页和关于页面。

## 快速部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ember-Moth/multiplepage-portfolio)

## 预览

你可以在这里在线预览该项目:

[https://multiplepage-portfolio.edgeone.app/](https://multiplepage-portfolio.edgeone.app/)

## 功能特点

- 🎨 现代简洁的设计，支持深色/浅色模式
- 📱 完全响应式布局
- 📝 支持 Markdown 的博客系统
- 🚀 项目展示页
- 🔍 博文搜索功能
- 🎯 SEO 优化
- 🌙 深色/浅色主题切换
- 📦 静态站点生成

## 技术栈

- **框架**: Next.js 15
- **样式**: Tailwind CSS
- **内容**: Markdown + React Markdown
- **代码高亮**: React Syntax Highlighter
- **主题**: next-themes
- **UI 组件**: 基于 Radix UI primitives 的自定义组件

## 快速开始

1. 克隆仓库:

```bash
git clone https://github.com/tomcomtang/multiplepage-portfolio.git
```

2. 安装依赖:

```bash
npm install
```

3. 启动开发服务器:

```bash
npm run dev
```

4. 构建生产版本:

```bash
npm run build
```

## 项目结构

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── about/          # About page
│   │   ├── posts/          # Blog posts
│   │   └── projects/       # Projects showcase
│   ├── components/         # Reusable components
│   └── config/            # Configuration files
├── scripts/               # Build scripts
└── public/               # Static assets
```

## 内容管理

### 博客文章

1. 在 `src/content/posts/` 目录中创建 Markdown 文件
2. 每篇文章应遵循以下格式:

```markdown
---
title: 文章标题
description: 文章简短描述
date: 2024-03-21
readTime: 5 min
---

这里是文章内容...
```

3. 添加或修改文章后，运行:

```bash
npm run generate-posts
```

### 页面内容

可以通过修改以下文件来自定义不同页面的内容:

- **关于页面**: `src/app/about/page.tsx`
- **项目页面**: `src/config/projects.ts`
- **博客文章**: `src/content/posts/*.md`

### 站点配置

主要的配置文件有:

- `src/config/content.ts`: 站点名称、描述以及所有页面内容的主配置
- `src/config/global.ts`: 全局设置（导航栏、页脚、社交链接等）
- `src/config/contact.ts`: 联系信息与社交媒体链接
- `src/config/home.ts`: 首页配置
- `src/config/posts.ts`: 博客文章配置
- `src/config/projects.ts`: 项目展示配置
- `src/config/about.ts`: 关于页面配置

## 博客系统

博客系统支持:

- Markdown 内容
- 代码语法高亮
- 阅读时间估算
- 搜索功能
- 分页

## 自定义

1. 在 `src/content/posts` 目录中添加新的 Markdown 博客文章
2. 更新 `src/config/projects.ts` 中的项目信息
3. 修改 `src/config/content.ts` 与 `src/config/global.ts` 中的站点配置

## License

ISC

## Author

[Your Name]
