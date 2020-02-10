<template>
  <div class="setting">

    <van-cell
      title="我的体验"
      is-link
    >
      <van-icon
        slot="icon"
        name="tijian"
        class-prefix="icon"
        class="iconfont"
        style="line-height: inherit;"
      />
    </van-cell>
    <van-cell
      title="企业福利"
      is-link
    >
      <van-icon
        slot="icon"
        name="fuliquan"
        class-prefix="icon"
        class="iconfont"
        style="line-height: inherit;"
      />
    </van-cell>
    <van-cell
      title="客服"
      is-link
    >
      <van-icon
        slot="icon"
        name="kefu"
        class-prefix="icon"
        class="iconfont"
        style="line-height: inherit;"
      />
    </van-cell>
    <van-cell
      title="设置"
      is-link
      @click="toSetting"
    >
      <van-icon
        slot="icon"
        name="shezhi"
        class-prefix="icon"
        class="iconfont"
        style="line-height: inherit;"
      />
    </van-cell>
  </div>
</template>

<script>
import { Cell, Divider, Icon } from "vant";

export default {
  components: {
    "van-cell": Cell,
    "van-icon": Icon
  },
  methods: {
    toSetting() {
      this.$router.push("/center/setting");
    }
  }
};
</script>
<style lang="scss" scoped>
.van-cell {
  padding: 25px 30px;
  .iconfont {
    font-size: 40px;
    margin-right: 20px;
  }
  .icon-tijian {
    color: #f49c2d;
  }
  .icon-fuliquan {
    color: #f44b4b;
  }
  .icon-kefu {
    color: #17c1c2;
  }
  .icon-shezhi {
    color: #83e11d;
  }
  .van-cell__title {
    font-size: 30px;
    color: #2e2f30;
  }
}
</style>