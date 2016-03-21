---
categories: components
layout: page
title: Card
---
Cards are self-contained modules of text and, optionally, media. They automatically expand to fit the width of their parent container, but can be constrained using our Grid component.

Cards always work best on a light gray or blue background.

Dev note: does this represent a new class of Origin item, a _real_ component? Are all others just now really just elements?

## Simple
<div class="u-background-color--gray-16">
{% example html %}
<div class="Card">
  <header class="Card-header">
    <h3 class="Card-header-title">
      Heading
    </h3>
  </header>
  <div class="Card-body">
    <div class="Card-body--max-width">
      <p>
        The `Card-body` is where the bulk of the written content for the card lives. It has a white background to ensure it's always displayed consistently. The `Card-body--max-width` child element ensures content can always be limited to a sensible width for reading.
      </p>
      <a class="Button Button--primary" href="#" role="button">
        Link button
      </a>
    </div>
  </div>
</div>
{% endexample %}
</div>


## Centre aligned text
<div class="u-background-color--gray-16">
{% example html %}
<div class="Card Card--text-align--center">
  <header class="Card-header">
    <h3 class="Card-header-title">
      Limited Company
    </h3>
  </header>
  <div class="Card-body">
    <h4 class="Heading Heading--large Heading--space--large">
      <span class="u-font-size--xx-large u-text-color--fa-blue">&pound;29</span><span class="u-font-weight--light u-text-color--fa-blue">/month</span> <span class="u-font-weight--light u-text-color--gray-7">+ VAT</span>
    </h4>
    <p>
      <a class="Button Button--primary" href="https://signup.freeagent.com" role="button" title="Try FreeAgent as a Limited Company">
      Try FreeAgent
      </a>
    </p>
    <p class="u-margin-bottom--0">
      All the great FreeAgent <a href="http://www.freeagent.com/tour/dashboard">features</a> and our free award-winning support
    </p>
    <p class="u-font-weight--semi-bold u-margin-bottom--0 u-text-color--fa-green">
      +
    </p>
    <ul class="List List--bare">
      <li>Corporation Tax</li>
      <li>Dividend Vouchers</li>
    </ul>
  </div>
</div>
{% endexample %}
</div>


## With image
<div class="u-background-color--gray-16">
{% example html %}
<div class="Card">
  <header class="Card-header">
    <h3 class="Card-header-title">
      Heading
    </h3>
  </header>
  <figure class="Card-media">
    <img class="Card-media-item" src="http://www.fillmurray.com/460/300" alt="Bill Murray with daisies" />
  </figure>
  <div class="Card-body">
    <div class="Card-body--max-width">
      <p>
        When you sign up, our UK-based and super-friendly Support Accountants are on hand
        to guide you through the set-up process. And once you’re using FreeAgent, they’re right
        there if you need them.
      </p>
      <a class="Button Button--primary" href="#" role="button">
        Link button
      </a>
    </div>
  </div>
</div>
{% endexample %}
</div>


## Card groups
<div class="u-background-color--gray-16">
{% example html %}
<div class="CardGroup">
  <div class="Card">
    <header class="Card-header">
      <h3 class="Card-header-title">
        Heading
      </h3>
    </header>
    <div class="Card-body">
      <p>
        Cards can be grouped together, joined such that they appear as one whole unit. The first and last Cards have their styles amended.
      </p>
    </div>
  </div>
  <div class="Card">
    <div class="Card-body">
      <p>
        Cards can be grouped together, joined such that they appear as one whole unit. The first and last Cards have their styles amended.
      </p>
    </div>
  </div>
  <div class="Card">
    <div class="Card-body">
      <p>
        When you sign up, our UK-based and super-friendly Support Accountants are on hand
        to guide you through the set-up process. And once you’re using FreeAgent, they’re right
        there if you need them.
      </p>
    </div>
  </div>
</div>
{% endexample %}
</div>
