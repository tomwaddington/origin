---
categories: utilities
layout: page
scss-filename: _margin.scss
title: margin
---
Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.

Values can optionally be applied only at specific [breakpoints]({{ site.baseurl }}/utilities/breakpoint).

Using the Sass mixin is preferred, as it forces us to consider all objects as [components]({{ site.baseurl }}/guidance/components). Applying utility classes in HTML enforces `!important`, as they're intended to be immutable — applying one property and value no matter what.

There's also a larger numerical scale of values available through the mixin, though these should rarely be needed.

* Table of contents
{:toc}


### Examples

Applies default margin to all four sides of an element

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin--default">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(default);
}
{% endexample %}
</div>


Applies large margin to left side only

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin-left--large">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin-left(large);
}
{% endexample %}
</div>


Shorthand; applies small `margin-bottom` and `margin-top`, and large `margin-left` to `margin-right`

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin-top--small u-margin-right--large u-margin-bottom--small u-margin-left--large">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(small large);
}
{% endexample %}
</div>


Turning a small `margin-bottom` into extra large at the medium breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin-bottom--small u-md-margin-bottom--x-large">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin-bottom(small);

  @include break(md) {
    @include margin-bottom(x-large);
  }
}
{% endexample %}
</div>


Shorthand; applies different margins to all four sides

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin-bottom--x-large u-margin-left--xx-small u-margin-right--large u-margin-top--default">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(default large x-large xx-small);
}
{% endexample %}
</div>


## Standard scale visual reference

### Default
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin--default">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(default);
}
{% endexample %}
</div>


### XX-Small
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin--xx-small">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(xx-small);
}
{% endexample %}
</div>


### X-Small
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin--x-small">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(x-small);
}
{% endexample %}
</div>


### Small
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin--small">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(small);
}
{% endexample %}
</div>


### Large
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin--large">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(large);
}
{% endexample %}
</div>


### X-Large
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin--x-large">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(x-large);
}
{% endexample %}
</div>


### XX-Large
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin--xx-large">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(xx-large);
}
{% endexample %}
</div>



## Breakpoints

`margin` values can selectively be applied when certain [breakpoints]({{ site.baseurl }}/utilities/breakpoint) are triggered.

### Examples

Apply default amount of `margin` only at large breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-lg-margin--default">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include break(lg) {
    @include margin(default);
  }
}
{% endexample %}
</div>


Overwrite small amount of `margin` with extra large amount at medium breakpoint

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-12 u-display--inline-block">
  <div class="u-background-color--gray-15 u-margin--small u-md-margin--x-large">
    Our `margin` utility has a standard scale of values ranging from `xx-small` to `xx-large`. These can be applied using our `margin` Sass mixin, or using `u-margin--#` utility classes in HTML.
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include margin(small);

  @include break(md) {
    @include margin(x-large);    
  }
}
{% endexample %}
</div>


## Full scale visual reference
Our full scale of `margin` values is numerical. They can only be applied using the `margin` Sass mixin, because in practice we've never needed HTML classes for them. Generating the classes would only add unnecessary weight to our stylesheets.

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--spacing DocsExample-preview--spacing--1">
    <div class="DocsExample-preview-child">
      &nbsp;
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include margin(1);
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
  @include margin(2);
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
  @include margin(3);
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
  @include margin(4);
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
  @include margin(5);
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
  @include margin(6);
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
  @include margin(7);
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
  @include margin(8);
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
  @include margin(9);
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
  @include margin(10);
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
  @include margin(11);
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
  @include margin(12);
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
  @include margin(13);
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
  @include margin(14);
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
  @include margin(15);
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
  @include margin(16);
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
  @include margin(17);
}
{% endexample %}
</div>
