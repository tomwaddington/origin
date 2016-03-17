---
categories: utilities
layout: page
scss-filename: _flex-align-items.scss
title: flex-align-items
---
Mixin and utility classes to apply `align-items` values.

Flex items can be aligned in the cross axis of the current line of the flex container, similar to `justify-content` but in the perpendicular direction. `align-items` sets the default alignment for all of the flex container's items, including anonymous flex items. `align-self` allows this default alignment to be overridden for individual flex items. (For anonymous flex items, `align-self` always matches the value of `align-items` on their associated flex container.)

[http://w3.org/tr/css3-flexbox/#align-items-property](http://w3.org/tr/css3-flexbox/#align-items-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `baseline`
* `center`
* `flex-end`
* `flex-start`
* `stretch` (default)

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-items--baseline">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
  @include flex-align-items(baseline);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-items--center">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
  @include flex-align-items(center);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-items--flex-end">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
  @include flex-align-items(flex-end);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-items--flex-start">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
  @include flex-align-items(flex-start);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-items--stretch">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
  @include flex-align-items(stretch);
}
{% endexample %}
</div>
