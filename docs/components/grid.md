---
categories: components
layout: simple-full-width
title: Grid
---

Grid...

* Table of contents
{:toc}

Never directly modify the grid. Add additional surrounding `div`s or other elements to achieve whatever effect you need.

As with all of Origin, our grid system is built for mobile-first. Code for small screens first, and larger devices will inherit those styles. Customize for larger screens as necessary.

## Basic
Start by adding an element with a class of `g-row`. This will create a horizontal block to contain vertical columns. Then add divs with a `g-col` class within that `g-row`. Specify the widths of each column with the `small-#`, `medium-#`, and `large-#` classes.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="g-row">
  <div class="g-col">12 cols</div>
</div>
<div class="g-row">
  <div class="g-col medium-6">6 cols</div>
  <div class="g-col medium-6">6 cols</div>
</div>
<div class="g-row">
  <div class="g-col medium-4">4 cols</div>
  <div class="g-col medium-4">4 cols</div>
  <div class="g-col medium-4">4 cols</div>
</div>
<div class="g-row">
  <div class="g-col medium-3">3 cols</div>
  <div class="g-col medium-3">3 cols</div>
  <div class="g-col medium-3">3 cols</div>
  <div class="g-col medium-3">3 cols</div>
</div>
<div class="g-row">
  <div class="g-col medium-2">2 cols</div>
  <div class="g-col medium-2">2 cols</div>
  <div class="g-col medium-2">2 cols</div>
  <div class="g-col medium-2">2 cols</div>
  <div class="g-col medium-2">2 cols</div>
  <div class="g-col medium-2">2 cols</div>
</div>
<div class="g-row">
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
  <div class="g-col medium-1">1 col</div>
</div>
{% endexample %}
</div>


## Small
Small grids expand to large screens easier than large grids cram into small screens.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="g-row">
  <div class="g-col small-2">2 cols</div>
  <div class="g-col small-10">10 cols</div>
</div>
<div class="g-row">
  <div class="g-col small-8">8 cols</div>
  <div class="g-col small-4">4 cols</div>
</div>
{% endexample %}
</div>


## Medium
Medium sized screens will inherit styles from small, unless you specify a different layout, using the medium grid classes.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="g-row">
  <div class="g-col medium-2">2 cols</div>
  <div class="g-col medium-10">10 cols</div>
</div>
<div class="g-row">
  <div class="g-col medium-8">8 cols</div>
  <div class="g-col medium-4">4 cols</div>
</div>
{% endexample %}
</div>


## Nested
You can nest the grids indefinitely, though at a certain point it will get absurd.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="g-row">
  <div class="g-col small-8">8
    <div class="g-row">
      <div class="g-col small-8">8 Nested
        <div class="g-row">
          <div class="g-col small-8">8 Nested Again</div>
          <div class="g-col small-4">4</div>
        </div>
      </div>
      <div class="g-col small-4">4</div>
    </div>
  </div>
  <div class="g-col small-4">4</div>
</div>
{% endexample %}
</div>


## Offsets
Move blocks up to 11 columns to the right by using classes like `.large-offset-1` and `.small-offset-3`.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="g-row">
  <div class="g-col large-1">1</div>
  <div class="g-col large-11">11</div>
</div>
<div class="g-row">
  <div class="g-col large-1">1</div>
  <div class="g-col large-10 large-offset-1">10, offset 1</div>
</div>
<div class="g-row">
  <div class="g-col large-1">1</div>
  <div class="g-col large-9 large-offset-2">9, offset 2</div>
</div>
<div class="g-row">
  <div class="g-col large-1">1</div>
  <div class="g-col large-8 large-offset-3">8, offset 3</div>
</div>
{% endexample %}
</div>


## Incomplete rows
In order to work around browsers' different rounding behaviors, Foundation will float the last column in a row to the right so the edge aligns. If your row doesn't have a count that adds up to 12 columns, you can tag the last column with a class of `end` in order to override that behavior.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="g-row">
  <div class="g-col medium-2">3</div>
  <div class="g-col medium-2">3</div>
  <div class="g-col medium-2">3</div>
</div>
<div class="g-row">
  <div class="g-col medium-2">3</div>
  <div class="g-col medium-2">3</div>
  <div class="g-col medium-2 end">3 end</div>
</div>
{% endexample %}
</div>


## Collapse/Uncollapse Rows
The `collapse` class lets you remove column gutters (padding).

There are times when you won't want each media query to be collapsed or uncollapsed. In this case, use the media query size you want and collapse or uncollapse and add that to your `g-row` element. Example removes the gutter at the large breakpoint and then adds the gutter to columns at medium and small.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="g-row medium-uncollapse large-collapse">
  <div class="g-col small-6">
    Removes gutter at large media query
  </div>
  <div class="g-col small-6">
    Removes gutter at large media query
  </div>
</div>
{% endexample %}
</div>


## Centered Columns
Center your columns by adding a class of `small-centered` to your `g-col`. Large will inherit small centering by default, but you can also center solely on large by applying a `large-centered` class. To uncenter on large screens use `large-uncentered`.

<div class="DocsExample DocsExample--grid">
{% example html %}
<div class="g-row">
  <div class="g-col small-3 small-centered">3 centered</div>
</div>
<div class="g-row">
  <div class="g-col small-6 large-centered">6 centered</div>
</div>
<div class="g-row">
  <div class="g-col small-9 small-centered large-uncentered">9 uncentered</div>
</div>
<div class="g-row">
  <div class="g-col small-11 small-centered">11 centered</div>
</div>
{% endexample %}
</div>


## Source Ordering
Using these source ordering classes, you can shift columns around between our breakpoints. This means if you place sub-navigation below main content on small displays, you have the option to position the sub-navigation on either the left or right of the page for large displays. Prefix push/pull with the size of the device you want to apply the styles to. `medium-push-#`, `large-push-#` is the syntax you'll use. Use `large-reset-order` to reset pushed or pulled columns to their original position on large screens.

<div class="DocsExample DocsExample--grid DocsExample--grid--sourceOrder">
{% example html %}
<div class="g-row">
  <div class="g-col small-10 small-push-2">10</div>
  <div class="g-col small-2 small-pull-10">2, last</div>
</div>
<div class="g-row">
  <div class="g-col large-9 large-push-3">9</div>
  <div class="g-col large-3 large-pull-9">3, last</div>
</div>
<div class="g-row">
  <div class="g-col large-8 large-push-4">8</div>
  <div class="g-col large-4 large-pull-8">4, last</div>
</div>
<div class="g-row">
  <div class="g-col small-5 small-push-7 medium-7 medium-push-5">7</div>
  <div class="g-col small-7 small-pull-5 medium-5 medium-pull-7">5, last</div>
</div>
<div class="g-row">
  <div class="g-col medium-6 medium-push-6">6</div>
  <div class="g-col medium-6 medium-pull-6">6, last</div>
</div>
{% endexample %}
</div>


## Show or hide based on viewport size
Available classes:

<div class="DocsExample DocsExample--render--hidden">
{% example css %}
.hide-for-small-only
.show-for-small-only

.hide-for-medium-up
.show-for-medium-up
.hide-for-medium-only
.show-for-medium-only

.hide-for-large-up
.show-for-large-up
.hide-for-large-only
.show-for-large-only

.hide-for-xlarge-up
.show-for-xlarge-up
.hide-for-xlarge-only
.show-for-xlarge-only

.hide-for-xxlarge-up
.show-for-xxlarge-up
{% endexample %}
</div>


## Show or hide based on orientation
Available classes:

<div class="DocsExample DocsExample--render--hidden">
{% example css %}
.show-for-landscape
.show-for-portrait
{% endexample %}
</div>


## Show or hide based on touch availability
Available classes:

<div class="DocsExample DocsExample--render--hidden">
{% example css %}
.hide-for-touch
.show-for-touch
{% endexample %}
</div>
