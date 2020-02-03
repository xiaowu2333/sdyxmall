<template>
  <div>
    我是企业
    <van-button type="warning">警告按钮</van-button>
  </div>
</template>

<script>
  import {
    Button,
    Toast
  } from 'vant';
  export default {
    mounted: function () {
      this.$axios({
        method: 'get',
        // url: "https://m.sdyxmall.com/gateway?businessType=1&businessId=1&k=581667",// 种类
        //https://m.sdyxmall.com/gateway?type=1&wd=&pageSize=10&pageNum=1&k=9482292 //猜你喜欢
        //https://m.sdyxmall.com/gateway?k=7298162  //banner
        // https://m.sdyxmall.com/gateway?type=19&k=6393156//中国特产馆的图标
        // https://m.sdyxmall.com/gateway?type=20&k=9562482 //春节发货通知
        // https://m.sdyxmall.com/gateway?k=9433356 活动小肥猪
        url: '/api/gateway?businessType=1&businessId=1&k=581667',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.6.5","e":"1579857789227633271657","cc":"","bc":"110100","la":"0","lo":"0"}',
          'X-Host': 'mall.cfg.topic.gather-list',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(result => {
        console.log(result.data);
      });
    },
    components: {
      'van-button': Button
    }
  };
</script>

<style></style>