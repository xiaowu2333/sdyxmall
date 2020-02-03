import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import 'animate.css'
import axios from "axios";
import {
  Lazyload
} from 'vant';
Vue.use(Lazyload);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')