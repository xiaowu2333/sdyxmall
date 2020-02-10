<template>
  <div class="setting">

    <div class="first">
      <van-cell title="意见反馈" />

      <van-cell title="资质证照" />

      <van-cell title="隐私政策" />

      <van-cell title="用户协议" />

      <van-cell title="运费规则" />

    </div>
    <div class="second">
      <van-cell
        title="清除缓存"
        value="142.2KB"
      />
    </div>
    <div class="third">
      <van-cell title="注销账号" />
    </div>
    <div class="versions">版本号 V1.4.1</div>
    <div
      class="login-out"
      @click="loginOut"
    >退出</div>
  </div>
</template>

<script>
import { Cell, Divider, Icon, Dialog } from "vant";

export default {
  components: {
    "van-cell": Cell,
    "van-icon": Icon
  },
  methods: {
    toSetting() {
      this.$router.push("/center/setting");
    },
    loginOut() {
      Dialog.confirm({
        title: "提示",
        message: "退出登录",
        confirmButtonColor: "#c03131",
        width: "74.7%"
      })
        .then(() => {
          // on confirm
          this.$store.commit("changeUsername", "");
          this.$store.commit("changeLoginStatus", false);
          this.$router.push("/center");
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.van-cell {
  padding: 25px 30px;

  .van-cell__title {
    font-size: 30px;
    color: #2e2f30;
  }
}
.first {
  margin-bottom: 20px;
}
.second {
  margin-bottom: 20px;
}
.versions {
  text-align: center;
  color: #bdc0c5;
  font-size: 26px;
  margin-top: 45px;
}
.login-out {
  color: #c03131;
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
  font-size: 30px;
  z-index: 100;
  position: fixed;
  bottom: 0px;
  left: 0;
}
</style>