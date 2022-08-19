import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// axios挂载
import $axios from "@utils/request";
Vue.prototype.$axios = $axios;

// element-ui 注册
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 自定义组件全局注册(高频率)
import KsTitle from "./components/KsTitle";
Vue.component("ks-title", KsTitle);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
