<template>
  <div class="login-form">
    <form
      action=""
      method="get"
    >
      <van-cell-group
        :border=false
        class="van-hairline--bottom"
      >
        <van-field
          v-model="tel"
          type="tel"
          placeholder="手机号"
          maxlength="11"
          @input="onTelChange"
          :error-message="errorSessage"
        >
          <p
            slot="button"
            :class="[codeFlag?'right light':'right']"
            @click="getCode"
          >{{codeText}}</p>
        </van-field>
      </van-cell-group>
      <van-cell-group
        :border=false
        class="van-hairline--bottom"
      >
        <van-field
          v-model="code"
          type="digit"
          placeholder="验证码"
          maxlength="10"
          @input="codeCheck"
        />
      </van-cell-group>
      <div class="loginBtn">
        <van-button
          type="danger"
          :class="[btnFlag?'active':'']"
          :disabled="!btnFlag"
          @click="loginNow"
        >短信登录</van-button>
      </div>
    </form>
  </div>
</template>

<script>
import { Field, CellGroup, Button, Toast } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      tel: "",
      code: "",
      codeText: "获取验证码",
      codeFlag: false,
      errorSessage: "",
      btnFlag: false,
      checkTel: false
    };
  },
  components: {
    "van-field": Field,
    "van-cell-group": CellGroup,
    "van-button": Button
  },
  methods: {
    getCode() {
      if (this.codeText == "获取验证码" && this.codeFlag) {
        this.codeFlag = false;
        let num = 60;
        this.codeText = num + "秒";
        let timer = null;
        timer = setInterval(() => {
          num--;
          this.codeText = num + "秒";
          if (num <= 0) {
            clearInterval(timer);
            this.codeText = "获取验证码";
            this.onTelChange();
          }
        }, 1000);
      }
    },
    onTelChange() {
      // console.log(1);
      let reg = /^1[3456789]\d{9}$/;
      if (this.tel.length >= 11) {
        if (!reg.test(this.tel)) {
          this.errorSessage = "手机号码有误";
          this.codeFlag = false;
          this.checkTel = false;
        } else {
          this.errorSessage = "";
          this.codeFlag = true;
          this.checkTel = true;
        }
      } else {
        this.errorSessage = "";
        this.checkTel = false;

        this.codeFlag = false;
      }
      this.codeCheck();
    },
    codeCheck() {
      if (this.code.length >= 1 && this.checkTel) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }
    },
    loginNow() {
      let username = this.tel;
      let code = this.code;
      if (username.length == 11) {
        let loginStatus = this.userList.filter(item => {
          return item.username == username;
        }).length;
        // console.log(loginStatus);
        Toast.setDefaultOptions({ duration: 1000 });
        if (loginStatus) {
          Toast.success("登录成功!");

          this.$store.commit("changeUsername", username);
          this.$store.commit("changeLoginStatus", true);
          this.$router.push("/center");
        } else {
          Toast.fail("登录失败,账号或密码不正确");
        }
      }
    }
  },
  computed: {
    ...mapState("user", {
      userList: "userList"
    })
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  margin: 0 50px;
  form {
    overflow: hidden;

    .van-cell-group {
      .van-cell {
        padding-left: 0;
        padding: 25px 0;
        font-size: 30px;
      }
      .right {
        font-size: 25px;
        color: #bdc0c5;
        border: 0;
      }
      .light {
        color: #2c3e50;
      }
    }
    .loginBtn {
      margin-top: 100px;
      .van-button {
        width: 100%;
        height: 88px;
        background-color: #c03131;
        opacity: 0.3;
        font-size: 32px;
      }
      .active {
        color: #fff;
        opacity: 1;
      }
    }
  }
}
</style>