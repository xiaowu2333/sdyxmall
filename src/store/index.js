import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search';
import home from './modules/home';
import product from './modules/product';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    NavFlag: true,
  },
  mutations: {
    changeLoginStatus(state, flag) {
      state.isLogin = flag;
    },
    changeNavStatus(state, flag) {
      state.NavFlag = flag;
    }
  },
  actions: {},
  modules: {
    search,
    home,
    product
  }
})