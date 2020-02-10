import $axios from "axios";

export default {
    namespaced: true,

    //状态
    state: {
        userList: [],

    },
    //方法
    mutations: {
        updateUserList(state, {
            username,
            userpwd
        }) {
            state.userList.push({
                username: username,
                userpwd: userpwd
            });
            // console.log(state.userList);
        },
    },

}