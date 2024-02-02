import Alert from './main/index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Button', Alert)
}

export default Alert
