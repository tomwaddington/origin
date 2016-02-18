---
categories: utilities
layout: page
scss-filename: _positioning.scss
title: positioning
---
Apply `position`, `bottom`, `left`, `right`, and `top` values with utility classes.

## position

### Values
* `absolute`
* `fixed`
* `relative`
* `static`

### Examples
{% example html %}
<div class="u-background-color--gray-15 u-position--relative u-width--100percent" style="height: 8em;">
  <div class="u-background-color--gray-12 u-position--absolute">
    This element is absolutely positioned inside the parent container
  </div>
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-15 u-position--relative u-width--100percent" style="height: 8em;">
  <div class="u-background-color--gray-12 u-position--fixed">
    This element stays fixed to the viewport in the original position
  </div>
</div>
{% endexample %}


## bottom, left, right, top

### Values
* `0`

### Examples
{% example html %}
<div class="u-background-color--gray-15 u-position--relative u-width--100percent" style="height: 8em;">
  <div class="u-background-color--gray-12 u-bottom--0 u-position--absolute u-right--0">
    This element is absolutely positioned to the bottom right of the parent container
  </div>
</div>
{% endexample %}
