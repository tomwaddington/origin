---
categories: utilities
layout: page
scss-filename: _padding.scss
title: padding
---
Our `padding` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `padding` Sass mixin, or using `u-padding--#` utility classes in HTML.

Using the Sass mixin is preferred, as it forces us to consider all objects as [components]({{ site.baseurl }}/guidance/components). Applying utility classes in HTML enforces `!important`, as they're intended to be immutable — applying one property and value no matter what.

Rules can optionally be triggered only at certain `@media` breakpoints. There's also a larger numerical scale of values available through the mixin, though these should rarely be needed.


### Examples

Applies default padding to all four sides of an element

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include padding(default);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding--default"></div>
{% endexample %}
</div>


Applies large padding to left side only

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include padding-left(large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding-left--large"></div>
{% endexample %}
</div>


Shorthand; applies default padding to top and bottom, and large padding to left and right

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include padding(default large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding-top--default u-padding-right--large u-padding-bottom--default u-padding-left--large"></div>
{% endexample %}
</div>


Applies small padding to bottom side at our medium breakpoint

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include break(md) {
  @include padding-bottom(small);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-md-padding-bottom--small"></div>
{% endexample %}
</div>


Shorthand; applies different paddings to all four sides

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include padding(default large x-large xx-small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding-top--default u-padding-right--large u-padding-bottom--x-large u-padding-left--xx-small"></div>
{% endexample %}
</div>


Shorthand; applies `!important`

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include padding(x-large, !important);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding--x-large"></div>
{% endexample %}
</div>


Applies very large padding from full numeric scale.  
There are no utility classes generated for the full numeric scale because in practice they've never been required.

<div class="DocsExample DocsExample--render--hidden">
{% example scss %}
@include padding(14);
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
@include padding(default);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding--default"></div>
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
@include padding(xx-small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding--xx-small"></div>
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
@include padding(x-small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding--x-small"></div>
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
@include padding(small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding--small"></div>
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
@include padding(large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding--large"></div>
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
@include padding(x-large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding--x-large"></div>
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
@include padding(xx-large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-padding--xx-large"></div>
{% endexample %}
</div>



## Media queries
`padding` values can selectively only be applied when certain `min-width` viewport breakpoints are triggered.

This example uses the large `lg` breakpoint, but other options include small `sm`, medium `md`, x-large `x-lg`, and xx-large `xx-lg`.

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--5-lg">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include break(lg) {
  @include padding(default);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-lg-padding--default"></div>
{% endexample %}
</div>



## Full scale visual reference
Our full scale of `padding` values is numerical. They can only be applied using the `padding` Sass mixin, because in practice we've never needed HTML classes for them. Generating the classes would only add unnecessary weight to our stylesheets.

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--1">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(1);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--2">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(2);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--3">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(3);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--4">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(4);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--5">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(5);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--6">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(6);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--7">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(7);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--8">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(8);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--9">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(9);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--10">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(10);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--11">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(11);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--12">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(12);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--13">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(13);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--14">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(14);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--15">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(15);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--16">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(16);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--17">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
@include padding(17);
{% endexample %}
</div>
