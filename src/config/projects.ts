export const projectsConfig = {
  title: "Our Projects",
  description: "Here are some of our recent projects. Each project is designed to help developers build better web applications.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "EdgeOne Templates",
      description: "A collection of high-quality web templates built with Next.js and Tailwind CSS.",
      href: "https://tempmail.best",
      imageUrl: "/assets/images/projects/project1.jpg"
    },
    {
      title: "DNS Surf",
      description: "A powerful DNS resolution tool for checking DNS results across different regions.",
      href: "https://dns.surf",
      imageUrl: "/assets/images/projects/project2.jpg"
    },
    {
      title: "HTML Zone",
      description: "A comprehensive web development toolbox for developers.",
      href: "https://html.zone",
      imageUrl: "/assets/images/projects/project3.png"
    }
  ]
} as const; 