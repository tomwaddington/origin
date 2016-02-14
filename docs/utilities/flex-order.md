---
categories: utilities
layout: page
scss-filename: _flex-order.scss
title: flex-order
---
Use to apply `order` values with our mixin.

The `order` property controls the order in which flex items appear within their flex container, by assigning them to ordinal groups.

[http://w3.org/tr/css3-flexbox/#order-property](http://w3.org/tr/css3-flexbox/#order-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `0` (default)
* `<integer>`

### Examples
<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--flex-order DocsExample-preview--flex-order1">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleFlexContainer">
        <div class="u-background-color--gray-13">Flex item one</div>
        <div class="u-background-color--gray-12">Flex item two</div>
        <div class="u-background-color--gray-11">Flex item three</div>
      </div>
    </div>
  </div>
{% example scss %}
.FlexItemTwo {
  @include flex-order(3);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--flex-order DocsExample-preview--flex-order2">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleFlexContainer">
        <div class="u-background-color--gray-14">Flex item one</div>
        <div class="u-background-color--gray-13">Flex item two</div>
        <div class="u-background-color--gray-12">Flex item three</div>
        <div class="u-background-color--gray-11">Flex item four</div>
        <div class="u-background-color--gray-9">Flex item five</div>
      </div>
    </div>
  </div>
{% example scss %}
.FlexItemOne {
  @include flex-order(5);
}
.FlexItemTwo {
  @include flex-order(6);
}
{% endexample %}
</div>
