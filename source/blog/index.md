---
title: Blog
layout: layouts/blog.njk
permalink: "/blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
eleventyNavigation:
  key: Blog
  parent: Home
  order: 2
pagination:
  data: collections.category
  size: 2
paginationPrevText: "Newer posts"
paginationNextText: "Older posts"
---
