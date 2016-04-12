---
categories: components
layout: page
scss-filename: _navbar.scss
title: NavBar
---

The NavBar is the section in each of our apps which contains the main view
heading along with the primary (and often the secondary) navigation.

**Usage Note:** Because of the difference between the nav bars in each of our projects,
the basic component is rarely used on its own. It should be combined with one
of the variants below.

##Variants

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Desktop

The desktop app variant adds desktop-specific padding to the top of the NavBar
and margins to the left and bottom of the title.

{% example html %}
<nav class="NavBar NavBar--desktop" role="navigation">
  <h1 class="NavBar-title">
    <a class="NavBar-title-link" href="#"> <!-- optional -->
      NavBar Title
    </a>
  </h1>
</nav>
{% endexample %}
