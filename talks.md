---
layout: base-layout.njk
tags: ["page"]
title: Talks | Cooper Hollmaier
desc: Hire me to contribute to your next conference, webinar, or podcast!
canonical: https://cooperhollmaier.com/talks/
pagination:
  data: collections.talk
  size: 3
  reverse: true
  alias: talks
---

# Talks

<img class="hero" src="/assets/img/talks.jpg">

I love sharing the lessons I've learned and mentoring others looking to start a career in search engine optimization, digital marketing, communications, or a related field.

If you are looking for a contributor, please take note of my speaker rider below. You can reach out about hiring me on Twitter or send me an email.

## Past Talks

{% for talk in talks %}

  <article>
  <ul>
  <li>
  <a href="{{ talk.url | url }}">{{ talk.data.title }}</a> ({{ talk.date | dateReadable }})
  </li>
</ul>
  </article>
{% endfor %}

## Speaker Rider

I'm honored that you'd like to include me in your event. I believe in creating opportunities that are inclusive and accessible to all.

Before considering me as a contributor, please note the following guidelines below. These are a work-in-progress intended to promote the inclusion of diverse perspectives other than mine as a cisgender white male.

### Hosting

- I ask that travel to and from the event is provided.
- I ask that lodging be provided for the full length of the event.
- I ask for a ticket to the event. I want to engage with other attendees and see other talks!
- I ask for a speaker fee because I value my time (and hope you do too). Preparing for talks and events takes time away from my other obligations.

### Logistics

- A publically accessible Code of Conduct is required. This document must declare your dedication to creating a safe space, clearly state which behaviors are expected and which are not tolerated, and provide a place for folks to report problems and seek assistance.
- I won't be part of a white-majority, all-men lineup. I want to ensure underrepresented voices are included in the conversation.
- Feel free to record me, but let me know ahead of time and know that I can only represent my personal views and not those of any company.

## Final Thoughts

I really appreciate you taking the time to read through these points. I list these out because I want to speak at events that are inclusive, accessible, and represent the diverse perspectives around us. If you have any questions or disagree with any of the information above, please reach out and provide that feedback.
