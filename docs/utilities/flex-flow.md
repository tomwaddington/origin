---
categories: utilities
layout: page
scss-filename: _flex-flow.scss
title: flex-flow
---
Use to apply `flex-flow` values with our mixin.

The `flex-flow` property is a shorthand for setting the [`flex-direction`]({{ site.baseurl }}/utilities/flex-direction) and [`flex-wrap`]({{ site.baseurl }}/utilities/flex-wrap) properties, which together define the flex container's main and cross axes.

[http://w3.org/tr/css3-flexbox/#flex-flow-property](http://w3.org/tr/css3-flexbox/#flex-flow-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `<flex-direction> || <flex-wrap>`
* `row nowrap` (default)

### Examples
<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--flex-flow DocsExample-preview--flex-flow1">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleFlexContainer">
        <div class="u-background-color--gray-15">Flex item with less content</div>
        <div class="u-background-color--gray-13">The flex-flow property is a shorthand for setting the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes.</div>
        <div class="u-background-color--gray-12">Flex item with less content</div>
      </div>
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include flex-flow(row nowrap);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--flex-flow DocsExample-preview--flex-flow2">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleFlexContainer">
        <div class="u-background-color--gray-15">Flex item with less content</div>
        <div class="u-background-color--gray-13">The flex-flow property is a shorthand for setting the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes.</div>
        <div class="u-background-color--gray-12">Flex item with less content</div>
      </div>
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include flex-flow(row wrap);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--flex-flow DocsExample-preview--flex-flow3">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleFlexContainer">
        <div class="u-background-color--gray-15">Flex item with less content</div>
        <div class="u-background-color--gray-13">The flex-flow property is a shorthand for setting the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes.</div>
        <div class="u-background-color--gray-12">Flex item with less content</div>
      </div>
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include flex-flow(column nowrap);
}
{% endexample %}
</div>

<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--flex-flow DocsExample-preview--flex-flow4">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleFlexContainer">
        <div class="u-background-color--gray-15">Flex item with less content</div>
        <div class="u-background-color--gray-13">The flex-flow property is a shorthand for setting the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes.</div>
        <div class="u-background-color--gray-12">Flex item with less content</div>
      </div>
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include flex-flow(column-reverse wrap);
}
{% endexample %}
</div>
