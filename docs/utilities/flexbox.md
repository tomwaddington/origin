---
categories: utilities
layout: page
scss-filename: _flexbox.scss
title: flexbox
---
Use to apply `flex` and `inline-flex` values with our mixin and utility classes.

The `flex` value causes an element to generate a block-level flex. The `inline-flex` value causes an element to generate a inline-level flex container box.

[http://w3.org/tr/css3-flexbox/#flex-containers](http://w3.org/tr/css3-flexbox/#flex-containers)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `flex` (default, argument not required)
* `inline-flex`

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-flexbox"></div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox;
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-inline-flexbox"></div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include flexbox(inline-flex);
}
{% endexample %}
</div>
