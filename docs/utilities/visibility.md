---
categories: utilities
layout: page
scss-filename: _visibility.scss
title: visibility
---
Apply `visibility` values with utility classes. Values can optionally be applied only at specific [breakpoints]({{ site.baseurl }}/utilities/breakpoint).

### Values
* `collapse`
* `hidden`
* `inherit`
* `visible`

### Examples
{% example html %}
<div class="u-visibility--hidden">
  This content is hidden but maintains its rendered dimensions
</div>
{% endexample %}


<div class="DocsExample DocsExample--grouped">
{% example html %}
<div class="u-visibility--hidden u-md-visibility--visible">
  This content is hidden by default, but becomes visible at the medium breakpoint
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  visibility: hidden;

  @include break(md) {
    visibility: visible;
  }
}
{% endexample %}
</div>


{% example html %}
<div class="u-visibility--visible">
  This content would override any inherited `visibility: hidden` rule  
</div>
{% endexample %}
