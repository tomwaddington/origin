---
categories: utilities
layout: page
scss-filename: _overflow.scss
title: overflow
---
Apply `overflow`, `overflow-x`, and `overflow-y` values with utility classes.

### Values
* `auto`
* `hidden`
* `scroll`
* `visible`

### Examples
{% example html %}
<div class="u-background-color--gray-13 u-overflow--auto" style="height: 8em; width: 60%;">
  This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them. This element only gets scrollbars if it needs them.
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-13 u-overflow--hidden" style="height: 8em; width: 60%;">
  Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden. Any content that extends beyond this element is hidden.
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-13 u-overflow--scroll" style="height: 8em; width: 60%;">
  This element will get both x and y axis scrollbars, even if it doesn't need them. This element will get both x and y axis scrollbars, even if it doesn't need them. This element will get both x and y axis scrollbars, even if it doesn't need them. This element will get both x and y axis scrollbars, even if it doesn't need them. This element will get both x and y axis scrollbars, even if it doesn't need them. This element will get both x and y axis scrollbars, even if it doesn't need them. This element will get both x and y axis scrollbars, even if it doesn't need them. This element will get both x and y axis scrollbars, even if it doesn't need them. This element will get both x and y axis scrollbars, even if it doesn't need them.
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-13 u-overflow--visible" style="height: 8em; width: 60%;">
  Any content extending beyond this element will be visible, and render outside the box if need be. Any content extending beyond this element will be visible, and render outside the box if need be. Any content extending beyond this element will be visible, and render outside the box if need be. Any content extending beyond this element will be visible, and render outside the box if need be. Any content extending beyond this element will be visible, and render outside the box if need be. Any content extending beyond this element will be visible, and render outside the box if need be. Any content extending beyond this element will be visible, and render outside the box if need be. Any content extending beyond this element will be visible, and render outside the box if need be.
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-13 u-overflow-x--scroll" style="height: 8em; width: 60%;">
  This element will get y axis scrollbars, even if it doesn't need them. This element will get y axis scrollbars, even if it doesn't need them. This element will get y axis scrollbars, even if it doesn't need them. This element will get y axis scrollbars, even if it doesn't need them. This element will get y axis scrollbars, even if it doesn't need them. This element will get y axis scrollbars, even if it doesn't need them. This element will get y axis scrollbars, even if it doesn't need them. This element will get y axis scrollbars, even if it doesn't need them. This element will get y axis scrollbars, even if it doesn't need them. This element will get y axis scrollbars, even if it doesn't need them.
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-13 u-overflow-x--hidden" style="height: 8em; width: 60%;">
  Any content that extends beyond the set width of the element is hidden. Any content that extends beyond the set width of the element is hidden. Any content that extends beyond the set width of the element is hidden. Any content that extends beyond the set width of the element is hidden. Any content that extends beyond the set width of the element is hidden. Any content that extends beyond the set width of the element is hidden. Any content that extends beyond the set width of the element is hidden. Any content that extends beyond the set width of the element is hidden. Any content that extends beyond the set width of the element is hidden.
</div>
{% endexample %}
