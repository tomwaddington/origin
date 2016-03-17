---
categories: guidance
layout: page
title: Naming conventions
---

Our naming conventions are based largely on that of [SUIT CSS](https://suitcss.github.io/). The combination of `UpperCamelCase`, `lowerCamelCase`, and `regular-css-syntax` helps developers to distinguish what the intended role, behaviour, and structure of the code should be.

Note that [scss-lint](https://github.com/brigade/scss-lint) will check for SCSS syntax issues automatically when running the Origin docs. We have it built into Grunt.

## Components
Set in upper camel case. Each component reserves a namespace that can only be used by that component. If you see an element set in upper camel case, you know it’s a component and therefore has its own `.scss` partial in the `/components` directory of your project, or is already a global component managed by Origin.

[Learn more about component syntax]({{ site.baseurl }}/guidance/components/)

{% highlight scss %}
.ComponentName {}
.NavBar {}
{% endhighlight %}


## Layout components
Set in upper camel case and `l-` namespaced to signal that they’re purely concerned with layout rather than functional or interaction behaviour.

{% highlight scss %}
.l-ComponentName {}
.l-Container {}
{% endhighlight %}


## Utilities
Set in regular, lowercase CSS syntax because they typically only manipulate a single CSS property and value.

[Learn more about utility syntax]({{ site.baseurl }}/guidance/utilities/)

### Using utilities in `.scss` files
{% highlight scss %}
.SomeComponent {
  @include background-color(fa-blue);
  @include margin(large);  
}
{% endhighlight %}

### Using utilities in HTML
{% highlight html %}
<div class="u-background-color--fa-blue u-margin--large"></div>
{% endhighlight %}
