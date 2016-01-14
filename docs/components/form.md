---
categories: components
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
        <input class="Form-textInput" name="first-name" placeholder="Nathan" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel Form-fieldLabel--required" for="last-name">
        Last Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" name="last-name" placeholder="Barley" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel" for="email-address">
        Billing Email Address
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" name="email-address" placeholder="nathan@medianode.com" type="email" />
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
    <div class="Form-field">
      <label class="Form-fieldLabel" for="subdomain">
        Subdomain
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput Form-textInput--short" name="subdomain" placeholder="medianode" type="text" />
        <span>.freeagent.com</span>
        <span class="Form-inputNote">
          The URL where you will log in to FreeAgent.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel Form-fieldLabel--required" for="subdomain">
        Were you on a flat rate scheme on your VAT Registration Date?
      </label>
      <div class="Form-field-inputs">
        <input class="Form-radioInput" id="vat-frs-yes" name="radio_example" type="radio" />
        <label class="Form-inlineLabel" for="vat-frs-yes">Yes</label>
        <input class="Form-radioInput Form-inlineInput" id="vat-frs-no" name="radio_example" type="radio" />
        <label class="Form-inlineLabel" for="vat-frs-no">No</label>
        <span class="Form-inputNote">
          Only affects the automatically-created initial VAT returns
        </span>
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


## Desktop with Block Fieldsets

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
        <input class="Form-textInput" name="first-name" placeholder="Nathan" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel Form-fieldLabel--required" for="last-name">
        Last Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" name="last-name" placeholder="Barley" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel" for="email-address">
        Billing Email Address
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" name="email-address" placeholder="nathan@medianode.com" type="email" />
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
    <div class="Form-field">
      <label class="Form-fieldLabel" for="subdomain">
        Subdomain
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput Form-textInput--short" name="subdomain" placeholder="medianode" type="text" />
        <span>.freeagent.com</span>
        <span class="Form-inputNote">
          The URL where you will log in to FreeAgent.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-fieldLabel Form-fieldLabel--required" for="subdomain">
        Were you on a flat rate scheme on your VAT Registration Date?
      </label>
      <div class="Form-field-inputs">
        <input class="Form-radioInput" id="vat-frs-yes" placeholder="medianode" type="radio" />
        <label class="Form-inlineLabel" for="vat-frs-yes">Yes</label>
        <input class="Form-radioInput Form-inlineInput" id="vat-frs-no" placeholder="medianode" type="radio" />
        <label class="Form-inlineLabel" for="vat-frs-no">No</label>
        <span class="Form-inputNote">
          Only affects the automatically-created initial VAT returns
        </span>
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
