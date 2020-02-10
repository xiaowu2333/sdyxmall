<template>
  <div class="enterprise">
    <ep-header></ep-header>
    <ep-banner></ep-banner>
    <ep-shop></ep-shop>
    <ep-recommend></ep-recommend>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import EpBanner from "@/components/enterprise/EpBanner.vue";
import EpHeader from "@/components/enterprise/EpHeader.vue";
import EpShop from "@/components/enterprise/EpShop.vue";
import EpRecommend from "@/components/enterprise/EpRecommend.vue";

export default {
  components: {
    "ep-banner": EpBanner,
    "ep-header": EpHeader,
    "ep-shop": EpShop,
    "ep-recommend": EpRecommend
  },
  mounted() {
    this.initBanner();
    this.initShops();
    this.initRecommend();
    // chrome
    document.body.scrollTop = 0;
    // firefox
    document.documentElement.scrollTop = 0;
    // safari
    window.pageYOffset = 0;
  },
  methods: {
    ...mapActions("enterprise", {
      initBanner: "initBanner",
      initShops: "initShops",
      initRecommend: "initRecommend"
    })
  }
};
</script>

<style></style>