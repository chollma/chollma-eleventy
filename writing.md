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
    <div class="text">
      <h3>{{ post.data.title }}</h3>
      <time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
      <p>{{ post.data.desc }}</p>
    </div>
  </article>
  
{% endfor %}
</section>
