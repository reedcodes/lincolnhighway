---
title: Blog
permalink: "blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
layout: layouts/blog.njk
eleventyNavigation:
  key: Blog
  order: 2
pagination:
  data: collections.blogPosts
  size: 2
---

This is **blog** stuff.
