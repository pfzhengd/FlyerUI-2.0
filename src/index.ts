import Button from './components/button'
import ButtonGroup from './components/button-group'
import Textarea from './components/textarea'
import Input from './components/input'
import Alert from './components/alert'
import Card from './components/card'
import { version } from '../package.json'

const components = [
  Button,
  ButtonGroup,
  Input,
  Alert,
  Card,
  Textarea
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
