<template>
  <div class="detail">

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
        <span
          class="priceText"
          v-if="skuPrice == ''"
        >{{detail.maxPrice|goodsPriceDiff(detail.minPrice,this)}}</span>
        <span
          class="priceText"
          v-else
        >{{skuPrice|goodsPriceFilter(this)}}</span>

        <span
          class="delText"
          v-if="detail.maxMarketPrice !=0"
        >￥{{detail.maxMarketPrice|goodsPriceFilter(this)}}</span>
      </div>
      <div>{{detail.salesCount}}人购买</div>
    </div>
    <pro-detail-cell></pro-detail-cell>
    <div class="item-service-line">

      <div
        v-for="(item,index) in serviceRule"
        :key="index"
        class="service-item"
      >
        <span class="iconfont icon-duigou"></span>
        <span>{{item.attrValue}}</span>
      </div>

    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ProDetailCell from "@/components/product/ProDetailCell.vue";
export default {
  components: {
    "pro-detail-cell": ProDetailCell
  },

  methods: {
    goodsPriceFilter(price) {
      let newPrice = (price / 100).toFixed(1);
      if (newPrice.charAt(newPrice.length - 1) == 0) {
        newPrice = newPrice.slice(0, -2);
      }

      this.updateSkuPrice(price);
      return newPrice;
    },
    ...mapMutations("product", {
      updateSkuPrice: "updateSkuPrice"
    })
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
        // console.log(that.goodsPriceFilter);
        return that.goodsPriceFilter(max);
      } else {
        let priceMin = that.goodsPriceFilter(min);
        let priceMax = that.goodsPriceFilter(max);
        return priceMin + " ~ " + priceMax;
      }
      // console.log(max, min);
    },
    optionFilter(option) {
      // console.log(option);
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
      detail: "detail",
      serviceRule: "serviceRule",
      skuPrice: "skuPrice"
    })
  }
};
</script>

<style lang="scss" scoped>
.detail {
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 20px;

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

  .item-service-line {
    padding: 20px 30px 20px 30px;
    display: flex;
    color: #797d82;

    .service-item {
      margin-right: 20px;

      .iconfont {
        font-size: 30px;
        color: rgb(192, 49, 49);
        vertical-align: text-bottom;
        margin-right: 7px;
      }
    }
  }
}
</style>