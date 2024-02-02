import Button from './main/index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Button', Button)
}

export default Button
