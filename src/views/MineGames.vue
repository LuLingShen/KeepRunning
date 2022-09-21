<template>
  <div class="body">
    <mt-header
      title="赛事报名记录"
      style="background: #393a32; font-size: 1.2em; height: 13vw"
    >
      <router-link to="/me" slot="left" class="iconfont icon-fanhuijiantou">
      </router-link>
      <router-link to="/minecard" slot="right" class="xright" style=""
        >完赛证书
      </router-link>
    </mt-header>
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
  .xright {
    display: inline-block;
    font-size: 0.6em;
    background: #ecba1e;
    border-radius: 10px;
    width: 17vw;
    text-align: center;
    height: 5vw;
    line-height: 5vw;
  }
}
</style>