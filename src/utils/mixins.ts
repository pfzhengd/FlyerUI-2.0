import { findParentByName } from './index'
export default {
  methods: {
    dispatch (componentName:string, eventName:string, params:any[] = []) {
      const parent = findParentByName(componentName, this)
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    }
  }
}
