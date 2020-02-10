<template>
  <div class="product">
    <div
      class="isLoading"
      v-if="loadStatus"
    >
      <div class="posBox">
        <van-loading
          size="24px"
          color="#c03131"
          vertical
        >加载中...</van-loading>
      </div>
    </div>
    <div v-else>
      <div
        class="goBack"
        @click="goBack"
      ><span class="iconfont icon-zuo"></span></div>

      <pro-banner></pro-banner>
      <pro-detail-title></pro-detail-title>
      <div class="content-detail-pro">
        <pro-detail-content></pro-detail-content>
        <pro-after-sale></pro-after-sale>
      </div>
      <pro-nav-bottom></pro-nav-bottom>
    </div>

  </div>
</template>

<script>
import ProBanner from "@/components/product/ProBanner.vue";
import ProDetailTitle from "@/components/product/ProDetailTitle.vue";
import ProDetailContent from "@/components/product/ProDetailContent.vue";
import ProAfterSale from "@/components/product/ProAfterSale.vue";
import ProNavBottom from "@/components/product/ProNavBottom.vue";

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { Loading } from "vant";
export default {
  components: {
    "van-loading": Loading,
    "pro-banner": ProBanner,
    "pro-detail-title": ProDetailTitle,
    "pro-detail-content": ProDetailContent,
    "pro-after-sale": ProAfterSale,
    "pro-nav-bottom": ProNavBottom
  },
  methods: {
    ...mapActions("product", {
      initDetail: "initDetail",
      initServiceRule: "initServiceRule",
      initDetailContent: "initDetailContent",
      initAfterSaleDetail: "initAfterSaleDetail"
    }),

    ...mapMutations("product", {
      updateDetail: "updateDetail",
      updateServiceRule: "updateServiceRule",
      updateChooseSku: "updateChooseSku",
      updateNum: "updateNum",
      updateModelStr: "updateModelStr"
    }),
    goBack() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapGetters("product", {
      loadStatus: "getLoadStatus"
    })
  },
  mounted() {
    this.updateDetail({});
    this.initDetail(this.$route.params.id);
    this.initServiceRule(this.$route.params.id);
    this.initDetailContent(this.$route.params.id);
    this.initAfterSaleDetail(this.$route.params.id);
    // chrome
    document.body.scrollTop = 0;
    // firefox
    document.documentElement.scrollTop = 0;
    // safari
    window.pageYOffset = 0;
    //全局
    this.$store.commit("changeNavStatus", false);
  },
  destroyed() {
    //全局
    this.$store.commit("changeNavStatus", true);
    this.updateChooseSku(-1);
    this.updateNum(1);
    this.updateModelStr("");
  }
};
</script>

<style lang="scss" scoped>
.product {
  // background-color: #fff;
  margin-bottom: 100px;
  .goBack {
    position: fixed;
    z-index: 999;
    left: 30px;
    top: 30px;
    width: 56px;
    height: 56px;
    background-color: hsla(0, 0%, 100%, 0.5);
    text-align: center;
    border-radius: 50%;

    span {
      line-height: 56px;
      font-size: 46px;
    }
  }
  .content-detail-pro {
    background-color: #fff;
  }
  .isLoading {
    background: #f4f4f4;
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