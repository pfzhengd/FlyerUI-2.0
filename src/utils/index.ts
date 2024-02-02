import emitter from './mixins'
export * from '@jupiterjs/jupiter-utils'
export function findParentByName (name:string, self:any) {
  let parent = self.$parent
  while (parent) {
    if (parent.$options.name !== name) {
      parent = parent.$parent
    } else {
      return parent
    }
  }
  return parent
}
export { emitter }
