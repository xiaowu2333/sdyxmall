<template>
  <div class="register">
    <register-nav></register-nav>
    <register-from></register-from>
  </div>
</template>

<script>
import RegisterNav from "@/components/register/RegisterNav.vue";
import RegisterForm from "@/components/register/RegisterForm.vue";

export default {
  components: {
    "register-nav": RegisterNav,
    "register-from": RegisterForm
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
.register {
  background-color: #fff;
  overflow: hidden;
  height: 100vh;
}
</style>