---
categories: components
layout: simple-full-width
scss-filename: _grid.scss
title: Grid
---

Our 12-column mobile-first responsive grid system helps us tightly control layouts as viewport widths vary. Breakpoints are defined in our [utility values]({{ site.github.repo }}/blob/master/assets/scss/global/utilities/_utility-values.scss).

* Table of contents
{:toc}

## How to use
1. Create a `<div class="Grid-row">`, a horizontal container for our vertical columns (which always clears its floats).

2. Create a `<div class="Grid-col">` for each column you want.

3. Add `sm-#`, `md-#`, `lg-#`, `x-lg-#`, or `xx-lg-#` classes to each `<div class="Grid-col">` for the behaviour you want. Each class maps to `min-width` a breakpoint, so each class inherits the `width` value of the class which comes before it.

Important: don't directly modify `<div class="Grid-row">` or `<div class="Grid-col">` elements for presentation. If you want to add a `background-color`, `padding`, `margin` or other properties, add new `div`s inside grid elements to achieve whatever effect you need.


## Basic example
Resize your browser window to see how column widths change at different breakpoints.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="Grid-row">
  <div class="Grid-col sm-6 md-4 lg-9">6, 4, and 9 cols</div>
  <div class="Grid-col sm-6 md-8 lg-3">6, 8, and 3 cols</div>
</div>
{% endexample %}
</div>


## All breakpoints example
<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="Grid-row">
  <div class="Grid-col sm-6 md-4 lg-9 x-lg-6 xx-lg-1">6, 4, 9, 6, 1 cols</div>
  <div class="Grid-col sm-6 md-8 lg-3 x-lg-6 xx-lg-11">6, 8, 3, 6, 11 cols</div>
</div>
{% endexample %}
</div>


## Centered Columns
Center your columns by adding a class of `sm-centered` to your `Grid-col`. Large will inherit small centering by default, but you can also center solely on large by applying a `lg-centered` class. To uncenter on large screens use `lg-uncentered`.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="Grid-row">
  <div class="Grid-col sm-3 sm-centered">3 centered</div>
</div>
<div class="Grid-row">
  <div class="Grid-col sm-6 lg-centered">6 centered</div>
</div>
<div class="Grid-row">
  <div class="Grid-col sm-9 sm-centered lg-uncentered">9 uncentered</div>
</div>
<div class="Grid-row">
  <div class="Grid-col sm-11 sm-centered">11 centered</div>
</div>
{% endexample %}
</div>


## Offsets
Move blocks up to 11 columns to the right by using classes like `.lg-offset-1` and `.sm-offset-3`.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="Grid-row">
  <div class="Grid-col md-6 md-offset-6">6, offset 6</div>
</div>
<div class="Grid-row">
  <div class="Grid-col md-2">2</div>
  <div class="Grid-col md-8 md-offset-2">8, offset 2</div>
</div>
<div class="Grid-row">
  <div class="Grid-col md-1">1</div>
  <div class="Grid-col md-9 md-offset-2">9, offset 2</div>
</div>
<div class="Grid-row">
  <div class="Grid-col md-4">1</div>
  <div class="Grid-col md-4 md-offset-4">4, offset 4</div>
</div>
{% endexample %}
</div>


## Incomplete rows
In order to work around browsers' different rounding behaviors, Foundation will float the last column in a row to the right so the edge aligns. If your row doesn't have a count that adds up to 12 columns, you can tag the last column with a class of `end` in order to override that behavior.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="Grid-row">
  <div class="Grid-col md-2">3</div>
  <div class="Grid-col md-2">3</div>
  <div class="Grid-col md-2">3</div>
</div>
<div class="Grid-row">
  <div class="Grid-col md-2">3</div>
  <div class="Grid-col md-2">3</div>
  <div class="Grid-col md-2 end">3 end</div>
</div>
{% endexample %}
</div>


## Nested
You can nest the grids indefinitely, though at a certain point it will get absurd.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="Grid-row">
  <div class="Grid-col sm-8">8
    <div class="Grid-row">
      <div class="Grid-col sm-8">8 Nested
        <div class="Grid-row">
          <div class="Grid-col sm-8">8 Nested Again</div>
          <div class="Grid-col sm-4">4</div>
        </div>
      </div>
      <div class="Grid-col sm-4">4</div>
    </div>
  </div>
  <div class="Grid-col sm-4">4</div>
</div>
{% endexample %}
</div>


## Collapse/Uncollapse Rows
The `collapse` class lets you remove column gutters (padding).

There are times when you won't want each media query to be collapsed or uncollapsed. In this case, use the media query size you want and collapse or uncollapse and add that to your `Grid-row` element. Example removes the gutter at the large breakpoint and then adds the gutter to columns at medium and small.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="Grid-row md-collapse lg-uncollapse">
  <div class="Grid-col sm-6">
    Removes gutters at medium, adds back at large
  </div>
  <div class="Grid-col sm-6">
    Removes gutters at medium, adds back at large
  </div>
</div>
{% endexample %}
</div>


## Source Ordering
Using these source ordering classes, you can shift columns around between our breakpoints. This means if you place sub-navigation below main content on small displays, you have the option to position the sub-navigation on either the left or right of the page for large displays. Prefix push/pull with the size of the device you want to apply the styles to. `md-push-#`, `lg-push-#` is the syntax you'll use. Use `lg-reset-order` to reset pushed or pulled columns to their original position on large screens.

<div class="DocsExample DocsExample--grid DocsExample--grid--sourceOrder">
{% example html %}
<div class="Grid-row">
  <div class="Grid-col sm-10 sm-push-2">10</div>
  <div class="Grid-col sm-2 sm-pull-10">2, last</div>
</div>
<div class="Grid-row">
  <div class="Grid-col lg-9 lg-push-3">9</div>
  <div class="Grid-col lg-3 lg-pull-9">3, last</div>
</div>
<div class="Grid-row">
  <div class="Grid-col lg-8 lg-push-4">8</div>
  <div class="Grid-col lg-4 lg-pull-8">4, last</div>
</div>
<div class="Grid-row">
  <div class="Grid-col sm-5 sm-push-7 md-7 md-push-5">7</div>
  <div class="Grid-col sm-7 sm-pull-5 md-5 md-pull-7">5, last</div>
</div>
<div class="Grid-row">
  <div class="Grid-col md-6 md-push-6">6</div>
  <div class="Grid-col md-6 md-pull-6">6, last</div>
</div>
{% endexample %}
</div>


## Example of all column widths
<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="Grid-row">
  <div class="Grid-col">12 cols</div>
</div>
<div class="Grid-row">
  <div class="Grid-col sm-6">6 cols</div>
  <div class="Grid-col sm-6">6 cols</div>
</div>
<div class="Grid-row">
  <div class="Grid-col sm-4">4 cols</div>
  <div class="Grid-col sm-4">4 cols</div>
  <div class="Grid-col sm-4">4 cols</div>
</div>
<div class="Grid-row">
  <div class="Grid-col sm-3">3 cols</div>
  <div class="Grid-col sm-3">3 cols</div>
  <div class="Grid-col sm-3">3 cols</div>
  <div class="Grid-col sm-3">3 cols</div>
</div>
<div class="Grid-row">
  <div class="Grid-col md-2">2 cols</div>
  <div class="Grid-col md-2">2 cols</div>
  <div class="Grid-col md-2">2 cols</div>
  <div class="Grid-col md-2">2 cols</div>
  <div class="Grid-col md-2">2 cols</div>
  <div class="Grid-col md-2">2 cols</div>
</div>
<div class="Grid-row">
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
  <div class="Grid-col lg-1">1 col</div>
</div>
{% endexample %}
</div>
