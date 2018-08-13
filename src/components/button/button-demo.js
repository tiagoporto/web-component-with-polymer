import './button.js'
import '../../demo-container.js'
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js'

export class HotButtonDemo extends PolymerElement {
  // click() {
  //   console.log('>>>')
  // }

  static get template () {
    return html`
    <demo-container title="<hot-button>">
      <template preserve-content>
        <hot-button id="myId"> Id</hot-button>

        <hot-button variation="secondary" fill="outline" on-click="click">
          Errors
        </hot-button>

        <hot-button class="someotherClass" variation="error">
          Primary
        </hot-button>

        <hot-button class="someotherClass" size="large" variation="success" disabled>
          <strong>Click</strong>
        </hot-button>

        <hot-button class="someotherClass" size="small" variation="warning" expand="block" disabled>
          Small warning Disabled
        </hot-button>
      </template>
    </demo-container>
    `
  }
}

window.customElements.define('hot-button-demo', HotButtonDemo)
