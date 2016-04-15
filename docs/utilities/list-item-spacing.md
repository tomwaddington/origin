---
categories: utilities
layout: page
scss-filename: _list-item-spacing.scss
title: list-item-spacing
---
The `list-item-spacing` utility lets us control the space between list items.

### Values
* `tight`
* `default`
* `loose`
* `x-loose`
* `xx-loose`

### Examples

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<ul class="u-list-item-spacing--default">
  <li>Default list item spacing</li>
  <li>Default list item spacing</li>
  <li>Default list item spacing</li>
</ul>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyList li {
  @include list-item-spacing(default);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<ul class="u-list-item-spacing--tight">
  <li>Tight list item spacing</li>
  <li>Tight list item spacing</li>
  <li>Tight list item spacing</li>
</ul>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyList li {
  @include list-item-spacing(tight);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<ul class="u-list-item-spacing--loose">
  <li>Loose list item spacing</li>
  <li>Loose list item spacing</li>
  <li>Loose list item spacing</li>
</ul>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyList li {
  @include list-item-spacing(loose);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<ul class="u-list-item-spacing--x-loose">
  <li>Extra loose list item spacing</li>
  <li>Extra loose list item spacing</li>
  <li>Extra loose list item spacing</li>
</ul>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyList li {
  @include list-item-spacing(x-loose);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<ul class="u-list-item-spacing--xx-loose">
  <li>Extra extra loose list item spacing</li>
  <li>Extra extra loose list item spacing</li>
  <li>Extra extra loose list item spacing</li>
</ul>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyList li {
  @include list-item-spacing(xx-loose);
}
{% endexample %}
</div>
