---
categories: utilities
layout: page
scss-filename: _box-shadow.scss
title: box-shadow
---
Use to apply or remove `box-shadow`.

There aren't yet any utility classes, because in practice we haven't needed them yet. The numeric units and colors aren't yet using values from our scale either, for the same reason.

### Examples
<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--box-shadow DocsExample-preview--box-shadow1">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include box-shadow(0, 1px, 2px, rgba(0, 0, 0, .22));
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--box-shadow DocsExample-preview--box-shadow2">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include box-shadow(0, 1px, 2px, rgba(0, 0, 0, .22), inset);
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--box-shadow DocsExample-preview--box-shadow3">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include box-shadow(0, 2px, 4px, rgba(0, 0, 0, .5), !important);
{% endexample %}
</div>
