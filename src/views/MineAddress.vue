<template>
  <div class="body">
    <mt-header
      title="地址"
      style="background: #393a32; font-size: 1.2em; height: 13vw"
    >
      <router-link to="/me" slot="left" class="iconfont icon-fanhuijiantou">
      </router-link>
    </mt-header>

    <div class="xfooter">
      <router-link to="/mineadd" class="iconfont icon-jiahaozhankai"
        >&nbsp;新增地址</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.body {
  background: #363636;
  height: 100vh;
  background-image: url(../assets/me/null_count.png);
  background-repeat: no-repeat;
  background-position: center;

  .xfooter {
    background: #f8be1a;
    height: 10vw;
    text-align: center;
    line-height: 10vw;
    width: 95vw;
    margin-left: 2.5vw;
    border-radius: 7px;
    position: fixed;
    bottom: 2vw;
    a {
      font-size: 0.9em;
      color: #fff;
    }
  }
}
</style>