import $axios from "axios";

export default {
    namespaced: true,

    //状态
    state: {
        shoppingList: [],
        newShoppingNum: 0,
    },
    //方法
    mutations: {
        updateShoppingList(state, {
            productId,
            masterName,
            skuPrice,
            num,
            modelStr,
            skuCartImgUrl,
        }) {
            let index = state.shoppingList.findIndex((item) => {
                return item.productId == productId && item.modelStr == modelStr
            });
            if (index == -1) {
                state.shoppingList.push({
                    productId: productId,
                    masterName: masterName,
                    skuPrice: skuPrice,
                    num: num,
                    modelStr: modelStr,
                    skuCartImgUrl: skuCartImgUrl,
                    checked: false
                });
            } else {
                state.shoppingList[index].num = state.shoppingList[index].num + num;
            }
            // console.log(state.shoppingList);

        },
        deleteCartList(state, id, modelStr) {
            let index = state.shoppingList.findIndex((item) => {
                return item.productId == id && item.modelStr == modelStr
            });
            state.shoppingList.splice(index, 1);
        },
        updateNewShoppingNum(state, data) {
            state.newShoppingNum = data;
        },
        changeCheckStatus(state, flag) {
            console.log(state.shoppingList);
            if (state.shoppingList.length != 0) {
                state.shoppingList.forEach((item) => {
                    item.checked = flag;
                });
            }
        }
    },
    //动作(异步)
    actions: {},
}