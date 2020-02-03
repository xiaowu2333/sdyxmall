<template>
  <div class="downMenu">
    <div class="tagbar">
      <ul
        class="kind"
        v-show="!barFlag"
      >
        <li><span
            :class="[kindFlagId==0 ?'active':'']"
            @click="clickKind(0)"
          >推荐</span></li>
        <li
          v-for="item in this.$store.state.home.kindsOf"
          :key="item.topicId"
        ><span
            @click="clickKind(item.topicId)"
            :class="[kindFlagId==item.topicId ?'active':'']"
          >{{ item.masterTitle }}</span></li>
        <li class="last">

        </li>
      </ul>
      <!-- <van-tabs
        swipeable
        v-show="!barFlag"
        title-active-color="#c03131"
        title-inactive-color="#797d82"
        color="#c03131"
      >
        <van-tab
          title="推荐"
          @click="clickKind(0)"
        >
        </van-tab>
        <van-tab
          @click="clickKind(item.topicId)"
          v-for="item in this.$store.state.home.kindsOf"
          :title="item.masterTitle"
          :key="item.topicId"
        >
        </van-tab>

      </van-tabs> -->
    </div>
    <div
      class="down_icon"
      v-show="!barFlag"
    ><span
        class="iconfont icon-Group-"
        @click="showBar"
        :show="barFlag"
      >
      </span>
    </div>
    <van-overlay
      :show="barFlag"
      @click="barFlag = false"
    >
      <div class="content_overlay">
        <header-search></header-search>
        <div class="content_all">
          <h2>全部分类</h2>
          <ul>
            <li>
              <span
                :class="[kindFlagId==0 ?'active':'']"
                @click="clickKind(0)"
              >推荐</span>
            </li>
            <li
              v-for="item in this.$store.state.home.kindsOf"
              :key="item.topicId"
            ><span
                @click="clickKind(item.topicId)"
                :class="[kindFlagId==item.topicId ?'active':'']"
              >{{ item.masterTitle }}</span></li>

          </ul>
        </div>
        <div class="down_icon_s"><span
            class="iconfont icon-icon2"
            @click="showBar"
          >
          </span>
        </div>

      </div>

    </van-overlay>
  </div>
</template>

<script>
import { Collapse, CollapseItem, Overlay, Tab, Tabs } from "vant";
import HeaderSearch from "@/components/home/HeaderSearch.vue";
export default {
  data: function() {
    return {
      kindFlagId: "0",
      barFlag: false
    };
  },
  components: {
    "van-collapse": Collapse,
    "van-collapse-item": CollapseItem,
    "van-overlay": Overlay,
    "header-search": HeaderSearch,
    "van-tabs": Tabs,
    "van-tab": Tab
  },
  methods: {
    clickKind(topicId) {
      this.kindFlagId = topicId;
      console.log(topicId);
    },
    showBar() {
      this.barFlag = !this.barFlag;
    }
  }
};
</script>

<style lang="scss" scoped>
.downMenu {
  position: relative;
  background-color: #fff;
  .tagbar {
    overflow: hidden;
    // margin-bottom: 2px;
    height: 54px;

    .kind {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;

      li {
        color: #797d82;
        font-size: 28px;
        flex: none;
        padding: 0px 30px;
        height: 65px;

        span {
          display: block;
          padding-bottom: 5px;
          border-bottom: 4px solid #fff;

          &.active {
            color: #c03131;
            border-bottom: 4px solid #c03131;
          }
        }
      }
    }
  }

  .down_icon {
    position: absolute;
    top: 0;
    right: 0px;
    padding-left: 20px;
    background-color: rgba(255, 255, 255, 0.6);

    span {
      background-color: #fff;
      padding-left: 10px;
      font-size: 35px;
      padding-right: 30px;
    }
  }

  .content_overlay {
    background-color: #fff;
    overflow: hidden;

    .down_icon_s {
      position: absolute;
      right: 0;
      top: 108px;
      padding: 0 30px;
      color: #797d82;

      span {
        font-size: 40px;
        background-color: #fff;
      }
    }

    .content_all {
      border-top: 2px solid #f4f4f4;

      h2 {
        color: #797d82;
        font-size: 28px;
        padding: 10px 30px;
        font-weight: 400;
      }

      ul {
        padding: 0 30px 30px 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;

        li {
          width: 25%;

          color: #797d82;
          text-align: center;
          font-size: 28px;
          padding: 40px 40px 0 0;

          span {
            &.active {
              color: #c03131;
              border: 2px solid #c03131;
            }

            border-radius: 4px;
            border: 2px solid #d2d6dc;
            display: block;
            line-height: 58px;
          }
        }
      }
    }
  }
}
</style>