---
categories: utilities
layout: page
scss-filename: _text-formatting.scss
title: text-formatting
---
Truncate text, force text onto multiple lines, and apply values for common properties like `font-kerning`, `font-style`, `text-align`, `white-space`, `word-wrap` without mixins and utility classes.

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Truncate text
Prevent text from wrapping onto multiple lines, and instead truncates it with an ellipsis.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-background-color--gray-13" style="width: 50%;">
  <div class="u-text-truncate">
    This text will be truncated when it reaches the boundaries its parent container
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include text-truncate;
}
{% endexample %}
</div>


## Text on multiple lines
Force text onto multiple lines. Only required when the text of its parent element is being truncated.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-text-truncate" style="width: 50%;">
  <div class="u-background-color--gray-15 u-text-truncate">
    This text will be truncated when it reaches the boundaries its parent container
  </div>
  <div class="u-background-color--gray-13 u-text-multiLine">
    This text will wrap despite its parent container having styles that force text content to be truncated  
  </div>
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include text-multiLine;
}
{% endexample %}
</div>


## font-style

### Values
* `italic`
* `normal`
* `oblique`

{% example html %}
<div class="u-font-style--italic">
  Apply italics using `font-style`
</div>
{% endexample %}

If a given font family has an italic or oblique face embedded, the browser will select that face. If no italic or oblique face is available, the browser will mimic the sloping effect. If italic is defined and there is no italic face available, the browser will look for an oblique face before it tries to mimic the italic. The same applies to oblique; it too will look first for an italic face.

{% example html %}
<div class="u-font-style--normal">
  Reinstate normal `font-style`
</div>
{% endexample %}

Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face. However, if the font being used does not have italic or oblique faces available, in most cases there is little, if any, difference between italic and oblique.

{% example html %}
<div class="u-font-style--oblique">
  Apply oblique `font-style`
</div>
{% endexample %}


## text-align

### Values
* `center`
* `justify`
* `left`
* `right`

{% example html %}
<div class="u-text-align--center">
  Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned.
</div>
{% endexample %}

{% example html %}
<div class="u-text-align--justify">
  Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned.
</div>
{% endexample %}

{% example html %}
<div class="u-text-align--left">
  Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned.
</div>
{% endexample %}

{% example html %}
<div class="u-text-align--right">
  Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned. Using the `text-align` utility classes allows us to define the way text is aligned.
</div>
{% endexample %}


## font-kerning
Controls the usage of kerning information in a font file. If the font is well-kerned, using `font-kerning` will allow for optimum spacing between characters.

<div class="DocsExample DocsExample--grouped DocsExample--labelUtilityClasses">
{% example html %}
<div class="u-font-kerning--normal">
  If the font is well-kerned, using `font-kerning` will allow for optimum spacing between characters.
</div>
{% endexample %}
</div>

<div class="DocsExample DocsExample--labelMixins DocsExample--renderHidden">
{% example scss %}
.MyComponent {
  @include font-kerning(normal);
}
{% endexample %}
</div>


## white-space
{% example html %}
<div class="u-background-color--gray-13 u-overflow--hidden">
  <div class="u-white-space--nowrap">
    Prevent text from wrapping, without any truncation. Prevent text from wrapping, without any truncation. Prevent text from wrapping, without any truncation. Prevent text from wrapping, without any truncation.
  </div>
</div>
{% endexample %}


## word-wrap
Specify whether or not the browser can break lines within words to prevent overflow when an otherwise unbreakable string is too long to fit in its containing element.

### Values
* `break-word`
* `normal`

{% example html %}
<div class="u-background-color--gray-13" style="width: 50%;">
  <div class="u-word-wrap--break-word">
    Becausethisisasinglestringitnormallywouldn'tbebrokenbythebrowsertopreventoverflow
  </div>
</div>
{% endexample %}

{% example html %}
<div class="u-background-color--gray-13" style="width: 50%;">
  <div class="u-word-wrap--normal">
    Becausethisisasinglestringitnormallywouldn'tbebrokenbythebrowsertopreventoverflow
  </div>
</div>
{% endexample %}
