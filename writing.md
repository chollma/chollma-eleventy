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

<section class="cards">
{% for post in posts %}

<article class="card">
<a href="{{ post.url | url }}">
    <img src="https://via.placeholder.com/300x200" alt="Sample photo">
    <div class="text">
      <h3>{{ post.data.title }}</h3>
      <time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
    </div>
    </a>
  </article>
  
{% endfor %}
</section>
