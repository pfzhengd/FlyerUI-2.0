import Row from './main/index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Row', Row)
}

export default Row
