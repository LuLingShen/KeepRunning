<template>
  <div>
     <!-- 搜索框 -->
    <div class="search">
      <input type="text" placeholder="请输入您想要查询的赛道" >
      <div class="ssk">
      <span>|</span>
      <div >
        <img src="../assets/search.svg" alt="">
        <b>搜索</b>
      </div> 
    </div>
    </div>
    <div class="sx_nar">
       <!-- 筛选部分 -->
      <van-dropdown-menu>
      <van-dropdown-item title="筛选" ref="item" >
        <van-cell center >
        <template>
          <div class="tc">
      <p>推荐</p>
      <div class="lateral-sliding">
        <div class="lateral-sliding-item">
           <span class="each-img" v-for="(n,i) in items" :key="i"  @click="now=i" :class="{active:now==i}">{{n}}</span>
        </div>
      </div>
      <p>距离</p>
      <div class="lateral-sliding">
        <div class="lateral-sliding-item">
           <span class="each-space" v-for="(x,i) in spaces" :key="i"  @click="jl=i" :class="{active:jl==i}">{{x}}</span>
        </div>
      </div>
      <div class="btn">
        <mt-button type="default" >重置</mt-button>
        <mt-button type="primary" style="background-color:orange">完成</mt-button>
      </div> 
          </div>
        </template>
        </van-cell>
     </van-dropdown-item>
      </van-dropdown-menu>
     <!-- 活动页面的二级标题 -->
      <div class="hd_title">
     <span class="" v-for="(n,i) in title" :key="i"  @click="selected=i" :class="{active:selected==i}">{{n.name}}</span>
       </div>
    </div>
    <div >
       <hd-item></hd-item>
    </div>
   
    
  </div>
</template>

<script>
import HdItem from '@/components/HdItem.vue';
  export default {
  components: { HdItem }, 
    data() {
      return {
        now:0,
        items:['热门排序'],
        jl:0,
        spaces:['3KM','5KM','10KM','20KM','30KM','50KM','80KM','100KM'],
        title:[
          {
            id:1,
            name:'全部',
          },
          {
            id:2,
            name:'寻宝'
          },
          {
            id:3,
            name:'例跑'
          },
        ],
        selected:0,
      }
    },
     methods: {
      onConfirm() {
      this.$refs.item.toggle();
      },
    },
  }
</script>

<style lang="scss" scoped>
:deep{
  .van-cell{
  background-image: none;
}
.van-dropdown-menu__bar{
  background-color:transparent;
  box-shadow: none;
  
}
.van-ellipsis{
  color: white;
  font-size: 4.26vw;
}
.van-dropdown-menu__item{
  position: relative;
 
}
.van-dropdown-menu__title{
  position: absolute;
  right: 8vw;
}
.van-dropdown-menu__title--active::after {
    border-color: transparent transparent white white;
    border-width: 1.33vw;
    border-radius: 2px;
    /* top: 70%; */
    margin-top: 2px;
}
.van-dropdown-menu__title::after {
    border-color: transparent transparent white white;
    top: 25%;
    right: -3.2vw;
    border-width: 1.33vw;
    border-radius: 2px;
}
.van-overlay{
  width: 0;
}
.van-dropdown-item__content{
  border: 0;
  box-shadow: none;
}
}

</style>
<style>
 
</style>
<style lang="scss" scoped>

*{
  padding: 0;
  margin: 0;
}
.search{
    position: relative;
    // background-color: orange;
    width: 100vw;
    height: 11vw;
    margin-bottom: 8vw;
  }
  input{
    width: 90vw;
    height: 11vw;
    margin: 4.8vw 2.13vw;
    background-color: #4c4d47;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 5px;
    padding-left: 4vw;
  
  }
  input::-webkit-input-placeholder{
	color:#8D8c86;
	font-size:16px;
  font-weight: 400;
}
  .ssk{
    display: flex;
    align-items: center;
    color: white;
    position: absolute;
    right: 6.4vw;
    top: 5.2vw;
    width:22vw;
    height: 10.67vw;
    
  }
  .ssk span{
    margin-right: 4vw;
    font-size: 5vw;
    display: inline-block;
    position: absolute;
    top: 1.5vw;
    
  }
  .ssk img{
    width: 5vw;
    vertical-align: middle;
    display: inline-block;
    position: absolute;
    left: 6vw;
    top: 2.13vw;

  }
  .ssk b{
    display: inline-block;
    font-weight: 400;
    font-size: 4.26vw;
    position: absolute;
    right: 1vw;
    top: 1.46vw;
  }
.tc{
  width: 100vw;
  height: auto;
  background-color: #333;
  color: white;
  // overflow: hidden;
}
.tc p{
  margin: 0;
  padding-left: 2.13vw;
  font-size: 4.27vw;
  // padding-bottom: 10px;
}
.lateral-sliding {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
}
.lateral-sliding-item {
  display: flex;
  margin:2.67vw 2.13vw;
  
  /* background-color: yellow; */
}

.lateral-sliding::-webkit-scrollbar {
  display: none;
}
.each-img {
  border-radius: 1.33vw;
  // display: flex;
  width: 22.67vw;
  // padding: 10px;
  text-align: center;
  height: 10.67vw;
  line-height: 10.67vw;
  background-color: #898884;
  margin-right: 2.67vw;
  color: white;
  font-size: 4vw;
  &.active{
  color: orange;
  background-color: rgba(234, 186, 67,0.3);
}
}
.each-space {
  border-radius: 1.33vw;
  padding: 2.67vw;
  background-color: #898884;
  margin-right:2.67vw;
  color: white;
  font-size: 4vw;
  &.active{
  color: orange;
  background-color: rgba(234, 186, 67,0.3);
}
}

.btn{
  display: flex;
  justify-content: space-evenly;
}
button{
  padding:2.67vw 18.67vw;
  margin:4vw 1.33vw;
}
.sd-item{
  margin-top: 1px;
  margin-bottom: 2.4vw;
}
.sx_nar{
  width: 100vw;
  position: relative;
}
.hd_title{
  position: absolute;
  top: 2.93vw;
  left: 2.13vw;
  >span{
    color: #ccc;
    font-size: 4vw;
    margin: 0  2.13vw;
    &.active{
    color: white;
    font-size: 4.53vw;
    background-color: none;
  }
  }

}
</style>