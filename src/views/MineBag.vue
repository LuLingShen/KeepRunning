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
      <div>宝箱库</div>
      <img src="../assets/me/null_box.png" alt="" />
      <router-link to="/minebag_box">物品栏</router-link>
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
    background-image: url(../assets/me/minebag_1.png);
    background-repeat: no-repeat;
    background-size: 90vw 158vw;

    // background-color: #4a4a4a;
    color: #fdfdfd;
    font-size: 1.1em;
    // a {
    //   //   margin-right: 5vw;
    //   width: 45vw;
    //   background-color: #4a4a4a;
    //   text-align: center;
    //   line-height: 8vw;
    // }
    div {
      //   width: 100vw;
      color: #ecbc48;
      position: absolute;
      left: 15vw;
      top: 2vw;
      font-size: 1em;

      //   height: 100vh;
    }
    a:nth-child(3) {
      display: inline-block;
      color: #fdfdfd;
      position: absolute;
      //   top: 1vw;
      left: 43vw;
      height: 7vw;
      font-size: 1em;
      width: 46vw;
      text-align: center;
      background-image: url(../assets/me/package-dis-btn-right.png);
      background-size: 50vw 7vw;
      //   padding: 0.5vw 9vw;
      //   padding-left: 50vw;
      //   background-color: #4a4a4a;
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
// .classname {
//   //   z-index: 888;
//   width: 100vw;
//   height: 100vh;
//   background-image: url(../assets/me/minebag_1.png);
// }
</style>