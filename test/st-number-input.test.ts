import { html, fixture, expect } from '@open-wc/testing';

import { StNumberInput } from '../src/StNumberInput.js';
import '../st-number-input.js';

describe('StNumberInput', () => {
  it('has a default title "Hey there" and value 5', async () => {
    const el = await fixture<StNumberInput>(html`<st-number-input></st-number-input>`);

    expect(el.title).to.equal('Hey there');
    expect(el.value).to.equal(5);
  });

  it('increases the value on button click', async () => {
    const el = await fixture<StNumberInput>(html`<st-number-input></st-number-input>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.value).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<StNumberInput>(html`<st-number-input title="attribute title"></st-number-input>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<StNumberInput>(html`<st-number-input></st-number-input>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
