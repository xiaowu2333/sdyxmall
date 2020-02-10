<template>
  <div
    class="recommend"
    v-if="recommend.length"
  >
    <ul>
      <li
        v-for="item in recommend"
        :key="item.bannerId"
      >
        <div
          class="masterTitle"
          :style="{color:item.masterTitleColor}"
        >{{item.masterTitle}}</div>
        <p class="slaveTitle">{{item.slaveTitle}}</p>
        <van-image
          :src="item.imgUrl"
          width="75"
          height="75"
          lazy-load
        />
      </li>
    </ul>
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
      recommend: "recommend"
    })
  }
};
</script>
<style lang="scss" scoped>
.recommend {
  background-color: #fff;
  //   padding: 0 30px;

  ul {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    padding-bottom: 100px;
    li {
      height: 250px;
      width: 33.33%;
      text-align: center;
      border-right: 1px solid #ededed;
      border-bottom: 1px solid #ededed;
      overflow: hidden;
      &:nth-of-type(3n) {
        border-right: 0;
      }
      &:nth-last-of-type(1),
      &:nth-last-of-type(2),
      &:nth-last-of-type(3) {
        border-bottom: 0;
      }
      .masterTitle {
        margin-top: 30px;
        line-height: 36px;
        font-size: 28px;
        height: 36px;
        margin-bottom: 10px;
      }
      .slaveTitle {
        line-height: 30px;
        height: 30px;
        font-size: 20px;
        margin-bottom: 10px;

        color: #797d82;
      }
    }
  }
}
</style>