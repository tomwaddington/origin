---
categories: guidance
layout: page
title: Utilities
---
Origin is the one true source of our global CSS values. We make these values available through what we call ‘utilities’: a collection of Sass mixins and HTML classes. They output the same CSS, but are used in very different ways.

See [About Origin]({{ site.baseurl }}/about) for some quick examples of using utilities.


### Global values

Utilities help us turn CSS into a more rigorous design system. Sass mixins and HTML utility classes are used instead of writing 'vanilla' CSS. The utilities give us global scales of values for a load of CSS properties like:

* [`background`]({{ site.baseurl }}/utilities/background)
* `color` (we call it [`text-color`]({{ site.baseurl }}/utilities/text-color))
* [`font-family`]({{ site.baseurl }}/utilities/font-family)
* [`font-size`]({{ site.baseurl }}/utilities/font-size)
* [`font-weight`]({{ site.baseurl }}/utilities/font-weight)
* [`height` and `width`]({{ site.baseurl }}/utilities/height-and-width)
* [`line-height`]({{ site.baseurl }}/utilities/line-height)
* [`margin`]({{ site.baseurl }}/utilities/margin)
* [`padding`]({{ site.baseurl }}/utilities/padding)

Almost all values for each property is rendered as a `u-property--value` class name. All values can also be passed to mixins.


### Benefits

* Technical debt and stylistic deviations are avoided because every declaration always maps back to a pre-defined value.
* Finding things like the right `font-size` or `line-height` is quicker and easier because their values exists in scales. Want a slightly bigger size? Increase the number by one.
* “Human friendly” aliases like `x-small` and `xx-large` communicate styles more effectively to developers
* Switching between different projects and codebases is easier because there’s a universal way of writing CSS across all of them
* Mixins allow us to bake in any vendor prefixing, so they don’t have to be typed manually.
