<template>
  <div>
    <mt-header fixed title="商品详情" style="background:#363636 !important;">
      <router-link to="/shop" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
     <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
<!--    <div style="width: 100%;height: 10px;background-color: purple;margin-top: 70px;"></div>-->
    <div class="shopimg" >
      <div>
        <img src="../assets/shop.1.png" alt="">
      </div>
    </div>
    <div class="price" style="margin-top: 8px;">
          <div>
            <p>$209.10</p>
            <p>361锋跑鞋男士</p>
          </div>
    </div>
    <div class="selected">
      <div class="se-top">
        <h4 style="margin-top: 8px">产品选择</h4>
        <div style="display: flex;justify-content: space-between">
          <p style="display: inline-block">选择尺码</p><van-cell is-link @click="showPopup" :style="{width: '30%',backgroundColor:'blue'}">共14种尺码</van-cell>
          <van-popup v-model:show="show" closeable position="bottom" :style="{height:'90%'}">
            <div style="width: 200px;height: 200px;margin: 10px auto">
              <img src="../assets/shop.1.png" alt="" style="width: 200px;height: 200px;border-radius: 12px">
            </div>
            <div style="text-align: center">361跑鞋男士</div>
            <div>选择尺码</div>
            <div class="size">
              <div>36</div>
              <div>36</div>
              <div>36</div>
              <div>36</div>
              <div>36</div>
            </div>
            <div>选择颜色</div>
            <div class="color" style="display: flex;justify-content: space-between;">
              <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 8px;">
                <div class="c-img" style="width:80px;height:50px ;background-color: red;">
                  <img src="../assets/shopdetails.color2.png" alt="">
                </div>
                <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
              </div>
              <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 8px">
                <div class="c-img" style="width:80px;height:50px ;background-color: red;">
                  <img src="../assets/shopdetails.color.png" alt="">
                </div>
                <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
              </div>
              <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 8px">
                <div class="c-img" style="width:80px;height:50px ;background-color: red;">
                  <img src="../assets/shopdetails.color2.png" alt="">
                </div>
                <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
              </div>
              <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 8px">
                <div class="c-img" style="width:80px;height:50px ;background-color: red;">
                  <img src="../assets/shopdetails.color.png" alt="">
                </div>
                <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
              </div>

            </div>
          </van-popup>
        </div>
        <div class="size" >
          <div>36</div>
          <div>36</div>
          <div>36</div>
          <div>36</div>
          <div>36</div>
<!--          <div style="background-color:skyblue;width: 30px;height: 30px;color: #fff;line-height: 30px;text-align: center;margin-top: 15px;margin-left:8px;">36</div>-->
<!--          <div style="background-color:skyblue;width: 30px;height: 30px;color: #fff;line-height: 30px;text-align: center;margin-top: 15px;margin-left:8px;">36</div>-->
<!--          <div style="background-color:skyblue;width: 30px;height: 30px;color: #fff;line-height: 30px;text-align: center;margin-top: 15px;margin-left:10px;">36</div>-->
<!--          <div style="background-color:skyblue;width: 30px;height: 30px;color: #fff;line-height: 30px;text-align: center;margin-top: 15px;margin-left:8px;">36</div>-->
<!--          <div style="background-color:skyblue;width: 30px;height: 30px;color: #fff;line-height: 30px;text-align: center;margin-top: 15px;margin-left:8px;">36</div>-->
<!--          <div style="background-color:skyblue;width: 30px;height: 30px;color: #fff;line-height: 30px;text-align: center;margin-top: 15px;margin-left:8px;">36</div>-->
        </div>
      </div>
      <div class="se-bottom">
        <div style="display: flex;justify-content: space-between">
          <p style="display: inline-block">选择颜色</p><van-cell is-link @click="showPopup" :style="{width: '30%',backgroundColor:'red'}">共5种颜色</van-cell>
          <van-popup v-model:show="show" closeable position="bottom" :style="{height:'90%'}">
            <div style="width: 200px;height: 200px;margin: 10px auto">
              <img src="../assets/shop.1.png" alt="" style="width: 200px;height: 200px;border-radius: 12px">
            </div>
            <div style="text-align: center">361跑鞋男士</div>
            <div>选择尺码</div>
            <div class="size" style="display: flex;justify-content: space-between">
              <div style="width: 30px;height: 30px;background-color: red;line-height: 30px;text-align: center">36</div>
              <div>36</div>
              <div>36</div>
              <div>36</div>
              <div>36</div>
            </div>
            <div>选择颜色</div>
            <div class="color" style="display: flex;justify-content: space-between;">
              <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 8px;">
                <div class="c-img" style="width:80px;height:50px ;background-color: red;">
                  <img src="../assets/shopdetails.color2.png" alt="">
                </div>
                <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
              </div>
              <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 8px">
                <div class="c-img" style="width:80px;height:50px ;background-color: red;">
                  <img src="../assets/shopdetails.color.png" alt="">
                </div>
                <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
              </div>
              <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 8px">
                <div class="c-img" style="width:80px;height:50px ;background-color: red;">
                  <img src="../assets/shopdetails.color2.png" alt="">
                </div>
                <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
              </div>
              <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 8px">
                <div class="c-img" style="width:80px;height:50px ;background-color: red;">
                  <img src="../assets/shopdetails.color.png" alt="">
                </div>
                <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
              </div>

            </div>
          </van-popup>
        </div>
        <div class="color" style="display: flex;justify-content: space-between;">
          <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 6px;">
            <div class="c-img" style="width:80px;height:50px ;background-color: red;">
              <img src="../assets/shopdetails.color2.png" alt="">
            </div>
            <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
          </div>
          <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 7px">
            <div class="c-img" style="width:80px;height:50px ;background-color: red;">
              <img src="../assets/shopdetails.color.png" alt="">
            </div>
            <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
          </div>
          <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 7px">
            <div class="c-img" style="width:80px;height:50px ;background-color: red;">
              <img src="../assets/shopdetails.color2.png" alt="">
            </div>
            <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
          </div>
          <div class="c-item" style="width: 80px;height: 100px;border: 1px solid black;margin-left: 7px">
            <div class="c-img" style="width:80px;height:50px ;background-color: red;">
              <img src="../assets/shopdetails.color.png" alt="">
            </div>
            <div style="font-size: 14px;margin-top: 2px;">冰川蓝(1代)</div>
          </div>

        </div>
      </div>
    </div>
    <div class="detail">
      <img src="../assets/shopdetail.png" alt="">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.mint-header{
  height: 60px;
  font-size: 18px;
}
.selected{
  margin-top: 8px;
  width: 360px;
  height: 300px;
  /* background-color:purple; */
  background-color: #363636;
}
 .shopimg{
  margin-top: 70px;
  padding: 1px;
}
.shopimg div{
  /*width:360px;*/
  /*height: 360px;*/
  /*background-color: red;*/
  /*margin: 0 auto*/
}
.shopimg div img{
  width: 360px;
  height: 300px;
  margin: 0 auto;
  border-radius: 22px;
}
.price{
  margin-top: 8px;
}
.price div{
  width: 360px;
  height: 80px;
  /* background-color: green; */
  background-color: #363636;
  margin: 0 auto
}
.price div p:nth-child(1){
  font-size: 30px;
  color: red;
}
.price div p:nth-child(2){
  margin-top: 10px;
  font-size: 20px;
  color: #fff;
}
.selected{
  margin: 0 auto;
}
.selected .se-top{
  padding: 1px;
  margin-top: 10px;
}
.selected .se-top .size{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center
}
.selected .se-top .size div{
  /* background-color:skyblue; */
  background-color: #1d0505;
  width: 40px;
  height: 40px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  margin-top: 15px;
  margin-left:3px;
}
.detail{
  width: 360px;
  height: 1px;
  padding: 1px;
  margin: 0 auto;
}
.detail img{
  width: 360px;
}
.c-item>div:nth-child(1) img{
  width: 80px;
  height: 70px;
}
</style>