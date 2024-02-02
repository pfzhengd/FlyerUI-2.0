import Input from './main/index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Input', Input)
}

export default Input
