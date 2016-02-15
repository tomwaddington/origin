---
categories: utilities
layout: page
scss-filename: _background.scss
title: background
---

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## background-color

These are the background colors we’re using in production — no more. All colors are defined in [_utility-values.scss]({{ site.github.repo }}/blob/master/assets/scss/global/utilities/_utility-values.scss). New colors should be added only when they’re actually being used in a component or other element in production. When adding a new color, justify it by linking to the Sass file where you’re using it in your PR. Then the team can approve the addition.


### Primary palette

<section class="SwatchGroup">

  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-yellow">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-yellow);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-yellow"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-amber">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-amber);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-amber"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-red">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-red);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-red"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-purple">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-purple);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-purple"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-blue"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-green">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-green);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-green"></div>
{% endexample %}
  </div>

</section>


### Darker variants

<section class="SwatchGroup">

  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-amber--dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-amber--dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-amber--dark"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-red--dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-red--dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-red--dark"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue--dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue--dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-blue--dark"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue--x-dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue--x-dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-blue--x-dark"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue--xx-dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue--xx-dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-blue--xx-dark"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-green--dark">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-green--dark);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-green--dark"></div>
{% endexample %}
  </div>


</section>


### Lighter variants

<section class="SwatchGroup">

  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-yellow--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-yellow--x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-yellow--x-light"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-red--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-red--x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-red--x-light"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-purple--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-purple--x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-purple--x-light"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue--x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-blue--x-light"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-blue--xx-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-blue--xx-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-blue--xx-light"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--fa-green--x-light">
      &nbsp;
    </div>
{% example scss %}
@include background-color(fa-green--x-light);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--fa-green--x-light"></div>
{% endexample %}
  </div>


</section>


### Grays

<section class="SwatchGroup">

  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-1">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-1);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-1"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-2">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-2);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-2"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-3">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-3);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-3"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-4">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-4);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-4"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-5">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-5);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-5"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-6">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-6);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-6"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-7">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-7);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-7"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-8">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-8);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-8"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-9">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-9);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-9"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-10">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-10);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-10"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-11">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-11);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-11"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-12">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-12);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-12"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-13">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-13);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-13"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-14">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-14);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-14"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-15">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-15);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-15"></div>
{% endexample %}
  </div>


  <div class="DocsExample DocsExample--grouped DocsExample--labelMixins DocsExample--renderHidden">
    <div class="DocsExample-preview DocsExample-preview--gray-16">
      &nbsp;
    </div>
{% example scss %}
@include background-color(gray-16);
{% endexample %}
  </div>

  <div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--gray-16"></div>
{% endexample %}
  </div>


</section>

### Other utility classes

<div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-color--inherit"></div>
<div class="u-background-color--inherit--active"></div>
<div class="u-background-color--inherit--hover"></div>
<div class="u-background-color--transparent"></div>
<div class="u-background-color--transparent--active"></div>
<div class="u-background-color--transparent--hover"></div>
{% endexample %}
</div>


## background
No mixins, only utility classes.

<div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background--none"></div>
<div class="u-background--inherit"></div>
{% endexample %}
</div>


## background-image
No mixins, only utility classes.

<div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-image--none"></div>
{% endexample %}
</div>


## background-position
No mixins, only utility classes.

<div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-position--center-center"></div>
<div class="u-background-position--center-top"></div>
<div class="u-background-position--left-bottom"></div>
<div class="u-background-position--left-center"></div>
<div class="u-background-position--left-top"></div>
<div class="u-background-position--right-bottom"></div>
<div class="u-background-position--right-center"></div>
<div class="u-background-position--right-top"></div>
{% endexample %}
</div>


## background-size
No mixins, only utility classes.

<div class="DocsExample DocsExample--labelUtilityClasses DocsExample--renderHidden">
{% example html %}
<div class="u-background-size--contain"></div>
<div class="u-background-size--cover"></div>
{% endexample %}
</div>
