<template>
  <div id="app" class="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
        </div>
      <div class="tab-item">
        <!--<router-link to="/seller">商家</router-link>-->
        <a href="test.html">测试</a>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import axoisPath from '@config/ajaxPath.js';
  import header from '@components/header/header.vue';
  import axios from 'axios';
  import {urlParse} from '@common/js/util';
  export default {
    data() {
      return {
        seller: {
          id: (() => {
            let queryParse = urlParse();
            return queryParse.id;
          })()
        }
      };
    },
    created() {
      axios.get(axoisPath + '/api/seller?id=' + this.seller.id)
        .then((response) => {
          this.seller = Object.assign({}, this.seller, response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  #app
    .tab
      display flex
      width 100%
      height 40px;
      line-height 40px
      border-1px(rgba(7,17,27,0.1))
      .tab-item
          flex 1
          text-align center
          & > a
            display block
            font-size 14px
            color rgb(77,85,93)
            &.active
              color rgb(240,20,20)
</style>
