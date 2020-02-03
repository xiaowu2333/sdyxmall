<template>
  <div class="guessLike">
    <div class="title">
      <h3>猜你喜欢</h3>
    </div>
    <ul class="goods_list">
      <li
        v-for="item in this.$store.state.home.guessLikeList"
        :key="item.productId"
      >
        <div class="wrap-img"><img
            class="icon-img"
            v-if="iconImg(item.labels)"
            src="https://mall.s.maizuo.com/4ebdc8588a09dd0f87a7982d5f5eb78e.jpg"
            alt=""
          >
          <van-image
            class="main-img"
            lazy-load
            :src="item.sku.imgUrl"
          />
        </div>
        <div class="p-wrap">

          <p>
            <span v-if="countryStatus(item.labels)"><img
                :src="item.labels.country.image"
                alt=""
              ></span>
            <span v-if="item.hasVideo"><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAAAAXNSR0IArs4c6QAAAdFJREFUWAnN101LAkEYB/D/DrqtXSIpROgFOxaUYrQdg+hziB9AvPUdMghvggdvvuClUycRPLbH8NiLBoVIUdChbIPd5omWhDIaZzd3LrvMPDPzm3l0mVHAy6muLwxMM6coyo5t21Gqm1Thhh43tDRV3d82jBuFcK+meWYD4UmhfppXAR6mVHUjQDvHA3yFIzBtGNkYpZUq/FjIxib9m/ttY8jGfgvwQ5s0MF4qQT85wdzurifrkQbOxOPQolGsHR5ivVBAaHnZVag0cFgzq+vYrNcRy2TANG24aex3V4GkYMEgltJpbB0fY35vb2yY09F1oDPwVCSC1YODj7RPx2JOtfDTM6AjobQnazWsZLNgoZBT/een50CSUNoXUykky2UogcCfcR99haIlgwlnW5bQKGLLERr6K9h6e8NtpYJusQj4DfhoGLjI5fDc6XyJBd4828HXfh+XR0e4azQEON9DXQdSOm/4n+Gap9MaDL7PKFjjKpDSec6/fS/driBjdLg08KndRjAcxlU+j/tmc/RMY7YorUSCH179W/7lQy2zfDry92QG8LIv2ejI3/JyEpmxycbo/klXPJmBvOhLJrIxuhzT/ZNPUvVDuj8NVTKR7R2WOIari9oCaAAAAABJRU5ErkJggg=="
                alt=""
              ></span>{{item.masterName}}</p>
          <p class="slaveName">{{item.slaveName}}</p>
        </div>
        <div class="price">
          <span class="real_price">￥{{item.sku.price|goodsPriceFilter}}</span>
          <span
            class="before_price"
            v-if="item.sku.marketPrice!=0"
          >￥{{item.sku.marketPrice|goodsPriceFilter}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  components: {
    "van-image": Image
  },
  methods: {
    iconImg(value) {
      if (value != null) {
        if (value.rapidAfterSales != null) {
          return true;
        }
      } else {
        return false;
      }
    },
    tagImg(value) {
      if (value != null) {
        if (value.common.length != 0) {
          return true;
        }
      } else {
        return false;
      }
    },
    countryStatus(value) {
      if (value != null) {
        if (value.country != null) {
          return true;
        }
      } else {
        return false;
      }
    }
  },
  filters: {
    goodsPriceFilter(price) {
      let newPrice = (price / 100).toFixed(1);
      if (newPrice.charAt(newPrice.length - 1) == 0) {
        newPrice = newPrice.slice(0, -2);
      }
      return newPrice;
    }
  }
};
</script>

<style lang="scss" scoped>
.guessLike {
  background-color: #fff;
  .title {
    height: 104px;
    text-align: center;
    h3 {
      font-weight: normal;
      line-height: 104px;
      font-size: 28px;
    }
  }
  .goods_list {
    display: flex;
    width: 100%;
    flex-flow: wrap;
    box-sizing: border-box;
    padding-left: 30px;
    li {
      flex: 0 0 calc(50% - 30px);
      margin-right: 30px;
      overflow: hidden;
      margin-bottom: 30px;
      .wrap-img {
        position: relative;
        background: rgb(244, 244, 244);
        margin-bottom: 20px;
        .icon-img {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 54px;
        }

        .main-img {
          width: 100%;
        }
      }
      .p-wrap {
        display: flex;
        flex-wrap: wrap;
        span {
          margin-right: 10px;
          img {
            width: 40px;
            height: 24px;
            transform: translateY(6px);
          }
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          /* autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 1;
          color: #191a1b;
          font-size: 28px;
          text-indent: 0;

          &.slaveName {
            color: #797d82;
            font-size: 24px;
          }
        }
      }

      .price {
        .real_price {
          color: #c03131;
          font-size: 28px;
          margin-right: 10px;
        }
        .before_price {
          color: rgb(189, 192, 197);
          font-size: 20px;
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>