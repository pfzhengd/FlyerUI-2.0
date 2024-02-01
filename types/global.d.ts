interface Window {
  Vue: {
    version: string,
    component: (name: string, component: any) => void
  }
}