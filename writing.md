---
layout: base-layout.njk
tags: ["page"]
title: Writing
desc: Read blog posts, how-to guides, and experiences from me.
canonical: https://cooperhollmaier.com/writing/
pagination:
  data: collections.post
  size: 10
  reverse: true
  alias: posts
---

# Latest Posts

<section class="cards">
{% for post in posts %}

<article class="card">
    <div class="text">
    <time class="card__date" datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
    <a class="none"href="{{ post.url }}"><h2 class="">{{ post.data.title }}</h3></a>
    <p class="">{{ post.data.desc }}
  </article>
  
  
{% endfor %}
</section>
