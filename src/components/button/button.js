import { HotBase } from '../baseComponent.js'
import { html } from '@polymer/polymer/polymer-element.js'
import styles from './button.scss'

/**
 * `hot-button`
 *
 * @customElement
 * @polymer
 * @demo hot-button-demo.html
 */
export class HotButton extends HotBase {
  constructor () {
    super()
    this.component = 'button'
    // this.attachShadow({ mode: 'open' })
  }

  ready () {
    super.ready()

    this.fill = this.fill || (!this.variation && 'outline')
    this.variation = this.variation || 'primary'
  }

  static get template () {
    return html([`
      <style>
        ${styles}
      </style>
      <button
        id$="{{id}}"
        class$="{{className}}"
        disabled="{{disabled}}"
        type$="button"
      >
        <slot></slot>
      </button>
    `])
  }
}

window.customElements.define('hot-button', HotButton)
// window.customElements.define('hot-button', HotButton, {extends: 'button'})
