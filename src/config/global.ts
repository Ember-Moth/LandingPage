export const globalConfig = {
  site: {
    name: "EdgeOne Templates",
    author: "EdgeOne Team",
    description: "A collection of beautiful templates built with Next.js and Tailwind CSS",
    url: "/"
  },
  navigation: {
    aria: "EdgeOne Templates Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Posts",
        href: "/posts"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "EdgeOne Templates Footer",
    copyright: "© 2024 EdgeOne Templates. All rights reserved.",
    social: {
      twitter: "https://x.com/TencentCloudEO",
      github: "https://github.com/TencentEdgeOne",
      email: "media_service@tencent.com"
    }
  }
} as const; 