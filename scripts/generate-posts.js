import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置 marked 选项
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: true,
  mangle: false
});

// 读取 posts 目录下的所有 md 文件
const postsDirectory = path.join(__dirname, '../src/posts');
const posts = [];

// 读取所有 md 文件
const files = fs.readdirSync(postsDirectory);
for (const file of files) {
  if (file.endsWith('.md')) {
    const filePath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // 解析 frontmatter
    const { data, content } = matter(fileContent);
    
    // 生成 HTML
    const html = marked.parse(content);
    
    // 创建 post 对象
    const post = {
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
      slug: data.slug,
      tags: data.tags,
      author: data.author,
      readTime: data.readTime,
      content: content,
      html: html
    };
    
    posts.push(post);
  }
}

// 生成 posts.ts 文件内容
const postsConfig = {
  title: "Blog Posts",
  description: "Technical articles, tutorials, and insights about web development and EdgeOne platform.",
  backButton: "Back to Home",
  noPosts: "No posts found matching your search.",
  pagination: {
    previous: "Previous",
    next: "Next"
  },
  posts: posts
};

// 生成 TypeScript 文件内容
const tsContent = `// This file is auto-generated. Do not edit manually.
import { Post } from '@/types/post';

export const postsConfig = ${JSON.stringify(postsConfig, null, 2)} as const;
`;

// 写入文件
const outputPath = path.join(__dirname, '../src/config/posts.ts');
fs.writeFileSync(outputPath, tsContent);

console.log('Posts generated successfully!'); 