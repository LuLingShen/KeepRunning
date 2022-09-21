<template>
  <div>
    <div class="top">
      <router-link to="/shop"> < </router-link>
      <span>全民体验官</span>
    </div>
    <div class="banner">
      <img src="">
    </div>
    <div class="main">
      <h5>关于全民体验官</h5>
      <p>全民体验官是悦跑圈与各大品牌商合作给各位悦跑圈用户提供的福利。<br>我们将定期发布全民体验官活动,各位用户在规</p>
    </div>
    <!-- 切换模块 -->
    <div class="shop">
      <div id="shop">进行中</div>
      <div id="shop1">已结束</div>
    </div>
    <!--
    正在出售的商品
    <div class="proceed">
      <ul>
        <li class="shop1">
          <div class="shop_image">
            <img src="2.jpg">
          </div>
          <div class="tit">
            <p><span>ADIDAS TERREX</span>越野跑鞋全民体验官</p>
            <div class="tit_1">
              <p>活动中</p>
              <span>2022-07-14至2022-08-15</span>
            </div>
            <div class="tit_2">
              <span>限量60</span>
              <p>申请结束</p>
            </div>
          </div>
        </li>
        <li class="shop1">
          <div>
            <img src="">
          </div>
          <div class="tit">
            <p>索康尼<span>ENDORPHIN PRO</span>啡鹏3全民体验官</p>
            <div class="tit_1">
              <p>活动中</p>
              <span>2022-07-14至2022-08-15</span>
            </div>
            <div class="tit_2">
              <span>限量60</span>
              <p>申请结束</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    已结束的
    <div class="over">
      <ul>
        <li class="shop1">
          <div>
            <img src="">
          </div>
          <div class="tit">
            <p><span>ADIDAS TERREX</span>越野跑鞋全民体验官</p>
            <div class="tit_1">
              <p>已结束</p>
              <span>2022-07-14至2022-08-15</span>
            </div>
            <div class="tit_2">
              <span>限量60</span>
              <p>已经结束</p>
            </div>
          </div>
        </li>
        <li class="shop1">
          <div>
            <img src="">
          </div>
          <div class="tit">
            <p>索康尼<span>ENDORPHIN PRO</span>啡鹏3全民体验官</p>
            <div class="tit_1">
              <p>已结束</p>
              <span>2022-07-14至2022-08-15</span>
            </div>
            <div class="tit_2">
              <span>限量60</span>
              <p>已经结束</p>
            </div>
          </div>
        </li>
        <li class="shop1">
          <div>
            <img src="">
          </div>
          <div class="tit">
            <p>索康尼<span>ENDORPHIN PRO</span>啡鹏3全民体验官</p>
            <div class="tit_1">
              <p>已结束</p>
              <span>2022-07-14至2022-08-15</span>
            </div>
            <div class="tit_2">
              <span>限量60</span>
              <p>已经结束</p>
            </div>
          </div>
        </li>
        <li class="shop1">
          <div>
            <img src="">
          </div>
          <div class="tit">
            <p>索康尼<span>ENDORPHIN PRO</span>啡鹏3全民体验官</p>
            <div class="tit_1">
              <p>已结束</p>
              <span>2022-07-14至2022-08-15</span>
            </div>
            <div class="tit_2">
              <span>限量60</span>
              <p>已经结束</p>
            </div>
          </div>
        </li>
      </ul>
    </div> -->

    <div class="proceed" id="pro">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* [width1080][height2725] */
*{
  margin: 0;
  padding: 0;
  border: 0;
}
body{
  background-size: 100vw 100vh;
  background-attachment: fixed;
}
.top{
  color: white;
  width: 100%;
  height: 6vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top a{
  color: white;
  font-size: 7vw;
  text-decoration: none;
  margin-left: 20px;
}
.top>span{
  text-align: center;
  margin-right: 10vw;
  flex: 1;
}
.banner{
  width: 100%;
  height: 20.55vh;
  background-color: aqua;
}
.main{
  margin-top: 2.57vh;
  margin-left: 3.24vw;
  height: 22vh;
  margin-right: 3.24vw;
  background-color: #f6f7fb;
  border-radius: 10px;
}
.main>h5{
  margin-left: 3vw;
  padding-top: 1vh;
}
.main>p{
  margin-left: 3vw;
  padding-top: 1vh;
}
.shop{
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.shop>div{
  flex: 1;
}
.shop1{
  height: 16.7vh;
  margin-top: 2vh;
  border-bottom: 1px solid grey;
  margin-left: 3.24vw;
  margin-right: 3.24vw;
  display: flex;
}
.shop_image>img{
  width: 100%;
}
.shop1>:nth-child(1){
  flex: 1;
}
.tit{
  flex: 2;
  margin-left: 1vw;
  overflow: hidden;
}
.tit>p{
  width: 44vw;
  margin-top:0.4vh;
  font-size: 1.1em;
  font-weight: 900;
}
.tit>p>span{
  font-family: 'Agency FB';
}
.tit_1{
  font-size: 0.9em;
  display: flex;
  margin-top: 1vh;
  align-items: center;
}
.tit_1>p{
  color: red;
  background-color: pink;
  padding: 1vw;
  border-radius: 4px;
}
.tit_1>span{
  color: grey;
  margin-left: 0.5vw;
}
.tit_2{
  width: 100%;
  font-size: 1.1em;
  display: flex;
  margin-top: 1.5vh;
  align-items: center;
  position: relative;
}
.tit_2>span{
  color: red;
}
.tit_2>p{
  border: 1px solid grey;
  border-radius: 5px;
  float: right;
  position: absolute;
  right: 6.78vw;
}
.bottom{
  text-align: center;
  color: gray;
}
</style>