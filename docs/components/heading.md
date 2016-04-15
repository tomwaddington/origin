---
categories: components
layout: page
scss-filename: _heading.scss
title: Heading
---

The Heading component provides a scale of headings that can be applied to any element, creating consistency and avoiding inheritance issues that come with targeting bare HTML elements.

Separating the structure and presentation of headings like is extremely useful. For example, if a heading should structurally be an `h2` but we want it to appear small, we can simply use the `Heading--small` class. We get the desired presentation, but retain the correct semantic structure.

* Include a table of contents
{:toc}


## How to use
1. Apply a base `Heading` class and a `Heading--size` modifier class to any HTML element, where `size` equals any of `xx-large`, `x-large`, `large`, `default`, `small`, `x-small`, or `xx-small`, as [listed below](#sizes).
2. Optionally apply any other [color](#colors), [font](#fonts), [spacing](#spacing), or [weight](#weights) modifier classes to achieve whatever effect you need. List classes in alphabetical order.

### Examples
{% example html %}
<h2 class="Heading Heading--xx-large">
  XX-Large Heading
</h2>
{% endexample %}

{% example html %}
<h3 class="Heading Heading--large Heading--space--xx-small">
  Large Heading With XX-Small Spacing
</h3>
{% endexample %}

{% example html %}
<h3 class="Heading Heading--color--x-light Heading--weight--light Heading--x-large">
  X-Large Heading With X-Light-Color XX-Light-Weight
</h3>
{% endexample %}

{% example html %}
<h3 class="Heading Heading--font--editorial Heading--weight--normal Heading--x-large">
  X-Large Editorial Normal Weight Heading
</h3>
{% endexample %}

## Mixin
The Heading component can be integrated into stylesheets for other components and layouts using the `Heading` mixin.

The mixin accepts `color`, `font-family`, `font-size`, `font-weight`, and `margin-bottom` arguments with values sourced from our [utility values]({{ site.github.repo }}/blob/master/assets/scss/global/utilities/_utility-values.scss). Arguments must be declared in alphabetical order to work properly.

### Examples
<div class="DocsExample DocsExample--renderHidden">
{% example scss %}
@include Heading(small);
@include Heading(xx-large);
@include Heading(fa-blue--xx-dark, large);
@include Heading(editorial, x-large, large);
@include Heading(fa-green, editorial, small);
@include Heading(legacy, large);
@include Heading(fa-blue, editorial, xx-large, semi-bold, default);
{% endexample %}
</div>

## Default settings for projects
We use different default colors, fonts, and weights for headings in different projects. We could just override our global defaults when required, but continually doing so would be painful.

Instead we can define default settings for projects by editing the contents of [_heading-settings.scss]({{ site.github.repo }}/blob/master/assets/scss/local/fonts/_heading-settings.scss).

This file exists locally for projects, so changing it wont't affect the Origin repo.


## Sizes
These size examples show both HTML and CSS mixin implementations.  
<div class="DocsExample DocsExample--adjacentExample">
{% example html %}
<h1 class="Heading Heading--xx-large">Heading xx-large</h1>
<span class="Heading Heading--xx-large">Heading xx-large</span>
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
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

<div class="DocsExample DocsExample--renderHidden">
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

<div class="DocsExample DocsExample--renderHidden">
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

<div class="DocsExample DocsExample--renderHidden">
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

<div class="DocsExample DocsExample--renderHidden">
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

<div class="DocsExample DocsExample--renderHidden">
{% example scss %}
.MyElement {
  @include Heading(xx-small);
}
{% endexample %}
</div>


## Colors
If you need a color or shade outside of this selection, you can use a utility class (e.g. `u-text-color--fa-blue`) from our list of [text color values]({{ site.github.repo }}/blob/master/assets/scss/global/utilities/_utility-values.scss) — only if there are only 1 or 2 instances of the heading color in whatever you're working on.

If you want to set an alternative default heading color for your whole project, do so in your local copy of [_heading-settings.scss]({{ site.github.repo }}/blob/master/assets/scss/local/fonts/_heading-settings.scss).

{% example html %}
<h2 class="Heading Heading--color--dark Heading--x-large">
  Dark Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--color--default Heading--x-large">
  Default Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--color--light Heading--x-large">
  Light Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--color--x-light Heading--x-large">
  X-Light Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--color--xx-light Heading--x-large">
  XX-Light Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--color--negative Heading--x-large">
  Negative Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--color--positive Heading--x-large">
  Positive Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--color--warning Heading--x-large">
  Warning Heading
</h2>
{% endexample %}


## Fonts
The `Heading--font--default` class isn't required if you're already using the default font for headings. Only if you're using an alternate font and want to override it.
{% example html %}
<h2 class="Heading Heading--font--default Heading--x-large">
  Default Font Heading
</h2>
{% endexample %}

We automatically include `@include font-weight(normal)` as part of the `Heading--font--editorial` class as we don't use the bold weight of our editorial typeface.
{% example html %}
<h2 class="Heading Heading--font--editorial Heading--x-large">
  Editorial Font Heading
</h2>
{% endexample %}

Our legacy typeface is still used in a selection of application contexts, including desktop and mobile web. We'll remove it eventually, but until then it'll be available as part of the Heading component.
{% example html %}
<h2 class="Heading Heading--font--legacy Heading--x-large">
  Legacy Font Heading
</h2>
{% endexample %}


## Spacing
The Heading component doesn't have any margin by default, so it's very flexible. But we'll often want to add space between it and an adjacent element. We can use a set of spacing classes to do so.

{% example html %}
<h3 class="Heading Heading--large Heading--space--xx-small">
  Heading With XX-Small Spacing
</h3>
<p>The Heading component doesn't have any margin by default, so it's very flexible. But we'll often want to add space between it and an adjacent element. We can use a set of spacing classes to do so.</p>
{% endexample %}

{% example html %}
<h3 class="Heading Heading--large Heading--space--x-small">
  Heading With X-Small Spacing
</h3>
<p>The Heading component doesn't have any margin by default, so it's very flexible. But we'll often want to add space between it and an adjacent element. We can use a set of spacing classes to do so.</p>
{% endexample %}

{% example html %}
<h3 class="Heading Heading--large Heading--space--small">
  Heading With Small Spacing
</h3>
<p>The Heading component doesn't have any margin by default, so it's very flexible. But we'll often want to add space between it and an adjacent element. We can use a set of spacing classes to do so.</p>
{% endexample %}

{% example html %}
<h3 class="Heading Heading--large Heading--space--default">
  Heading With Default Spacing
</h3>
<p>The Heading component doesn't have any margin by default, so it's very flexible. But we'll often want to add space between it and an adjacent element. We can use a set of spacing classes to do so.</p>
{% endexample %}

{% example html %}
<h3 class="Heading Heading--large Heading--space--large">
  Heading With Large Spacing
</h3>
<p>The Heading component doesn't have any margin by default, so it's very flexible. But we'll often want to add space between it and an adjacent element. We can use a set of spacing classes to do so.</p>
{% endexample %}


## Underlines
When further distinction is required between a heading and the content below and underline can be applied. An example of this would be the [glossary index listings](http://www.freeagent.com/glossary).
{% example html %}
<h2 class="Heading Heading--weight--bold Heading--underlined">
  Heading With Underline
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading-weight--bold Heading--underlined--light">
  Heading With Light Underline
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--bold Heading--underlined--dark">
  Heading With Dark Underline;
</h2>
{% endexample %}


## Weights
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
<h2 class="Heading Heading--weight--semi-bold Heading--x-large">
  Semi-bold Weight Heading
</h2>
{% endexample %}

{% example html %}
<h2 class="Heading Heading--weight--bold Heading--x-large">
  Bold Weight Heading
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
