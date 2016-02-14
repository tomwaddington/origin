---
categories: utilities
layout: page
scss-filename: _transition.scss
title: transition
---
Apply `transition` values with a mixin.

Related: [animation]({{ site.baseurl }}/utilities/animation)

Arguments for `transition` are optional. `property`, `duration`, and `timing-function` come from our global defaults defined in [`_utility-values.scss`]({{ site.github.repo }}/tree/master/assets/scss/global/utilities/_utility-values.scss).

### Format
<div class="DocsExample DocsExample--renderHidden">
{% example scss %}
  @include transition(
    [property],
    [duration],
    [timing-function],
    [delay]
  );
{% endexample %}
</div>

Related: [transition]({{ site.baseurl }}/utilities/transition)


### Examples

<div class="DocsExample DocsExample--renderHidden">
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
  @include transform(
    scale(1.5) translate3d(200%, 0, 0)
  );
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--transition DocsExample-preview--transition2">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleTransitionElement">
        &nbsp;
      </div>
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include transition(
    all,
    1s,
    ease
  );
}

.MyComponentParent:hover {
  @include transform(
    scale(1.5) translate3d(200%, 0, 0)
  );
}
{% endexample %}
</div>
