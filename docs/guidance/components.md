---
categories: guidance
layout: page
title: Components
---

Components are groups of [utilities]({{ site.baseurl }}/guidance/utilities) (and often vanilla CSS) designed to perform a specific functional purpose. [Button]({{ site.baseurl }}/components/button), [Table]({{ site.baseurl }}/components/table), [SegmentedControl]({{ site.baseurl }}/components/SegmentedControl), and [NavBar]({{ site.baseurl }}/components/navbar) are examples of components.

Components are design patterns we use across multiple applications. They provide familiar and predictable behaviour for customers, and keep our code from becoming bloated.

## Naming conventions

The base class name (e.g., `MyComponent`) reserves a namespace that can only be used by that component.

All selectors in a component file must start with the component namespace. For example, a component called `MyComponent` could have the following CSS, where every selector starts with the string `MyComponent`.

<div class="DocsExample ">
{% highlight scss %}
.MyComponent
.MyComponent--someVariant
.MyComponent-childOne
.MyComponent-child-childOfChild
{% endhighlight %}
</div>

Each class provides a hook to style specific elements within the HTML definition.

<div class="DocsExample ">
{% highlight html %}
<article class="MyComponent">
  <h1 class="MyComponent-title"></h1>
  <img class="MyComponent-image" src="" alt="">
  <p class="MyComponent-text">
    <span class="MyComponent-time"></span>
  </p>
</div>
{% endhighlight %}
</div>


## Documenting implementation details

Components must document their implementation. The CSS comments for a component
should seek to answer the following questions:

* What is the intended presentation?
* What are the modifiers and states?
* What are the reasons for specific, opaque property values.
* What are the known limitations?

[How to write your CSS comments]({{ site.baseurl }}/guidance/code-style/#css-comments)

## Naming components
Syntax:

{% highlight bash %}
<ComponentName>[--modifierName|-childName]
{% endhighlight %}

Component names should be in upper camel case. In addition to no other elements of our HTML & CSS using upper camel case, there are several benefits:

* It helps to distinguish between the classes for the root of the component, child elements, and modifications
* It keeps the specificity of selectors low
* It helps to decouple presentation semantics from document semantics


#### Base class name

<div class="DocsExample ">
{% highlight scss %}
.MyComponent
.TableView
.DropdownMenu
.Button
.Card
{% endhighlight %}
</div>

<div class="DocsExample ">
{% highlight html %}
<div class="MyComponent">
  …
</div>
{% endhighlight %}
</div>

#### Variant/modifier class names

A component modifier is a class that modifies the presentation of the base component in some form (for a certain configuration of the component)

* Write modifier names in lower camel case
* Separate modifiers from the component name by two hyphens
* Include modifiers _in addition_ to the base component class

<div class="DocsExample ">
{% highlight scss %}
/* Core `SegmentedControl` styles */
.SegmentedControl {}

/* High-contrast `SegementedControl` styles */
.SegmentedControl--contrastHigh {}
{% endhighlight %}
</div>

<div class="DocsExample ">
{% highlight html %}
<div class="SegmentedControl SegmentedControl--contrastHigh">…</div>
{% endhighlight %}
</div>


#### Child element class names

A component child is a class that is attached to a child node of a component. It's responsible for applying presentation directly to the child on behalf of a particular component. Write child names in lower camel case.

<div class="DocsExample ">
{% highlight html %}
<ol class="TableView">
  <li class="TableView-cell">
    <h3 class="TableView-cell-title">…</h3>
    <h4 class="TableView-cell-label">…</h4>
  </li>
</ol>
{% endhighlight %}
</div>

#### State class names

Use `is-stateName` to reflect changes to a component's state. The state name must be lower camel case. **Never style these classes directly; they should always be used as an adjoining class.**

This means that the same state names can be used in multiple contexts, but every component must define its own styles for the state (as they are scoped to the component).

Don't use `is-stateName` classes when you should be using a `ComponentName--modifierName` class. `is-stateName` classes should only be used for **temporary** states (e.g. don't use `is-flash` to create a flash notice when it should actually be `Notice--flash`).

<div class="DocsExample ">
{% highlight scss %}
.DropdownMenu {}
.DropdownMenu.is-expanded {}
{% endhighlight %}
</div>

<div class="DocsExample ">
{% highlight html %}
<div class="DropdownMenu is-expanded">
  …
</div>
{% endhighlight %}
</div>

### Styling dependencies

**A component should not know about the implementation of its dependencies**.
The appearance of dependencies must be configured using the interface they provide.

Controlling dimensions, margins, position, and inheritable styles of a
component can be done _indirectly_. Add a class to its root element, or wrap
it in another element.


## When should I create components?

Generally: as soon as possible. It’s never too early to think about creating a component, as doing so is the best way to check whether there’s already an existing component that does some (or all) of what’s needed.

Part of the point of the differing syntax (see above) is to help you decide what kind of component you’re building.
