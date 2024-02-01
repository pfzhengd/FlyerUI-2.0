import Button from './components/button'
import { version } from '../package.json'

const components = [
  Button
]

if (typeof window !== 'undefined' && window.Vue) {
  components.forEach(component => {
    window.Vue.component(component.name, component)
  })
}

export default {
  Version: version,
  ...components
}
