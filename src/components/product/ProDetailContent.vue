<template>
  <div class="content">
    <div class="after-sale-title">
      <span class="iconfont icon-758bianjiqi_fengexian"></span><span class="title">商品详情</span><span class="iconfont icon-758bianjiqi_fengexian"></span>
    </div>
    <div
      class="html-container"
      v-html="detailContent"
    ></div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("product", {
      detailContent: "detailContent"
    })
  }
};
</script>

<style lang="scss">
.content {
  background-color: #fff;
  .after-sale-title {
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: #797d82;
    .iconfont {
      margin-right: 25px;
      color: rgb(165, 165, 165);
    }
    .title {
      margin-right: 25px;
    }
  }
  .html-container {
    img {
      width: 100% !important;
      height: auto !important;
    }
  }
}
</style>