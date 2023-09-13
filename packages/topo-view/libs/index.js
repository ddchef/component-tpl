import Topo from "./components/topo-view.vue"

const install = (Vue)=>{
  if (install.installed) return;
  install.installed = true;
  Vue.component(Topo.name,Topo);
}
// 检测到 Vue 再执行
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default install;

export const TopoView = Topo;