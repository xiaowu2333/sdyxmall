import $axios from "axios";

export default {
    namespaced: true,

    //状态
    state: {
        kindsOf: [], //种类
        swiperBanner: [], //轮播图
        global: [], //全局活动信息
        activeImg: [], //通知图片
        goodsList: [], //商品列表
        guessLikeList: [], //猜你喜欢列表
        refresh: false,
        //猜你喜欢的上拉加载
        gLikeError: false,
        gLikeLoading: false,
        gLikeFinished: false,

    },
    mutations: {
        //修改种类
        changeKindesOf(state, data) {
            state.kindsOf = data;
        },
        changeSwiperBanner(state, data) {
            state.swiperBanner = data;
        },
        changeGlobal(state, data) {
            state.global = data;
        },
        changeActiveImg(state, data) {
            state.activeImg = data;
        },
        changeGoodsList(state, data) {
            state.goodsList = data;
        },
        changeGuessLikeList(state, data) {
            data.forEach(item => {
                state.guessLikeList.push(item);
            });

        },
        changeRefresh(state, flag) {
            state.refresh = flag;
        },
        changeGLikeLoading(state, flag) {
            state.gLikeLoading = flag;
        },
        changeGLikeFinished(state, flag) {
            state.gLikeFinished = flag;
        },


    },
    //动作(异步)
    actions: {
        //初始化种类
        initClassify(context) {

            $axios({
                method: "get",
                url: "/api/gateway?businessType=1&businessId=1&k=223982",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.cfg.topic.gather-list',
                    'X-Requested-With': 'XMLHttpRequest'
                }

            }).then((result) => {
                context.commit("changeKindesOf", result.data.data);
            });

        },
        //初始化轮播图
        initSwiperBanner(context) {
            $axios({
                method: "get",
                url: "/api/gateway?k=6997850",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.cfg.head-banners.v2',
                    'X-Requested-With': 'XMLHttpRequest'
                }

            }).then((result) => {
                // console.log(result.data.data);
                context.commit("changeSwiperBanner", result.data.data);
            });
        },
        //初始化global
        initGlobal(context) {
            $axios({
                method: "get",
                url: "/api/gateway?type=19&k=7126963",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.cfg.common-banner',
                    'X-Requested-With': 'XMLHttpRequest'
                }

            }).then((result) => {
                // console.log(result.data.data);
                context.commit("changeGlobal", result.data.data);
            });
        },
        //初始化通知图片
        initActiveImg(context) {
            $axios({
                method: "get",
                // url: "/api/gateway?type=1&wd=&pageSize=10&pageNum=1&k=822103",
                url: "/api/gateway?type=20&k=8251077",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.cfg.common-banner',
                    'X-Requested-With': 'XMLHttpRequest'
                }

            }).then((result) => {
                // console.log(result.data.data);
                context.commit("changeActiveImg", result.data.data);
            });
        },
        //商品列表
        initGoodsList(context) {
            $axios({
                method: "get",
                url: "/api/gateway?businessType=1&businessId=1&k=8264918",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.cfg.topic.gather-list',
                    'X-Requested-With': 'XMLHttpRequest'
                }

            }).then((result) => {
                // console.log(result.data.data);
                context.commit("changeGoodsList", result.data.data);
            });
        },
        //猜你喜欢
        initGuessLikeList(context, pageNum) {
            $axios({
                method: "get",
                url: "/api/gateway?type=1&wd=&pageSize=10&pageNum=" + pageNum + "&k=1848534",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.product.recommend-list',
                    'X-Requested-With': 'XMLHttpRequest'
                }

            }).then((result) => {
                // console.log(result.data.data.list);
                context.commit("changeGuessLikeList", result.data.data.list);
                context.commit("changeGLikeLoading", false);


            });
        },

        //刷新 全部
        initAll(context) {
            $axios.all([
                $axios({
                    method: "get",
                    url: "/api/gateway?k=6997850",
                    headers: {
                        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                        'X-Host': 'mall.cfg.head-banners.v2',
                        'X-Requested-With': 'XMLHttpRequest'
                    }

                }),
                $axios({
                    method: "get",
                    url: "/api/gateway?type=19&k=7126963",
                    headers: {
                        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                        'X-Host': 'mall.cfg.common-banner',
                        'X-Requested-With': 'XMLHttpRequest'
                    }

                }),
                $axios({
                    method: "get",
                    url: "/api/gateway?type=20&k=8251077",
                    headers: {
                        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                        'X-Host': 'mall.cfg.common-banner',
                        'X-Requested-With': 'XMLHttpRequest'
                    }

                }),
                $axios({
                    method: "get",
                    url: "/api/gateway?businessType=1&businessId=1&k=8264918",
                    headers: {
                        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                        'X-Host': 'mall.cfg.topic.gather-list',
                        'X-Requested-With': 'XMLHttpRequest'
                    }

                })

            ]).then(
                $axios.spread((swiperBanner, global, activeImg, goodsList) => {
                    context.commit("changeSwiperBanner", swiperBanner.data.data);
                    context.commit("changeGlobal", global.data.data);
                    context.commit("changeActiveImg", activeImg.data.data);
                    context.commit("changeGoodsList", goodsList.data.data);
                    context.commit("changeRefresh", false);
                })
            ).catch(() => {
                console.log("失败");
            });
        }


    },
}