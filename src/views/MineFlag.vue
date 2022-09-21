<template>
  <div class="body">
    <mt-header
      title="活动报名记录"
      style="background: #393a32; font-size: 1.2em; height: 13vw"
    >
      <router-link to="/me" slot="left" class="iconfont icon-fanhuijiantou">
      </router-link>
    </mt-header>
    <van-tabs v-model="active">
      <van-tab title="我参与的活动">
        <!-- <hr /> -->
        <div class="xhr"></div>
        <van-tabs v-model="activeName" class="xtab">
          <van-tab title="例跑" name="a"></van-tab>
          <van-tab title="寻宝" name="b"></van-tab>
        </van-tabs>
      </van-tab>
      <van-tab title="我发起的活动">
        <van-tabs v-model="activeName" class="xtab">
          <van-tab title="例跑" name="a"></van-tab>
          <van-tab title="寻宝" name="b"></van-tab>
        </van-tabs>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      activeName: "a",
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  background: #363636;
  height: 100vh;
  background-image: url(../assets/me/null_count.png);
  background-repeat: no-repeat;
  background-position: center;
  .xhr {
    border-bottom: 1px solid #85867e;
    padding: 2vw 0;
    background-color: #393a32;
  }
}
:deep {
  .van-tabs__nav {
    background-color: #393a32;
  }
  .van-tab--active {
    color: #fdfdfd !important;
  }
  .van-tab {
    color: #9fa098;
    font-size: 1em;
    // border-bottom: 1px solid #85867e;
  }
  .van-tabs__line {
    background-color: #fbba21;
  }
  .xtab {
    .van-tab {
      flex: none;
      width: 10vw;
      border-bottom: 0;
      font-size: 0.8em;
      margin-left: 2vw;
    }
    .van-tabs__line {
      display: none;
    }
  }
}
</style>