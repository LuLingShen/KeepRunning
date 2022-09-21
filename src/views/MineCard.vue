<template>
  <div class="body">
    <div class="xtab">
      <router-link to="/me" class="iconfont icon-fanhuijiantou"></router-link>
      <van-tabs v-model="active">
        <van-tab title="完赛证书">
          <div class="xnull_book"></div>
        </van-tab>
        <van-tab title="成绩证书">
          <div class="xnull_grade"></div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  background: #363636;
  // z-index: -1;
  // height: 100vh;
  // background-image: url(../assets/me/null_count.png);

  .xtab {
    .icon-fanhuijiantou {
      position: relative;
      z-index: 999;
      // background-color: red;
      display: block;
      width: 10vw;
      height: 11vw;
      color: #fff;
      float: left;
      line-height: 11vw;
      text-align: center;
    }
  }
}
:deep {
  .van-tab {
    color: #b7b7b7;
  }
  .van-tabs__nav {
    background: #363636;
  }
  .van-tab--active {
    color: #fdfdfd;
    // font-size: 1em;
    // font-weight: 300;
  }
  .van-tabs__line {
    width: 35vw;
    height: 0.5vw;
    background-color: #f2bc23;
  }

  .van-tab__pane .xnull_book {
    background-image: url(../assets/me/null_book.png);
    height: 90vh;
    // background: yellow;
    background-repeat: no-repeat;
    background-position: center;
  }
  .van-tab__pane .xnull_grade {
    background-image: url(../assets/me/null_grade.png);
    height: 90vh;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>