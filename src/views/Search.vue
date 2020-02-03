<template>
  <div class="search">
    <search-top></search-top>
    <search-hot></search-hot>

  </div>
</template>

<script>
import SearchTop from "@/components/search/SearchTop.vue";
import SearchHot from "@/components/search/SearchHot.vue";

export default {
  components: {
    "search-top": SearchTop,
    "search-hot": SearchHot
  },
  mounted() {
    if (!this.$store.state.search.keyWords.length) {
      this.$store.dispatch("search/initKeyWords");
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  background-color: #fff;
}
</style>