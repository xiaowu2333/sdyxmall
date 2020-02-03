import $axios from "axios";

export default {
    namespaced: true,

    //状态
    state: {
        keyWords: [],
    },
    //方法
    mutations: {
        updateKeyWorks(state, data) {
            state.keyWords = data;
        }
    },
    //动作(异步)
    actions: {
        //初始化热门关键字
        initKeyWords(context) {
            $axios({
                method: "get",
                url: "/api/gateway?k=538735",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
                    'X-Host': 'mall.cfg.search.hot-words',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }).then((result) => {
                console.log(result.data.data.hotWords);
                context.commit("updateKeyWorks", result.data.data.hotWords);
            });
        }
    },
}