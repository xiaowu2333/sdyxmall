<template>
  <div class="content">
    <div
      class="kindsList"
      v-for="item in this.$store.state.home.goodsList"
      :key="item.topicId"
    >
      <div class="title_content">
        <h2>{{item.masterTitle}}</h2>
        <div class="title_right"><span>更多</span><span class="iconfont icon-you-"></span></div>
      </div>
      <div class="img_wrap">
        <van-image
          alt=""
          lazy-load
          :src="item.banner.imgUrl"
        />
      </div>
      <ul class="goods_list">
        <li
          v-for="itemPro in item.productList"
          :key="itemPro.productId"
          @click.capture.stop="toDetail(itemPro.productId)"
        >
          <div class="wrap-img"><img
              class="icon-img"
              v-if="iconImg(itemPro.labels)"
              src="https://mall.s.maizuo.com/4ebdc8588a09dd0f87a7982d5f5eb78e.jpg"
              alt=""
            >
            <!-- <img
              class="main-img"
              :src="itemPro.sku.imgUrl"
              alt=""
            > -->

            <van-image
              width="100"
              height="100"
              class="main-img"
              lazy-load
              :src="itemPro.sku.imgUrl"
            />
            <div
              class="img-tag"
              v-if="tagImg(itemPro.labels)"
            ><span
                v-for="(itemLabel,index) in itemPro.labels.common"
                :key="index"
                :style="{
                backgroundColor:itemLabel.labelColor}"
              >{{itemLabel.title}}</span></div>
          </div>
          <div class="p-wrap">

            <p>
              <span v-if="countryStatus(itemPro.labels)"><img
                  :src="itemPro.labels.country.image"
                  alt=""
                ></span>
              <span v-if="itemPro.hasVideo"><img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAAAAXNSR0IArs4c6QAAAdFJREFUWAnN101LAkEYB/D/DrqtXSIpROgFOxaUYrQdg+hziB9AvPUdMghvggdvvuClUycRPLbH8NiLBoVIUdChbIPd5omWhDIaZzd3LrvMPDPzm3l0mVHAy6muLwxMM6coyo5t21Gqm1Thhh43tDRV3d82jBuFcK+meWYD4UmhfppXAR6mVHUjQDvHA3yFIzBtGNkYpZUq/FjIxib9m/ttY8jGfgvwQ5s0MF4qQT85wdzurifrkQbOxOPQolGsHR5ivVBAaHnZVag0cFgzq+vYrNcRy2TANG24aex3V4GkYMEgltJpbB0fY35vb2yY09F1oDPwVCSC1YODj7RPx2JOtfDTM6AjobQnazWsZLNgoZBT/een50CSUNoXUykky2UogcCfcR99haIlgwlnW5bQKGLLERr6K9h6e8NtpYJusQj4DfhoGLjI5fDc6XyJBd4828HXfh+XR0e4azQEON9DXQdSOm/4n+Gap9MaDL7PKFjjKpDSec6/fS/driBjdLg08KndRjAcxlU+j/tmc/RMY7YorUSCH179W/7lQy2zfDry92QG8LIv2ejI3/JyEpmxycbo/klXPJmBvOhLJrIxuhzT/ZNPUvVDuj8NVTKR7R2WOIari9oCaAAAAABJRU5ErkJggg=="
                  alt=""
                ></span>{{itemPro.masterName}}</p>
          </div>
          <div class="price">
            <span class="real_price">￥{{itemPro.sku.price|goodsPriceFilter}}</span>
            <span
              class="before_price"
              v-if="itemPro.sku.marketPrice!=0"
            >￥{{itemPro.sku.marketPrice|goodsPriceFilter}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Image } from "vant";
export default {
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
        if (value.common != null) {
          return true;
        }
      } else {
        return false;
      }
    },
    countryStatus(value) {
      if (value != null) {
        if (value.country.image != "") {
          return true;
        }
      } else {
        return false;
      }
    },
    toDetail(id) {
      this.$router.push({
        path: `/product/${id}`
      });
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
  },
  components: {
    "van-image": Image
  }
};
</script>
<style lang="scss" scoped>
.content {
  box-sizing: border-box;
  .kindsList {
    background: #fff;
    margin-bottom: 20px;
    .title_content {
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 104px;
      h2 {
        color: #191a1b;
        font-weight: normal;
        font-size: 34px;
      }
      span {
        color: #797d82;
        font-size: 26px;
        &.iconfont {
          margin-left: 10px;
          font-size: 26px;
        }
      }
    }
    .img_wrap {
      padding: 0 30px;
      width: 100%;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    .goods_list {
      display: flex;
      width: 100%;
      flex-flow: wrap;
      box-sizing: border-box;
      padding-left: 30px;
      li {
        flex: 0 0 calc(33.33% - 30px);
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
          .img-tag {
            position: absolute;
            left: 0;
            bottom: 0;
            span {
              color: #fff;
              font-size: 14px;
              padding: 0px 4px;
              margin-right: 10px;
            }
          }
        }
        .p-wrap {
          display: flex;
          span {
            margin-right: 10px;
            img {
              width: 40px;
              height: 26px;
            }
          }
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            /* autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            -webkit-line-clamp: 2;
            color: #191a1b;
            font-size: 24px;
            text-indent: 0;
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
}
</style>