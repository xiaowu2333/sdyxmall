<template>
  <div class="global">
    <ul>
      <li
        v-for="item in this.$store.state.home.global"
        :key="item.bannerId"
      >
        <van-image
          lazy-load
          :src="item.imgUrl"
          width="44"
          height="44"
        />
        <span>{{ item.masterTitle }}</span>
      </li>
    </ul>
    <div class="activeMsg"><img
        v-for="item1 in this.$store.state.home.activeImg"
        :key="item1.bannerId"
        :src="item1.imgUrl"
      /></div>
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  components: {
    "van-image": Image
  }
};
</script>

<style lang="scss" scoped>
.global {
  padding-top: 30px;
  background-color: #fff;
  margin-bottom: 20px;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;

    li {
      //   flex: 1;
      text-align: center;

      img {
        width: 88px;
        height: 88px;
        margin-bottom: 10px;
      }

      span {
        display: block;
      }
    }
  }
  .activeMsg {
    width: 100%;
    padding-top: 10px;
    img {
      width: 100%;
    }
  }
}
</style>
