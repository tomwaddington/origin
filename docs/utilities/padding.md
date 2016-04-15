---
categories: utilities
layout: page
scss-filename: _padding.scss
title: padding
---
Our `padding` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `padding` Sass mixin, or using `u-padding--#` utility classes in HTML.

Values can optionally be applied only at specific [breakpoints]({{ site.baseurl }}/utilities/breakpoint).

Using the Sass mixin is preferred, as it forces us to consider all objects as [components]({{ site.baseurl }}/guidance/components). Applying utility classes in HTML enforces `!important`, as they're intended to be immutable — applying one property and value no matter what.

There's also a larger numerical scale of values available through the mixin, though these should rarely be needed.

* Table of contents
{:toc}


### Examples

Applies default padding to all four sides of an element

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--default">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(default);
}
{% endexample %}
</div>


Applies large padding to left side only

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding-left--large">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding-left(large);
}
{% endexample %}
</div>


Shorthand; applies small `padding-bottom` and `padding-top`, and large `padding-left` to `padding-right`

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding-top--small u-padding-right--large u-padding-bottom--small u-padding-left--large">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(small large);
}
{% endexample %}
</div>


Turning a small `padding-bottom` into extra large at the medium breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding-bottom--small u-md-padding-bottom--x-large">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding-bottom(small);

  @include break(md) {
    @include padding-bottom(x-large);
  }
}
{% endexample %}
</div>


Shorthand; applies different paddings to all four sides

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding-bottom--x-large u-padding-left--xx-small u-padding-right--large u-padding-top--default">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(default large x-large xx-small);
}
{% endexample %}
</div>


## Standard scale visual reference

### Default
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--default">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(default);
}
{% endexample %}
</div>


### XX-Small
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--xx-small">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(xx-small);
}
{% endexample %}
</div>


### X-Small
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--x-small">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(x-small);
}
{% endexample %}
</div>


### Small
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--small">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(small);
}
{% endexample %}
</div>


### Large
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--large">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(large);
}
{% endexample %}
</div>


### X-Large
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--x-large">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(x-large);
}
{% endexample %}
</div>


### XX-Large
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--xx-large">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(xx-large);
}
{% endexample %}
</div>



## Breakpoints

`padding` values can selectively be applied when certain [breakpoints]({{ site.baseurl }}/utilities/breakpoint) are triggered.

### Examples

Apply default amount of `padding` only at large breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-lg-padding--default">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include break(lg) {
    @include padding(default);
  }
}
{% endexample %}
</div>


Overwrite small amount of `padding` with extra large amount at medium breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-padding--small u-md-padding--x-large">
  <div class="u-background-color--gray-15">&nbsp;</div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include padding(small);

  @include break(md) {
    @include padding(x-large);    
  }
}
{% endexample %}
</div>


## Full scale visual reference
Our full scale of `padding` values is numerical. They can only be applied using the `padding` Sass mixin, because in practice we've never needed HTML classes for them. Generating the classes would only add unnecessary weight to our stylesheets.

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--1">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(1);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--2">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(2);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--3">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(3);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--4">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(4);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--5">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(5);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--6">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(6);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--7">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(7);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--8">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(8);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--9">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(9);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--10">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(10);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--11">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(11);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--12">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(12);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--13">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(13);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--14">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(14);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--15">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(15);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--16">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(16);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--17">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include padding(17);
}
{% endexample %}
</div>
