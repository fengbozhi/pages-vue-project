<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop="decreaseCart">
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import bus from '../../common/js/bus.js';
  export default{
    props: {
      food: {
        type: Object,
        default: {
          count: 1
        }
      }
    },
    methods: {
      addCart(even) {
        if (!even._constructed) {
          return false;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        bus.$emit('cartAddTu', event.target);
      },
      decreaseCart(even) {
        if (!even._constructed) {
          return false;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 24px
    line-height 24px
    color rgb(0,160,220)
    .cart-decrease
      display inline-block
      padding 6px
      transition all 0.4s linear
      &.move-enter,&.move-leave-to
        opacity 0
        transform translate3d(24px,0,0) rotate(180deg)
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147,143,159)
    .cart-add
      display inline-block
      padding 6px
</style>
