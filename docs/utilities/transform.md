---
categories: utilities
layout: page
scss-filename: _transform.scss
title: transform
---
Apply `transform`, `rotate`, and `translate3d` values with our mixins.

Related: [transition]({{ site.baseurl }}/utilities/transition)

## rotate

### Examples
<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--transform DocsExample-preview--transform1">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include rotate(15deg);
}
{% endexample %}
</div>


## transform

### Examples
<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--transform DocsExample-preview--transform2">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include transform(translateX(100px) translateY(10px));
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--transform DocsExample-preview--transform3">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include transform(skewX(-20deg));
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--transform DocsExample-preview--transform4">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include transform(scale(1.5) translate3d(200%, 0, 0));
}
{% endexample %}
</div>
