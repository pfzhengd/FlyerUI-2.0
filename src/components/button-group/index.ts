import ButtonGroup from './main/index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('ButtonGroup', ButtonGroup)
}

export default ButtonGroup
