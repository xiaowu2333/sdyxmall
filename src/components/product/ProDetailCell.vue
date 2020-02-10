<template>
  <div class="cell-group">

    <van-cell-group>
      <van-cell
        border
        v-if="options"
        is-link
        @click="updateSkuShow(true)"
      >
        <!-- 使用 title 插槽来自定义标题 -->

        <template slot="title">
          <span class="custom-title">规格：</span>

          <span class="optionTitle">{{modelStr==""?computedModelStr:modelStr+"×"+num}}</span>

        </template>
      </van-cell>
      <van-popup
        v-model="computedSkuShow"
        position="bottom"
      >
        <div class="sku">
          <div class="sku_text">
            <img
              :src="imgUrlComputed"
              alt=""
            >
            <div>
              <div>
                <span class="yuan">￥</span>
                <span
                  class="price"
                  v-if="skuPrice==''"
                >{{defaultSku.price|goodsPriceFilter}}</span>
                <span
                  class="price"
                  v-else
                >{{skuPrice|goodsPriceFilter}}</span>

              </div>
              <div class="rule"><span class="choose">{{modelStr!=""?modelStr:"请选择"}}</span><span class="chooseRule">×{{num}}</span></div>
            </div>
          </div>

          <div
            class="group"
            v-if="skuOptions"
          >
            <p class="p-title">规格</p>
            <ul>
              <li
                v-for="item in skuList"
                :key="item.skuId"
                @click="updateChooseId(item.skuId,item.options[0].value,item.price)"
                :class="[chooseId == item.skuId ||skuList.length==1 ?'active':'']"
              >{{item.options[0].value}}</li>
            </ul>
          </div>
          <div class="group">
            <p class="p-title">数量</p>
            <div class="btn"><span
                :class="[reduceBtnStatus?'symbolL noChoose':'symbolL']"
                @click="reduce"
              >－</span><input
                type="number"
                v-model="num"
              ><span
                :class="[addBtnStatus?'symbolR noChoose':'symbolR']"
                @click="add"
              >＋</span>
              <span
                v-show="showNotice"
                class="buy-span-notice"
              >
                购买数量不能超过500件
              </span>
            </div>
          </div>
          <div class="pro-nav-bottom van-hairline--top">
            <div class="nav-line">
              <div class="buy-now van-hairline--left">立即购买</div>
              <div
                class="join-shoppingcar"
                @click="joinCart"
              >加入购物车</div>
            </div>
          </div>
        </div>
      </van-popup>

      <van-cell
        v-if="options"
        border
        is-link
        @click="areaShow=true"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <span class="custom-title">配送至：</span>
          <span
            class="optionTitle"
            v-if="chooseArea.length == 0"
          >
            请选择配送范围
            <span class="mustC">(必选)</span>
          </span>
          <span v-else>{{areaStr}}</span>
        </template>
      </van-cell>
      <van-popup
        v-model="areaShow"
        position="bottom"
      >
        <van-area
          :area-list="areaList"
          value="110101"
          @cancel="cancelBtn"
          @confirm="confirmBtn"
        />
      </van-popup>
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup, Popup, Area } from "vant";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import AreaList from "./area";

export default {
  components: {
    "van-cell-group": CellGroup,
    "van-cell": Cell,
    "van-popup": Popup,
    "van-area": Area
  },
  mounted() {
    if (!Object.keys(this.chooseSku).length) {
      this.updateSkuCartImgUrl(this.defaultSku.imgUrls[0]);
    } else {
      this.updateSkuCartImgUrl(this.chooseSku.imgUrls[0]);
    }
  },
  data() {
    return {
      chooseId: "0",
      // skuShow: false,
      areaShow: false,
      areaList: AreaList,
      chooseArea: [],
      reduceBtnStatus: true,
      addBtnStatus: false,
      showNotice: false
    };
  },
  computed: {
    ...mapGetters("product", {
      options: "getOptions",
      common: "getCommon",
      skuList: "getSkuList",
      defaultSku: "getDefaultSku",
      masterName: "getMasterName",
      productId: "getProductId"
    }),
    ...mapState("product", {
      detail: "detail",
      serviceRule: "serviceRule",
      chooseSku: "chooseSku",
      modelStr: "modelStr",
      skuShow: "skuShow",
      skuPrice: "skuPrice",
      num: "num",
      skuCartImgUrl: "skuCartImgUrl"
    }),
    ...mapState("cart", {
      newShoppingNum: "newShoppingNum"
    }),
    areaStr() {
      if (this.chooseArea.length != 0) {
        let areaStr = "";
        this.chooseArea.forEach(({ name }) => {
          areaStr += name;
          areaStr += "/";
        });

        return areaStr.slice(0, -1);
      }
    },

    imgUrlComputed() {
      if (!Object.keys(this.chooseSku).length) {
        this.updateSkuCartImgUrl(this.defaultSku.imgUrls[0]);
        return this.defaultSku.imgUrls[0];
      } else {
        this.updateSkuCartImgUrl(this.chooseSku.imgUrls[0]);

        return this.chooseSku.imgUrls[0];
      }
      // console.log(this.defaultSku.imgUrls[0]);
      // console.log(this.chooseSku.imgUrls[0]);
    },
    skuOptions() {
      // console.log(this.skuList, this.skuList[0].options);
      if (this.skuList.length > 1) {
        return true;
      } else if (this.skuList[0].options.length) {
        return true;
      } else {
        return false;
      }
    },
    computedModelStr() {
      if (this.skuList.length == 1 && this.skuList[0].options.length) {
        this.updateModelStr(this.skuList[0].options[0].value);
        return this.modelStr;
      } else if (this.skuList.length > 1) {
        return "未选择";
      } else {
        return "×" + this.num;
      }
    },
    computedSkuShow: {
      get() {
        // console.log("获取" + this.skuShow);
        return this.skuShow;
      },
      set(val) {
        // console.log("设置" + val);
        this.updateSkuShow(val);
      }
    }
  },
  methods: {
    ...mapMutations("product", {
      updateSkuPrice: "updateSkuPrice",
      updateChooseSku: "updateChooseSku",
      updateNum: "updateNum",
      updateModelStr: "updateModelStr",
      updateSkuShow: "updateSkuShow",
      updateSkuCartImgUrl: "updateSkuCartImgUrl"
    }),
    ...mapMutations("cart", {
      updateShoppingList: "updateShoppingList",
      updateNewShoppingNum: "updateNewShoppingNum"
    }),
    cancelBtn() {
      this.areaShow = false;
    },
    confirmBtn(data) {
      this.areaShow = false;
      this.chooseArea = data;
    },
    add() {
      this.updateNum(this.num + 1);
      this.reduceBtnStatus = false;
      if (this.num >= 500) {
        this.addBtnStatus = true;
      }
    },
    reduce() {
      if (this.num > 1) {
        this.updateNum(this.num - 1);
      }
      if (this.num - 1 < 1) {
        this.reduceBtnStatus = true;
      }
    },
    updateChooseId(id, value, price) {
      this.chooseId = id;
      this.updateModelStr(value);
      this.updateSkuPrice(price);
      this.updateChooseSku(id);
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
        this.updateSkuShow(false);
        this.updateNewShoppingNum(this.newShoppingNum * 1 + 1);
      }
    }
  },
  filters: {
    goodsPriceFilter(price) {
      let newPrice = (price / 100).toFixed(1);
      if (newPrice.charAt(newPrice.length - 1) == 0) {
        newPrice = newPrice.slice(0, -2);
      }
      return newPrice;
    }
  },
  watch: {
    num: function(val) {
      if (val >= 2) {
        this.reduceBtnStatus = false;
      }
      if (val <= 499) {
        this.addBtnStatus = false;
      } else {
        this.addBtnStatus = true;
      }

      if (val >= 500) {
        this.showNotice = true;
        this.num = 500;
      } else {
        this.showNotice = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.cell-group {
  .custom-title {
    font-size: 26px;
    color: #797d82;
  }

  .optionTitle {
    font-size: 26px;
    color: #2e2f30;
  }
  .sku {
    padding-bottom: 300px;
    overflow: hidden;
    .sku_text {
      padding: 30px 30px 0px 30px;
      display: flex;
      height: 250px;
      align-items: center;
      img {
        width: 220px;
        height: 220px;
      }
      .yuan {
        font-size: 30px;
        color: #c03131;
      }
      .price {
        font-size: 40px;
        color: #c03131;
      }
      .rule {
        .choose {
          font-size: 26px;
          color: #2e2f30;
          margin-right: 10px;
        }
        .chooseRule {
          font-size: 26px;
          color: #2e2f30;
        }
      }
    }
    .group {
      padding: 0 30px;

      .p-title {
        font-size: 26px;
        color: #797d82;
        margin-top: 30px;
        margin-bottom: 30px;
      }
      ul {
        display: flex;
        padding-right: 120px;
        flex-wrap: wrap;
        li {
          margin-right: 30px;
          padding: 0px 20px;
          line-height: 55px;
          border-radius: 4px;
          color: #2e2f30;
          border: 2px solid #ccd3da;
          margin-bottom: 20px;
          font-size: 25px;
          &.active {
            border: 2px solid #c03131;
            color: #c03131;
          }
        }
      }

      .btn {
        display: flex;
        overflow: hidden;
        input {
          outline: none;
          border: 1px solid #2c3e50;
          text-align: center;
          line-height: 70px;
          height: 70px;
          width: 142px;
        }
        .symbolL {
          border: 1px solid #2c3e50;
          font-size: 30px;
          width: 80px;
          line-height: 70px;
          height: 70px;
          text-align: center;
          border-right: 0;
        }

        .symbolR {
          border: 1px solid #2c3e50;
          border-left: 0;
          font-size: 30px;
          width: 80px;
          line-height: 70px;
          height: 70px;
          text-align: center;
        }
        .noChoose {
          border: 1px solid #ccd3da;
        }
        .buy-span-notice {
          margin-left: 50px;
          line-height: 80px;
          color: #c03131;
        }
      }
    }
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
        .buy-now {
          height: 100px;
          color: #000;
          text-align: center;
          font-size: 30px;
          line-height: 100px;
          flex: 1;
        }
        .join-shoppingcar {
          line-height: 100px;
          font-size: 30px;
          height: 100px;
          text-align: center;
          background: #c03131;
          color: #fff;
          flex: 1;
        }
      }
    }
  }

  .mustC {
    color: #c03131;
  }
}
</style>