<template>
  <div class="hotWords">
    <div class="title_words">
      <div>热门搜索</div>
    </div>
    <ul>
      <li
        v-for="(item,index) in $store.state.search.keyWords"
        :key="index"
      ><span>{{item}}</span></li>

    </ul>

    <div class="van-hairline--bottom"></div>
    <ul>

    </ul>
  </div>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hotWords {
  .title_words {
    div {
      padding: 26px 0 26px 30px;
      color: #bdc0c5;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 30px;
    li {
      background-color: #f4f4f4;
      height: 60px;
      margin-right: 20px;
      margin-bottom: 30px;
      span {
        padding: 0 20px;
        font-size: 26px;
        line-height: 60px;
        color: #191a1b;
      }
    }
  }
}
</style>