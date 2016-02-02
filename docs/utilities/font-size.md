---
categories: utilities
layout: page
scss-filename: _font-size.scss
title: font-size
---
Our `font-size` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `font-size` Sass mixin, or using `u-font-size--#` utility classes in HTML.

Using the Sass mixin is preferred, as it forces us to consider all objects as [components]({{ site.baseurl }}/guidance/components). Applying utility classes in HTML enforces `!important`, as they're intended to be immutable — applying one property and value no matter what.

Rules can optionally be triggered only at certain `@media` breakpoints. There's also a larger numerical scale of values available through the mixin, though these should rarely be needed.


### Examples

Applies default `font-size`

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include font-size(default);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-font-size--default"></div>
{% endexample %}
</div>


Applies extra large `font-size` at large [breakpoint]({{ site.baseurl }}/utilities/breakpoint)

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include break(lg) {
  @include font-size(x-large);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-lg-font-size--x-large"></div>
{% endexample %}
</div>


Applies large `font-size` at medium [breakpoint]({{ site.baseurl }}/utilities/breakpoint)

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include break(md) {
  @include font-size(large);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-md-font-size--large"></div>
{% endexample %}
</div>


Applies small `font-size`, including `!important`

<div class="DocsExample DocsExample--render--hidden DocsExample--render--hidden--grouped">
{% example scss %}
@include break(md) {
  @include font-size(small, !important);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
{% example html %}
<div class="u-font-size--small"></div>
{% endexample %}
</div>


## Standard scale visual reference

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--3">
      <strong>xx-small; size 3</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(xx-small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--4">
      <strong>x-small; size 4</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(x-small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--5">
      <strong>small; size 5</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(small);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--6">
      <strong>default; size 6</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(default);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--7">
      <strong>large; size 7</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--8">
      <strong>x-large; size 8</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way.
    </p>
  </div>
{% example scss %}
@include font-size(x-large);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--10">
      <strong>xx-large; size 10</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
    </p>
  </div>
{% example scss %}
@include font-size(xx-large);
@include line-height(tight);
{% endexample %}
</div>



## Media queries
`font-size` values can selectively only be applied when certain `min-width` viewport breakpoints are triggered.

This example uses the large `lg` breakpoint, but other options include small `sm`, medium `md`, x-large `x-lg`, and xx-large `xx-lg`.

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--7-lg">
      <strong>large; size 7</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include break(lg) {
  @include font-size(large);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--7-lg">
      <strong>large; size 7</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example html %}
<div class="u-lg-font-size--large">
  <strong>large; size 7</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>



## Full scale visual reference

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--1">
      <strong>Size 1</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
  {% example scss %}
  @include font-size(1);
  {% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--2">
      <strong>Size 2</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(2);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--3">
      <strong>Size 3; xx-small</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(3);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--4">
      <strong>Size 4; x-small</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(4);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--5">
      <strong>Size 5; small</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(5);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--6">
      <strong>Size 6; default</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(6);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--7">
      <strong>Size 7; large</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
@include font-size(7);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--8">
      <strong>Size 8; x-large</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way.
    </p>
  </div>
{% example scss %}
@include font-size(8);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--9">
      <strong>Size 9</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier.
    </p>
  </div>
{% example scss %}
@include font-size(9);
@include line-height(tight);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--10">
      <strong>Size 10; xx-large</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
    </p>
  </div>
{% example scss %}
@include font-size(10);
@include line-height(tight);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--11">
      <strong>Size 11</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
    </p>
  </div>
{% example scss %}
@include font-size(11);
@include line-height(x-tight);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--12">
      <strong>Size 12</strong>. FreeAgent is a company born out of the frustration that business finances are just too damn hard.
    </p>
  </div>
{% example scss %}
@include font-size(12);
@include line-height(xx-tight);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--13">
      <strong>Size 13</strong>. Business finances are just too damn hard.
    </p>
  </div>
{% example scss %}
@include font-size(13);
@include line-height(xx-tight);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--14">
      <strong>Size 14</strong>. Business finances are just too damn hard.
    </p>
  </div>
{% example scss %}
@include font-size(14);
@include line-height(xx-tight);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--15">
      <strong>Size 15</strong>. Business finances.
    </p>
  </div>
{% example scss %}
@include font-size(15);
@include line-height(xx-tight);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--16">
      <strong>Size 16</strong>. Business finances.
    </p>
  </div>
{% example scss %}
@include font-size(16);
@include line-height(xx-tight);
{% endexample %}
</div>

<div class="DocsExample DocsExample--render--hidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--17">
      <strong>Size 17</strong>. Business.
    </p>
  </div>
{% example scss %}
@include font-size(17);
@include line-height(xx-tight);
{% endexample %}
</div>
