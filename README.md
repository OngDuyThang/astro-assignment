# Astro Blog Assignment

This is a content-driven blog application built using Astro
, a modern framework for building fast, optimized websites using your favorite frontend components and Markdown content.

🔗 **Live Demo:** [https://astro-assignment-khaki.vercel.app/](https://astro-assignment-khaki.vercel.app/)

## 🚀 Project Structure

```text
└── 📁public
        └── 📁images
        ├── favicon.svg
└── 📁src
    └── 📁components
    └── 📁icons
    └── 📁layouts
    └── 📁markdowns
    └── 📁pages
        └── 📁author
            ├── [...author].astro
        └── 📁blog
            ├── [page].astro
            ├── [slug].astro
            ├── index.astro
        └── 📁category
            ├── [category].astro
        ├── 404.astro
        ├── about.astro
        ├── index.astro
    └── 📁styles
        ├── global.css
    ├── constansts.ts
    ├── utils.ts
```

## ⚡ Features

- Markdown content: Write blogs in simple Markdown files with frontmatter.

- Dynamic routes: Each blog has its own page with blog/[slug].astro.

- Pagination: Display a fixed number of blogs per page with blog/[page].astro.

- Custom layouts: Wrap blogs in reusable layouts like BlogLayout.astro.

- SEO-friendly: Easy to manage meta tags via HeadSEO.astro.

- Reusable components: Header, Footer, BlogCard, Pagination, and more.

## 🚀 Why Astro is great for content-driven

- Fast Static Sites and built time pre-generated, resulting in blazing-fast page loads..

- Markdown-First Workflow, support both static markdown page and dynamic content loading.

- Partial Hydration and Built-in Image Optimization, keeping performance high

- Easy learning curve with component-driven and props like React.

- SEO & Accessibility Friendly.

- Scalable & Maintainable.

## 📌 Notes

Each Markdown file should follow this format:
```
---
title: Put you title here
url: /blog/some-blog-1
date: 2025-11-10
author: Thang Duy
image: {
  src: "/images/placeholder.png",
  alt: "Some picture",
}
description: This is a description
draft: false
category: General
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

## 🧞 Commands

You could also use `yarn` or any other package managers:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

