import { LitElement, html, css } from "lit";
import { property, query } from 'lit/decorators.js';


export class StNumberInput extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-flow: column nowrap;
      height: 49px;
      color: var(--st-number-input-text-color, #000);
      padding: 10px;
    }
    .input-container {
      display: flex;
      flex-flow: row nowrap;
    }
    label {
      font-size: 0.8rem;
      padding-bottom: 10px;
    }
    input {
      -webkit-appearance: textfield;
        -moz-appearance: textfield;
              appearance: textfield;
      box-sizing: border-box;
      height: 49px;
      border: none;
      font-size: 1rem;
      padding: 10px;
      line-height: 1.6;
      border-radius: var(--theme-radii-md) 0 0 var(--theme-radii-md);
    }
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    input:focus {
      outline-offset: -2px;
      outline: solid 2px var(--theme-colors-primary);
    }
    button {
      height: 49px;
      width: 49px;
      border: none;
      cursor: pointer;
      color: var(--theme-colors-body-text);
      background-color: var(--theme-colors-secondary-bg);
      transition: color 300ms, background-color 300ms;
      text-align: center;
      font-size: 1rem;
      font-weight: 600;
    }
    button:hover, button:focus {
      color: var(--theme-colors-white);
      background-color: var(--theme-colors-primary);
      transition: none;
      outline: none;
    }
    button:active {
      outline: none;
      border: none;
    }
    button:last-of-type {
      border-radius:  0 var(--theme-radii-md) var(--theme-radii-md) 0;
    }
  `;

  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) label = false;
  @property({ type: Number, reflect: true }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: Boolean }) showButtons = true;

  @query('input#value')
  private input!: HTMLInputElement;

  private decrement() {
    this.value -= this.step;
  }

  private increment() {
    this.value += this.step;
  }

  private updateIfValid() {
    if (this.input.validity.valid) {
      this.value = this.input.valueAsNumber
    }
  }


  render() {
    return html`
      <label>
        ${this.label}
      </label>
      <div class='input-container'>
        <input
          type='number'
          id='value'
          .value=${this.value}
          min=${this.min}
          max=${this.max}
          step=${this.step}
          @blur=${this.updateIfValid}
        />
        ${this.showButtons ? html`
          <button @click=${this.decrement}>&minus;</button>
          <button @click=${this.increment}>&plus;</button>
        ` : ``
        }
      </div>
    `;
  }

}

