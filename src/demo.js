import './components/button/button-demo.js'
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js'

export class ComponentsDemo extends PolymerElement {
  static get template () {
    return html`
      <hot-button-demo></hot-button-demo>
    `
  }
}

window.customElements.define('components-demo', ComponentsDemo)
