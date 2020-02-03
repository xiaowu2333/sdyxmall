<template>
  <div class="home">
    <div class="posEle">
      <header-search></header-search>
      <header-down></header-down>
    </div>
    <div class="fenge"></div>
    <van-pull-refresh
      v-model="$store.state.home.refresh"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <header-banner></header-banner>
      <content-global></content-global>
      <div
        class="backTop"
        @click="toTop"
      ><img
          src="https://file.sdyxmall.com/h5/v1/public/app/img/toTop.4451d90.png"
          alt=""
        ></div>
      <content-all></content-all>
    </van-pull-refresh>
    <van-list
      v-model="$store.state.home.gLikeLoading"
      :error.sync="gLikeError"
      error-text="请求失败，点击重新加载"
      :finished="gLikeFinished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <guess-like></guess-like>
    </van-list>
  </div>
</template>

<script>
import HeaderSearch from "@/components/home/HeaderSearch.vue";
import HeaderDown from "@/components/home/HeaderDown.vue";

import HeaderBanner from "@/components/home/HeaderBanner.vue";
import ContentGlobal from "@/components/home/ContentGlobal.vue";
import ContentAll from "@/components/home/ContentAll.vue";
import GuessLike from "@/components/home/GuessLike.vue";

//vant
import { PullRefresh, List } from "vant";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  components: {
    "header-search": HeaderSearch,
    "header-down": HeaderDown,
    "header-banner": HeaderBanner,
    "content-global": ContentGlobal,
    "content-all": ContentAll,
    "guess-like": GuessLike,
    "van-pull-refresh": PullRefresh,
    "van-list": List
  },
  data() {
    return {
      pageNum: 1
    };
  },

  mounted() {
    //轮播图
    if (!this.swiperBanner.length) {
      this.initSwiperBanner();
    }
    //类型
    if (!this.kindsOf.length) {
      this.initClassify();
    }
    //所有商品列表
    if (!this.goodsList.length) {
      this.initGoodsList();
    }
    //总分类
    if (!this.global.length) {
      this.initGlobal();
    }
    //活动图
    if (!this.activeImg.length) {
      this.initActiveImg();
    }
    //猜你喜欢
    if (!this.guessLikeList.length) {
      this.initGuessLikeList(1);
    }
  },
  methods: {
    ...mapActions("home", {
      initSwiperBanner: "initSwiperBanner",
      initClassify: "initClassify",
      initGoodsList: "initGoodsList",
      initGlobal: "initGlobal",
      initActiveImg: "initActiveImg",
      initGuessLikeList: "initGuessLikeList",
      initAll: "initAll"
    }),
    ...mapMutations("home", {
      changeGLikeFinished: "changeGLikeFinished"
    }),
    onRefresh() {
      this.initAll();
    },
    onLoad() {
      this.pageNum = this.pageNum + 1;
      // console.log(this.pageNum);
      // debugger;
      if (this.guessLikeList.length >= 100) {
        this.changeGLikeFinished(true);
      } else {
        this.initGuessLikeList(this.pageNum);
      }
    },
    toTop() {
      document.documentElement.scrollTop = 1;
    }
  },
  computed: {
    ...mapState("home", {
      swiperBanner: "swiperBanner",
      kindsOf: "kindsOf",
      goodsList: "goodsList",
      global: "global",
      activeImg: "activeImg",
      guessLikeList: "guessLikeList",
      gLikeError: "gLikeError",
      gLikeFinished: "gLikeFinished"
    })
  }
};
</script>

<style lang="scss" scoped>
.backTop {
  width: 100px;
  height: 100px;
  position: fixed;
  z-index: 999;
  right: 20px;
  bottom: 110px;

  img {
    width: 100px;
    height: 100px;
  }
}

.posEle {
  position: fixed;
  z-index: 999;
  width: 100%;
}
.fenge {
  height: 162px;
}
</style>