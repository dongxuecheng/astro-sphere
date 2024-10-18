import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ethan's Site",
  DESCRIPTION: "Welcome to Ethan's Site. a portfolio and blog forcoder and developers.",
  AUTHOR: "Ethan Dong",
}

// Work Page
export const ABOUT: Page = {
  TITLE: "About",
  DESCRIPTION: "About me and my journey as a developer.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "about", 
    HREF: "/about", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "dongxuecheng@outlook.com",
    HREF: "mailto:dongxuecheng@outlook.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "dongxuecheng",
    HREF: "https://github.com/dongxuecheng"
  },
]

