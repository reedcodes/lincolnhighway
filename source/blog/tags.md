---
permalink: "/blog/tag/{{ tag | slug }}/"
layout: layouts/blog.njk
eleventyNavigation:
  key: Tags
  parent: Blog
pagination:
  data: collections
  size: 1
  alias: tag
  filter: [ "all", "blogPosts" ]
---
