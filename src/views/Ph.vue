<template>
  <div>
    <div class="ph">
        <div class="ph-top">
          <div>缓震</div>
          <div>支撑</div>
          <div>训练</div>
          <div>竞速</div>
          <div>越野</div>
        </div>
      <div class="item">
        <div class="item-left">
          
        </div>
        <div class="item-right">
          <div>adidas ULTRABOOST</div>
          <div>20</div>
          <div>
            <van-rate v-model="value" @change="onChange"></van-rate>
            <div>{{value}}</div>
          </div>
          <div>采用定制纤维铺放技术,搭载Bootst中底助你运动舒适迈步.</div>
        </div>
      </div>
      <div class="item">
        <div class="item-left">

        </div>
        <div class="item-right">
          <div>adidas ULTRABOOST</div>
          <div>20</div>
          <div>
            <van-rate v-model="value" @change="onChange"></van-rate>
            <div>{{value}}</div>
          </div>
          <div>采用定制纤维铺放技术,搭载Bootst中底助你运动舒适迈步.</div>
        </div>
      </div>
      <div class="item">
        <div class="item-left">

        </div>
        <div class="item-right">
          <div>adidas ULTRABOOST</div>
          <div>20</div>
          <div>
            <van-rate v-model="value" @change="onChange"></van-rate>
            <div>{{value}}</div>
          </div>
          <div>采用定制纤维铺放技术,搭载Bootst中底助你运动舒适迈步.</div>
        </div>
      </div>
      <div class="item">
        <div class="item-left">

        </div>
        <div class="item-right">
          <div>adidas ULTRABOOST</div>
          <div>20</div>
          <div>
            <van-rate v-model="value" @change="onChange"></van-rate>
            <div>{{value}}</div>
          </div>
          <div>采用定制纤维铺放技术,搭载Bootst中底助你运动舒适迈步.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Toast } from 'vant';
export default {
  data() {
    return {
      value:0,
    }
  },
  setup() {
    const value = ref(3);
    const onChange = (value) => Toast('当前值：' + value);
    return {
      value,
      onChange,
    };
  },
}
</script>

<style scoped>
.ph{
  width: 350px;
  height: 35px;
  background: red;
  margin: 0 auto;
}
.ph-top{
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
}
.ph-top>div{
  width: 50px;
  height: 35px;
  border-radius: 10px;
  text-align: center;
  line-height: 35px;
  background-color: blue;
}
.item{
  margin-top:20px;
  width: 355px;
  height: 150px;
  background-color: green;
  display: flex;
}
.item-left{
  width: 150px;
  height: 150px;
  background-color: purple;
}
.item-right{
  width: 205px;
  height: 150px;
  background-color: yellow;
}
.item-right>div:nth-child(3){
  margin-left: -25px;
  display: flex;
  justify-content: space-around;
}
</style>