---
categories: utilities
layout: page
scss-filename: _height-width.scss
title: height and width
---
Use to apply `height`, `width`, `max-width`, and `min-height`values with mixins and utility classes.

## height

### Values
* `100percent` (`100%`)
* `100viewport` (`100vh`)

{% example html %}
<div class="u-background-color--gray-16">
  <div class="u-background-color--gray-13 u-height--100percent">
    This element is 100% of the height of its own content area (not the parent element's)
  </div>
</div>
{% endexample %}


## width

### Values
* `0`
* `half` (`100/2*1%`)
* `quarter` (`100/4*1%`)
* `third` (`100/3*1%`)
* `three-quarters` (`100/4*3%`)
* `two-thirds` (`100/3*2%`)
* `100percent` (`100%`)
* `100viewport` (`100vw`)

{% example html %}
<div class="u-background-color--gray-16">
  <div class="u-background-color--gray-13 u-width--half">
    This element is half the width of the parent element
  </div>
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-16">
  <div class="u-background-color--gray-13 u-width--third">
    This element is one quarter the width of the parent element
  </div>
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-16">
  <div class="u-background-color--gray-13 u-width--three-quarters">
    This element is three quarters the width of the parent element
  </div>
</div>
{% endexample %}


## max-width

### Values
* `0`
* `none`
* `100percent` (`100%`)
* `100viewport` (`100vw`)

{% example html %}
<div class="u-background-color--gray-16">
  <div class="u-background-color--gray-13 u-max-width--100percent">
    The maximum width of this element is 100% of the parent element
  </div>
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-16">
  <div class="u-background-color--gray-13 u-max-width--none">
    Any `max-width` values inherited by this element will be overwritten to `none`
  </div>
</div>
{% endexample %}


## min-height

### Values
* `0`
* `100percent` (`100%`)

{% example html %}
<div class="u-background-color--gray-16">
  <div class="u-background-color--gray-13 u-max-height--100percent">
    The minimum height of this element is 100% of its own content area
  </div>
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-16">
  <div class="u-background-color--gray-13 u-min-height--0">
    Any `min-height` values inherited by this element will be overwritten to `0`
  </div>
</div>
{% endexample %}
