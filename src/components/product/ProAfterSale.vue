<template>
  <div class="after-sale">
    <div class="after-sale-title">
      <span class="iconfont icon-758bianjiqi_fengexian"></span><span class="title">预定流程及须知</span><span class="iconfont icon-758bianjiqi_fengexian"></span>
    </div>
    <div class="flow"><img
        src="https://file.sdyxmall.com/h5/v1/public/app/img/group5.b0b24d0.png"
        alt=""
      ></div>
    <div
      class="after-container"
      v-html="afterSaleDetail"
    ></div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("product", {
      afterSaleDetail: "afterSaleDetail"
    })
  }
};
</script>

<style lang="scss">
.after-sale {
  background-color: #fff;
  padding: 0 30px;
  padding-top: 60px;

  .after-sale-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 44px 0;
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

  .flow {
    img {
      width: 100%;
    }

    margin-bottom: 20px;
  }

  .after-container {
    color: rgb(165, 165, 165);
    font-size: 30px;
    line-height: 60px;

    img {
      width: 100% !important;
      height: auto !important;
    }
  }
}
</style>