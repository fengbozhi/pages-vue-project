<template>
  <span class="icon-img" :class="classMap[genre]"></span>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      genre: {
        type: Number
      }
    },
    data() {
      return {
        classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  .icon-img
    display  inline-block
    width 12px
    height 12px
    vertical-align top
    background-size 12px 12px
    background-repeat no-repeat
    &.decrease
      bg-image('decrease_3')
    &.discount
      bg-image('discount_3')
    &.special
      bg-image('special_3')
    &.invoice
      bg-image('invoice_3')
    &.guarantee
      bg-image('guarantee_3')
</style>
