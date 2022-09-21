<template>
  <div class="body">
    <mt-header
      title="运动数据"
      style="background: #363636; font-size: 1.1em; height: 13vw"
    >
      <router-link to="/me" slot="left" class="iconfont icon-fanhuijiantou">
      </router-link>
      <!-- <router-link to="" slot="right" stylse="color: #f2c21b"> </router-link> -->
      <div slot="right">
        <span @click="showShare = true"> <van-icon name="share-o" />分享</span>
        <van-share-sheet
          v-model="showShare"
          title="立即分享给好友"
          :options="options"
          @select="onSelect"
        />
      </div>
    </mt-header>
    <div class="xmotion">
      <div class="xm">累计跑量(公里)</div>
      <div class="xmo">
        <span>0.0</span>
        <span class="xm_21">km</span>
      </div>
      <img src="../assets/me/run-data-top-bg3.png" alt="" />
      <div class="xall">
        <div class="xmo">
          <div class="xm">累计跑步(次)</div>
          <div>
            <span>0</span>
            <span>次</span>
          </div>
        </div>
        <div class="xmo">
          <div class="xm">总时长(小时)</div>
          <div>
            <span>0.0</span>
            <span>小时</span>
          </div>
        </div>
        <div class="xmo">
          <div class="xm">平均配速</div>
          <div>
            <span>--</span>
            <span></span>
          </div>
        </div>
        <div class="xmo">
          <div class="xm">平均跑量(公里)</div>
          <div>
            <span>0</span>
            <span>公里</span>
          </div>
        </div>
        <div class="xmo">
          <div class="xm">总消耗(kcal)</div>
          <div>
            <span>0.0</span>
            <span>大卡</span>
          </div>
        </div>
      </div>
      <router-link class="xtotal" to="">数据统计</router-link>
    </div>
    <div class="xdate">
      <div>
        <span @click="showPopup">8月<van-icon name="arrow-down" /></span>
        <div class="xyear">2022</div>
        <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
          <van-datetime-picker
            v-model="currentDate"
            type="year-month"
            title="选择年月"
            :min-date="minDate"
            :max-date="maxDate"
            :formatter="formatter"
          />
        </van-popup>
      </div>
      <div class="xlast">
        <div>
          <span>0.00</span>
          <span class="xgray">公里</span>
        </div>
        <div>
          <span class="xgray">累计</span>
          <span class="xwhite">0</span>
          <span class="xgray">次，共</span>
          <span class="xwhite">0</span>
          <span class="xgray">小时</span>
        </div>
      </div>
    </div>
    <div class="null_count">
      <img src="../assets/me/null_count.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "分享海报", icon: "poster" },
      ],
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  background-color: #363636;
  height: 100vh;
}
.xmotion {
  height: 90vw;
  width: 100vw;
  background-size: 100vw 90vw;
  background-image: url(../assets/me/run-data-top-bg.png);
  .xm {
    padding-top: 4vw;
    margin-left: 5vw;
    color: #e3be49;
    font-size: 0.5em;
    margin-bottom: 2vw;
  }
  img {
    width: 100vw;
  }
  .xmo {
    .xm {
      padding-top: 3vw;
    }
    .xm_21 {
      font-size: 1.5em;
      color: #fff;
      font-size: 0.7em;
    }
    span:first-child {
      margin-left: 5vw;
      color: #fff;
      font-size: 1.5em;
      font-weight: 500;
    }
  }
  .xall {
    display: flex;
    flex-wrap: wrap;
    .xmo {
      margin-right: 10vw;
      span:first-child {
        margin-left: 5vw;
        color: #fff;
        font-size: 1.5em;
        font-weight: 500;
      }
      span:nth-child(2) {
        color: #fff;
        font-size: 0.7em;
      }
    }
  }
  .xtotal {
    color: black;
    display: block;
    margin-top: 5vw;
    margin-left: 5vw;
    font-size: 0.9em;
    width: 40vw;
    height: 15vw;
    text-align: center;
    // color: #fff;
    line-height: 15vw;
    font-weight: 500;
    background-image: url(../assets/me/run-data-top-bg2.png);
  }
}
:deep {
  .van-share-sheet__cancel {
    color: black;
  }
  .xdate {
    display: flex;
    justify-content: space-between;
    margin: 8vw 5vw;
    margin-bottom: 2vw;
    padding-bottom: 3vw;
    border-bottom: 1px solid #959595;
    div:first-child {
      span:first-child {
        display: block;
        color: #fff;
        font-size: 1em;
        margin-bottom: 2vw;
      }
      .xyear {
        color: #d4d4d4;
        font-size: 0.8em;
      }
    }
    .xlast {
      width: 40vw;
      display: flex;
      flex-direction: column;
      align-items: end;
      div:first-child {
        display: flex;
        span:first-child {
          font-size: 1.3em;
          margin-right: 1vw;
          margin: 0;
        }
      }
      .xgray {
        padding-top: 1vw;
        color: #dddddd;
        font-size: 0.6em;
      }
      .xwhite {
        margin: 0 0.5vw;
        color: #fff;
      }
    }
  }
  .null_count {
    width: 100vw;
    height: 40vw;
    // background: #fff;
    img {
      display: block;
      margin: 0 auto;
      width: 40vw;
    }
  }
}
</style>