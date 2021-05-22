---
layout: base-layout.njk
tags: ["page"]
title: Writing | Cooper Hollmaier
desc: Read blog posts, how-to guides, and experiences from me.
canonical: https://cooperhollmaier.com/writing/
pagination:
  data: collections.post
  size: 10
  reverse: true
  alias: posts
---

# Writing

{% for post in posts %}

  <article>
    <h3>
      <a href="{{ post.url | url }}">{{ post.data.title }}</a>
    </h3>
    <time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
  </article>
{% endfor %}
