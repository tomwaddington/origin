---
categories: components
layout: page
scss-filename: _table.scss
title: Table
---

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Default table

{% example html %}
<table class="Table">
  <thead>
    <tr>
      <th>Table header</th>
      <th>Table header</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Right-aligned content

Primarily used for displaying monetary values.

{% example html %}
<table class="Table Table--text-align--right">
  <thead>
    <tr>
      <th class="Table-cell Table-cell--text-align--left">Table header</th>
      <th>Table header</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="Table-cell Table-cell--text-align--left">Table cell</td>
      <td>£123.45</td>
      <td>£123.45</td>
    </tr>
    <tr>
      <td class="Table-cell Table-cell--text-align--left">Table cell</td>
      <td>£123.45</td>
      <td>£123.45</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Prominent rows and headers

Used to give prominence to unique rows, such as totals in a reporting table.

{% example html %}
<table class="Table">
  <thead>
    <tr>
      <th class="Table-header Table-header--prominent">Table header</th>
      <th class="Table-header Table-header--prominent">Table header</th>
      <th class="Table-header Table-header--prominent">Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr class="Table-row Table-row--prominent Table-row--bold">
      <td class="Table-cell">Prominent and bold table cell</td>
      <td class="Table-cell">Prominent and bold table cell</td>
      <td class="Table-cell">Prominent and bold table cell</td>
    </tr>
    <tr class="Table-row Table-row--bold">
      <td class="Table-cell">Bold table cell</td>
      <td class="Table-cell">Bold table cell</td>
      <td class="Table-cell">Bold table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Rows with vertical borders

Used when the standard styling doesn't provide enough clarity for the content. Requires the use of the prominent styling on the table header.

{% example html %}
<table class="Table">
  <thead>
    <tr class="Table-row Table-row--parentHeader Table-row--verticalBorders Table-row--verticalBorders--header">
      <th>Parent header</th>
      <th>Parent header</th>
      <th class="Table-cell Table-cell--bold">
        Parent header
      </th>
    </tr>
  </thead>
  <thead>
    <tr class="Table-row Table-row--verticalBorders Table-row--verticalBorders--header">
      <th>Table header</th>
      <th>Table header</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="Table-row Table-row--verticalBorders">
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr class="Table-row Table-row--prominent Table-row--verticalBorders Table-row--verticalBorders--white">
      <td class="Table-cell">Prominent table cell</td>
      <td class="Table-cell">Prominent table cell</td>
      <td class="Table-cell">Prominent table cell</td>
    </tr>
    <tr class="Table-row Table-row--verticalBorders">
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Individual cells with vertical borders

Used for creating a divider between columns or to highlight column groups.

{% example html %}
<table class="Table">
  <thead>
    <tr>
      <th>Table header</th>
      <th class="Table-cell--verticalBorder--header--left">Left border</th>
      <th class="Table-cell--verticalBorder--header--right">Right border</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td class="Table-cell--verticalBorder--left">Left border</td>
      <td class="Table-cell--verticalBorder--right">Right border</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td class="Table-cell--verticalBorder--left">Left border</td>
      <td class="Table-cell--verticalBorder--right">Right border</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Rows with minor content

Used for rows (or cells) that contain minor/inessential data, or data that
otherwise exists as metadata for other data in the table.

{% example html %}
<table class="Table">
  <thead>
    <tr>
      <th>Table header</th>
      <th>Table header</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="Table-cell--minor">Minor table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr class="Table-row Table-row--minor">
      <td>Minor table row</td>
      <td>Minor table row</td>
      <td>Minor table row</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Parent headers

Used when regular table headers require grouping.

{% example html %}
<table class="Table">
  <thead>
    <tr class="Table-row Table-row--parentHeader">
      <th colspan="3">Parent table header</th>
    </tr>
    <tr>
      <th>Table header</th>
      <th>Table header</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Child cell</td>
      <td>Child cell</td>
      <td>Child cell</td>
    </tr>
    <tr>
      <td>Child cell</td>
      <td>Child cell</td>
      <td>Child cell</td>
    </tr>
    <tr>
      <td>Child cell</td>
      <td>Child cell</td>
      <td>Child cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Parent rows

Used to demonstrate hierarchy within dense tables by grouping a number of child rows under a parent row.

{% example html %}
<table class="Table">
  <thead>
    <tr>
      <th>Table header</th>
      <th>Table header</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="Table-row Table-row--parent">
      <td>Parent cell</td>
      <td>Parent cell</td>
      <td>Parent cell</td>
    </tr>
    <tr>
      <td>Child cell</td>
      <td>Child cell</td>
      <td>Child cell</td>
    </tr>
    <tr>
      <td>Child cell</td>
      <td>Child cell</td>
      <td>Child cell</td>
    </tr>
    <tr class="Table-row Table-row--parent">
      <td>Parent cell</td>
      <td>Parent cell</td>
      <td>Parent cell</td>
    </tr>
    <tr>
      <td>Child cell</td>
      <td>Child cell</td>
      <td>Child cell</td>
    </tr>
    <tr>
      <td>Child cell</td>
      <td>Child cell</td>
      <td>Child cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Zebra stripes

Used for clarity in tables which may not be fully filled and therefore hard to scan.

{% example html %}
<table class="Table Table--zebraStripes">
  <thead>
    <tr>
      <th>Table header</th>
      <th>Table header</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Desktop variant

Applies the app's legacy `font-family`, Helvetica Neue.

{% example html %}
<table class="Table Table--desktop">
  <thead>
    <tr>
      <th>Table header</th>
      <th>Table header</th>
      <th>Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr class="Table-row Table-row--bold">
      <td class="Table-cell">Bold table cell</td>
      <td class="Table-cell">Bold table cell</td>
      <td class="Table-cell">Bold table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}
