import Button from './components/button'
import ButtonGroup from './components/button-group'
import Textarea from './components/textarea'
import Input from './components/input'
import Alert from './components/alert'
import Card from './components/card'
import Checkbox from './components/checkbox'
import { version } from '../package.json'

const components = [
  Button,
  ButtonGroup,
  Input,
  Alert,
  Card,
  Textarea,
  Checkbox
]

export default {
  version,
  install: (app: any) => {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}
