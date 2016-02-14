---
categories: utilities
layout: page
scss-filename: _flex-align-content.scss
title: flex-align-content
---
Mixin and utility classes to apply `align-content` values.

The `align-content` property aligns a flex container's lines within the flex container when there is extra space in the cross-axis, similar to how `justify-content` aligns individual items within the main-axis. Note, this property has no effect when the `flexbox` has only a single line.

[http://w3.org/tr/css3-flexbox/#align-content-property](http://w3.org/tr/css3-flexbox/#align-content-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `center`
* `flex-end`
* `flex-start`
* `space-around`
* `space-between`
* `stretch` (default)

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-content--center">
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
  @include flex-align-content(center);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-content--flex-end">
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
  @include flex-align-content(flex-end);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-content--flex-start">
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
  @include flex-align-content(flex-start);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-content--space-around">
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
  @include flex-align-content(space-around);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-content--space-between">
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
  @include flex-align-content(space-between);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox u-flex-align-content--stretch">
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
  @include flex-align-content(stretch);
}
{% endexample %}
</div>
