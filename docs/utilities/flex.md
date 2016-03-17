---
categories: utilities
layout: page
scss-filename: _flex.scss
title: flex
---
Use to apply `flex` shorthand values with our mixin.

The `flex` property specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis. When an element is a flex item, `flex` is consulted instead of the main size property to determine the main size of the element. If an element is not a flex item, `flex` has no effect.

[http://w3.org/tr/css3-flexbox/#flex-property](http://w3.org/tr/css3-flexbox/#flex-property)

This work is derived from [sass-flex-mixin](https://github.com/mastastealth/sass-flex-mixin).

### Values
* `0 1 auto` (default)
* `[ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’> ]`
* `none`

### Examples
<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--flex DocsExample-preview--flex1">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleFlexContainer">
        <div class="u-background-color--gray-15">Flex item</div>
        <div class="u-background-color--gray-13">Flex item</div>
        <div class="u-background-color--gray-12">Flex item</div>
        <div class="u-background-color--gray-11">Flex item</div>
      </div>
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-children {
  @include flex(0 1 25%);
}
{% endexample %}
</div>


<div class="DocsExample DocsExample--renderHidden">
  <div class="DocsExample-preview DocsExample-preview--flex DocsExample-preview--flex2">
    <div class="DocsExample-preview-child">
      <div class="DocsExampleFlexContainer">
        <div class="u-background-color--gray-15">Flex item one, doesn't shrink</div>
        <div class="u-background-color--gray-12">Flex item two. Flex item two. Flex item two. Flex item two. Flex item two. Flex item two. Flex item two. Flex item two. Flex item two.</div>
      </div>
    </div>
  </div>
{% example scss %}
.MyComponent {
  @include flexbox;
}

.MyComponent-childOne {
  @include flex(0 0 40%);
}

.MyComponent-childTwo {
  @include flex(0 1 60%);
}
{% endexample %}
</div>
