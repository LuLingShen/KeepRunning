<template>
  <div class="sd-item" @click="godetail">
    <div class="sdzj">
      <div class="sdzj_map">
        <img :src="`http://127.0.0.1:3000/trackmap/${item.xmap}`" alt="">
        <span>官方赛道</span>
      </div>
      <div class="sdzj_w">
        <h4>{{ item.tname }}</h4>
        <div>
          <span>距您{{ dis | km }}KM</span>
          <span>赛道全长{{ item.sdlength }}km</span>
        </div>
        <div>
          <div>
            <img src="../assets/morepeo.svg" alt="" class="icon" />
            <span>{{ item.nname }}</span>
          </div>
          <div>
            <div>
              <img src="../assets/qizhi.svg" alt="" class="icon" />
              <b>X0</b>
            </div>
            <div>
              <img src="../assets/gift.svg" alt="" class="icon" />
              <b>X0</b>
            </div>
          </div>
        </div>
      </div>
      <div class="sdzj_label">
        <img :src="imgUrl" alt="" />
        <span>{{ item.sdtype }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  filters: {
    km(value) {
      return (value / 1000).toFixed(2);
    },
  },
  props: ["item"],
  data() {
    return {
      map: "",
      nowLo: [],
      toLo: [],
      dis: "",
      imgUrl: "",
      imgBase:'http://localhost:3000/img/'
    };
  },
  methods: {
    godetail() {
      this.$router.push(`/sddetail?tid=${this.item.tid}`);
    },
    initMap() {
      var that = this;
      AMapLoader.load({
        key: "b4c7d12c9a8828dbcb44441d1a070acc",
        version: "2.0",
        plugins: ["AMap.Geocoder", "AMap.Geolocation"],
      })
        .then((AMap) => {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //是否使用高精度定位，默认:true
            timeout: 10000, //超过10秒后停止定位，默认：5s
            position: "RB", //定位按钮的停靠位置
            offset: [10, 20], //定位按钮与设置的停靠位置的偏移量，默认：[10, 20]
            zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
          });
          // map.addControl(geolocation);
          geolocation.getCurrentPosition(function (status, result) {
            if (status == "complete") {
              onComplete(result);
            } else {
              onError(result);
            }
          });
          function onComplete(data) {
            // data是具体的定位信息
            that.nowLo.push(data.position.lng, data.position.lat);
            that.dis = AMap.GeometryUtil.distance(that.nowLo, that.toLo);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changeimg() {
      let lx = this.item.sdtype;
      if (lx == "竞速赛道" || lx == "越野赛道" || lx == "特色赛道") {
        this.imgUrl = require("@/assets/orangeLabel.png");
      } else if (lx == "公园赛道" || lx == "熊猫赛道" || lx == "城市赛道") {
        this.imgUrl = require("../assets/greenLabel.png");
      } else if (lx == "健身赛道" || lx == "社区步道") {
        this.imgUrl = require("../assets/yellowLabel.png");
      } else {
        this.imgUrl = require("../assets/blueLabel.png");
      }
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
    //使用AMapLoader加载AMap对象，从而获取AMap实例
    window._AMapSecurityConfig = {
      securityJsCode: "5d45a96ce0dced57a8def828e021ef13",
    };
    this.toLo.push(this.item.tlongitude, this.item.tlatitude);
    // console.log(this.toLo);
    this.changeimg();
  },
};
</script>

<style lang="scss" scoped>
:deep {
  .amap-logo {
    display: none !important;
  }
}
.sdzj {
  color: white;
  background-color: #54534f;
  width: 100vw;
  height: 30vw;
  border-radius: 2.67vw;
  display: flex;
  position: relative;
  .sdzj_label {
    position: absolute;
    top: 0;
    right: 0;
    > img {
      display: inline-block;
      width: 18.67vw;
      height: 9.33vw;
    }
    > span {
      font-size: 4vw;
      color: #fff;
      position: absolute;
      top: 0.53vw;
      right: 0.53vw;
    }
  }
}
.sdzj_map {
  position: relative;
  margin-left: 2.66vw;
  margin-top: 2.13vw;
  width: 25vw;
  height: 25vw;
  border-radius: 1.33vw;
  overflow: hidden;

  // >#smap{
  //  width: 25vw;
  //  height: 25vw;
  // }
  img {
    width: 25vw;
    height: 25vw;
  }
  > span {
    display: block;
    width: 100%;
    text-align: center;
    height: 8vw;
    line-height: 8vw;
    font-size: 4vw;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    // z-index: 99;
    position: absolute;
    bottom: 0;
  }
}

.sdzj_w {
  margin: 2.66vw;
  width: 77vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sdzj_w h4 {
  margin: 0;
  font-size: 4.8vw;
  letter-spacing: 2px;
  font-weight: 500;
}
.sdzj span {
  font-size: 4.26vw;
}
.sdzj_w div {
  display: flex;
  color: white;
  justify-content: space-between;
}
.sdzj_w div:first-child span {
  color: #efeeec;
}
.sdzj_w div:last-child {
  position: relative;
}
.sdzj_w div .icon {
  width: 4.8vw;
  height: 4.8vw;
  vertical-align: middle;
  display: inline-block;
  margin-right: 2px;
  margin-left: 4px;
}
.sdzj_w div b {
  font-weight: 300;
  font-size: 5.06vw;
}
</style>