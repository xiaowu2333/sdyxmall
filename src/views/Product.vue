<template>
  <div class="product">
    <div
      class="goBack"
      @click="goBack"
    ><span class="iconfont icon-zuo"></span></div>

    <pro-banner></pro-banner>
    <pro-detail-title></pro-detail-title>
  </div>
</template>

<script>
import ProBanner from "@/components/product/ProBanner.vue";
import proDetailTItle from "@/components/product/proDetailTItle.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions("product", {
      initDetail: "initDetail"
    }),
    ...mapMutations("product", {
      updateDetail: "updateDetail"
    }),
    goBack() {
      this.$router.go(-1);
    }
  },
  components: {
    "pro-banner": ProBanner,
    "pro-detail-title": proDetailTItle
  },
  mounted() {
    this.updateDetail({});
    this.initDetail(this.$route.params.id);
    //全局
    this.$store.commit("changeNavStatus", false);
  },
  destroyed() {
    //全局
    this.$store.commit("changeNavStatus", true);
  }
};
</script>

<style lang="scss" scoped>
.product {
  // background-color: #fff;

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
}
</style>