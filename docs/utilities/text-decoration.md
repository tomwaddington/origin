---
categories: utilities
layout: page
scss-filename: _text-decoration.scss
title: text-decoration
---
Apply `text-decoration` values with utility classes, in normal, `:active`, `:focus`, or `:hover` states.

### Values
* `inherit`
* `initial`
* `line-through`
* `none`
* `overline`
* `underline`

### Examples
{% example html %}
<a class="u-text-decoration--underline" href="#">
  This link has a `1px` underline drawn underneath it
</a>
{% endexample %}

{% example html %}
<a class="u-text-decoration--underline--active u-text-decoration--underline--hover" href="#">
  This link has a `1px` underline drawn underneath it on `:hover` and `:active`
</a>
{% endexample %}

{% example html %}
<p class="u-text-decoration--line-through">
  This paragraph has a `1px` line drawn through its 'middle' point
</p>
{% endexample %}

{% example html %}
<a class="u-text-decoration--inherit" href="#">
  This link inherits the text decoration from its parent
</a>
{% endexample %}

{% example html %}
<a class="u-text-decoration--initial" href="#">
  This link will have any inherited text decoration reset to the normal text decoration for its element type
</a>
{% endexample %}

{% example html %}
<a class="u-text-decoration--none" href="#">
  This link removes any existing text decoration that's present
</a>
{% endexample %}

{% example html %}
<a class="u-text-decoration--overline" href="#">
  This link has a `1px` line drawn above its 'top' point
</a>
{% endexample %}
