---
categories: utilities
layout: page
scss-filename: _line-height.scss
title: line-height
---

Apply `line-height` values with utility classes. Values can optionally be applied only at specific [breakpoints]({{ site.baseurl }}/utilities/breakpoint).

Using the Sass mixin is preferred, as it forces us to consider all objects as [components]({{ site.baseurl }}/guidance/components). Applying utility classes in HTML enforces `!important`, as they're intended to be immutable — applying one property and value no matter what.

### Values
* `default`
* `xx-tight`
* `x-tight`
* `tight`
* `loose`
* `x-loose`
* `xx-loose`
* `1` to `11` (only available in mixin)


## Standard scale

### Default
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-line-height--default">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include line-height(default);
}
{% endexample %}
</div>

### XX-Tight
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-line-height--xx-tight">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include line-height(xx-tight);
}
{% endexample %}
</div>


### X-Tight
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-line-height--x-tight">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include line-height(x-tight);
}
{% endexample %}
</div>


### Tight
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-line-height--tight">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include line-height(tight);
}
{% endexample %}
</div>


### Loose
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-line-height--loose">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include line-height(loose);
}
{% endexample %}
</div>


### X-Loose
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-line-height--x-loose">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include line-height(x-loose);
}
{% endexample %}
</div>

### XX-Loose
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-line-height--xx-loose">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include line-height(xx-loose);
}
{% endexample %}
</div>


## Breakpoints

`line-height` values can selectively only be applied when certain [breakpoints]({{ site.baseurl }}/utilities/breakpoint) are triggered.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-line-height--tight u-lg-line-height--loose">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include line-height(tight);

  @include break(lg) {
    @include line-height(loose);
  }
}
{% endexample %}
</div>


## Full scale

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--1">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
  {% example scss %}
.MyComponent  {
  }@include l
ine-height(1);
  {% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--2">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(2);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--3">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(3);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--4">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(4);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--5">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(5);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--6">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(6);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--7">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(7);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--8">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(8);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--9">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(9);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--10">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(10);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="TextExample TextExample--line-height--11">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses. We make products to empower people with the knowledge and means to make it easier, and let them do things their way. But whatever we make is only as good as the people making it.
    </p>
  </div>
{% example scss %}
.MyComponent {
  @include line-height(11);
}
{% endexample %}
</div>
