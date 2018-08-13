import { HotBase } from '../baseComponent.js'
import { html } from '@polymer/polymer/polymer-element.js'
import styles from './hot-alert.scss'

/**
 * `hot-alert`
 *
 * @customElement
 * @polymer
 * @demo hot-alert-demo.html
 */
export class HotAlert extends HotBase {
  constructor () {
    super()
    this.component = 'alert'
    this.attachShadow({ mode: 'open' })
  }

  ready () {
    super.ready()
    this.variation = this.variation || 'info'
  }

  static get template () {
    return html([`
      <style>
        :host {
          display: inline-block;
        }
        ${styles}
      </style>
      <div
        id$="{{id}}"
        class$="{{className}}"
        role="alert"
      >
        <button type="button" class="hot-alert__close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">
            <i class="far fa-times"></i>
          </span>
        </button>
        <slot></slot>
      </div>
    `])
  }
}

window.customElements.define('hot-alert', HotAlert)
