<template>
  <div style="background-color:#363636">
    <div class="search">
      <img  src="../assets/search.svg" slot="left" alt="">
      <input type="text">
        <img   src="../assets/camera.svg" slot="icon">
    </div>
    <mt-navbar v-model="selected" style="background-color:#363636">
      <mt-tab-item id="1" style="color:#999;font-size:20px !important;">推荐</mt-tab-item>
      <mt-tab-item id="2">鞋子</mt-tab-item>
      <mt-tab-item id="3">服饰</mt-tab-item>
      <mt-tab-item id="4">配件</mt-tab-item>
    </mt-navbar>
    <div class="swipe">
      <div style="margin-top: 15px;">
        <img src="../assets/banner.png" alt="">
      </div>
    </div>
    <div class="recommend">
      <router-link to='/quan'>
      <div style="margin-top: 15px;">
        <img src="../assets/quanming.png" style="width:110px;height:80px;" alt="">
      </div>
      </router-link>
      <router-link to='/shoes'>
      <div style="margin-top: 15px;">
        <img src="../assets/ypxk.png" style="width:110px;height:80px;"  alt="">
      </div>
      </router-link>
       <router-link to='/pp'>
      <div style="margin-top: 15px;">
        <img src="../assets/ppzq.png" style="width:110px;height:80px;" alt="">
      </div>
      </router-link>
    </div>
    <div class="itemList">
      <router-link to='/shopdetail'>
      <div class="item">
        <div style="width: 100%;height: 120px;">
          <img src="../assets/shop.1.png" alt="">
        </div>
        <p>361锋跑鞋男士</p>
        <p>$189.10</p>
      </div>
      </router-link>
     <router-link to='/shopdetail'>
      <div class="item">
        <div style="width: 100%;height: 120px;">
          <img src="../assets/shop.1.png" alt="">
        </div>
        <p>361锋跑鞋男士</p>
        <p>$189.10</p>
      </div>
      </router-link>
      <router-link to='/shopdetail'>
      <div class="item">
        <div style="width: 100%;height: 120px;">
          <img src="../assets/shop.1.png" alt="">
        </div>
        <p>361锋跑鞋男士</p>
        <p>$189.10</p>
      </div>
      </router-link>
      <router-link to='/shopdetail'>
      <div class="item">
        <div style="width: 100%;height: 120px;">
          <img src="../assets/shop.1.png" alt="">
        </div>
        <p>361锋跑鞋男士</p>
        <p>$189.10</p>
      </div>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      selected:this.$route.path.split('/'),
      data:''
    }
  },
  mounted() {
    this.axios.get('/shoplist').then(res=>{
      console.log('商品列表',res)
      this.data=res.data
    })
  },


}
</script>

<style scoped lang="scss">
 body{
   background-color: #363636;
 }
 :deep{
   .mint-tab-item-label{
     font-size: 18px !important;
     color: #999;
     font-weight: 400;
   }
 }
.search{
  width: 350px;
  height: 50px;
  /* background-color: skyblue; */
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.search input{
  width: 260px;
  margin-top: 5px;
  height: 30px;
}
.search img{
  margin-top: 8px;
  width: 27px;
  height: 27px;
}

mt-navbar{
  height: 55px;
  background-color: red;
}
.swipe{
  width: 350px;
  height: 130px;
  /*background-color: black;0*/
  margin: 0 auto;
}
.swipe img{
  width: 350px;
  height: 130px;
}
.recommend{
  display: flex;
  justify-content: space-evenly;
}

.recommend>router-link>div{
  width: 110px;
  height: 80px;
  /*background-color: green;*/
  margin-top: 15px;
}
.recommend>router-link>div img{
  width: 110px;
  height: 80px;
}
.itemList{
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
}
.itemList p{
  color: white;
}
.item{
  width: 160px;
  height: 200px;
  margin-top: 30px;
  /* background-color: purple; */
}
.itemList .item>div:nth-child(1) img{
  width: 100%;
  height: 120px;
  border-radius: 8px;
}
</style>