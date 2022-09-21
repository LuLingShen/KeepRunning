<template>
  <div>
    <!-- 1顶部导航 自己写样式
    导航栏定位在顶部 其他溢出隐藏
    -->
  <div>
    <!-- 弹性布局 左右两边对齐 -->
    <span  >北京市</span>
    <div  >
        <!-- 去里面data里添加图片 通过循环遍历出图片 -->
        <img src="" alt="">
    </div>
  </div>

    <!-- 2轮播图 -->
    <div style="height: 200px;">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, idnex) in imgList" :key="idnex">
          <img class="swipeImg" :src="item.imgUrl" alt="1">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 3 -->
    <div class="mt-navbar">
      <mt-navbar v-model="selected" v-for="(i, index) in itemd" :key="index">
        <mt-tab-item :id="i.id">
          {{ i.name }}
          <img :src="i.img" slot="icon" alt="" />
        </mt-tab-item>
      </mt-navbar>
    </div>
    <!-- 4.点击跳转 加入跑团 创建跑团 斜边-->
    <div id="jd-qie">
      <div style="background-color: gray;">
        <img src="../assets/s6.png" width="24" height="24">
        <span>加入跑团</span>
      </div>
      <span class="jd-paotuan"></span>
      <div style="background-color: black;">
        <img src="../assets/s7.png" width="24" height="24">
        <span>创建跑团</span>
      </div>
    </div>
    <!-- 下面写定位 在顶部 -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1',
      itemd: [
        { id: '1', img: require('../assets/s1.png'), name: '寻宝' },
        { id: '2', img: require('../assets/s2.png'), name: '例跑' },
        { id: '3', img: require('../assets/s3.png'), name: '赛事' },
        { id: '4', img: require('../assets/s4.png'), name: '赛道' },
        { id: '5', img: require('../assets/s5.png'), name: '个人空间' },
      ],
      imgList: [
        { imgUrl: require('../assets/s8.png') },
        { imgUrl: require('../assets/s9.png') },
      ]

    }
  },
  methods: {
  }

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.swipeImg {
  width: 100%;
  height: 100%;
}

.mt-navbar {
  display: flex;
  justify-content: space-between;
}

#jd-qie {
  display: flex;
  justify-content: center;
  color: white;
  text-align: center;
}

.jd-paotuan {
  border: 30px solid gray;
  height: 0;
  width: 0;
  border-right-color: black;
  border-bottom-color: black;
}
</style>