---
categories: utilities
layout: page
scss-filename: _flex-align-self.scss
title: flex-align-self
---
Mixin and utility classes to apply `align-self` values.

Flex items can be aligned in the cross axis of the current line of the flex container, similar to `justify-content` but in the perpendicular direction. `align-items` sets the default alignment for all of the flex container's items, including anonymous flex items. `align-self` allows this default alignment to be overridden for individual flex items. (For anonymous flex items, `align-self` always matches the value of `align-items` on their associated flex container.)

[http://www.w3.org/TR/css3-flexbox/#align-items-property](http://www.w3.org/TR/css3-flexbox/#align-items-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `auto` (default)
* `baseline`
* `center`
* `flex-end`
* `flex-start`
* `stretch`

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12 u-flex-align-self--auto">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-align-self(auto);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12 u-flex-align-self--baseline">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-align-self(baseline);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12 u-flex-align-self--center">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-align-self(center);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12 u-flex-align-self--flex-end">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-align-self(flex-end);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12 u-flex-align-self--flex-start">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-align-self(flex-start);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-14">Flex item</div>
  <div class="u-background-color--gray-12 u-flex-align-self--stretch">Flex item</div>
  <div class="u-background-color--gray-13">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-align-self(stretch);
}
{% endexample %}
</div>
