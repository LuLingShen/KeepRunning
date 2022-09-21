<template>
  <div class="hd-item">
    <!-- 当数据为空时 -->
    <van-empty
  class="custom-image"
  image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
  description="数据为空，请重新检索"
/>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
:deep{
.custom-image{
  padding-top: 8vw;
  padding-bottom: 88vw;
}
.custom-image .van-empty__image {
    width: 24vw;
    height: 24vw;
  }
  .custom-image p{
    color: white;
    font-family: '微软雅黑' !important;
    font-size: 4vw;
  }
}

</style>
<style lang="scss" scoped>
.hd-item{
  background-color: #444;
}
</style>