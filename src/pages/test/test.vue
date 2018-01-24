<template>
  <div class="text">
    <span>我是测试</span>
    <div class="box"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  $color: yellow;
  body{
    font-size: 14px;
  }
  .box{
    box-sizing: border-box;
    width: 7.5rem;
    height: 5rem;
    border: 1px solid red;
  }
  .text{
    color: $color;
    font-size: 16px;
  }


</style>
