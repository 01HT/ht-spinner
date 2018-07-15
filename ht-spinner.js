'use strict';
import { LitElement, html } from '@polymer/lit-element';
import "@polymer/paper-spinner/paper-spinner.js";

class HTSpinner extends LitElement {
  _render({}) {
    return html`
    <style>
    :host {
      display: block;
      position: relative;
      box-sizing: border-box;
    }

    paper-spinner {
      --paper-spinner-stroke-width: 4px;
      width:64px;
      height:64px;
    }

    :host([page]) #container {
      display: flex;
      justify-content:center;
      align-items:center;
      min-height: calc(100vh - 128px);
    }

    :host([button]) paper-spinner {
      width: 32px;
      height: 32px;
      --paper-spinner-stroke-width: 2px;
      margin-right: 8px;
    }
    </style>
    <div id="container">
      <paper-spinner active></paper-spinner>
    </div>`;
  }

  static get is() {
      return 'ht-spinner';
  }
}

customElements.define(HTSpinner.is, HTSpinner);