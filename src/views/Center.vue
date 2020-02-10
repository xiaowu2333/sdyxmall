<template>
  <div class="center">
    <center-msg></center-msg>
    <center-order></center-order>
    <center-setting></center-setting>
  </div>
</template>

<script>
import CenterMsg from "@/components/center/CenterMsg.vue";
import CenterOrder from "@/components/center/CenterOrder.vue";
import CenterSetting from "@/components/center/CenterSetting.vue";

export default {
  components: {
    "center-msg": CenterMsg,
    "center-order": CenterOrder,
    "center-setting": CenterSetting
  }
};
</script>
<style lang="scss" scoped>
</style>