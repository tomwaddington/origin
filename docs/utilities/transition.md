---
categories: utilities
layout: page
scss-filename: _transition.scss
title: transition
---
Apply `transition` values with a mixin.

Related: [animation]({{ site.baseurl }}/utilities/animation)

Arguments for `transition` are optional. When none are defined, values fall back to our global defaults as defined in [`_animation.scss`]({{ site.github.repo }}/tree/master/assets/scss/global/utilities/utilities/_animation.scss)

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
  @include transition([transition-property], [transition-duration], [transition-timing-function], [transition-delay]);
{% endexample %}
</div>

### Examples


<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--transition DocsExample-preview--transition1">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleTransitionElement">
        &nbsp;
      </div>
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include transition;
}

.MyComponentParent:hover {
  @include transform(scale(1.5) translate3d(200%, 0, 0));
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--transition DocsExample-preview--transition2">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleTransitionElement">
        &nbsp;
      </div>
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include transition(all, 1s, ease);
}

.MyComponentParent:hover {
  @include transform(scale(1.5) translate3d(200%, 0, 0));
}
{% endexample %}
</div>
