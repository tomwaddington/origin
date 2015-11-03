---
layout: page
title: Form
---

##Variants

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Desktop

Add a description here

{% example html %}
<form class="Form Form--legacy">
  <fieldset class="Form-fieldset">
    <span class="Form-fieldset-legend">
      Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-fieldLabel Form-fieldLabel--required" for="first-name">
        First Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-input" name="first-name" placeholder="Nathan" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel Form-fieldLabel--required" for="last-name">
        Last Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-input" name="last-name" placeholder="Barley" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel" for="email-address">
        Billing Email Address
      </label>
      <div class="Form-field-inputs">
        <input class="Form-input" name="email-address" placeholder="nathan@medianode.com" type="email" />
        <span class="Form-inputNote">
          This is the address that invoices will be sent to.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel" for="personal-account">
        This is a personal account
      </label>
      <div class="Form-field-inputs">
        <input class="Form-checkbox" id="personal-account" type="checkbox" />
      </div>
    </div>
    <div class="Form-field">
      <div class="Form-field-inputs">
        <input class="Form-checkbox" id="vat-registered?" type="checkbox" />
        <label class="Form-inlineLabel" for="vat-registered?">
          VAT registered
        </label>
        <span class="Form-inputNote">
          VAT registration affects FreeAgent's tax calculations.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel">
        Online Payment Options
      </label>
      <div class="Form-field-inputs">
        <input class="Form-checkbox" id="gc-mandate" type="checkbox" />
        <label class="Form-inlineLabel" for="gc-mandate">
          GoCardless Direct Debit Mandate
        </label>
        <br>
        <input class="Form-checkbox" id="gc-one-off" type="checkbox" />
        <label class="Form-inlineLabel" for="gc-one-off">
          GoCardless through Payment Portal
        </label>
        <br>
        <input class="Form-checkbox" id="paypal" type="checkbox" />
        <label class="Form-inlineLabel" for="paypal">
          PayPal
        </label>
      </div>
    </div>
  </fieldset>
  <div class="Form-actions">
    <button class="Button Button--legacy" type="submit">
      Save Changes
    </button>
    <a class="Form-cancel" href="#">
      Discard Changes
    </a>
  </div>
</form>
{% endexample %}


## Desktop Block Fieldsets

Add a description here

{% example html %}
<form class="Form Form--legacy">
  <fieldset class="Form-fieldset Form-fieldset--block">
    <span class="Form-fieldset-legend">
      Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-fieldLabel Form-fieldLabel--required" for="first-name">
        First Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-input" name="first-name" placeholder="Nathan" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel Form-fieldLabel--required" for="last-name">
        Last Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-input" name="last-name" placeholder="Barley" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel" for="email-address">
        Billing Email Address
      </label>
      <div class="Form-field-inputs">
        <input class="Form-input" name="email-address" placeholder="nathan@medianode.com" type="email" />
        <span class="Form-inputNote">
          This is the address that invoices will be sent to.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel" for="personal-account">
        This is a personal account
      </label>
      <div class="Form-field-inputs">
        <input class="Form-checkbox" id="personal-account" type="checkbox" />
      </div>
    </div>
    <div class="Form-field">
      <div class="Form-field-inputs">
        <input class="Form-checkbox" id="vat-registered?" type="checkbox" />
        <label class="Form-inlineLabel" for="vat-registered?">
          VAT registered
        </label>
        <span class="Form-inputNote">
          VAT registration affects FreeAgent's tax calculations.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel">
        Online Payment Options
      </label>
      <div class="Form-field-inputs">
        <input class="Form-checkbox" id="gc-mandate" type="checkbox" />
        <label class="Form-inlineLabel" for="gc-mandate">
          GoCardless Direct Debit Mandate
        </label>
        <br>
        <input class="Form-checkbox" id="gc-one-off" type="checkbox" />
        <label class="Form-inlineLabel" for="gc-one-off">
          GoCardless through Payment Portal
        </label>
        <br>
        <input class="Form-checkbox" id="paypal" type="checkbox" />
        <label class="Form-inlineLabel" for="paypal">
          PayPal
        </label>
      </div>
    </div>
  </fieldset>
  <div class="Form-actions">
    <button class="Button Button--legacy" type="submit">
      Save Changes
    </button>
    <a class="Form-cancel" href="#">
      Discard Changes
    </a>
  </div>
</form>
{% endexample %}
