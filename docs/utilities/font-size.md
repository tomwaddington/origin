---
categories: utilities
layout: page
scss-filename: _font-size.scss
title: font-size
---
Use `font-size` to apply values using our mixin or utility classes. Values can optionally be applied only at specific [breakpoints]({{ site.baseurl }}/utilities/breakpoint).

Using the Sass mixin is preferred, as it forces us to consider all objects as [components]({{ site.baseurl }}/guidance/components). Applying utility classes in HTML enforces `!important`, as they're intended to be immutable — applying one property and value no matter what.

### Values
* `default`
* `xx-small`
* `x-small`
* `small`
* `large`
* `x-large`
* `xx-large`
* `1` to `17` (only available in mixin)


## Standard scale

### Default
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-size--default u-line-height--default">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-size(default);
  @include line-height(default);
}
{% endexample %}
</div>

### XX-Small
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-size--xx-small u-line-height--default">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-size(xx-small);
  @include line-height(default);
}
{% endexample %}
</div>


### X-Small
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-size--x-small u-line-height--default">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-size(x-small);
  @include line-height(default);
}
{% endexample %}
</div>

### Small
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-size--small u-line-height--default">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-size(small);
  @include line-height(default);
}
{% endexample %}
</div>

### Large
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-size--large u-line-height--default">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-size(large);
  @include line-height(default);
}
{% endexample %}
</div>


### X-Large
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-size--x-large u-line-height--tight">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-size(x-large);
  @include line-height(tight);
}
{% endexample %}
</div>

### XX-Large
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-size--xx-large u-line-height--x-tight">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-size(xx-large);
  @include line-height(x-tight);
}
{% endexample %}
</div>


## Breakpoints

`font-size` values can selectively only be applied when certain [breakpoints]({{ site.baseurl }}/utilities/breakpoint) are triggered.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-lg-font-size--x-large u-lg-line-height--tight">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include break(lg) {
    @include font-size(x-large);
    @include line-height(tight);
  }
}
{% endexample %}
</div>



## Full scale

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--1">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(1);
  @include line-height(default);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--2">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(2);
  @include line-height(default);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--3">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(3);
  @include line-height(default);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--4">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(4);
  @include line-height(default);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--5">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(5);
  @include line-height(default);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--6">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(6);
  @include line-height(default);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--7">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(7);
  @include line-height(default);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--8">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(8);
  @include line-height(tight);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--9">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(9);
  @include line-height(tight);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--10">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(10);
  @include line-height(tight);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--11">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(11);
  @include line-height(x-tight);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--12">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(12);
  @include line-height(xx-tight);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--13">
      Business finances are just too damn hard.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(13);
  @include line-height(xx-tight);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--14">
      Business finances are just too damn hard.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(14);
  @include line-height(xx-tight);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--15">
      Business finances.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(15);
  @include line-height(xx-tight);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--16">
      Business finances.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(16);
  @include line-height(xx-tight);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--font-size--17">
      Business.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include font-size(17);
  @include line-height(xx-tight);
}
{% endexample %}
</div>
