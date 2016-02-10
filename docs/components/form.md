---
categories: components
layout: page
title: Forms
---

Add description

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Field Types

These are the different field types that we use. Typically they'd always be wrapped in a form element, but here they are isolated for clarity.


### Text Field

{% example html %}
<div class="Form-field">
  <label class="Form-field-label">
    Text Field
  </label>
  <div class="Form-field-inputs">
    <input class="Form-textInput" placeholder="nathan.barley@medianode.com" type="text">
  </div>
</div>
<div class="Form-field">
  <label class="Form-field-label">
    Small Text Field
  </label>
  <div class="Form-field-inputs">
    <input class="Form-textInput Form-textInput--small" placeholder="AB123456C" type="text">
  </div>
</div>
<div class="Form-field">
  <label class="Form-field-label">
    X-Small Text Field
  </label>
  <div class="Form-field-inputs">
    <input class="Form-textInput Form-textInput--x-small" placeholder="EH3 9QG" type="text">
  </div>
</div>
{% endexample %}


### Checkbox Field

{% example html %}
<div class="Form-field">
  <label class="Form-field-label">
  Checkbox Field</label>
  <div class="Form-field-inputs">
    <input class="Form-checkbox" type="checkbox">
  </div>
</div>
<div class="Form-field">
  <div class="Form-field-inputs">
    <input class="Form-checkbox" type="checkbox">
    <label class="Form-inlineLabel">Checkbox Field with Inline Label</label>
  </div>
</div>
<div class="Form-field">
  <label class="Form-field-label">
  Checkbox Group</label>
  <div class="Form-field-inputs">
    <input class="Form-checkbox" type="checkbox">
    <label class="Form-inlineLabel">
      Option 1
    </label>
    <br>
    <input class="Form-checkbox" type="checkbox">
    <label class="Form-inlineLabel">
      Option 2
    </label>
    <br>
    <input class="Form-checkbox" type="checkbox">
    <label class="Form-inlineLabel">
      Option 3
    </label>
  </div>
</div>
{% endexample %}


### Radio Input Field

{% example html %}
<div class="Form-field">
  <label class="Form-field-label Form-field-label--required" for="subdomain">
    Radio Group
  </label>
  <div class="Form-field-inputs">
    <input class="Form-radioInput" id="option_one" name="radio_example" type="radio" />
    <label class="Form-inlineLabel" for="option_one">
      Option 1
    </label>
    <br>
    <input class="Form-radioInput" id="option_two" name="radio_example" type="radio" />
    <label class="Form-inlineLabel" for="option_two">
      Option 2
    </label>
  </div>
</div>
{% endexample %}


### Select Dropdown Field

{% example html %}
<div class="Form-field">
  <label class="Form-field-label Form-field-label--required" for="subdomain">
    Select Dropdown
  </label>
  <div class="Form-field-inputs">
    <select class="Form-selectInput" id="select_example" name="select_example">
      <option value="option_one">Option 1</option>
      <option value="option_two">Option 2</option>
    </select>
  </div>
</div>
{% endexample %}


### Optional and Required Fields

As a general rule we highlight whichever type (optional or required) is in the minority in a given form.

{% example html %}
<div class="Form-field Form-field--isOptional">
  <label class="Form-field-label">
    Optional Field
  </label>
  <div class="Form-field-inputs">
    <input class="Form-textInput" placeholder="" type="text">
  </div>
</div>
<div class="Form-field Form-field--isRequired">
  <label class="Form-field-label">
    Required Field
  </label>
  <div class="Form-field-inputs">
    <input class="Form-textInput" placeholder="" type="text">
  </div>
</div>
{% endexample %}


### Fields with Errors

{% example html %}
<div class="Form-field Form-field--isRequired Form-field--hasErrors">
  <label class="Form-field-label">
    Email Address
  </label>
  <div class="Form-field-inputs">
    <input class="Form-textInput" placeholder="" type="text" value="nathan.barley.com">
    <div class="Form-field-error">
      <span>You must enter a valid email address</span>
    </div>
  </div>
</div>
{% endexample %}


### Inactive Fields

Fields that have been disabled and are not editable. This should always denote a temporary state, and should not be used for information that is permanently read-only.

Avoid using placeholders on inactive fields as they may appear to be a saved input.

{% example html %}
<div class="Form-field Form-field--isDisabled">
  <label class="Form-field-label">
  Inactive Field</label>
  <div class="Form-field-inputs">
    <input class="Form-textInput" placeholder="" type="text" value="Immutable value" disabled>
  </div>
</div>
<div class="Form-field">
  <label class="Form-field-label Form-field-label--required" for="subdomain">
    Inactive Select
  </label>
  <div class="Form-field-inputs">
    <select class="Form-selectInput" id="select_example" name="select_example" disabled>
      <option value="option_one">Option 1</option>
      <option value="option_two">Option 2</option>
    </select>
  </div>
</div>
{% endexample %}


## Full Form Examples

### Desktop Form

Add a description here

{% example html %}
<form class="Form">
  <fieldset class="Form-fieldset">
    <span class="Form-fieldset-legend">
      Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="first-name">
        First Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" name="first-name" placeholder="Nathan" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="last-name">
        Last Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" name="last-name" placeholder="Barley" type="text" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="first-name">
        Company
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" disabled name="first-name" placeholder="" type="text" value="Medianode" />
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-field-label" for="email-address">
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
      <label class="Form-field-label" for="personal-account">
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
      <label class="Form-field-label">

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
        <input class="Form-checkbox" id="paypal" type="checkbox" disabled />
        <label class="Form-inlineLabel" for="paypal">
          PayPal
        </label>
      </div>
    </div>
  </fieldset>
  <fieldset class="Form-fieldset">
    <span class="Form-fieldset-legend">
      Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-field-label" for="subdomain">
        Subdomain
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput Form-textInput--small" name="subdomain" placeholder="medianode" type="text" />
        <span>.freeagent.com</span>
        <span class="Form-inputNote">
          The URL where you will log in to FreeAgent.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="subdomain">
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
    <a class="Form-cancel" href="#" role="button">
      Discard Changes
    </a>
  </div>
</form>
{% endexample %}


### Desktop with Block Fieldsets

Add a description here

{% example html %}
<form class="Form">
  <fieldset class="Form-fieldset Form-fieldset--block">
    <span class="Form-fieldset-legend">
      Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="first-name">
        First Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" name="first-name" placeholder="Nathan" type="text" />
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
  </fieldset>
  <fieldset class="Form-fieldset Form-fieldset--block">
    <span class="Form-fieldset-legend">
      Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-field-label" for="subdomain">
        Subdomain
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput Form-textInput--small" name="subdomain" placeholder="medianode" type="text" />
        <span>.freeagent.com</span>
        <span class="Form-inputNote">
          The URL where you will log in to FreeAgent.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="subdomain">
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
    <a class="Form-cancel" href="#" role="button">
      Discard Changes
    </a>
  </div>
</form>
{% endexample %}


### Stacked Variant

A variant of the desktop form with the field labels stacked on top of the inputs.

{% example html %}
<form class="Form Form--stacked">
  <fieldset class="Form-fieldset">
    <span class="Form-fieldset-legend">
      Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="first-name">
        First Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" name="first-name" placeholder="Nathan" type="text" />
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
      <label class="Form-field-label">
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
  <fieldset class="Form-fieldset Form-fieldset--block">
    <span class="Form-fieldset-legend">
      Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-field-label" for="subdomain">
        Subdomain
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput Form-textInput--small" name="subdomain" placeholder="medianode" type="text" />
        <span>.freeagent.com</span>
        <span class="Form-inputNote">
          The URL where you will log in to FreeAgent.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="subdomain">
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
    <a class="Form-cancel" href="#" role="button">
      Discard Changes
    </a>
  </div>
</form>
{% endexample %}


### Legacy Font Variant

A variant of the desktop form using the legacy app font.

{% example html %}
<form class="Form Form--legacy">
  <fieldset class="Form-fieldset">
    <span class="Form-fieldset-legend">
      Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="first-name">
        First Name
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput" name="first-name" placeholder="Nathan" type="text" />
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
      <label class="Form-field-label">
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
  <fieldset class="Form-fieldset Form-fieldset--block">
    <span class="Form-fieldset-legend">
      Block Fieldset Legend
    </span>
    <div class="Form-field">
      <label class="Form-field-label" for="subdomain">
        Subdomain
      </label>
      <div class="Form-field-inputs">
        <input class="Form-textInput Form-textInput--small" name="subdomain" placeholder="medianode" type="text" />
        <span>.freeagent.com</span>
        <span class="Form-inputNote">
          The URL where you will log in to FreeAgent.
        </span>
      </div>
    </div>
    <div class="Form-field">
      <label class="Form-field-label Form-field-label--required" for="subdomain">
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
    <a class="Form-cancel" href="#" role="button">
      Discard Changes
    </a>
  </div>
</form>
{% endexample %}
