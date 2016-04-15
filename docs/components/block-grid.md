---
categories: components
layout: simple-full-width
scss-filename: _block-grid.scss
title: Block Grid
---
Block grids give us a way to evenly split content within a grid. If we want a row of five images that need to stay evenly spaced no matter the screen size, we use the block grid. Breakpoints are defined in our [utility values]({{ site.github.repo }}/blob/master/assets/scss/global/utilities/_utility-values.scss).

* Table of contents
{:toc}


## How to use
1. Create a `<div class="BlockGrid">`, the container required for our block grid (which always clears its floats).

2. Add `sm-#`, `md-#`, `lg-#`, `x-lg-#`, or `xx-lg-#` classes to the `<div class="BlockGrid">` to specify the number of items to be displayed. Each class maps to `min-width` a breakpoint, so each class inherits the `width` value of the class which comes before it.

3. Add a `<div class="BlockGrid-item">` for each item in your block grid.

Important: don't directly modify `<div class="BlockGrid">` elements for presentation. If you want to add a `background-color`, `padding`, `margin` or other properties, add new `div`s inside grid elements to achieve whatever effect you need.


## Basic examples
{% example html %}
<div class="BlockGrid sm-2">
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
</div>
{% endexample %}

{% example html %}
<div class="BlockGrid sm-3">
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
</div>
{% endexample %}

{% example html %}
<div class="BlockGrid sm-4">
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
</div>
{% endexample %}


## Changing number of items in a row
Use multiple size classes to specify a different number of items in a row for each `min-width` breakpoint. This example will stack items vertically by default, display 3 items in a row on medium screens, then 5 in a row on large screens.

{% example html %}
<div class="BlockGrid md-3 lg-5">
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
  <div class="BlockGrid-item">
    <img alt="Bill Murray" src="https://www.fillmurray.com/460/300" />
  </div>
</div>
{% endexample %}
