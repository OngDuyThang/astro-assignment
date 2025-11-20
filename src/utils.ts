import { siteData } from "./constansts";

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}

export function filterBlogs(
  blogs: any[],
  {
    removeDrafts = false,
    removeFutureBlog = true,
    sortByDate = true,
    limit = -1,
  } = {}
) {
  const filteredBlogs = blogs.reduce((acc, blog) => {
    const { date, draft } = blog.frontmatter;
    if (removeDrafts && draft) return acc;

    if (removeFutureBlog && new Date(date) > new Date()) return acc;

    acc.push(blog);

    return acc;
  }, []);

  if (sortByDate) {
    filteredBlogs.sort(
      (a: any, b: any) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
  } else {
    filteredBlogs.sort(() => Math.random() - 0.5);
  }

  if (typeof limit === "number" && limit >= 0) {
    return filteredBlogs.slice(0, limit);
  }
  return filteredBlogs;
}

export function jsonLDGenerator({ type, post, url }: any) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}"
      }
    </script>`;
}
