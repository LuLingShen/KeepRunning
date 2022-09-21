<template>
  <div>
    <!-- 主标题部分 -->
    <mt-header title="赛道详情">
      <router-link to="/pic/sd" slot="left">
        <mt-button class="iconfont icon-fanhuijiantou"></mt-button>
      </router-link>
    </mt-header>
    <!--地图部分  -->
    <div id="map" style="width: 100vw; height: 95vw"></div>
    <!-- 内容部分 -->
    <div class="content">
      <div class="cont1">
        <h4>暂无赛道主</h4>
        <span @click="showPopup">挑战赛道主</span>

        
        <van-popup v-model="show" round>
          <h4>温馨提示</h4>
          <p>该赛道还没有赛道主（跑团），快创建或者加入一个跑团去占领它吧！</p>
          <span class="cj" @click="$router.push('/Createpaotuan')">创建跑团</span>
          <span class="jr" @click="$router.push('/minegroup')">加入跑团</span>
        </van-popup>
      </div>
      <div class="cont2">
        <h4>{{ data.tname }}</h4>
        <span>{{ data.sdtype }}</span>
      </div>
      <div class="cont3">
        <div>
          <div class="tx">
            <img src="/tx.jpg" alt="" />
          </div>
          <span>赛道创始人&nbsp;|&nbsp;{{data.nname}}</span>
        </div>
        <span class="rs">当前赛道0人跑过</span>
      </div>
      <div class="cont4">
        <div>
          <span
            class="iconfont icon-31dingwei"
            style="color: #ddd; font-size: 20px"
          ></span>
          <span class="dlwz">{{ address }}</span>
        </div>
        <div>
          <span
            class="iconfont icon-daohang"
            style="color: #ffaa00; font-size: 20px"
          ></span>
          <span style="color: #ffaa00; font-size: 15px">导航</span>
        </div>
      </div>
      <div class="cont5">
        {{ data.tinfo }}
      </div>
      <div class="cont6">
        <span>
          全长
          <b>{{ data.sdlength }}</b>
          km
        </span>
        <span>当前赛道正在跑的跑友</span>
      </div>
      <div class="cont7">
        <span>
          当前赛道可获取
          <b>0</b>
          个宝箱
          <img src="../assets/doujt.png" alt="" />
        </span>
        <span>
          暂无跑友在跑
          <img src="../assets/doujt.png" alt="" />
        </span>
      </div>
    </div>
    <div class="cont8">
      <h4>当前赛道活动</h4>
      <p>当前赛道暂无活动</p>
    </div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  data() {
    return {
      address: "",
      show: false,
      track: null,
      data: "",
      Lo: [],
    };
  },
  mounted() {
    console.log("mounted");
    this.getdata();
  },
  destroyed() {
    if (this.map) {
      this.map.destroy();
    }
    console.log("==================destroyed==================");
  },
  methods: {
    getdata() {
      let tid = this.$route.query.tid;
      this.axios.get(`/sddetail?tid=${tid}`).then((res) => {
        console.log(res);
        this.data = res.data.result;
        this.Lo = [];
        this.Lo.unshift(this.data.tlongitude, this.data.tlatitude);
        console.log("MountLo", this.Lo);

        this.initMap()
      });
    },
    showPopup() {
      this.show = true;
    },
    initMap() {
      var that = this;
      console.log("MapLo", that.Lo);
      AMapLoader.load({
        key: "b4c7d12c9a8828dbcb44441d1a070acc",
        version: "2.0",
        plugins: ["AMap.Geocoder"],
      })
        .then((AMap) => {
          that.map = new AMap.Map("map", {
            viewMode: "3D",
            zoom: 17.2,
            center: that.Lo,
            mapStyle: "amap://styles/dark",
          });
          // 逆地理编码
          let geocoder = new AMap.Geocoder({ city: "全国" }); 
          geocoder.getAddress(that.Lo, function (status, result) {
            console.log(555);
            console.log(result.regeocode.formattedAddress);
            if (status === "complete" && result.regeocode) {
              // window.location.reload()
              console.log(666);
              that.address = result.regeocode.formattedAddress;
              // console.log('result',result);
              // console.log(that.address);
            } else {
              // log.error('根据经纬度查询地址失败')
              console.log("获取经纬度失败");
            }
          });
          //贝塞尔曲线
          //贝赛尔曲线经过的起点，途经点，控制点，终点的二维数组
          var startPoint = [[118.301115, 36.826994]]; // 起点
          var viaPoint1 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
          ]; // 控制点，途经点
          var viaPoint2 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
          ]; // 控制点，控制点，途经点
          var viaPoint3 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
          ];
          var viaPoint4 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
          ];
          var viaPoint5 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
          ];
          var viaPoint6 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
          ];
          var viaPoint7 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
          ];
          var viaPoint8 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
          ];
          var viaPoint9 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
          ];
          var viaPoint10 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
            [118.29943, 36.828205],
          ];
          var viaPoint11 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
            [118.29943, 36.828205],
            [118.299409, 36.827904],
          ];
          var viaPoint12 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
            [118.29943, 36.828205],
            [118.299409, 36.827904],
            [118.299323, 36.827441],
          ];
          var viaPoint13 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
            [118.29943, 36.828205],
            [118.299409, 36.827904],
            [118.299323, 36.827441],
            [118.299355, 36.82708],
          ];
          var viaPoint14 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
            [118.29943, 36.828205],
            [118.299409, 36.827904],
            [118.299323, 36.827441],
            [118.299355, 36.82708],
            [118.299613, 36.826702],
          ];
          var viaPoint15 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
            [118.29943, 36.828205],
            [118.299409, 36.827904],
            [118.299323, 36.827441],
            [118.299355, 36.82708],
            [118.299613, 36.826702],
            [118.300267, 36.826548],
          ];
          var viaPoint16 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
            [118.29943, 36.828205],
            [118.299409, 36.827904],
            [118.299323, 36.827441],
            [118.299355, 36.82708],
            [118.299613, 36.826702],
            [118.300267, 36.826548],
            [118.300632, 36.826608],
          ];
          var viaPoint17 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
            [118.29943, 36.828205],
            [118.299409, 36.827904],
            [118.299323, 36.827441],
            [118.299355, 36.82708],
            [118.299613, 36.826702],
            [118.300267, 36.826548],
            [118.300632, 36.826608],
            [118.300889, 36.826833],
          ];
          var viaPoint18 = [
            [118.301115, 36.826994],
            [118.301286, 36.827295],
            [118.301361, 36.827552],
            [118.301372, 36.827836],
            [118.301383, 36.828093],
            [118.301254, 36.828291],
            [118.301093, 36.828488],
            [118.300578, 36.828712],
            [118.300117, 36.828703],
            [118.299816, 36.82854],
            [118.29943, 36.828205],
            [118.299409, 36.827904],
            [118.299323, 36.827441],
            [118.299355, 36.82708],
            [118.299613, 36.826702],
            [118.300267, 36.826548],
            [118.300632, 36.826608],
            [118.300889, 36.826833],
            [118.301265, 36.827166],
          ];

          var endPoint = [
            [118.301115, 36.826994],
            [118.301265, 36.827166],
          ]; // 控制点，终点

          var path = [
            startPoint,
            viaPoint1,
            viaPoint2,
            viaPoint3,
            viaPoint4,
            viaPoint5,
            viaPoint6,
            viaPoint7,
            viaPoint8,
            viaPoint9,
            viaPoint10,
            viaPoint11,
            viaPoint12,
            viaPoint13,
            viaPoint14,
            viaPoint15,
            viaPoint16,
            viaPoint17,
            viaPoint18,
            endPoint,
          ];

          var bezierCurve = new AMap.BezierCurve({
            path: path,
            strokeWeight: 10, // 线条宽度
            strokeColor: "#F7B60E", // 线条颜色
            strokeOpacity: 1,
            isOutline: false, // 是否描边
            outlineColor: "rgba(255,0,0,1)", // 描边颜色
            borderWeight: 5, // 描边宽度
          });

          that.map.add(bezierCurve);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  watch: {
    $route(to, from) {
      this.$router.go(0);
      //window.location.reload(); //监测到路由发生跳转时刷新一次页面
      console.log(111);
      this.initMap();
    },
  },
};
</script>

<style lang="scss" scoped>
:deep {
  .mint-header {
    background-color: #333;
    color: white;
    height: 13.33vw;
  }
  .mint-header-title {
    font-size: 5.33vw;
  }
  .mint-button {
    font-size: 4.8vw;
  }
}
:deep {
  .van-popup {
    background-color: rgba($color: #999, $alpha: 0.4);
    width: 93.33vw;
    height: auto;
    margin: 0 auto;
    h4 {
      display: block;
      margin: 0;
      width: 100%;
      text-align: center;
      margin-top: 5.07vw;
      margin-bottom: 5.07vw;
      letter-spacing: 2px;
      font-weight: 400;
      color: #999;
      font-size: 4.53vw;
      font-family: "黑体";
    }
    p {
      color: #eee;
      padding: 0 4vw;
      text-align: center;
      padding-bottom: 4.8vw;
      border-bottom: 1.1px solid rgba(153, 153, 153, 0.3);
      letter-spacing: 2px;
    }
    span {
      width: 48%;
      display: inline-block;
      text-align: center;
      height: 16vw;
      line-height: 16vw;
      letter-spacing: 1px;
      font-size: 4.8vw;
    }
    .cj {
      color: #999;
      border-right: 1.3px solid rgba(153, 153, 153, 0.3);
    }
    .jr {
      color: #efb822;
    }
  }
}
</style>
<style lang="scss" scoped>
.content {
  padding: 2.67vw;
  padding-bottom: 1.33vw;
  background-color: #333;
  div {
    margin-bottom: 2.67vw;
  }
  .cont1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin-top: 2.67vw;

    > h4 {
      margin: 0;
      font-weight: 400;
      font-size: 4.53vw;
    }
    > span {
      font-size: 4.26vw;
      padding: 2.13vw 5.33vw;
      border: 1px solid white;
      border-radius: 3px;
    }
  }
  .cont2 {
    margin-top: 2.67vw;
    display: flex;
    > h4 {
      font-size: 4.8vw;
      margin: 0;
      color: white;
      font-weight: 600;
      margin-right: 2.67vw;
    }
    > span {
      color: #ffaa00;
      padding: 3px;
      border: 1px solid #ffaa00;
      border-radius: 1.07vw;
      font-size: 4.26vw;
    }
  }
  .cont3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10.67vw;
    margin-bottom: 0;
    > div {
      display: flex;
      align-items: center;
      .tx {
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1.87vw;
        img {
          display: inline-block;
          width: 8vw;
          height: 8vw;
          vertical-align: middle;
        }
      }
    }
    span {
      color: #aaa;
      font-size: 4.26vw;
    }
    .rs {
      position: relative;
      top: -6px;
    }
  }
  .cont4 {
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      .dlwz {
        margin-left: 5px;
        width: 70vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #fff;
        font-size: 4.26vw;
      }
    }
  }
  .cont5 {
    color: #aaa;
    font-size: 4.26vw;
  }
  .cont6 {
    display: flex;
    justify-content: space-between;

    span:first-child {
      color: #aaa;
      font-size: 4.53vw;
      b {
        font-weight: 400;
        color: #eee;
        font-size: 4.26vw;
      }
    }
    span:last-child {
      color: #ccc;
      font-size: 4.26vw;
    }
  }
  .cont7 {
    display: flex;
    justify-content: space-between;
    color: #aaa;
    padding-bottom: 15px;
    border-bottom: 1px solid #fff;
    b {
      font-weight: 400;
      font-size: 4.53vw;
      color: white;
    }
    img {
      display: inline-block;
      width: 15px;
      height: 15px;
      vertical-align: middle;
    }
    span:last-child {
      font-size: 3.78vw;
    }
  }
}
.cont8 {
  background-color: #393833;
  // padding: 1px;
  border: 1px solid transparent;
  > h4 {
    color: white;
    letter-spacing: 1px;
    font-size: 4.8vw;
    margin: 4vw 0;
  }
  > p {
    color: #aaa;
    width: 100vw;
    font-size: 4vw;
    text-align: center;
    margin: 8vw 0 10.67vw 0;
  }
}
</style>