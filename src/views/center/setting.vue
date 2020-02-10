<template>
  <div class="setting">
    <setting-nav></setting-nav>
    <setting-options></setting-options>

  </div>
</template>

<script>
import SettingNav from "@/components/center/setting/SettingNav.vue";
import SettingOptions from "@/components/center/setting/SettingOptions.vue";

export default {
  components: {
    "setting-nav": SettingNav,
    "setting-options": SettingOptions
  },
  beforeCreate() {
    if (!this.$store.state.isLogin) {
      this.$router.replace("/login");
    }
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
.setting {
  // background-color: #fff;
  overflow: hidden;
}
</style>