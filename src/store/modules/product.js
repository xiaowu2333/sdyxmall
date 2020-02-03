import $axios from 'axios';

export default {
  namespaced: true,
  //状态
  state: {
    detail: {},

  },
  getters: {
    getPayFirstUrl(state) {
      if (Object.keys(state.detail).length) {

        let payFirstUrl = "";
        if (state.detail.labels.rapidAfterSales != null) {
          payFirstUrl = state.detail.labels.rapidAfterSales.image;
        } else {
          payFirstUrl = false;
        }
        return payFirstUrl;
      }
    },
    getDetailBanner(state) {
      if (Object.keys(state.detail).length) {
        let detailProductLength = state.detail.skuList.length;
        // debugger;
        return state.detail.skuList[detailProductLength - 1].imgUrls
      }
    },
    getCommon(state) {
      if (Object.keys(state.detail).length) {
        if (state.detail.labels.common != null) {
          return state.detail.labels.common;
        } else {
          return false;
        }
      }
    },
    getOptions(state) {
      if (Object.keys(state.detail).length) {
        if (state.detail.options.length) {
          return state.detail.options[0];
        } else {
          return [];
        }
      }
    },
    getSkuList(state) {
      if (Object.keys(state.detail).length) {
        return state.detail.skuList;
      }
    },
    getDefaultSku(state) {
      if (Object.keys(state.detail).length) {
        var defaultSkuId = state.detail.defaultSkuId;
        return state.detail.skuList.filter(({
          skuId
        }) => {
          return skuId == defaultSkuId;
        })[0];

      }
    }

  },
  //方法
  mutations: {
    updateDetail(state, data) {
      state.detail = data;
    },
  },
  //动作(异步)
  actions: {
    initDetail(context, goodsId) {
      $axios({
        method: 'get',
        url: `/api/gateway?productId=${goodsId}&k=1695717`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"15802166623231408667","cc":"","bc":"110100","la":"0","lo":"0"}',
          'X-Host': 'mall.product.info',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(result => {
        console.log(result.data.data);
        context.commit('updateDetail', result.data.data);
      });
    }
  }
};