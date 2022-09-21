<template>
  <div class="body">
    <!--1. 顶部导航栏 -->
    <mt-header>
      <div slot="left">
        <!-- <router-link to="" >夜跑</router-link> -->
        <router-link to="/minearea" slot="right">
          <div id="map"></div>
          <span style="font-size: 1.2em">未选择</span>
          <span
            class="iconfont icon-shaixuan-xiajiantou"
            style="font-size: 25px; vertical-align: middle"
          ></span>
        </router-link>
      </div>
      <div slot="right">
        <router-link to="" class="iconfont icon-saoyisao_o"> </router-link>
        &nbsp;
        <router-link to="" class="iconfont icon-rili">
          <!-- <van-cell  icon="calendar-o"  :value="date" @click="show = true" />
                    <van-calendar v-model="show" @confirm="onConfirm" /> -->
        </router-link>
        &nbsp;
        <router-link to="" class="iconfont icon-xiaoxi"></router-link>
      </div>
    </mt-header>

    <!-- 2.轮播图 -->
    <div style="height: 20vh; width: 96vw; margin-left: 8px; margin-top: 10px">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, idnex) in imgList" :key="idnex">
          <img class="swipeImg" :src="item.imgUrl" alt="1" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 3.寻宝，例跑，赛事，赛道，个人空间 -->
    <mt-navbar v-model="selected" class="znavbar">
      <!-- @click.native="$router.push('/pic/hd')" -->
      <mt-tab-item id="1" @click.native="$router.push('/pic/hd')">
        寻宝
        <img src="../assets/8.png" slot="icon" alt="" />
      </mt-tab-item>
      <mt-tab-item id="2" @click.native="$router.push('/pic/hd')">
        例跑
        <img src="../assets/9.png" slot="icon" alt="" />
      </mt-tab-item>
      <mt-tab-item id="3" @click.native="$router.push('/pic/ss')">
        赛事
        <img src="../assets/10.png" slot="icon" alt="" />
      </mt-tab-item>
      <mt-tab-item id="4" @click.native="$router.push('/pic')">
        赛道
        <img src="../assets/11.png" slot="icon" alt="" />
      </mt-tab-item>
      <mt-tab-item id="5">
        个人空间
        <img src="../assets/12.png" slot="icon" alt="" />
      </mt-tab-item>
    </mt-navbar>

    <!-- 4.点击跳转 加入跑团 创建跑团 斜边-->
    <div id="jd-qie">
      <div style="background-color: gray">
        <img src="../assets/15.png" style="width: 28px; height: 28px" />
        <span @click="$router.push('/minegroup')">加入跑团</span>
      </div>
      <span class="jd-paotuan"></span>
      <div style="background-color: black">
        <img src="../assets/16.png" style="width: 28px; height: 28px" />
        <span @click="$router.push('/creategroup')">创建跑团</span>
      </div>
    </div>

    <IndexActivity></IndexActivity>
  </div>
</template>

<script>
import IndexActivity from "@/components/IndexActivity.vue";
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  data() {
    return {
      selected: "1",
      date: "",
      show: false,
      imgList: [
        { imgUrl: require("../assets/6.png") },
        { imgUrl: require("../assets/7.png") },
      ],
      map: "",
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    //获取当前城市位置
    initMap() {
      AMapLoader.load({
        key: "b4c7d12c9a8828dbcb44441d1a070acc", //设置您的key
        version: "2.0",
        plugins: ["AMap.CitySearch"],
      })
        .then((AMap) => {
          let citySearch = new AMap.CitySearch();
          citySearch.getLocalCity(function (status, result) {
            console.log(222);
            if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
                console.log(333)
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  components: { IndexActivity },
};
</script>



<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/5.png);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
}

/* 顶部导航栏小图标设置样式 */

.iconfont {
  font-size: 25px;
  color: white;
}

/* 把顶部导航栏颜色去掉 */

//2. 轮播图圆角边框

//2. 轮播图图片大小
.swipeImg {
  height: 110%;
}

a {
  color: white;
}

/* 把寻宝，例跑等的白色背景去掉 */

// 4.中最大的盒子样式
#jd-qie {
  display: flex;
  justify-content: center;
  color: white;
  text-align: center;
  height: 6vh;
  margin-top: 15px;
  width: 90vw;
  margin-left: 5%;
}

// 4.中两个div共同样式
#jd-qie > div {
  width: 50%;
  display: flex;
}

// 4.中第一个div样式
#jd-qie > div:nth-child(1) {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

// 4.中第二个div的样式
#jd-qie > div:nth-child(3) {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

// 4.中图片样式
#jd-qie > div > img {
  display: block;
  margin-top: 5px;
  margin-left: 25px;
}

// 4.中span样式
#jd-qie > div > span {
  display: block;
  margin-left: 5px;
  margin-top: 10px;
}

// 4.中span样式
.jd-paotuan {
  border: 20px solid gray;
  height: 0;
  width: 0;
  border-right-color: black;
  border-bottom-color: black;
  display: inline-block;
}

:deep {
  .mint-header {
    background-color: transparent;
  }
  .mint-header {
    width: 100%;
    height: 40px;
    background-color: #3c3b35;
  }
  .mint-swipe {
    border-radius: 20px;
    margin-top: 25px;
  }
  .mint-navbar {
    background-color: transparent;
  }
  .mint-cell:last-child {
    background-color: #3a3934;
    margin: 0;
    padding: 0;
  }
  .mint-tab-item-label {
    color: #ccc;
    font-size: 1.1em;
    font-weight: 400;
  }

  .mint-tab-item.is-selected .mint-tab-item-label {
    color: white !important;
  }
}
// 活动，发现，跑友字体的颜色
</style>