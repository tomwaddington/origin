---
layout: page
title: Heading
---

The heading component gives us a standard scale of heading sizes that can be applied to any text element, independent of semantics.

This separation is particularly useful when a heading should (semantically speaking) be an `h2`, but we want the heading to appear small, in which case we can just apply the `Heading--small` class to it.   

{% example html %}
<h1 class="Heading Heading--xx-large">Heading xx-large</h1>
<span class="Heading Heading--xx-large">Heading xx-large</span>

<h2 class="Heading Heading--x-large">Heading x-large</h2>
<span class="Heading Heading--x-large">Heading x-large</span>

<h3 class="Heading Heading--large">Heading large</h3>
<span class="Heading Heading--large">Heading large</span>

<h4 class="Heading Heading--small">Heading small</h4>
<span class="Heading Heading--small">Heading small</span>

<h5 class="Heading Heading--x-small">Heading x-small</h5>
<span class="Heading Heading--x-small">Heading x-small</span>

<h6 class="Heading Heading--xx-small">Heading xx-small</h6>
<span class="Heading Heading--xx-small">Heading xx-small</span>
{% endexample %}
