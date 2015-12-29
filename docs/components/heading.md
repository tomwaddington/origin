---
layout: page
title: Heading
---

The Heading component provides a scale of headings that can be applied to _any_ element, creating consistency and avoiding inheritance issues that come with targeting bare HTML elements.

* Include a table of contents
{:toc}

Separating the structure and presentation of headings like is extremely useful. For example, if a heading should structurally be an `h2` but we want it to appear small, we can simply use the `Heading--small` class. We get the desired presentation, but retain the correct semantic structure.

## Settings
We use different colors, fonts, and weights for headings in different applications and contexts. The default for these can be changed on a per-project basis in [_heading-settings.scss](https://github.com/fac/origin/blob/master/assets/scss/local/fonts/_font-settings.scss). 

The Heading mixin accepts `color`, `font-family`, `font-size`, and `font-weight` arguments (which must be declared in alphabetical order), with values all sourced from our [utility aliases](https://github.com/fac/fa-css-utilities/blob/master/_utility-aliases.scss). Styles can also be applied using classes directly in HTML.

The `Heading` class should _not_ be used on its own — it simply resets an element to common defaults.


## Sizes
<div class="DocsExample DocsExample--adjacentExample">
{% example html %}
<h1 class="Heading Heading--xx-large">Heading xx-large</h1>
<span class="Heading Heading--xx-large">Heading xx-large</span>
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
.MyElement {
  @include Heading(xx-large);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--adjacentExample">
{% example html %}
<h2 class="Heading Heading--x-large">Heading x-large</h2>
<span class="Heading Heading--x-large">Heading x-large</span>
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
.MyElement {
  @include Heading(x-large);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--adjacentExample">
{% example html %}
<h3 class="Heading Heading--large">Heading large</h3>
<span class="Heading Heading--large">Heading large</span>
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
.MyElement {
  @include Heading(large);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--adjacentExample">
{% example html %}
<h4 class="Heading Heading--small">Heading small</h4>
<span class="Heading Heading--small">Heading small</span>
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
.MyElement {
  @include Heading(small);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--adjacentExample">
{% example html %}
<h5 class="Heading Heading--x-small">Heading x-small</h5>
<span class="Heading Heading--x-small">Heading x-small</span>
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
.MyElement {
  @include Heading(x-small);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--adjacentExample">
{% example html %}
<h6 class="Heading Heading--xx-small">Heading xx-small</h6>
<span class="Heading Heading--xx-small">Heading xx-small</span>
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
.MyElement {
  @include Heading(xx-small);
}
{% endexample %}
</div>


## Colors
{% example html %}
<h2 class="Heading Heading--dark Heading--x-large">
  Dark Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--default Heading--x-large">
  Default Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--light Heading--x-large">
  Light Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--x-light Heading--x-large">
  X-Light Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--xx-light Heading--x-large">
  XX-Light Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--negative Heading--x-large">
  Negative Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--positive Heading--x-large">
  Positive Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--warning Heading--x-large">
  Warning Heading
</h2>
{% endexample %}


## Fonts
{% example html %}
<h2 class="Heading Heading--editorial Heading--weight--normal Heading--x-large">
  Editorial Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--legacy Heading--x-large">
  Legacy Heading
</h2>
{% endexample %}


## Weights
{% example html %}
<h2 class="Heading Heading--weight--thin Heading--x-large">
  Thin Weight Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--x-light Heading--x-large">
  X-Light Weight Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--light Heading--x-large">
  Light Weight Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--normal Heading--x-large">
  Normal Weight Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--medium Heading--x-large">
  Medium Weight Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--semi-bold Heading--x-large">
  Semi-bold Weight Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--bold Heading--x-large">
  Bold Weight Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--x-bold Heading--x-large">
  X-Bold Weight Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--black Heading--x-large">
  Black Weight Heading
</h2>
{% endexample %}


## Editorial spacing
By default, the `Heading` component has no margins other than a small `margin-bottom`. Being so unopinionated means it can be used in a multitude of contexts without alteration.

But when we're writing editorial content like articles and blog posts, we want headings to be spaced sympathetically. Spacing that improves the reading experience, but also doesn't require us to add classes to every single heading. By wrapping editorial content in a `l-editorial` container, that's what we get.

{% example html %}
<div class="l-editorial">
  <h1>Heading one</h1>
  <p>Spacing between paragraphs and headings in editorial content should be comfortable without having to add classes to every heading.</p>

  <h2>Heading two</h2>
  <p>Spacing between paragraphs and headings in editorial content should be comfortable without having to add classes to every heading.</p>

  <h3>Heading three</h3>
  <p>Spacing between paragraphs and headings in editorial content should be comfortable without having to add classes to every heading.</p>

  <h4>Heading four</h4>
  <p>Spacing between paragraphs and headings in editorial content should be comfortable without having to add classes to every heading.</p>

  <h5>Heading five</h5>
  <p>Spacing between paragraphs and headings in editorial content should be comfortable without having to add classes to every heading.</p>

  <h6>Heading six</h6>
  <p>Spacing between paragraphs and headings in editorial content should be comfortable without having to add classes to every heading.</p>
</div>
{% endexample %}
