---
categories: utilities
layout: page
scss-filename: _flex-wrap.scss
title: flex-wrap
---
Mixin and utility classes to apply `flex-wrap` values.

The `flex-wrap` property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.

[http://w3.org/tr/css3-flexbox/#flex-wrap-property](http://w3.org/tr/css3-flexbox/#flex-wrap-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `nowrap` (default)
* `wrap`
* `wrap-reverse`

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-wrap--nowrap">
  <div class="u-background-color--gray-15">The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.</div>
  <div class="u-background-color--gray-12">The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.</div>
  <div class="u-background-color--gray-10">The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
  @include flex-wrap(nowrap);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-wrap--wrap">
  <div class="u-background-color--gray-15">The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.</div>
  <div class="u-background-color--gray-12">The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.</div>
  <div class="u-background-color--gray-10">The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
  @include flex-wrap(wrap);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-wrap--wrap-reverse">
  <div class="u-background-color--gray-15">The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.</div>
  <div class="u-background-color--gray-12">The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.</div>
  <div class="u-background-color--gray-10">The flex-wrap property controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
  @include flex-wrap(wrap-reverse);
}
{% endexample %}
</div>
