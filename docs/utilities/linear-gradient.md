---
categories: utilities
layout: page
scss-filename: _linear-gradient.scss
title: linear-gradient
---
Use to apply `linear-gradient` values with our mixin.

Lifted directly from [Bourbon](http://bourbon.io/docs/#linear-gradient). Gradient position is optional. Position can be a degree (`90deg`). Mixin supports up to 10 color-stops.

This mixin will output a fallback `background-color: #first-color;` declaration. A `$fallback` argument can be passed to change the fallback color.

### Examples
<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--linear-gradient DocsExample-preview--linear-gradient1">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include linear-gradient($color--fa-blue, $color--fa-dark-blue);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--linear-gradient DocsExample-preview--linear-gradient2">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include linear-gradient(to top, $color--fa-blue, $color--fa-blue--x-dark);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--linear-gradient DocsExample-preview--linear-gradient3">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include linear-gradient(45deg, $color--fa-yellow, $color--fa-amber, $fallback: $color--fa-amber);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--linear-gradient DocsExample-preview--linear-gradient4">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include linear-gradient($color--fa-blue 0%, $color--fa-blue--dark 50%, $color--fa-blue--xx-dark 51%, $color--fa-blue--dark 100%);
}
{% endexample %}
</div>
