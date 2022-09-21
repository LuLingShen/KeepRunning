<template>
  <div>
      <!-- 主标题部分 -->
     <mt-header :title="data.gname">
        <router-link to="/pic/ss" slot="left">
          <mt-button class="iconfont icon-fanhuijiantou" ></mt-button>
        </router-link>  
     </mt-header>
     <!-- 内容部分 -->
       <img :src="`http://127.0.0.1:3000/gamehb/${data.gxhb}`" alt="" class="zhb">
       <img :src="`http://127.0.0.1:3000/gamehb/${data.gdhb}`" alt="" class="hbnr"> 

    <!-- 排行榜 -->
    <div class="phb">
      <span class="iconfont icon-paihangbang"></span>
      <span>排行榜</span>
    </div>
    <!-- 底部定位 -->
     <div class="footer">
       <div>
         <div>
         <span class="iconfont icon-fenxiang"></span>
         <span @click="showPopup">分享</span>
         <van-popup v-model="show"  round position="bottom">
          <div>
            <img src="../assets/friend_circle(1).svg" alt="">
            <span>朋友圈</span>
          </div>
          <div>
            <img src="../assets/wei_chat.svg" alt="">
            <span>微信</span>
          </div>
          <div>
            <img src="../assets/save(1).svg" alt="">
            <span>保存截图</span>
          </div>
        </van-popup>
         </div>
         <span>前往报名</span>
       </div>
       
     </div>
  </div>
</template>

<script>
  export default {
     data() {
    return {
      show: false,
      data:''
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    getdata(){
      let gid=this.$route.query.gid
      this.axios.get(`/ssdetail?gid=${gid}`).then(res=>{
        console.log('赛事详情信息',res)
        this.data=res.data.result
      })
    }
  },
  mounted(){
    this.getdata()
  }
  }
</script>

<style lang="scss" scoped>
:deep{
  .van-popup{
    background-color: white;
    width: 95vw ;
    box-sizing: border-box;
    height: 29.33vw;
    display: flex;
    margin: 0 2.67vw;
    justify-content: space-between;
    padding: 0 8vw;   

    >div{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 21.33vw;
      text-align: center;
      margin-top: 5.33vw;
      >img{  
      width: 8vw;
      height: 8vw;
      margin-bottom: 2.67vw;
      }
      >span{
      display: block;
      color: black;
      font-size: 4.26vw;
      }
    }   
  }
}
:deep{
.mint-header{
background-color: #333;
color: white;
height: 13.33vw;
}
.mint-header-title{
  font-size: 5.33vw;
}
.mint-button{
  font-size: 4.8vw;
}
}

.zhb{
  width: 100vw;
  height:53.33vw;
  display: block;
  margin-bottom: 2.67vw;
}

.hbnr{
  display: block;
  width: 95vw;
  margin: 0 auto;
}

.phb{
      position: fixed;
      bottom: 21.33vw;
      right: 4vw;
      color: white;
      width: 34.67vw;
      text-align: center;
      height: 12vw;
      line-height: 12vw;
      background-color: #F8BD1B;
      border-radius: 8vw;
      font-size: 4.26vw;
      >span:first-child{
        font-size: 5.33vw;
        margin-right: 2.67vw;
      }
      >span:last-child{
        letter-spacing: 3px;
        position: relative;
        font-family: '黑体';
        top: -1px;
      }
    }
.footer{
    width: 100vw;
    height: 16vw;
    background-color: #333;
    position: fixed;
    bottom: 0;
   
    >div{
    height: 16vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.67vw;
      >div{
      background-color: #F8701C;
      color: white;
      width: 34.67vw;
      text-align: center;
      height: 12vw;
      line-height: 12vw;
      border-radius: 2.67vw;
      
      >span{
        color: white;
        font-size: 5.07vw;
        margin-right: 2.67vw;
        letter-spacing: 2px;
      }
    }
    >span{
      color: white;
      background-color: #666;
      width: 48vw; 
      text-align: center;
      height: 12vw;
      line-height: 12vw;
      font-size: 5.06vw;
      border-radius: 2.67vw;
      letter-spacing: 2px;
    }
    } 
    
  }
</style> 

