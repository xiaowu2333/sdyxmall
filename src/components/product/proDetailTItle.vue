<template>
  <div class="detail">
    <div v-if="Object.keys(detail).length">
      <div class="title">
        <p class="title-p">
          <span
            class="tag"
            v-for="(item,index) in common"
            :key="index"
            :style="{
                backgroundColor:item.labelColor}"
          >{{item.title}}</span>{{detail.masterName}}
        </p>
        <p class="introduce">{{detail.slaveName}}</p>
      </div>
      <div class="price">
        <div class="price-all">
          <span class="priceYuan">￥</span>
          <span class="priceText">{{detail.maxPrice|goodsPriceDiff(detail.minPrice,this)}}</span>

          <span
            class="delText"
            v-if="detail.maxMarketPrice !=0"
          >￥{{detail.maxMarketPrice|goodsPriceFilter}}</span>
        </div>
        <div>{{detail.salesCount}}人购买</div>
      </div>
      <div class="van-hairline--bottom"></div>
      <van-cell
        v-if="options"
        is-link
        @click="skuShow=true"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template slot="title">
          <span class="custom-title">规格：</span>
          <span
            class=""
            v-if="options.length != 0"
          >未选择</span>
          <span v-else>× {{num}}</span>
        </template>
      </van-cell>
      <!-- <van-sku
      v-model="skuShow"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    /> -->
    </div>
    <div
      v-else
      class="isLoading"
    >
      <div class="posBox">
        <van-loading
          size="24px"
          color="#c03131"
          vertical
        >加载中...</van-loading>
      </div>

    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Sku, Loading } from "vant";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      choosed: false,
      num: 1,
      maxPrice: "",
      minPrice: "",
      skuShow: false,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      }
    };
  },
  methods: {
    goodsPriceFilter(price) {
      let newPrice = (price / 100).toFixed(1);
      if (newPrice.charAt(newPrice.length - 1) == 0) {
        newPrice = newPrice.slice(0, -2);
      }
      return newPrice;
    }
  },
  components: {
    "van-cell": Cell,
    "van-sku": Sku,
    "van-loading": Loading
    // "van-cell-group": CellGroup
  },
  filters: {
    goodsPriceFilter(price) {
      let newPrice = (price / 100).toFixed(1);
      if (newPrice.charAt(newPrice.length - 1) == 0) {
        newPrice = newPrice.slice(0, -2);
      }
      return newPrice;
    },
    goodsPriceDiff(max, min, that) {
      if (max == min) {
        return that.goodsPriceFilter(max);
      } else {
        let priceMin = that.goodsPriceFilter(min);
        let priceMax = that.goodsPriceFilter(max);
        return priceMin + "~" + priceMax;
      }
      console.log(max, min);
    },
    optionFilter(option) {
      console.log(option);
      return option.item[0];
    }
  },
  computed: {
    ...mapGetters("product", {
      options: "getOptions",
      DetailBanner: "getDetailBanner",
      common: "getCommon",
      skuList: "getSkuList",
      defaultSku: "getDefaultSku"
    }),
    ...mapState("product", {
      detail: "detail"
    }),
    allPrice() {}
  }
};
</script>

<style lang="scss" scoped>
.detail {
  background-color: #fff;
  overflow: hidden;
  .title {
    padding: 30px 30px 10px 30px;
    .title-p {
      font-size: 30px;
      margin-bottom: 16px;
      .tag {
        font-size: 20px;
        margin-right: 10px;
        color: #fff;
        padding: 0 16px;
      }
    }
    .introduce {
      font-size: 26px;
      color: #797d82;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .price {
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 40px;
    .price-all {
      span.priceYuan {
        color: #c03131;
        font-size: 30px;
        margin-right: 10px;
      }
      span.priceText {
        color: #c03131;
        font-size: 40px;
        margin-right: 10px;
      }
      span.delText {
        font-size: 22px;
        text-decoration: line-through;
        color: #bdc0c5;
      }
    }
  }
  .isLoading {
    background-color: #fff;
    height: 100vh;
    width: 100vw;
    .posBox {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);

      z-index: 100;
    }
  }
}
</style>