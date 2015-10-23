---
layout: page
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

## Highlighted rows and headers

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

### Highlighted rows with vertical borders

Used when the standard styling doesn't provide enough clarity for the content. Requires the use of the prominent styling on the table header.

{% example html %}
<table class="Table">
  <thead>
    <tr class="Table-row Table-row--verticalBorders Table-row--verticalBorders--white">
      <th class="Table-header Table-header--prominent">Table header</th>
      <th class="Table-header Table-header--prominent">Table header</th>
      <th class="Table-header Table-header--prominent">Table header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="Table-row Table-row--verticalBorders">
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr class="Table-row Table-row--verticalBorders">
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
{% endexample %}

### Rows with less prominence

Used for rows (or cells) that contain secondary data.

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

## Parent rows

Used to demonstrate hierarchy within a table.

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
    <tr class="Table-row Table-row--parent">
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
