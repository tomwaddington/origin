---
layout: page
title: About Origin
---
Multiple teams working on multiple web products require a rigorous design system. CSS is one of the main materials, but it lacks the inherent structure we need. Origin provides that structure.

We want predictable results, written in a consistent way, according to agreed global values. We also want to keep CSS approachable for those less experienced and make it harder to incur technical debt, while ensuring it's easy to evolve our system as we learn (and make) more.

See [principles]({{ site.baseurl }}/guidance/principles) for more details.


## Quick examples

### Before
<div class="DocsExample ">
{% highlight scss %}
.pricing-panel {
  border: 1px solid #ddd;
  color: #333;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 140%;
  padding: 1rem 0.5rem;
}
{% endhighlight %}
</div>

### After
<div class="DocsExample ">
{% highlight scss %}
.Card {
  @include border(default, gray-13);
  @include font-family(default);
  @include font-size(default);
  @include line-height(default);
  @include padding(default small);
  @include text-color(default);
}
{% endhighlight %}
</div>


### Before
<div class="DocsExample  DocsExample--grouped DocsExample--renderHidden">
  <div class="DocsExample-preview">
    <p class="AboutExample AboutExample--1">
      FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
    </p>
  </div>
{% example html %}
<p class="tour-section-intro">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
</p>
{% endexample %}
</div>

<div class="DocsExample  DocsExample--renderHidden">
{% example scss %}
.tour-section-intro {
  color: #777;
  font-size: 1.3125rem;
  line-height: 130%;
}
{% endexample %}
</div>

### After
{% example html %}
<p class="u-font-size--x-large u-line-height--tight u-text-color--gray-7">
  FreeAgent is a company born out of the frustration that business finances are just too damn hard for freelancers and small businesses.
</p>
{% endexample %}



## How it works

We define all of our global CSS values in [`_utility-values.scss`]({{ site.github.repo }}/blob/master/assets/scss/global/utilities/_utility-values.scss). Each value is assigned to a variable, then variables are grouped together into straightforward, predictable scales.

Here's what our scale of `border-radius` values looks like:

<div class="DocsExample ">
{% highlight scss %}
$border-radius--0: 0;
$border-radius--1: 2px;
$border-radius--2: 4px;
$border-radius--3: 6px;
$border-radius--4: 8px;
$border-radius--5: 10px;
{% endhighlight %}
</div>


Many of the variables in these scales are then assigned to new variables with more human meaning. We call these ‘aliases’:

<div class="DocsExample ">
{% highlight scss %}
$border-width--0:        $border-width--0;
$border-width--thin:     $border-width--1;
$border-width--default:  $border-width--2;
$border-width--thick:    $border-width--3;
$border-width--x-thick:  $border-width--4;
$border-width--xx-thick: $border-width--5;
{% endhighlight %}
</div>


We define Sass lists or maps of our alias variables to make them available as Sass mixin arguments:

<div class="DocsExample ">
{% highlight scss %}
$border-width-values: (
  0:        $border-width--0,
  thin:     $border-width--thin,
  default:  $border-width--default,
  thick:    $border-width--thick,
  x-thick:  $border-width--x-thick,
  xx-thick: $border-width--xx-thick
);
{% endhighlight %}
</div>


We then use mixins to generate HTML utility classes for the values in our lists and maps:

<div class="DocsExample ">
{% highlight scss %}
@mixin border-radius($value, $important: null) {
  border-radius: map-get($border-radius-values, $value) $important;
}

@if $u-classes-border-radius == true {
  @each $border-radius, $border-radius-value in $border-radius-values {
    .u-border-radius--#{$border-radius} {
      border-radius: $border-radius-value !important;
    }
  }
}
{% endhighlight %}
</div>


Those same mixins can be used in any `.scss` file to invoke the same styles.


## Key files

#### [origin.scss]({{ site.github.repo }}/blob/master/assets/scss/origin.scss)  
Master file where all required `.scss` partials are `@import`ed.

#### [_utility-values.scss]({{ site.github.repo }}/blob/master/assets/scss/global/utilities/_utility-values.scss)  
Where all of our CSS values, their variables, lists, and maps are defined.

#### [_utility-settings.scss]({{ site.github.repo }}/blob/master/assets/scss/local/_utility-settings.scss)  
Where the `true`/`false` flags are set, defining which `u-property--#` utility classes will render in the output CSS. This is one of a set of 'local' files copied and customised for each project that implements Origin.

#### [_project-aliases.scss]({{ site.github.repo }}/blob/master/assets/scss/global/utilities/_project-aliases.scss)  
This file can be used to override the values in [_utility-values.scss]({{ site.github.repo }}/blob/master/assets/scss/global/utilities/_utility-values.scss) for particular projects. Why? If an applications default `font-size` is actually Origins `small` value, we can shift the whole scale here so the mixins and utility classes are always relative to project. So we can say `@include font-size(default)` when we want the default size, instead of `@include font-size(small)`, even though `default` outputs a different size to the default Origin one.


## Utility mixins and classes

The examples above show the two methods of using Origin: Sass utility mixins, or HTML utility classes. They output the same CSS, but they want to be used in different ways.

Classes are great for experimentation; for ‘sketching’ ideas or quickly hacking at some existing CSS before directly editing it. But we always want to be thinking of our CSS in terms of reusable components. For this reason mixins are preferred.

See [utilities documentation]({{ site.baseurl }}/guidance/utilities) for more details.


## Components

We group together utility mixins under common namespaces to create components that perform specific functions. Building components instead of simply using utility classes everywhere encourages a more systemic approach.

See [components documentation]({{ site.baseurl }}/guidance/components) for more details.


## Naming conventions

Origin uses specific naming conventions based on [SUIT CSS](https://suitcss.github.io/) so the difference between components and utilities is clear. These conventions are enforced using a linter.

`ComponentNames` are clearly identified by their upper camel case syntax. `u-utility-classes` follow the syntax conventions of regular CSS, as that’s what they manipulate.

See [naming conventions]({{ site.baseurl }}/guidance/naming-conventions) for more details.
