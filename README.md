# Multiple Page Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring multiple pages including a blog system, projects showcase, and about page.

## Quick Deploy

Click the button below to deploy to Tencent Cloud EdgeOne with one click:

[![Deploy to Tencent Cloud](https://img.shields.io/badge/Deploy%20to-Tencent%20Cloud-blue)](https://edgeone.ai/pages/new?template=https://github.com/tomcomtang/multiplepage-portfolio&output-directory=./out&build-command=npm%20run%20build&install-command=npm%20install)

## Features

- 🎨 Modern and clean design with dark/light mode support
- 📱 Fully responsive layout
- 📝 Blog system with Markdown support
- 🚀 Project showcase
- 🔍 Search functionality for blog posts
- 🎯 SEO optimized
- 🌙 Dark/Light theme toggle
- 📦 Static site generation

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Content**: Markdown with React Markdown
- **Syntax Highlighting**: React Syntax Highlighter
- **Theme**: next-themes
- **UI Components**: Custom components with Radix UI primitives

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/tomcomtang/multiplepage-portfolio.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Project Structure

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

## Blog System

The blog system supports:

- Markdown content
- Code syntax highlighting
- Reading time estimation
- Search functionality
- Pagination

## Customization

1. Add new blog posts by creating Markdown files in the `src/content/posts` directory
2. Update project information in `src/config/projects.ts`
3. Modify site configuration in `src/config/site.ts`

## License

ISC

## Author

[Your Name]
