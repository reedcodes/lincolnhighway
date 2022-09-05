---
permalink: "/blog/category/{{ categoryName | slug }}/"
layout: layouts/taxonomy.njk
eleventyNavigation:
  key: Categories
  parent: Blog
pagination:
  data: collections.categoryList
  size: 1
  alias: categoryName
---

<!--
  Dining
  Driving
  Lodging
  Planning
  Sightseeing
  -->
