<template>
  <div class="register-form">
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
        />
      </van-cell-group>
      <van-cell-group
        :border=false
        class="van-hairline--bottom"
      >
        <van-field
          v-model="password"
          type="password"
          placeholder="密码"
          maxlength="20"
          @input="onPwdChange"
          right-icon="eye-o"
          id="pwd"
          @click-right-icon="showPwd"
          :error-message="pwdErrorSessage"
        />
      </van-cell-group>

      <div class="registerBtn">
        <van-button
          type="danger"
          :class="[btnFlag?'active':'']"
          :disabled="!btnFlag"
          @click="addUser"
        >注册</van-button>
      </div>

    </form>
    <div class="agreement">
      <div class="agreement-text">注册即代表同意
        <span class="agreement-link">《服务条款》</span></div>
    </div>
  </div>
</template>

<script>
import { Field, CellGroup, Button } from "vant";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      tel: "",
      code: "",
      password: "",
      codeText: "获取验证码",
      codeFlag: false,
      errorSessage: "",
      btnFlag: false,
      pwdErrorSessage: "",
      pwdFlg: false
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
          this.btnFlag = false;
        } else {
          this.errorSessage = "";
          this.codeFlag = true;
          if (this.pwdFlg) {
            this.btnFlag = true;
          }
        }
      } else {
        this.errorSessage = "";
        this.codeFlag = false;
        this.btnFlag = false;
      }
    },
    onPwdChange() {
      let flag = false;
      let reg = /^\w+$/;
      if (this.password.length >= 6 && this.password.length <= 20) {
        if (reg.test(this.password)) {
          this.pwdErrorSessage = "";
          this.pwdFlg = true;
          if (this.codeFlag) {
            this.btnFlag = true;
          } else {
            this.btnFlag = false;
          }
        } else {
          this.pwdErrorSessage = "密码只能由英文、数字以及下划线组成";
          this.btnFlag = false;
          this.pwdFlg = true;
        }
      } else {
        this.pwdErrorSessage = "请输入6至20位密码";
        this.btnFlag = false;
        this.pwdFlg = true;
      }
    },
    showPwd() {
      let target = document.querySelector("#pwd");

      if (target.type == "password") {
        target.type = "text";
      } else {
        target.type = "password";
      }
    },
    addUser() {
      let user = {
        username: this.tel,
        userpwd: this.password
      };
      this.updateUserList(user);
      this.$store.commit("changeUsername", this.tel);
      this.$store.commit("changeLoginStatus", true);
      this.$router.push("/center");
    },
    ...mapMutations("user", {
      updateUserList: "updateUserList"
    })
  },
  computed: {
    ...mapState("user", {
      userList: "userList"
    })
  }
};
</script>

<style lang="scss" scoped>
.register-form {
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
      .van-icon {
        font-size: 40px !important;
      }
    }
    .registerBtn {
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
  .agreement {
    margin: 60px 0;
    text-align: center;
    .agreement-text {
      color: #797d82;
      .agreement-link {
        color: #191a1b;
      }
    }
  }
}
</style>