<template>
  <div
    class="shop"
    v-if="shops.length"
  >
    <div class="img-wrap1">

      <div class="title">
        <div
          class="masterTitle"
          :style="{color:shops[0].masterTitleColor}"
        >{{shops[0].masterTitle}}</div>
        <div class="slaveTitle">{{shops[0].slaveTitle}}</div>
      </div>
      <van-image
        lazy-load
        :src="shops[0].imgUrl"
        alt=""
      />
    </div>
    <div class="wrap2">
      <div class="img-wrap2 img-wrap2-top">
        <div class="title">
          <div
            class="masterTitle"
            :style="{color:shops[1].masterTitleColor}"
          >{{shops[1].masterTitle}}</div>
          <div class="slaveTitle">{{shops[1].slaveTitle}}</div>
        </div>
        <van-image
          lazy-load
          :src="shops[1].imgUrl"
          alt=""
        />
      </div>
      <div class="img-wrap2">
        <div class="title">
          <div
            class="masterTitle"
            :style="{color:shops[2].masterTitleColor}"
          >{{shops[2].masterTitle}}</div>
          <div class="slaveTitle">{{shops[2].slaveTitle}}</div>
        </div>
        <van-image
          lazy-load
          :src="shops[2].imgUrl"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Lazyload, Image } from "vant";
import { mapState } from "vuex";

export default {
  components: {
    "van-image": Image
  },
  computed: {
    ...mapState("enterprise", {
      shops: "shops"
    })
  }
};
</script>
<style lang="scss" scoped>
.shop {
  background-color: #fff;
  padding: 30px;
  display: flex;
  img {
    width: 100%;
    height: 100%;
  }
  .masterTitle {
    line-height: 30px;
    font-size: 30px;
    color: #2e2f30;
    margin-bottom: 10px;
  }
  .slaveTitle {
    line-height: 26px;
    font-size: 26px;
    color: #797d82;
  }

  .img-wrap1 {
    flex: 1;
    position: relative;
    height: 460px;
    width: 50%;
    .title {
      position: absolute;
      left: 30px;
      top: 30px;
      z-index: 999;
    }
  }
  .wrap2 {
    flex: 1;
    margin-left: 4px;
    .img-wrap2 {
      position: relative;
      height: 228px;
      .title {
        position: absolute;
        left: 30px;
        top: 30px;
        z-index: 999;
      }
    }
    .img-wrap2-top {
      margin-bottom: 4px;
    }
  }
}
</style>