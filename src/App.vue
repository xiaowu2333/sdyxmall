<template>
  <div id="app">
    <div
      id="nav"
      v-show="this.$store.state.NavFlag"
    >
      <van-tabbar
        route
        inactive-color="#797d82"
        active-color="rgb(192, 49, 49)"
      >
        <van-tabbar-item
          replace
          to="/"
        >
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="shouye"
            size="24px"
          />
          <span>首页</span>
        </van-tabbar-item>
        <van-tabbar-item
          replace
          to="/enterprise"
        >
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="shinshopliwu"
            size="24px"
          />
          <span>企业福利</span>
        </van-tabbar-item>
        <van-tabbar-item
          replace
          to="/cart"
        >
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="gouwuche"
            size="24px"
          />
          <span>购物车</span>
        </van-tabbar-item>
        <van-tabbar-item
          replace
          to="/center"
        >
          <van-icon
            class="iconfont"
            class-prefix="icon"
            name="sousuo"
            size="24px"
          />
          <span>我的</span>
        </van-tabbar-item>
      </van-tabbar>

    </div>
    <transition
      mode="out-in"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
      :duration="{ enter: 100, leave: 300 }"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Icon } from "vant";
export default {
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
    "van-icon": Icon
  }
};
</script>
<style>
* {
  /*页面点击链接时，会出现高亮框，用此代码解决*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /*在谷歌里面小于12号的字，都会显示12号字，此代码解决此问题*/
  -webkit-text-size-adjust: none;
  /*禁用手机浏览器的用户选择复制文本的功能*/
  /* -webkit-user-select: none; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body,
html,
div,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dt,
dd,
li,
p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #666;
}

.clear:after {
  content: "";
  display: block;
  clear: both;
  overflow: hidden;
  height: 0;
  visibility: hidden;
}

.clear {
  zoom: 1;
}

input:focus {
  outline: none;
}

input::-webkit-input-placeholder {
  color: #adaeb2;
}

ul,
ol {
  list-style: none;
}

img {
  vertical-align: top;
  border: 0;
}

i,
b,
strong,
em,
input {
  display: block;
}

body {
  background: #f4f4f4;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 100px;
  /* text-align: center; */

  color: #2c3e50;
}

#nav {
  text-align: center;
}

#nav span {
  font-size: 20px;
  line-height: 35px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>