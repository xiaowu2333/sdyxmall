<template>
  <div class="nav">
    <div
      class="left"
      @click="backHome"
    ><span class="iconfont icon-shouye"></span></div>
    <div class="center">企业福利</div>
    <div class="right">北京 <span class="iconfont icon-Group-"></span></div>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #fff;
  height: 88px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
  .iconfont {
    font-size: 40px;
  }
  .left {
    flex: 2;
  }
  .center {
    text-align: center;
    flex: 8;
    font-size: 34px;
    color: #2e2f30;
  }
  .right {
    text-align: right;
    flex: 2;
    color: #2c3e50;
    font-size: 28px;
    .iconfont {
      font-size: 20px;
    }
  }
}
</style>