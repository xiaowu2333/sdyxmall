<template>
  <div class="swiper">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="item in this.$store.state.enterprise.banner"
        :key="item.bannerId"
      >
        <van-image
          width="100%"
          height="165"
          lazy-load
          :src="item.imgUrl"
        />
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Lazyload, Image } from "vant";
export default {
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-image": Image
  }
};
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  height: 420px;
  img {
    width: 100%;
  }
}
</style>