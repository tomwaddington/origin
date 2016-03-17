---
categories: utilities
layout: page
scss-filename: _border-radius.scss
title: border-radius
---
Use to apply or remove `border-radius` using our scale of values. Can be used on all corners of an element, or only select corners.

### Values
* `0`
* `small` (`2px`)
* `default` (`4px`)
* `large` (`6px`)
* `x-large` (`8px`)
* `xx-large` (`10px`)

### Examples
<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--fa-green u-border-radius--default">
  <br /><br />
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
@include border-radius(default);
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--fa-green u-border-radius--small">
  <br /><br />
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
@include border-radius(small);
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--fa-green u-border-radius--large">
  <br /><br />
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
@include border-radius(large);
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--fa-green u-border-radius--x-large">
  <br /><br />
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
@include border-radius(x-large);
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--fa-green u-border-radius--xx-large">
  <br /><br />
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
@include border-radius(xx-large);
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--fa-green u-border-radius--0">
  <br /><br />
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
@include border-radius(0);
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--fa-green u-border-radius-bottom-right--large">
  <br /><br />
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
@include border-radius-bottom-right(large);
{% endexample %}
</div>


<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--fa-green u-border-radius-top-right--xx-large">
  <br /><br />
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
@include border-radius-top-right(xx-large);
{% endexample %}
</div>
