import $axios from "axios";

export default {
    namespaced: true,

    //状态
    state: {
        banner: [],
        shops: [],
        recommend: [],
    },
    //方法
    mutations: {
        updateBanner(state, data) {
            state.banner = data;
        },
        updateShops(state, data) {
            state.shops = data;
        },
        updateRecommend(state, data) {
            state.recommend = data;
        },
    },
    //动作(异步)
    actions: {
        initBanner(context) {
            $axios({
                method: "get",
                url: "/api/gateway?type=12&k=7794235",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1580725992463856469546","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.cfg.common-banner',
                    'X-Requested-With': 'XMLHttpRequest'
                }

            }).then((result) => {
                // console.log(result.data.data);
                context.commit("updateBanner", result.data.data);
            });
        },
        initShops(context) {
            $axios({
                method: "get",
                url: "/api/gateway?type=14&k=4099438",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1580725992463856469546","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.cfg.common-banner',
                    'X-Requested-With': 'XMLHttpRequest'
                }

            }).then((result) => {
                // console.log(result.data.data);
                context.commit("updateShops", result.data.data);
            });
        },
        initRecommend(context) {
            $axios({
                method: "get",
                url: "/api/gateway?type=13&k=4186598",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1580725992463856469546","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.cfg.common-banner',
                    'X-Requested-With': 'XMLHttpRequest'
                }

            }).then((result) => {
                // console.log(result.data.data);
                context.commit("updateRecommend", result.data.data);
            });
        }

    },
}