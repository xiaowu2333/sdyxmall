<template>
  <div class="bottom">
    <div class="left">
      <van-checkbox
        v-model="a"
        checked-color="#07c160"
        icon-size="15"
        @click="checkAll"
      ><span class="store-name-text">全选</span></van-checkbox>
    </div>
    <div class="right">结算</div>
  </div>
</template>

<script>
import { Checkbox } from "vant";
import { mapMutations } from "vuex";

export default {
  components: {
    "van-checkbox": Checkbox
  },
  data() {
    return {
      a: false
    };
  },
  methods: {
    checkAll() {
      console.log(this.a);
      // if (this.a) {
      //   this.changeCheckStatus(this.a);
      // } else {
      //   this.changeCheckStatus(this.a);
      // }
    },
    ...mapMutations("cart", {
      changeCheckStatus: "changeCheckStatus"
    })
  }
};
</script>
<style lang="scss" scoped>
.bottom {
  height: 100px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 100px;
  left: 0;
  .left {
    float: left;
    padding-left: 30px;
    .van-checkbox {
      height: 100px;
    }
    span {
      color: #797d82;
      font-size: 30px;
    }
  }
  .right {
    float: right;
    text-align: center;
    width: 210px;
    font-size: 32px;
    line-height: 100px;
    background-color: #bdc0c5;
    color: #fff;
  }
}
</style>