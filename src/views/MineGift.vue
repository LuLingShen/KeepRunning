<template>
  <div class="body">
    <mt-header
      title="奖品核销"
      style="background: #393a32; font-size: 1.2em; height: 13vw"
    >
      <router-link to="/me" slot="left" class="iconfont icon-fanhuijiantou">
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
}
</style>