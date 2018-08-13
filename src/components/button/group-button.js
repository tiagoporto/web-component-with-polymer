import { HotBase } from '../baseComponent.js'
import { html } from '@polymer/polymer/polymer-element.js'
import styles from './group-button.scss'

/**
 * `hot-group-button`
 *
 * @customElement
 * @polymer
 * @demo hot-button-demo.html
 */
export class HotGroupButton extends HotBase {
  constructor () {
    super()
    this.component = 'group-button'
    this.attachShadow({ mode: 'open' })

    this.className = 'tiago'
  }

  static get template () {
    return html([`
      <style>
        ${styles}
      </style>
      <div class$="{{className}}">
        <slot></slot>
      </div>
    `])
  }
}

window.customElements.define('hot-group-button', HotGroupButton)
// window.customElements.define('hot-group-button', HotGroupButton, {extends: 'div'})
