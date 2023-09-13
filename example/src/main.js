import Vue from "vue";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import App from "./app.vue";
import TopoView from "@adl/topo-view";

Vue.use(ElementUI);
Vue.use(TopoView);

new Vue({
  el: '#app',
  render: h => h(App)
});