<template>
  <div class="cart-card">

    <!-- <div class="store-name van-hairline--bottom">

        <van-checkbox
          v-model="a"
          checked-color="#07c160"
          icon-size="15"
        ><span class="store-name-text">我是店铺</span>
        </van-checkbox>
      </div> -->

    <van-swipe-cell
      v-for="(item,index) in shoppingList"
      :key="index+item.productId"
    >
      <div class="cart-wrap">
        <van-checkbox
          icon-size="15"
          :value="item.productId"
          v-model="item.checked"
          @click="chooseChange(item.productId,item.modelStr)"
          checked-color="#07c160"
        ></van-checkbox>

        <van-card
          @click="goProduct(item.productId)"
          :num="item.num"
          :price="eachSkuPrice(item.skuPrice)"
          :desc="item.modelStr"
          :title="item.masterName"
          lazy-load
          :thumb="item.skuCartImgUrl"
        />

      </div>
      <van-button
        slot="right"
        square
        text="删除"
        type="danger"
        class="delete-button"
        @click="deleteCart(item.productId,item.modelStr)"
      />
    </van-swipe-cell>

  </div>
</template>

<script>
import { Card, Checkbox, CheckboxGroup, SwipeCell, Button } from "vant";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      resultCheckList: [],
      ccc: false
    };
  },
  components: {
    "van-card": Card,
    "van-checkbox": Checkbox,
    "van-checkbox-group": CheckboxGroup,
    "van-swipe-cell": SwipeCell,
    "van-button": Button
  },
  methods: {
    ...mapMutations("cart", {
      deleteCartList: "deleteCartList"
    }),
    eachSkuPrice(price) {
      let newPrice = (price / 100).toFixed(1);
      if (newPrice.charAt(newPrice.length - 1) == 0) {
        // newPrice = newPrice.slice(0, -2);
      }
      return newPrice;
    },
    goProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    deleteCart(id, modelStr) {
      // console.log("删除");
      this.deleteCartList(id, modelStr);
    },
    chooseChange(id, modelStr) {
      let index = this.resultCheckList.indexOf(id + "_" + modelStr);
      if (index == -1) {
        this.resultCheckList.push(id + "_" + modelStr);
      } else {
        this.resultCheckList.splice(index, 1);
      }
      console.log(this.resultCheckList);
    }
  },
  computed: {
    ...mapState("cart", {
      shoppingList: "shoppingList"
    })
  }
};
</script>

<style lang="scss" scoped>
.cart-card {
  background-color: #fff;

  .store-name {
    padding: 0 30px;
    height: 80px;
    box-sizing: border-box;
    padding-top: 20px;

    .store-name-text {
      font-size: 30px;
      color: #191a1b;
    }
  }
  button.delete-button {
    height: 100%;
  }
  .cart-wrap {
    padding-left: 30px;
    display: flex;

    .van-checkbox {
      padding-right: 10px;
    }

    .van-card {
      background-color: #fff;
      width: 100%;

      .van-card__num {
        font-size: 35px;
      }

      .van-card__price {
        color: #c03131;
      }
    }
  }
}
</style>