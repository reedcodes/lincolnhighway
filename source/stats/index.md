---
title: Stats
layout: layouts/default.njk
eleventyNavigation:
  key: Stats
  order: 4
---

<ul class="stats-list" role="list">
  {%- for stat, value in stats -%}
    {%- if value.item != 0 %}
      <li class="stats-item{{ " stats-first" if loop.first }}"><span class="stat-item">{{ value.item }}</span> <span class="stat-title">{{ value.title }}</span></li>
    {%- endif -%}
  {%- endfor -%}
</ul>
