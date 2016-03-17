---
categories: utilities
layout: page
scss-filename: _flex-justify-content.scss
title: flex-justify-content
---
Mixin and utility classes to apply `justify-content` values.

The `justify-content` property aligns flex items along the main axis of the current line of the flex container. This is done after any flexible lengths and any auto margins have been resolved. Typically it helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

[http://w3.org/tr/css3-flexbox/#justify-content-property](http://w3.org/tr/css3-flexbox/#justify-content-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `center`
* `flex-end`
* `flex-start` (default)
* `space-around`
* `space-between`

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-justify-content--center">
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
  @include flex-justify-content(center);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-justify-content--flex-end">
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
  @include flex-justify-content(flex-end);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-justify-content--flex-start">
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
  @include flex-justify-content(flex-start);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-justify-content--space-around">
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
  @include flex-justify-content(space-around);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-justify-content--space-between">
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
  @include flex-justify-content(space-between);
}
{% endexample %}
</div>
