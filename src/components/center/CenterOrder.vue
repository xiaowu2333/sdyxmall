<template>
  <div class="order">
    <van-cell
      title="我的订单"
      is-link
      :border=false
    />
    <van-divider />
    <ul>
      <li>
        <span class="iconfont icon-daifukuan"></span>
        <span>待付款</span>
      </li>
      <li>
        <span class="iconfont icon-fenxiang"></span>
        <span>待分享</span>
      </li>
      <li>
        <span class="iconfont icon-daifahuo"></span>
        <span>待发货</span>
      </li>
      <li>
        <span class="iconfont icon-daishouhuo"></span>
        <span>待收货</span>
      </li>
      <li>
        <span class="iconfont icon-tui"></span>
        <span>退款售后</span>
      </li>

    </ul>
  </div>
</template>

<script>
import { Cell, Divider } from "vant";

export default {
  components: {
    "van-cell": Cell,
    "van-divider": Divider
  }
};
</script>
<style lang="scss" scoped>
.order {
  background-color: #fff;
  margin-bottom: 20px;
  .van-divider {
    margin: 0;
  }
  ul {
    display: flex;
    justify-content: space-around;
    text-align: left;
    align-items: center;
    li {
      height: 160px;
      overflow: hidden;
      color: #797d82;
      span {
        display: block;
        text-align: center;
      }
      .iconfont {
        margin-top: 30px;
        font-size: 60px;
        color: #5e5f60;
        font-weight: 100;
      }
    }
  }
}
</style>