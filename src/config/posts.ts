// This file is auto-generated. Do not edit manually.
import { Post } from '@/types/post';

export const postsConfig = {
  "title": "Blog Posts",
  "description": "Technical articles, tutorials, and insights about web development and EdgeOne platform.",
  "backButton": "Back to Home",
  "noPosts": "No posts found matching your search.",
  "searchPlaceholder": "Search posts by title...",
  "pagination": {
    "previous": "Previous",
    "next": "Next"
  },
  "posts": [
    {
      "title": "Getting Started with Next.js 14",
      "description": "A comprehensive guide to building modern web applications with Next.js 14",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/getting-started-with-nextjs",
      "tags": [
        "nextjs",
        "react",
        "web development",
        "tutorial"
      ],
      "author": "Jane Smith",
      "readTime": "5",
      "content": "\r\n# Getting Started with Next.js 14\r\n\r\nNext.js 14 brings exciting new features and improvements to the React framework. In this guide, we'll explore the key features and learn how to build modern web applications.\r\n\r\n## Key Features\r\n\r\n- Server Components\r\n- App Router\r\n- Server Actions\r\n- Improved Performance\r\n\r\n## Getting Started\r\n\r\n```bash\r\nnpx create-next-app@latest my-app\r\ncd my-app\r\nnpm run dev\r\n```\r\n\r\n## Best Practices\r\n\r\n1. Use Server Components by default\r\n2. Implement proper error boundaries\r\n3. Optimize images with next/image\r\n4. Leverage the new App Router\r\n",
      "html": "<h1>Getting Started with Next.js 14</h1>\n<p>Next.js 14 brings exciting new features and improvements to the React framework. In this guide, we&#39;ll explore the key features and learn how to build modern web applications.</p>\n<h2>Key Features</h2>\n<ul>\n<li>Server Components</li>\n<li>App Router</li>\n<li>Server Actions</li>\n<li>Improved Performance</li>\n</ul>\n<h2>Getting Started</h2>\n<pre><code class=\"language-bash\">npx create-next-app@latest my-app\ncd my-app\nnpm run dev\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use Server Components by default</li>\n<li>Implement proper error boundaries</li>\n<li>Optimize images with next/image</li>\n<li>Leverage the new App Router</li>\n</ol>\n"
    },
    {
      "title": "Building Microservices with Node.js",
      "description": "A practical guide to building scalable microservices using Node.js",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/nodejs-microservices",
      "tags": [
        "nodejs",
        "microservices",
        "backend",
        "architecture"
      ],
      "author": "David Brown",
      "readTime": "5",
      "content": "\r\n# Building Microservices with Node.js\r\n\r\nMicroservices architecture has become a popular approach for building scalable applications. Let's explore how to implement it using Node.js.\r\n\r\n## Architecture Overview\r\n\r\n- Service Discovery\r\n- API Gateway\r\n- Message Queues\r\n- Containerization\r\n\r\n## Implementation Example\r\n\r\n```javascript\r\n// Example of a microservice using Express\r\nconst express = require(\"express\");\r\nconst app = express();\r\n\r\napp.get(\"/api/users\", async (req, res) => {\r\n  try {\r\n    const users = await userService.getAllUsers();\r\n    res.json(users);\r\n  } catch (error) {\r\n    res.status(500).json({ error: error.message });\r\n  }\r\n});\r\n\r\n// Service registration\r\nconst serviceRegistry = {\r\n  register: (service) => {\r\n    // Implementation\r\n  },\r\n};\r\n```\r\n\r\n## Best Practices\r\n\r\n1. Use containerization\r\n2. Implement circuit breakers\r\n3. Handle service discovery\r\n4. Monitor service health\r\n",
      "html": "<h1>Building Microservices with Node.js</h1>\n<p>Microservices architecture has become a popular approach for building scalable applications. Let&#39;s explore how to implement it using Node.js.</p>\n<h2>Architecture Overview</h2>\n<ul>\n<li>Service Discovery</li>\n<li>API Gateway</li>\n<li>Message Queues</li>\n<li>Containerization</li>\n</ul>\n<h2>Implementation Example</h2>\n<pre><code class=\"language-javascript\">// Example of a microservice using Express\nconst express = require(&quot;express&quot;);\nconst app = express();\n\napp.get(&quot;/api/users&quot;, async (req, res) =&gt; {\n  try {\n    const users = await userService.getAllUsers();\n    res.json(users);\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// Service registration\nconst serviceRegistry = {\n  register: (service) =&gt; {\n    // Implementation\n  },\n};\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use containerization</li>\n<li>Implement circuit breakers</li>\n<li>Handle service discovery</li>\n<li>Monitor service health</li>\n</ol>\n"
    }
  ]
} as const;
