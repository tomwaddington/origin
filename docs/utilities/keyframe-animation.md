---
categories: utilities
layout: page
scss-filename: _keyframe-animation.scss
title: keyframe animation
---
Use to define CSS keyframe animations.

Only `name` argument is required. `iteration-count` defaults to `1` and `fill-mode` to `forwards`. `duration` and `timing-function` come from our global defaults defined in [`_utility-values.scss`]({{ site.github.repo }}/tree/master/assets/scss/global/utilities/_utility-values.scss).

### Format
<div class="DocsExample DocsExample--renderHidden">
{% example scss %}
  @include animation(
    [name],
    [duration],
    [iteration-count],
    [direction],
    [timing-function],
    [fill-mode],
    [delay]
  );
{% endexample %}
</div>

Related: [transition]({{ site.baseurl }}/utilities/transition)

### Examples

Basic example; only `name` argument is defined

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--keyframe-animation DocsExample-preview--keyframe-animation1">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleKeyframeElement">
        &nbsp;
      </div>
    </div>
  </div>

{% example scss %}
@include keyframes(exampleAnimation1) {
  0% {
    @include translate3d(0, 0, 0);
  }
  100% {
    @include translate3d(300% ,0 ,0);
  }
}

.MyComponent:hover {
  @include animation(exampleAnimation1);
}
{% endexample %}
</div>


Make the animation repeat infinitely

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--keyframe-animation DocsExample-preview--keyframe-animation2">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleKeyframeElement">
        &nbsp;
      </div>
    </div>
  </div>

{% example scss %}
@include keyframes(exampleAnimation2) {
  0% {
    @include translate3d(0, 0, 0);
  }
  100% {
    @include translate3d(300% ,0 ,0);
  }
}

.MyComponent:hover {
  @include animation(exampleAnimation2, $iteration-count: infinite);
}
{% endexample %}
</div>


Make the animation last for 2s and repeat infinitely

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--keyframe-animation DocsExample-preview--keyframe-animation3">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleKeyframeElement">
        &nbsp;
      </div>
    </div>
  </div>

{% example scss %}
@include keyframes(exampleAnimation3) {
  0% {
    @include translate3d(0, 0, 0);
  }
  100% {
    @include translate3d(300% ,0 ,0);
  }
}

.MyComponent:hover {
  @include animation(exampleAnimation3, 2s, $iteration-count: infinite);
}
{% endexample %}
</div>


Make the animation last for 1s and only occur once

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--keyframe-animation DocsExample-preview--keyframe-animation4">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleKeyframeElement">
        &nbsp;
      </div>
    </div>
  </div>

{% example scss %}
@include keyframes(exampleAnimation4) {
  0% {
    @include translate3d(0, 0, 0);
  }
  100% {
    @include translate3d(300% ,0 ,0);
  }
}

.MyComponent:hover {
  @include animation(exampleAnimation4, 1s, $fill-mode: none);
}
{% endexample %}
</div>


Make the animation last for 0.5s and follow a bespoke cubic bezier `timing-function`

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--keyframe-animation DocsExample-preview--keyframe-animation5">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleKeyframeElement">
        &nbsp;
      </div>
    </div>
  </div>

{% example scss %}
@include keyframes(exampleAnimation5) {
  0% {
    @include translate3d(0, 0, 0);
  }
  100% {
    @include translate3d(300% ,0 ,0);
  }
}

.MyComponent:hover {
  @include animation(exampleAnimation5, 0.5s, $timing-function: cubic-bezier(.17, .67, .83, .67));
}
{% endexample %}
</div>
