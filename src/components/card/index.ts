import Card from './main/index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Input', Card)
}

export default Card
