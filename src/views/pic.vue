<template>
  <div>
    <!-- 导航条 -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="sd" >赛道</mt-tab-item>
      <mt-tab-item id="hd" >活动</mt-tab-item>
      <mt-tab-item id="ss">赛事</mt-tab-item>
    </mt-navbar>
   
    
    <router-view/>

   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: this.$route.path.split('/').pop(),
        
       
      }
    },
    activated(){
      this.selected=this.$route.path.split('/').pop()
    },
    watch:{
      selected(newval,oldval){
        if(newval==this.$route.path.split('/').pop()){
          return
        }
        if(newval=='sd'){
          this.$router.push('/pic/sd')
        }else if(newval=='hd'){
          this.$router.push('/pic/hd')
        }else if(newval=='ss'){
          this.$router.push('/pic/ss')
        }
      }
    },
   
  }
</script>

<style lang="scss" >
 body{
    background-color: #363636;
    margin: 0;
    padding: 0;
  }
</style>
<style lang="scss" scoped>
 
  :deep{
    .mint-navbar{
    background-color: #333;
  }
  .mint-navbar .mint-tab-item{
    padding: 5.33vw 0 4px 0px;
    // border-bottom: 2px solid orange;

  }
  .mint-navbar .mint-tab-item.is-selected{
    border: none;
    position: relative;
  }
  .mint-navbar .mint-tab-item.is-selected::before{
    content: "";
    position: absolute; 
    left: 35%; 
    bottom: 0; 
    width: 32%; 
    height: 1px; 
    border-bottom: 2px solid #F2C037;
    box-sizing: border-box; 
  
  }
  .mint-tab-item-label{
    color: white;
    font-style: bold;
    font-size: 4.53vw;
  }
  }
    
  
  
  

</style>