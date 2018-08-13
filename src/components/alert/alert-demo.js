import './alert.js'
import '../../demo-container.js'
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js'

export class HotAlertDemo extends PolymerElement {
  static get template () {
    return html`
    <demo-container title="<hot-button>">
      <template preserve-content>
        <hot-alert id="myId"> Id</hot-alert>

        <hot-alert id="myId">
          <h4 class="hot-alert__heading">Well done!</h4>
            <p>This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr>
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </hot-alert>
      </template>
    </demo-container>
    `
  }
}

window.customElements.define('hot-alert-demo', HotAlertDemo)
