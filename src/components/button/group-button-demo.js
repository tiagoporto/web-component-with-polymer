import './button.js'
import './group-button.js'
import '../../demo-container.js'
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js'

export class HotGroupButtonDemo extends PolymerElement {
  static get template () {
    return html`
    <demo-container title="<hot-group-button>">
      <template preserve-content>

        <hot-group-button>
          <button class="hot-btn">ter</button>

          <button is="hot-button" variation="secondary" fill="outline" on-click="click">
            Errors
          </button>
          <hot-button variation="secondary" fill="outline" on-click="click">
            other
          </hot-button>
          <hot-button variation="secondary" fill="outline" on-click="click">
            other
          </hot-button>
          <hot-button variation="primary" fill="outline" on-click="click">
            other
          </hot-button>
        </hot-group-button>
      </template>
    </demo-container>
    `
  }
}

window.customElements.define('hot-group-button-demo', HotGroupButtonDemo)
