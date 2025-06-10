export interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
}

interface PostsConfig {
  title: string;
  description: string;
  backButton: string;
  noPosts: string;
  searchPlaceholder: string;
  pagination: {
    previous: string;
    next: string;
  };
  items: Post[];
}

export const postsConfig = {
  title: "Blog Posts",
  description: "Technical articles, tutorials, and insights about web development and EdgeOne platform.",
  backButton: "Back to Home",
  noPosts: "No posts found matching your search.",
  searchPlaceholder: "Filter posts by title...",
  pagination: {
    previous: "Previous",
    next: "Next"
  },
  items: [
    {
      title: "Getting Started with EdgeOne",
      description: "Learn how to use EdgeOne platform to build and deploy your web applications.",
      date: "2024-03-15",
      href: "/posts/getting-started-with-edgeone",
      imageUrl: "/assets/images/posts/post1.jpg",
      readingTime: "5 min read"
    },
    {
      title: "Building Templates with Next.js",
      description: "A comprehensive guide to creating reusable templates with Next.js and Tailwind CSS.",
      date: "2024-03-10",
      href: "/posts/building-templates-with-nextjs",
      imageUrl: "/assets/images/posts/post2.jpg",
      readingTime: "8 min read"
    },
    {
      title: "EdgeOne Best Practices",
      description: "Essential tips and tricks for getting the most out of EdgeOne platform.",
      date: "2024-03-05",
      href: "/posts/edgeone-best-practices",
      imageUrl: "/assets/images/posts/post3.jpg",
      readingTime: "6 min read"
    },
    {
      title: "Run MCP Server in a Docker sandbox",
      description: "Run MCP Server in a Docker sandbox to avoid supply chain attacks.",
      date: "Apr 25, 2025",
      href: "/post/guide-to-running-mcp-server-in-a-sandbox",
      imageUrl: "/assets/images/posts/post1.jpg",
      readingTime: 8
    },
    {
      title: "Use Cloudflare Workers to concat audio files",
      description: "How to use Cloudflare Workers to merge audio files using FFmpeg in the browser.",
      date: "April 19, 2025",
      href: "/post/cloudflare-audio-concat",
      imageUrl: "/assets/images/posts/post2.jpg",
      readingTime: 12
    },
    {
      title: "RSS.Beauty - Make Your RSS Beautiful!",
      description: "Beautify your RSS feeds with RSS.Beauty, featuring elegant interfaces, responsive design, and self-hosting support. Try it now!",
      date: "Dec 31, 2024",
      href: "/post/rss-beauty",
      imageUrl: "/assets/images/posts/post3.jpg",
      readingTime: 6
    },
    {
      title: "Building a Modern Web App with Next.js",
      description: "Learn how to build a modern web application using Next.js, React, and Tailwind CSS.",
      date: "Dec 15, 2024",
      href: "/post/nextjs-web-app",
      imageUrl: "/assets/images/posts/post1.jpg",
      readingTime: 15
    },
    {
      title: "The Future of Web Development",
      description: "Exploring the latest trends and technologies shaping the future of web development.",
      date: "Dec 1, 2024",
      href: "/post/future-web-dev",
      imageUrl: "/assets/images/posts/post2.jpg",
      readingTime: 10
    },
    {
      title: "Mastering TypeScript in 2024",
      description: "A comprehensive guide to TypeScript features and best practices for modern web development.",
      date: "Nov 20, 2024",
      href: "/post/typescript-guide",
      imageUrl: "/assets/images/posts/post3.jpg",
      readingTime: 20
    },
    {
      title: "The Art of Clean Code",
      description: "Learn the principles and practices of writing clean, maintainable code that stands the test of time.",
      date: "Nov 10, 2024",
      href: "/post/clean-code",
      imageUrl: "/assets/images/posts/post1.jpg",
      readingTime: 12
    },
    {
      title: "Building Scalable APIs with Node.js",
      description: "Best practices and patterns for building robust and scalable APIs using Node.js and Express.",
      date: "Oct 28, 2024",
      href: "/post/nodejs-apis",
      imageUrl: "/assets/images/posts/post2.jpg",
      readingTime: 18
    },
    {
      title: "Getting Started with GraphQL",
      description: "A beginner's guide to GraphQL: concepts, implementation, and real-world examples.",
      date: "Oct 15, 2024",
      href: "/post/graphql-intro",
      imageUrl: "/assets/images/posts/post3.jpg",
      readingTime: 14
    },
    {
      title: "The Power of CSS Grid",
      description: "Master CSS Grid layout and create complex, responsive designs with ease.",
      date: "Oct 1, 2024",
      href: "/post/css-grid",
      imageUrl: "/assets/images/posts/post1.jpg",
      readingTime: 9
    }
  ]
} as const; 