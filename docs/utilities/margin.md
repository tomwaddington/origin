---
categories: utilities
layout: page
scss-filename: _margin.scss
title: margin
---
Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.

Using the Sass mixin is preferred, as it forces us to consider all objects as [components]({{ site.baseurl }}/guidance/components). Applying utility classes in HTML enforces `!important`, as they're intended to be immutable — applying one property and value no matter what.

Rules can optionally be triggered only at certain `@media` breakpoints. There's also a larger numerical scale of values available through the mixin, though these should rarely be needed.


### Examples

Applies default margin to all four sides of an element

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include margin(default);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin--default"></div>
{% endexample %}
</div>


Applies large margin to left side only

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include margin-left(large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin-left--large"></div>
{% endexample %}
</div>


Shorthand; applies default margin to top and bottom, and large margin to left and right

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include margin(default large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin-top--default u-margin-right--large u-margin-bottom--default u-margin-left--large"></div>
{% endexample %}
</div>


Applies small margin to bottom side at our medium breakpoint

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include break(md) {
  @include margin-bottom(small);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-md-margin-bottom--small"></div>
{% endexample %}
</div>


Shorthand; applies different margins to all four sides

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include margin(default large x-large xx-small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin-top--default u-margin-right--large u-margin-bottom--x-large u-margin-left--xx-small"></div>
{% endexample %}
</div>


Shorthand; applies `!important`

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include margin(x-large, !important);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin--x-large"></div>
{% endexample %}
</div>


Applies very large margin from full numeric scale.  
There are no utility classes generated for the full numeric scale because in practice they've never been required.

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
@include margin(14);
{% endexample %}
</div>


## Standard scale visual reference

### Default
<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--5">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(default);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin--default"></div>
{% endexample %}
</div>


### XX-Small
<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--1">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(xx-small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin--xx-small"></div>
{% endexample %}
</div>


### X-Small
<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--2">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(x-small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin--x-small"></div>
{% endexample %}
</div>


### Small
<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--3">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin--small"></div>
{% endexample %}
</div>


### Large
<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--7">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin--large"></div>
{% endexample %}
</div>


### X-Large
<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--9">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(x-large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin--x-large"></div>
{% endexample %}
</div>


### XX-Large
<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--13">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(xx-large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-margin--xx-large"></div>
{% endexample %}
</div>



## Media queries
`margin` values can selectively only be applied when certain `min-width` viewport breakpoints are triggered.

This example uses the large `lg` breakpoint, but other options include small `sm`, medium `md`, x-large `x-lg`, and xx-large `xx-lg`.

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--5-lg">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include break(lg) {
  @include margin(default);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-lg-margin--default"></div>
{% endexample %}
</div>



## Full scale visual reference
Our full scale of `margin` values is numerical. They can only be applied using the `margin` Sass mixin, because in practice we've never needed HTML classes for them. Generating the classes would only add unnecessary weight to our stylesheets.

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--1">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(1);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--2">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(2);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--3">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(3);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--4">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(4);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--5">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(5);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--6">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(6);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--7">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(7);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--8">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(8);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--9">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(9);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--10">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(10);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--11">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(11);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--12">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(12);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--13">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(13);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--14">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(14);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--15">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(15);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--16">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(16);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--17">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include margin(17);
{% endexample %}
</div>
