---
categories: utilities
layout: page
scss-filename: _breakpoint.scss
title: breakpoint
---
The `breakpoint` utility uses a `@media` query to apply CSS rules only when particular `min-width` values are met.

Break points should normally be reserved for when content ‘breaks’ (the clue is in the name). But we want some sensible defaults to use for making broad stroke changes to some of our utilities:  

* [`display`]({{ site.baseurl }}/utilities/display)
* [`float`]({{ site.baseurl }}/utilities/float)
* [`font-size`]({{ site.baseurl }}/utilities/font-size)
* [`line-height`]({{ site.baseurl }}/utilities/line-height)
* [`margin`]({{ site.baseurl }}/utilities/margin)
* [`padding`]({{ site.baseurl }}/utilities/padding)

### Examples

Turning a small `padding` into extra large at the medium breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--small u-md-padding--x-large">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(small);

  @include break(md) {
    @include padding(x-large);
  }
}
{% endexample %}
</div>


Increase font size at the large breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-size--small u-lg-font-size--large">
  I will magically get large at the large breakpoint
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-size(small);

  @include break(lg) {
    @include font-size(large);
  }
}
{% endexample %}
</div>


Hide an element until the large breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-display--none u-lg-display--block">
  I will magically appear at the large breakpoint
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  display: none;

  @include break(lg) {
    display: block;
  }
}
{% endexample %}
</div>


Float an element to the right at the extra large breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-floatContainer">
  <div class="u-x-lg-float--right">
    I will magically float to the right the large breakpoint
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponentParent {
  @include floatContainer;
}

.MyComponent {
  @include break(x-lg) {
    float: right;
  }
}
{% endexample %}
</div>
