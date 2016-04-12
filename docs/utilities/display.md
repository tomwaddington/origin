---
categories: utilities
layout: page
scss-filename: _display.scss
title: display
---
Apply `display` values with utility classes. Values can optionally be applied only at specific [breakpoints]({{ site.baseurl }}/utilities/breakpoint).

### Values
* `block`
* `inline`
* `inline-block`
* `none`
* `table`
* `table-cell`
* `table-row`

### Examples
{% example html %}
<div class="u-background-color--gray-13 u-display--block">
  This is displayed as a block-level element
</div>
{% endexample %}


<div class="DocsExample DocsExample--grouped">
{% example html %}
<div class="u-background-color--gray-13 u-display--inline-block u-md-display--block">
  This is an inline-block element until the medium breakpoint, when it becomes block-level
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  display: inline-block;

  @include break(md) {
    display: block;
  }
}
{% endexample %}
</div>


{% example html %}
<div class="u-background-color--gray-13 u-display--none">
  This is hidden from view
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-13 u-display--table">
  This is displayed as a `table` element
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-13 u-display--table-cell">
  This is displayed as a `table-cell` element
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-13 u-display--table-row">
  This is displayed as a `table-row` element
</div>
{% endexample %}
