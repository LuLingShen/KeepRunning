<template>
  <div>
    <mt-header fixed title="鞋裤">
      <router-link to="/shop" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right">我的鞋柜</mt-button>
    </mt-header>
    <div class="search">
      <img  src="../assets/search.svg" slot="left">
      <input type="text">
      <img   src="../assets/AI.svg" slot="icon">
    </div>
    <div class="brand">
      <div>
        <img src="../assets/shoes.adi.png" alt="">
      </div>
      <div>
        <img src="../assets/shoes.ln.png" alt="">
      </div>
      <div>
        <img src="../assets/shoes.nike.png" alt="">
      </div>
      <div>
        <img src="../assets/shoes.tb.png" alt="">
      </div>
      <div>
        <img src="../assets/shoes.tb.png" alt="">
      </div>
    </div>
    <div class="experience">
      <div>
        <h2 style="display: inline-block">全名体验馆</h2>
        <p style="display: inline-block;float: right">更多活动></p>
      </div>
      <div>
        <img src="../assets/banner.png" alt="">
      </div>
    </div>
    <div class="recommend lateral-sliding">
      <mt-navbar class="lateral-sliding-item" v-model="selected">
        <router-link to="/shoes/video">
          <mt-tab-item class="tab each-img" id="video">
           视频
          </mt-tab-item>
        </router-link>
       <router-link to="/shoes/rec">
         <mt-tab-item class="tab each-img" id="rec">
           推荐
         </mt-tab-item>
       </router-link>
        <router-link to="/shoes/ph">
          <mt-tab-item class="tab each-img" id="ph">
            排行
          </mt-tab-item>
        </router-link>
        <router-link to="/shoes/kb">
          <mt-tab-item class="tab each-img" id="kb">
            口碑
          </mt-tab-item>
        </router-link>
        <router-link to="/shoes/dt">
          <mt-tab-item class="tab each-img" id="dt">
            动态
          </mt-tab-item>
        </router-link>
      </mt-navbar>
    </div>

    <router-view></router-view>00
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 顶部导航的默认选中状态
      selected: this.$route.path.split('/video').pop()
    }
  },
  watch: {
    // 监听tabSelected的变化，newval就是变量的新值  index / me
    tabSelected(newval, oldval){
      console.log(newval)
      if(newval=='video'){
        this.$router.push('/shoes/video')
      }else if(newval=='rec'){
        this.$router.push('/shoes/rec')
      }else if(newval=='ph'){
        this.$router.push('/shoes/ph')
      }else if(newval=='kb'){
        this.$router.push('/shoes/kb')
      }else if(newval=='dt'){
        this.$router.push('/shoes/dt')
      }
    }
  }
}
</script>

<style>

</style>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}

.search{
  width: 340px;
  height: 30px;
  margin:0 auto;
  position: relative;
}
.search input{
  margin-top: 50px;
  width: 350px;
  height: 35px;
  position: absolute;
  line-height: 35px;
}
.search img:last-child{
  width: 27px;
  height: 27px;
  position: absolute;
  right:-12px;
  top: 50px;
  margin-top: 5px;
}
.search img:first-child{
  width: 27px;
  height: 27px;
  position: absolute;
  left: 6px;
  top: 50px;
  margin-top: 5px;
  z-index: 1;
}
.brand{
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 80px;
  width: 360px;
  margin-top: 80px;
  margin-left: 20px;
}
.brand>div{
  width: 60px;
  height: 70px;
  //background-color: purple;
}
.brand>div img{
  width: 60px;
  height: 70px;
}
.experience{
  margin-left: 15px;
  width: 355px;
  //background-color: red;
}
//.experience>div:nth-child(2){
//  height: 120px;
//}
.experience>div:nth-child(2) img{
  width: 355px;
  height: 120px;
  border-radius: 10px;
}
.lateral-sliding{
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 355px;
  margin-left: 25px;
}
.lateral-sliding-item{
  display: flex;
  margin-right: 8px;

}
.each-img{
  height: 20px;
  width: 80px;

}
.lateral-sliding::-webkit-scrollbar{
  display: none;
}
.page{
     width: 355px;
     margin:0 auto;
   }
.page .page-one{
     width: 355px;
     height: 100px;
     //background-color: green;
      margin-left: 3px;
     margin-bottom: 2px;
      display: flex;
    align-items: flex-start;
   }
.page .page-one>div:first-child{
    height: 100px;
     width: 230px;
     background-color: red;
   }
.page .page-one>div:nth-child(2){
  width: 125px;
  height: 100px;
  background-color: yellow;
}
</style>
