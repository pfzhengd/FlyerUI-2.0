import Col from './main/index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Col', Col)
}

export default Col
