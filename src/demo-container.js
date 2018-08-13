import '@polymer/iron-demo-helpers/demo-pages-shared-styles'
import '@polymer/iron-demo-helpers/demo-snippet'
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js'

export class DemoContainer extends PolymerElement {
  static get properties () {
    return {
      title: {
        type: String
      }
    }
  }

  static get template () {
    return html`
      <custom-style>
        <style is="custom-style" include="demo-pages-shared-styles">
        </style>
      </custom-style>

      <div class="vertical-section-container centered">
        <h3>{{title}}</h3>

        <demo-snippet>
          <slot></slot>
        </demo-snippet>
      </div>
    `
  }
}

window.customElements.define('demo-container', DemoContainer)
