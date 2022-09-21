import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vant from "vant";
import "vant/lib/index.css";

import { PullRefresh } from 'vant';
Vue.use(PullRefresh);

window._AMapSecurityConfig = {
  securityJsCode: "5d45a96ce0dced57a8def828e021ef13",
};

Vue.use(Vant);

//配置axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

//main.js中
import moment from "moment";
Vue.prototype.moment = moment;

// 配置MintUI
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
//Vue.ues()方法将会自动调用MinUI源码中的install
// install方法将会把MinUI所有的组件注入Vue实例
Vue.use(MintUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
