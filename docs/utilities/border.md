---
categories: utilities
layout: page
scss-filename: _border.scss
title: border
---
Use to apply or remove `border` using our scale of values. Can be used on all sides of an element, or only select sides.

All colors used in the [`background` utility]({{ site.baseurl }}/utilities/background) are available as part of `border`.

Utility classes don't get fully work for `border`. See the assigned [GitHub Issue](https://github.com/fac/fa-css-utilities/issues/25).

### Values
* `0`
* `thin` (`0.5px`)
* `default` (`1px`)
* `thick` (`2px`)
* `x-thick` (`3px`)
* `xx-thick` (`4px`)

### Examples
<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--border DocsExample-preview--border1">
    <div class="DocsExample-preview-child">
      Default weight blue border on every side
    </div>
  </div>
{% example scss %}
@include border(default, fa-blue);
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--border DocsExample-preview--border2">
    <div class="DocsExample-preview-child">
      Thick gray border on the bottom
    </div>
  </div>
{% example scss %}
@include border-bottom(thick, gray-12);
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--border DocsExample-preview--border3">
    <div class="DocsExample-preview-child">
      XX-thick green border on the left applied with extra `!important`
    </div>
  </div>
{% example scss %}
@include border-left(xx-thick, fa-green, !important);
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--border DocsExample-preview--border4">
    <div class="DocsExample-preview-child">
      XX-thick green border on the left
    </div>
  </div>
{% example scss %}
@include border-left(thin, gray-14);
@include border-right(thin, gray-14);
{% endexample %}
</div>

Note that `thin`/`0.5px` doesn't yet work reliably in all browsers. However, we use it for FreeAgent Mobile on Safari on iOS, where it works fine.  
