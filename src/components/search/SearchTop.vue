<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="搜索"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
import { Search } from "vant";
export default {
  data: function() {
    return {
      value: ""
    };
  },
  components: {
    "van-search": Search
  },
  methods: {
    onSearch() {},
    onCancel() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>