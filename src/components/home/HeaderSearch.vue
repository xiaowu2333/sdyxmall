<template>
  <div>
    <van-search v-model="value" placeholder="搜索" @focus="onFocus" />
  </div>
</template>

<script>
import { Search } from 'vant';
export default {
  data: function() {
    return {
      value: ''
    };
  },
  components: {
    'van-search': Search
  },
  methods: {
    onFocus() {
      this.$router.push('/search');
    }
  }
};
</script>

<style lang="scss" scoped></style>
