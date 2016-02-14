---
categories: utilities
layout: page
scss-filename: _flex-shrink.scss
title: flex-shrink
---
Use to apply `flex-shrink` values with our mixin and utility classes.

The `flex-shrink` property determines how much a flex item will shrink — _relative_ to the rest of the flex items in a flex container. Flex items will only shrink if there's negatively distributed free space in the flex container. Negative numbers are invalid.

[http://w3.org/tr/css3-flexbox/#flex-shrink-property](http://w3.org/tr/css3-flexbox/#flex-shrink-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `1` (default)
* `<number>`
* `0` to `10` for use in utility classes

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-12 u-flex-shrink--0">Item will not shrink.</div>
  <div class="u-background-color--gray-15">By default, flex items shrink to accommodate other items that contain more content. But despite this flex item having much more content than the other item, the other item won't shrink to help accommodate all of this content. It'll maintain the width of its content, without wrapping.</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-shrink(0);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-flexbox">
  <div class="u-background-color--gray-15">While flex items shrink to accommodate other items that more content by default, we can use `flex-grow` to shrink those flex items to a smaller relative size than the default.</div>
  <div class="u-background-color--gray-13 u-flex-shrink--2">Item will shrink smaller than normal.</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-child {
  @include flex-shrink(2);
}
{% endexample %}
</div>
