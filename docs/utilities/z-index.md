---
categories: utilities
layout: page
scss-filename: _z-index.scss
title: z-index
---
Apply `z-index` values with utility classes.

Note: `z-index` utility classes should _not_ be used unless only quickly trying out an idea.

All `z-index` values for an application should be kept in a dedicated `_z-index.scss` partial. Each instance of a `z-index` value is created as a unique mixin, then that mixin included wherever its element lives. This way every `z-index` in the application can be viewed on one place, preventing unintentional rendering issues, and easing maintenance.   

### Values
* 10 step of `0` to `10`

### Examples
{% example html %}
<div class="u-background-color--gray-13 z-index--1" style="height: 130px; width: 130px;">z-index: 1</div>
<div class="u-background-color--gray-11 z-index--2" style="height: 50px; left: 55px; position: absolute; top: 70px; width: 130px;">z-index: 2</div>
{% endexample %}
