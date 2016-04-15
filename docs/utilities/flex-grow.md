---
categories: utilities
layout: page
scss-filename: _flex-grow.scss
title: flex-grow
---
Use to apply `flex-grow` values with our mixin and utility classes.

The `flex-grow` property determines how much a flex item will grow — _relative_ to the rest of the flex items in a flex container. Flex items will only grow if there's positively distributed free space in the flex container. Negative numbers are invalid.

[http://w3.org/tr/css3-flexbox/#flex-grow-property](http://w3.org/tr/css3-flexbox/#flex-grow-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `0` (default)
* `<number>`
* `0` to `10` for use in utility classes

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-15 u-flex-grow--2">Flex item one</div>
  <div class="u-background-color--gray-13 u-flex-grow--6">Flex item two</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-childOne {
  @include flex-grow(2);
}

.MyComponent-childTwo {
  @include flex-grow(6);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-15">Flex item one</div>
  <div class="u-background-color--gray-13 u-flex-grow--2">Flex item two</div>
  <div class="u-background-color--gray-12 u-flex-grow--1">Flex item three</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-childTwo {
  @include flex-grow(2);
}

.MyComponent-childThree {
  @include flex-grow(1);
}
{% endexample %}
</div>
