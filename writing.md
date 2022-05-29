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

<header>
<div class="profile">
<h1> Latest Posts </h1>
</div>
</header>
<article class="container">

<ul class="cards container" role="list">
{% for post in posts %}

<li class="card">
    <a class="none" href="{{ post.data.canonical}}">
    <div class="text">
        <h2 class="post__title__list">{{ post.data.title }}</h3>
        <p> {{post.data.desc}} </p>
        <time class="card__date" datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>
      </div>
    </a>
  </li>
{% endfor %}
</section>
</article>
