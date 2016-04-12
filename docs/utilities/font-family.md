---
categories: utilities
layout: page
scss-filename: _font-family.scss
title: font-family
---

We use several typefaces in different contexts. Our primary typeface is [Source Sans Pro](https://github.com/adobe-fonts/source-sans-pro), an open-source face designed with UI work in mind.

All of our font stacks include sensible backup options if the primary font can't be used.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-family--default">
  Source Sans Pro is our default typeface
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-family(default);
}
{% endexample %}
</div>


Before using Source Sans Pro, we used Helvetica Neue exclusively. While this still exists in a number of applications, it will eventually be phased out, hence it being referred to as our 'legacy' typeface.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-family--legacy">
  Helvetica Neue is our legacy typeface
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-family(legacy);
}
{% endexample %}
</div>


We often use Effra for headings in editorial design work, primarily on the communications side. It is served up via Typekit.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-family--editorial">
  Effra is our editorial typeface
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-family(editorial);
}
{% endexample %}
</div>


We often use Swister for handwritten 'notes' in our product and comms work. It is served up via Typekit.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-family--handwritten">
  Swister is our handwritten typeface
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-family(handwritten);
}
{% endexample %}
</div>


Whenever we show code examples, we use Monaco. Its font stack includes a number of other monospaced fonts which will be used if Monaco isn't present.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-family--monospace">
  Monaco is our monospace typeface
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-family(monospace);
}
{% endexample %}
</div>
