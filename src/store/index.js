import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search';
import home from './modules/home';
import product from './modules/product';
import enterprise from './modules/enterprise';
import cart from './modules/cart';
import user from './modules/user';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    NavFlag: true,
    username: ""
  },
  mutations: {
    changeLoginStatus(state, flag) {
      state.isLogin = flag;
    },
    changeNavStatus(state, flag) {
      state.NavFlag = flag;
    },
    changeUsername(state, data) {
      state.username = data;

    }
  },
  actions: {},
  modules: {
    search,
    home,
    product,
    enterprise,
    cart,
    user
  }
})