<template>
<div class="ratingselect">
  <div class="rating-type border-1px">
    <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
    <span @click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
    <span @click="select(1,$event)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
  </div>
  <div @click="toggleContent" class="switch" :class="{'on':onlyContent}">
    <span class="icon-check_circle"></span>
    <span class="text">只看内容的评价</span>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import bus from '../../common/js/bus.js';

  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
  export default{
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '吐槽'
          };
        }
      }
    },
    computed: {
      positives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE;
        });
      },
      negatives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGATIVE;
        });
      }
    },
    methods: {
      select(type, event) {
        if (!event._constructed) {
          return;
        }
        this.selectType = type;
        bus.$emit('selsetType', type);
      },
      toggleContent() {
        if (!event._constructed) {
          return;
        }
        this.onlyContent = !this.onlyContent;
        bus.$emit('contentToggle', this.onlyContent);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  .ratingselect
    .rating-type
      padding 18px 0
      margin 0 18px
      border-1px(rgba(7,17,27,0.1))
      font-size 0px
      .block
        display inline-block
        padding 8px 12px
        border-radius 1px
        margin-right 8px
        color rgb(77,85,93)
        font-size 12px
        line-height 16px
        &.active
          color #fff
        .count
          font-size 8px
          margin-left 2px
        &.positive
          background rgba(0,160,220,0.2)
          &.active
            background rgb(0,160,220,0)
        &.negative
          background rgba(77,85,93,0.2)
          &.active
            background rgb(77,85,93)
    .switch
      padding 12px 18px
      line-height 24px
      border-bottom 1px solid rgba(7,17,27,0.1)
      font-size 12px
      color rgb(147,143,159)
      &.on
        .icon-check_circle
          color #00c850
      .icon-check_circle
        display inline-block
        vertical-align top
        margin-right 4px
        font-size 24px
      .text
        font-size 12px

</style>
