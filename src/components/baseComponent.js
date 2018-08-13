import { componentClassName } from './cssClassMaps.js'
import { PolymerElement } from '@polymer/polymer/polymer-element.js'

/**
 * Base Component
 */
export class HotBase extends PolymerElement {
  concatenateClass (externalClass, fill, expand, variation, size) {
    const params = {
      component: this.component,
      variation,
      state: this.state,
      size,
      fill,
      expand,
      externalClass
    }

    return componentClassName(params)
  }

  static get properties () {
    return {
      id: String,
      disabled: Boolean,
      class: String,
      fill: String,
      expand: String,
      variation: String,
      size: String,
      component: String,
      className: {
        type: String,
        computed: 'concatenateClass(class, fill, expand, variation, size)'
      }
    }
  }
}
