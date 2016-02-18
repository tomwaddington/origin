---
categories: utilities
layout: page
scss-filename: _flex-basis.scss
title: flex-basis
---
Mixin and utility classes to apply `flex-basis` values.

The `flex-basis` property sets the flex basis. Negative lengths are invalid.

[http://www.w3.org/TR/css3-flexbox/#flex-basis-property](http://www.w3.org/TR/css3-flexbox/#flex-basis-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `0`
* `auto` (default)
* `content`
* Any `width` unit (e.g. `20%`)
* `20percent`
* `25percent`
* `third`
* `40percent`
* `50percent`
* `60percent`
* `two-thirds`
* `75percent`
* `80percent`
* `100percent`

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-12 u-flex-basis--25percent">Flex item</div>
  <div class="u-background-color--gray-14 u-flex-basis--75percent">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-basis(25percent);
}

.MyComponent-otherChild {
  @include flex-basis(75percent);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-15 u-flex-basis--third">Flex item</div>
  <div class="u-background-color--gray-13 u-flex-basis--third">Flex item</div>
  <div class="u-background-color--gray-12 u-flex-basis--third">Flex item</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-basis(third);
}

.MyComponent-otherChild {
  @include flex-basis(third);
}

.MyComponent-anotherChild {
  @include flex-basis(third);
}
{% endexample %}
</div>
