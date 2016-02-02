---
categories: utilities
layout: page
scss-filename: _animation.scss
title: animation
---
Use to define an animation. If `$length` and `$transition` are not defined, the global defaults (`$transition-length-default` and `$transition-property-default`, respectively) will be used.

### Animation examples
<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
@include animation(fadeInOut, 1s, ease-out, infinite);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
@include animation(ease-out, !important);
{% endexample %}
</div>


### Keyframe examples
<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
@include keyframes(animation-name) {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
{% endexample %}
</div>
