import Textarea from './main/index.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Textarea', Textarea)
}

export default Textarea
