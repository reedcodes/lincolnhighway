---
permalink: "/{{ categoryName | slug }}/"
layout: layouts/blog.njk
eleventyNavigation:
  key: Categories
  parent: Blog
pagination:
  data: collections.categoryList
  size: 1
  alias: categoryName
---
