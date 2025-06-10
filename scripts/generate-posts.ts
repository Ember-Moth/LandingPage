const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { format } = require('date-fns');

interface Post {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  tags?: string[];
  author?: string;
  readTime?: string;
}

const POSTS_DIR = path.join(process.cwd(), 'src/posts');
const CONFIG_DIR = path.join(process.cwd(), 'src/config');

// Ensure directories exist
if (!fs.existsSync(POSTS_DIR)) {
  fs.mkdirSync(POSTS_DIR, { recursive: true });
}

if (!fs.existsSync(CONFIG_DIR)) {
  fs.mkdirSync(CONFIG_DIR, { recursive: true });
}

function getRandomImage() {
  const imageNumber = Math.floor(Math.random() * 3) + 1;
  return `/assets/images/post${imageNumber}.jpg`;
}

function generatePostsConfig() {
  // Read all markdown files from the posts directory
  const files = fs.readdirSync(POSTS_DIR);
  const posts: Post[] = [];

  files.forEach((file: string) => {
    if (path.extname(file) === '.md') {
      const filePath = path.join(POSTS_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      const stats = fs.statSync(filePath);

      // Generate slug from filename (without extension)
      const slug = path.basename(file, '.md');

      const post: Post = {
        title: data.title || slug,
        description: data.description || '',
        date: format(stats.mtime, 'yyyy-MM-dd'),
        image: getRandomImage(),
        slug: `posts/${slug}`,
        tags: data.tags || [],
        author: data.author || 'Anonymous',
        readTime: data.readTime || '5 min read'
      };

      posts.push(post);
    }
  });

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Read the existing config file
  const configPath = path.join(CONFIG_DIR, 'posts.ts');
  let existingConfig = {};
  
  if (fs.existsSync(configPath)) {
    const configContent = fs.readFileSync(configPath, 'utf8');
    // Extract the existing config object
    const configMatch = configContent.match(/export const postsConfig = ({[\s\S]*?}) as const;/);
    if (configMatch) {
      try {
        // Remove the 'as const' and parse the object
        const configStr = configMatch[1].replace(/as const$/, '');
        existingConfig = eval(`(${configStr})`);
      } catch (error) {
        console.error('Error parsing existing config:', error);
      }
    }
  }

  // Update only the posts array while preserving other configurations
  const updatedConfig = {
    ...existingConfig,
    posts: posts
  };

  // Generate the posts configuration file
  const configContent = `// This file is auto-generated. Do not edit manually.
import { Post } from '@/types/post';

export const postsConfig = ${JSON.stringify(updatedConfig, null, 2)} as const;
`;

  fs.writeFileSync(configPath, configContent);
  console.log('Posts configuration updated successfully!');
}

// Run the script
generatePostsConfig(); 