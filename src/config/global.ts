export const globalConfig = {
  site: {
    name: "Your Portfolio Name",
    author: "Anti Entropy",
    description: "A brief description of your portfolio website",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
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
    aria: "Footer Navigation",
    copyright: "© 2025 Anti Entropy. All rights reserved.",
    social: {
      twitter: "https://x.com/Anti_Entropy",
      github: "https://github.com/Anti-Entropy",
      email: "support@anti-entropy.dev"
    }
  }
} as const; 