import * as components from './components'
// 必不可少
import './assets/style.css'
var Workflow = {}
export default Workflow
const install = Workflow.install

Workflow.install = (Vue, args) => {
  install.call(Workflow, Vue, {
    components
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Workflow)
}
