---
categories: utilities
layout: page
scss-filename: _breakpoint.scss
title: breakpoint
---
The `breakpoint` utility uses a media query to apply CSS rules only when particular `min-width` values are met. Values range from `sm` to `xx-lg`.

While the `break` mixin is available everywhere, the breakpoint HTML classes are only available for certain properties; those we've actually needed them for in practice:

* [`display`]({{ site.baseurl }}/utilities/display)
* [`float`]({{ site.baseurl }}/utilities/float)
* [`font-size`]({{ site.baseurl }}/utilities/font-size)
* [`margin`]({{ site.baseurl }}/utilities/margin)
* [`padding`]({{ site.baseurl }}/utilities/padding)

### Examples

Apply more padding to an element at the medium breakpoint

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
.MyComponent {
  @include padding(default);

  @include break(md) {
    @include padding(large);
  }
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<!--
Note that using a utility class inline with a component class is considered a
hack; components should define and control all of their variants/modifications
-->
<div class="MyComponent u-md-padding--large"></div>
{% endexample %}
</div>


Increase font size at the large breakpoint

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
.MyComponent {
  @include font-size(default);

  @include break(lg) {
    @include font-size(x-large);
  }
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="MyComponent u-lg-font-size--x-large"></div>
{% endexample %}
</div>


Hide an element until the large breakpoint

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
.MyComponent {
  display: none;

  @include break(lg) {
    display: block;
  }
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="MyComponent u-lg-display--block"></div>
{% endexample %}
</div>


Float an element to the right at the extra large breakpoint

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
.MyComponent {
  @include break(x-lg) {
    float: right;
  }
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="MyComponent u-x-lg-float--right"></div>
{% endexample %}
</div>
