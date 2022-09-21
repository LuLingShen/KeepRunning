<template>
  <div class="body">
    <mt-header>
      <div slot="left">
        <router-link
          to="/mineset"
          class="iconfont icon-shezhi xi"
        ></router-link>
      </div>
      <div slot="right">
        <router-link class="iconfont icon-erweima xi" to=""></router-link>
        &nbsp;
        <router-link class="iconfont icon-saoyisao_o xi" to=""></router-link>
        &nbsp;
        <router-link class="iconfont icon-xiaoxi xi" to=""></router-link>
      </div>
    </mt-header>

    <mt-cell
      class="xc_1"
      title="zss"
      label="活跃天数：0天   夜跑ID：11076993"
      is-link
      to="/minemsg"
    >
      <img
        slot="icon"
        src="../assets/xtx.png"
        width="60"
        height="60"
        style="border-radius: 50%"
      />
    </mt-cell>
    <div class="x">
      <div>
        <span class="x1">0</span>
        <span class="x2">关注</span>
        <span class="x1">0</span>
        <span class="x2">粉丝</span>
      </div>
    </div>
    <mt-cell
      class="xc_2"
      title="初级跑者"
      label="累计里程0.0km"
      is-link
      to="/minemotion"
    >
      <img
        slot="icon"
        src="../assets/me/level_1.png"
        width="60"
        height="60"
        style="border-radius: 50%"
      />
    </mt-cell>
    <div class="xnav">
      <div>
        <router-link class="box" to="/minebag">
          <img src="../assets/me/ic_mine_bag.png" alt="" />
          <span>我的背包</span>
        </router-link>
      </div>

      <div>
        <router-link class="box" to="/minegift">
          <img src="../assets/me/ic_mine_gift.png" alt="" />
          <span>奖品核销</span>
        </router-link>
      </div>
      <div>
        <router-link class="box" to="/mineaddress">
          <img src="../assets/me/ic_mine_address.png" alt="" />
          <span>我的地址</span>
        </router-link>
      </div>
    </div>
    <div class="xnav">
      <div>
        <router-link class="box" to="/mineflag">
          <img src="../assets/me/ic_mine_flag.png" alt="" />
          <span>活动</span>
        </router-link>
      </div>

      <div>
        <router-link class="box" to="/minegames">
          <img src="../assets/me/ic_mine_games.png" alt="" />
          <span>赛事</span>
        </router-link>
      </div>
      <div>
        <router-link class="box" to="/minecard">
          <img src="../assets/me/ic_mine_card.png" alt="" />
          <span>证书墙</span>
        </router-link>
      </div>
    </div>
    <div class="xnav">
      <div>
        <router-link class="box" to="/minegroup">
          <img src="../assets/me/ic_mine_group.png" alt="" />
          <span>我的跑团</span>
        </router-link>
      </div>

      <div>
        <router-link class="box" to="/minetrack">
          <img src="../assets/me/ic_mine_track.png" alt="" />
          <span>我的赛道</span>
        </router-link>
      </div>
      <div>
        <router-link class="box" to="">
          <img src="" alt="" />
          <span></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.body {
  height: 100vh;
  background-color: #363636;
}
.xi {
  font-size: 24px;
  color: #d7d7d7;
}
.mint-header {
  background: #363636;
}

.mint-cell {
  // top: 40px;
  margin-left: 10px;
  background-image: none;
  background-color: #363636;
  color: #d6d6d6;
  min-height: 100px;
}

.xc_2 {
  min-height: 50px;
  background-color: #464a51;
  margin: 20px 20px;
  border-radius: 8px;
  border: 1px solid transparent;
}
.xc_2 .mint-cell-text {
  vertical-align: baseline;
}

.x {
  height: 5vw;
  // margin-top: 38px;
  background-color: #363636;
  div {
    width: 30vw;
    margin: 0 auto;
    span {
      margin-right: 5px;
    }
    .x1 {
      color: white;
    }
    .x2 {
      color: #d7d7d7;
      font-size: 14px;
    }
  }
}
// 第一行
.xnav {
  width: 90vw;
  background-color: #464a51;
  padding: 15px 0;
  margin: 0 auto;
  // margin-top: 10px;
  display: flex;
  margin-bottom: 15px;
  border-radius: 8px;
  div {
    width: 25vw;
    margin: 0 auto;
    .box {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      font-size: 35px;
      color: #ebf3f1;
      img {
        width: 35px;
        padding-bottom: 10px;

        margin: 0 auto;
      }
      span {
        margin: 0 auto;
        color: #f7fffd;
        font-size: 14px;

        // color: #85d2a1;
      }
    }
  }
}
:deep {
  .xc_1 .mint-cell-text {
    margin-left: 15px;
  }
  .xc_1 .mint-cell-label {
    color: #d7d7d7;
    margin-top: -13px;
    margin-left: 80px;
  }
  .xc_2 .mint-cell-label {
    color: #d9dedd;
    margin-top: -13px;
    margin-bottom: 15px;
    margin-left: 65px;
  }
  .mint-cell-wrapper {
    background-image: none;
  }
  .xnav a {
    display: block;
    margin: 0 auto;
  }
}
</style>

