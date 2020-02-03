<template>
  <div
    class="banner"
    v-if="defaultSku"
  >
    <van-swipe
      :autoplay="3000"
      class="my-swipe"
      :loop="false"
      @change="onChange"
    >
      <van-swipe-item
        v-for="(item,index) in defaultSku.imgUrls"
        :key="index"
      >
        <van-image :src="item" />
      </van-swipe-item>
      <div
        class="custom-indicator"
        slot="indicator"
      >
        <span v-if="defaultSku"> {{ current+1}}/{{defaultSku.imgUrls.length}}</span>
      </div>

    </van-swipe>
    <div
      class="firstPay"
      v-if="payFirstUrl"
    >
      <img
        :src="payFirstUrl"
        alt=""
      >
    </div>
    <div class="banNav">
      <span class="left">
        <span class="iconfont icon-you"></span>
        <span>视屏</span>

      </span>
      <span class="right active">图片</span>

    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Image } from "vant";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  components: {
    "van-image": Image,
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem
  },
  computed: {
    ...mapGetters("product", {
      payFirstUrl: "getPayFirstUrl",
      defaultSku: "getDefaultSku"
    })
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;

  .my-swipe {
    width: 100%;
    height: 750px;
    img {
      width: 100%;
    }

    .custom-indicator {
      position: absolute;
      right: 30px;
      bottom: 40px;
      background-color: #fff;
      border: 1px solid #d7d9dc;
      color: #d7d9dc;

      span {
        padding: 0 4px;
        font-size: 20px;
      }
    }
  }

  .banNav {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;
    color: #2e2f30;
    z-index: 999;
    display: flex;
    justify-content: center;
    line-height: 20px;
    font-size: 20px;

    .left,
    .right {
      background-color: #fff;
      display: flex;
      width: 100px;
      height: 40px;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
    }

    .left {
      margin-right: 20px;

      .iconfont {
        font-size: 25px;
      }
    }

    .right {
      &.active {
        background-color: #c03131;
        color: #fff;
      }
    }
  }

  .firstPay {
    position: absolute;
    width: 102px;
    height: 102px;
    top: 60px;
    right: 60px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>