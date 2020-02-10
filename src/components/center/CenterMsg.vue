<template>
  <div class="center-msg">
    <div class="login-box">
      <img
        src="data:image/png;base64,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"
        alt=""
        @click="loginIn"
      >
      <div @click="loginIn">{{this.$store.state.isLogin?this.$store.state.username:'立即登录'}}</div>
    </div>
    <div class="balance">
      <ul>
        <li>
          <div class="num"><span>0.00</span></div>
          <div class="desc">积分</div>
        </li>
        <li>
          <div class="num"><span>0</span>张</div>
          <div class="desc">苏打卷</div>
        </li>
        <li>
          <div class="num"><span>0</span>张</div>
          <div class="desc">现金卷</div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginIn() {
      if (!this.$store.state.isLogin) {
        this.$router.push("/login");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.center-msg {
  //   background-color: #fff;
  margin-bottom: 20px;
  .login-box {
    background-image: url(https://file.sdyxmall.com/h5/v1/public/app/img/bg.71ef26b.png);
    background-size: cover;
    padding: 112px 0 48px 40px;
    display: flex;
    align-items: center;

    img {
      width: 130px;
      height: 130px;
      border-radius: 70px;
      margin-right: 40px;
    }

    div {
      font-size: 30px;
      color: #2c3e50;
    }
  }
  .balance {
    padding-top: 40px;
    margin-top: -50px;
    padding-bottom: 20px;
    background: linear-gradient(0deg, #fff 65%, hsla(0, 0%, 100%, 0));
    ul {
      display: flex;
      justify-content: space-around;
      text-align: center;
      li {
        height: 100px;
        .num {
          margin-bottom: 8px;
          color: #2e2f30;
          span {
            font-size: 34px;
          }
        }
        .desc {
          font-size: 26px;
          color: #797d82;
        }
      }
    }
  }
}
</style>