---
categories: utilities
layout: page
scss-filename: interaction.scss
title: interaction
---
Use to apply values related to interactions like `pointer-events`, `tap-highlight`, and `user-select`, using utility classes.

## pointer-events
Allows for control over how HTML elements respond to mouse/touch events, including CSS hover/active states, click/tap events in JS, and whether or not the cursor is visible.

### Values
* `auto` (restores the default functionality)
* `none` (prevents all click, state and cursor options)

{% example html %}
<div class="u-background-color--gray-13 u-pointer-events--none">
  This element has all click, state, and cursor options disabled
</div>
{% endexample %}


## tap-highlight
Disables the default tap highlighting behaviour in WebKit-based browsers. Removing the default behaviour isn't generally recommended because it provides useful visual feedback, but we use it in our hybrid mobile apps apps to better simulate a native app experience.

### Values
* `none`

{% example html %}
<a class="u-tap-highlight--none" href="#">
  This link will not inherit the default `tap-highlight` behaviour
</a>
{% endexample %}


## user-select
Prevents the user from selecting text.

### Values
* `none`

{% example html %}
<div class="u-user-select--none">
  None of this text is selectable, and therefore can be copied/pasted.
</div>
{% endexample %}
