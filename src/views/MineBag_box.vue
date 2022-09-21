<template>
  <div class="body">
    <mt-header
      title="背包"
      style="background: #363636; font-size: 1.2em; height: 13vw"
    >
      <router-link to="/me" slot="left" class="iconfont icon-fanhuijiantou">
      </router-link>
    </mt-header>
    <div class="xnav">
      <router-link to="/minebag" id="2">宝箱库</router-link>

      <img src="../assets/me/null_bag.png" alt="" />
      <div id="2">物品栏</div>
    </div>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {};
  //   },
  //   methods: {
  //     clickMe(event) {
  //       event.currentTarget.className = "classname";
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
.body {
  background: #363636;
  //   height: 100%;

  .xnav {
    position: relative;
    margin: 5vw auto;
    margin-bottom: 0;
    display: flex;
    width: 90vw;
    height: 160vw;
    background-image: url(../assets/me/minebag_2.png);
    background-repeat: no-repeat;
    background-size: 90vw 158vw;
    color: #fdfdfd;
    font-size: 1.1em;

    div {
      //   width: 100vw;
      color: #ecbc48;
      position: absolute;
      left: 60vw;
      top: 2vw;
      font-size: 1em;
    }
    a:nth-child(1) {
      display: inline-block;
      color: #fdfdfd;
      position: absolute;
      top: 0vw;
      // left: 0vw;
      height: 7vw;
      font-size: 1em;
      width: 45vw;
      line-height: 7vw;
      text-align: center;
      background-image: url(../assets/me/package-dis-btn2-left.png);
      background-size: 45vw 7vw;
    }
    img {
      display: block;
      position: absolute;
      width: 40vw;
      height: 40vw;
      top: 50vw;
      left: 26vw;
    }
  }
}
</style>