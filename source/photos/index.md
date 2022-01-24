---
title: Photos
layout: layouts/default.njk
eleventyNavigation:
  key: Photos
  order: 5
---

{%- for album in albums -%}
  {% flickrAlbum album.id, album.source, album.title %}
{%- endfor -%}
