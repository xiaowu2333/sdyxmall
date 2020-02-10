import $axios from 'axios';

export default {
  namespaced: true,
  //状态
  state: {
    detail: {}, //详情信息
    serviceRule: [], //服务规则
    detailContent: "", //详情内容
    afterSaleDetail: "", //售后详情,
    shoppingNum: "",
    loadStatus: true,
    chooseSku: {},
    skuPrice: "",
    num: 1,
    modelStr: "",
    skuCartImgUrl: "",
    skuShow: false,

  },
  getters: {
    //获取优先赔的图标地址
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
    //获取详情页的轮播图
    getDetailBanner(state) {
      if (Object.keys(state.detail).length) {
        let detailProductLength = state.detail.skuList.length;
        // debugger;
        return state.detail.skuList[detailProductLength - 1].imgUrls
      }
    },
    //获取标签
    getCommon(state) {
      if (Object.keys(state.detail).length) {
        if (state.detail.labels.common != null) {
          return state.detail.labels.common;
        } else {
          return false;
        }
      }
    },
    //
    getOptions(state) {
      if (Object.keys(state.detail).length) {
        if (state.detail.options.length) {
          return state.detail.options[0];
        } else {
          return [];
        }
      }
    },
    //获取订单详情
    getSkuList(state) {
      if (Object.keys(state.detail).length) {
        return state.detail.skuList;
      }
    },

    //获取默认显示的订单页
    getDefaultSku(state) {
      if (Object.keys(state.detail).length) {
        var defaultSkuId = state.detail.defaultSkuId;
        return state.detail.skuList.filter(({
          skuId
        }) => {
          return skuId == defaultSkuId;
        })[0];

      }
    },
    //商品名称
    getMasterName(state) {
      if (Object.keys(state.detail).length) {
        return state.detail.masterName;
      }
    },
    //商品id
    getProductId(state) {
      if (Object.keys(state.detail).length) {
        return state.detail.productId;
      }
    },

    //获取加载状态
    getLoadStatus(state) {
      if (Object.keys(state.detail).length != 0 && state.serviceRule.length != 0 && state.detailContent && state.afterSaleDetail) {
        return false
      } else {
        return true;
      }
    }

  },
  //方法
  mutations: {
    updateDetail(state, data) {
      state.detail = data;
    },
    updateServiceRule(state, data) {
      state.serviceRule = data;
    },
    updateDetailContent(state, data) {
      state.detailContent = data;
    },
    updateAfterSaleDetail(state, data) {
      state.afterSaleDetail = data;
    },
    updateSkuPrice(state, data) {
      state.skuPrice = data;
    },
    updateChooseSku(state, id) {
      // console.log(state.detail.skuList, id);
      if (id == -1) {

        state.chooseSku = {}
      } else {
        let data = state.detail.skuList.filter(({
          skuId
        }) => {
          return skuId == id
        })[0];
        // console.log(data);
        state.chooseSku = data;
      }

    },
    updateNum(state, data) {
      state.num = data;
    },
    updateModelStr(state, data) {
      state.modelStr = data;
    },
    updateSkuShow(state, data) {
      state.skuShow = data;
    },
    updateSkuCartImgUrl(state, data) {
      state.skuCartImgUrl = data

    }


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
    },
    initServiceRule(context, goodsId) {
      $axios({
        method: 'get',

        url: `/api/gateway?productId=${goodsId}&attrType=1&k=2389511`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1580725992463856469546","cc":"","bc":"0","la":"0","lo":"0"}',
          'X-Host': 'mall.product.attrs',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(result => {
        // console.log(result.data.data.attrList);
        context.commit('updateServiceRule', result.data.data.attrList);
      });
    },
    initDetailContent(context, goodsId) {
      $axios({
        method: 'get',

        url: `/api/gateway?productId=${goodsId}&k=4562469`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1580725992463856469546","cc":"","bc":"0","la":"0","lo":"0"}',
          'X-Host': 'mall.product.desc',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(result => {
        // console.log(result.data.data.desc);
        context.commit('updateDetailContent', result.data.data.desc);
      });
    },
    initAfterSaleDetail(context, goodsId) {
      $axios({
        method: 'get',

        url: `/api/gateway?productId=${goodsId}&attrType=3&k=2125464`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1580725992463856469546","cc":"","bc":"0","la":"0","lo":"0"}',
          'X-Host': 'mall.product.attrs',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(result => {
        // console.log(result.data.data);
        context.commit('updateAfterSaleDetail', result.data.data.attrList[0].attrValue);
      });
    }
  }
};