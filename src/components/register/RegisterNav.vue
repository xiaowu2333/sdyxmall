<template>
  <div class="nav">
    <div class="header van-hairline--bottom">
      <div class="left">
        <van-icon
          name="cross"
          size="20"
          @click="toHome"
        />
      </div>
      <div class="title">注册</div>
      <div
        class="register-title"
        @click="toLogin"
      >登录</div>
    </div>
    <div class="logo-img">
      <img
        src="https://file.sdyxmall.com/h5/auth/public/app/img/logo.adec77d.png"
        alt="logo"
      >
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  components: {
    "van-icon": Icon
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    toHome() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  height: 88px;
  align-items: center;
  padding: 0 30px;
  div {
    flex: 1;
    justify-content: space-around;
    &.title {
      font-size: 34px;
      text-align: center;
      color: #191a1b;
    }
    &.register-title {
      box-sizing: border-box;
      text-align: right;
      color: #191a1b;
      font-size: 28px;
    }
  }
}
.logo-img {
  margin: 110px auto;
  text-align: center;
  img {
    height: 52px;
  }
}
</style>