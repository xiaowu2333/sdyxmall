<template>
  <div class="login">
    <login-nav></login-nav>
    <login-from></login-from>
  </div>
</template>

<script>
import LoginNav from "@/components/login/LoginNav.vue";
import LoginForm from "@/components/login/LoginForm.vue";

export default {
  components: {
    "login-nav": LoginNav,
    "login-from": LoginForm
  },
  mounted() {
    //全局
    this.$store.commit("changeNavStatus", false);
  },
  destroyed() {
    //全局
    this.$store.commit("changeNavStatus", true);
  }
};
</script>

<style lang="scss" scoped>
.login {
  background-color: #fff;
  overflow: hidden;
  height: 100vh;
}
</style>