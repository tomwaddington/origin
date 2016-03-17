---
categories: utilities
layout: page
scss-filename: _font-weight.scss
title: font-weight
---

Our primary typeface is [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro), an open-source face designed specifically for UI work. We serve it up via `@font-face` in a number of formats, as required by different browsers. WOFF2 is preferred due to it’s better compression, followed by WOFF.

Settings for browser support, OpenType vs TrueType, and font directory path
can all be found in [_font-settings.scss]({{ site.github.repo }}/blob/master/assets/scss/fonts/_font-settings.scss).

Font files for additional weights to those shown below do exist, but we don't use them.


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-weight--light">
  The light weight (`300`) for text
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-weight(light);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-weight--normal">
  The normal weight (`400`) for text
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-weight(normal);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-weight--semi-bold">
  The semi-bold weight (`600`) for text
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-weight(semi-bold);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-weight--bold">
  The bold weight (`700`) for text
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-weight(bold);
}
{% endexample %}
</div>
