<template>
  <div>
    <!-- 这是顶部区域 -->
    <div class="top">
      <router-link to="/shop">←</router-link>
      <span>品牌专区</span>
    </div>
    <!-- 这是运动装备区 -->
    <div class="sports">
      <div class="sports_top">
        <a>运动装备</a>
        <a href="#">&gt;</a>
      </div>
      <ul class="kind">
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
      </ul>
    </div>
    <!-- 赛事模块 -->
    <div class="sports" style="margin-top: 2vh;">
      <div class="sports_top">
        <a>赛事</a>
        <a href="#">&gt;</a>
      </div>
      <ul class="kind">
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">>
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
      </ul>
    </div>
    <!-- 服务机构模块 -->
    <div class="sports" style="margin-top: 2vh;">
      <div class="sports_top">
        <a>服务机构</a>
        <a href="#">&gt;</a>
      </div>
      <ul class="kind">
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
        <li>
          <img src="../assets/1.jpg">
          <a href="#">Brooks布鲁克斯</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  border: 0;
}
body{
  color: white;
  background-size: 100vw 100vh;
  background-attachment: fixed;
  background-color: black;
}
a{
  text-decoration: none;
  color: white;
}
.top{
  width: 100%;
  height: 6vh;
  background-color: #191a1e;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top a{
  font-size: 5vw;
  margin-left: 20px;
}
.top>span{
  text-align: center;
  margin-right: 10vw;
  flex: 1;
}
.sports{
  background-color: #191a1e;
}
.sports_top{
  display: flex;
  justify-content: right;
  text-align: right;
}
.sports_top>a:nth-child(1){
  display: block;
  text-align: center;
  margin-left: 3vw;
}
.sports_top>a{
  font-size: 1.2em;
}
.sports_top>a:nth-child(1){
  flex: 1;
}
.sports_top>a:nth-child(2){
  flex: 3;
  margin-right: 5vw;
}
.kind{
  list-style: none;
  height: 32vh;
}
.kind li{
  width: 33%;
  text-align: center;
  margin-top: 3vh;
  float: left;
}
.kind img{
  width: 16.94vw;
  border-radius: 5px;
}
.kind a{
  display: block;
}
</style>