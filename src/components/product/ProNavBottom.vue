<template>
  <div class="pro-nav-bottom van-hairline--top">
    <div class="nav-line">
      <div
        class="shop-icon"
        @click="toCart"
      >
        <van-icon
          name="cart-o"
          :info="computedShoppingNum"
          size="28"
          color="#333"
        />
      </div>
      <div class="buy-now van-hairline--left">立即购买</div>
      <div
        class="join-shoppingcar"
        @click="joinCart"
      >加入购物车</div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  components: {
    "van-icon": Icon
  },
  methods: {
    ...mapMutations("cart", {
      updateShoppingList: "updateShoppingList",
      updateNewShoppingNum: "updateNewShoppingNum"
    }),

    ...mapMutations("product", {
      updateSkuShow: "updateSkuShow"
    }),
    toCart() {
      this.$router.push("/cart");
    },
    joinCart() {
      if (this.modelStr == "" && this.skuList.length != 1) {
        this.updateSkuShow(true);
      } else {
        this.updateShoppingList({
          productId: this.productId,
          masterName: this.masterName,
          skuPrice: this.skuPrice,
          num: this.num,
          modelStr: this.modelStr,
          skuCartImgUrl: this.skuCartImgUrl
        });
        this.updateNewShoppingNum(this.newShoppingNum * 1 + 1);
      }
    }
  },
  computed: {
    ...mapState("product", {
      chooseSku: "chooseSku",
      skuPrice: "skuPrice",
      num: "num",
      modelStr: "modelStr",
      skuCartImgUrl: "skuCartImgUrl"
    }),
    ...mapState("cart", {
      newShoppingNum: "newShoppingNum"
    }),

    ...mapGetters("product", {
      defaultSku: "getDefaultSku",
      masterName: "getMasterName",
      productId: "getProductId",
      skuList: "getSkuList"
    }),

    computedShoppingNum() {
      if (this.newShoppingNum == 0) {
        return "";
      } else {
        return this.newShoppingNum;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pro-nav-bottom {
  height: 100px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  .nav-line {
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    .shop-icon {
      flex: 1;
      text-align: center;
    }
    .buy-now {
      height: 100px;
      color: #000;
      text-align: center;
      font-size: 30px;
      line-height: 100px;
      flex: 3;
    }
    .join-shoppingcar {
      line-height: 100px;
      font-size: 30px;
      height: 100px;
      text-align: center;
      background: #c03131;
      color: #fff;

      flex: 3;
    }
  }
}
</style>