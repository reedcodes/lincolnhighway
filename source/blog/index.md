---
title: Blog
permalink: "blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
layout: layouts/blog.njk
eleventyNavigation:
  key: Blog
  order: 2
pagination:
  data: collections.blogPosts
  size: 10
post_title_heading: h2
---
