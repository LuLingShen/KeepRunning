<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <input type="text" placeholder="请输入您想要查询的赛道" v-model="kw" />
      <div class="ssk">
        <span>|</span>
        <div @click="keytracks">
          <img src="../assets/search.svg" alt="" />
          <b>搜索</b>
        </div>
      </div>
    </div>
    <!-- 筛选部分 -->
    <van-dropdown-menu>
      <van-dropdown-item title="筛选" ref="item">
      <van-cell center >
          <template>
            <div class="tc" >
              <p>赛道类型</p>
              <div class="lateral-sliding">
                <div class="lateral-sliding-item">
                  <!-- <span class="each-img" v-for="(n,i) in tracks" :key="n.id" :class="{active:i==now}" @click="now=i">{{n.sdtype}}</span> -->
                <span class="each-img" v-for="(n,i) in items" :key="i"  @click="now=i" :class="{active:now==i}">{{n}}</span>
                </div>
              </div>
              <p>赛道长度</p>
              <div class="lateral-sliding">
                <div class="lateral-sliding-item">
                  <span
                    class="each-space"
                    v-for="(x, i) in spaces"
                    :key="i"
                    @click="jl = i"
                    :class="{ active: jl == i }"
                    >{{ x }}KM</span
                  >
                </div>
              </div>
            </div>
          </template>
      </van-cell>
      <div style="display:flex;justify-content: space-between;box-sizing: border-box;padding: 0 10px;background-color: #333;">
        <van-button type="danger" block  @click="reset">重置</van-button>
        <van-button type="danger" block  @click="complete">确认</van-button>
      </div>
      </van-dropdown-item>
    </van-dropdown-menu>

    <!-- 赛事组件部分 -->
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div style="margin-bottom: 52px" 
          e-scroll-distance="50"  v-infinite-scroll="loadMore" v-if="tracks.length>0" >
      <sd-item  v-for="n in tracks" :key="n.tid" :item="n"></sd-item>
     </div>
     </van-pull-refresh>
  </div>
</template>

<script>
import SdItem from "@/components/SdItem.vue";
import { Toast } from 'vant';
export default {
  components: { SdItem },

  data() {
    return {
      now: 0,
      items:['全部赛道','公园赛道','竞速赛道','熊猫赛道','休闲赛道','社区赛道','健身赛道','越野赛道','特色赛道'],
      jl: null,
      spaces: ["1", "3", "5", "6", "8", "10", "15", "20"],
      // isloading:false,
      tracks: [],
      // page:1,
      isLoading: false,
      kw: '',
      page:1,
      isloading:false,   //用于表示请求是否正在发送中
   
    };
  },
  mounted() {
     this.loadTracks(1,(data)=>{this.tracks=data})
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.loadTracks(1,(data)=>{this.tracks=data})
      }, 1000);
    },
    onConfirm() {
      this.$refs.item.toggle();  
    },
    loadTracks(page,callback) {
      //弹出等待框
      this.$indicator.open({text:'加载中...',spinnerType:'fading-circle'})
      this.axios.get(`/sdinfo?page=${page}`).then((res)=>{
        console.log('赛道信息',res);
        let trac = res.data.results;    //赛道数组
        callback(trac)                 //调用回调方法，返回arts数组
        this.$indicator.close()
      });
    },
    keytracks() {
      //this.axios.get('/keytrack?kw='+this.kw).then(res=>{
      this.axios
        .get("/keytrack", {
          params: {
            kw: this.kw,
          },
        })
        .then((res) => {
          console.log('搜索框搜索结果',res);
          this.tracks = res.data.results;
        });
    },
    complete(){
      let sdlx= this.items[this.now]
      let sdjl=this.spaces[this.jl]
      this.axios.get('/keytype',{
        params:{
          sdlx:sdlx,
          sdjl:sdjl
        }
      }).then(res=>{
        console.log('关键词搜索结果',res)
        this.tracks=res.data.results
      })
    this.$refs.item.toggle();
    },
    reset(){
      this.now=0
      this.jl=null
      this.axios.get(`/sdinfo`).then((res) => {
        this.tracks = res.data.results;
      });
       this.$refs.item.toggle();
    },
    loadMore(){
      //如果上一个请求正在发送
        if(this.isloading){return}
      //执行发请求前要修改isloading变量--->请求中
        this.isloading=true
      console.log('触底啦触底啦')
      let page=++this.page
      this.loadTracks(page,(data)=>{
          this.tracks.push(...data)
          this.isloading=false
        })
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        console.log('刷新成功')
        this.isLoading = false;
        this.loadTracks(1,(data)=>{this.tracks=data})
      }, 1000);
    },
  },
  activated(){
      console.log('重新激活当前页');
      this.isloading=false
  },
  deactivated(){
      console.log('跳转到其他页');
      this.isloading=true  
  },
};
</script>

<style lang="scss" scoped>
:deep {
  .van-dropdown-menu__bar {
    background-color: transparent;
    box-shadow: none;
    border: none;
    margin-bottom: 2px;
  }
  .van-cell::after {
    display: none;
  }
  .van-ellipsis {
    color: white;
    font-size: 4.26vw;
  }
  .van-dropdown-menu__item {
    position: relative;
  }
  .van-dropdown-menu__title {
    position: absolute;
    right: 30px;
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
  .van-overlay {
    width: 0;
  }
  .van-button{
    width: 170px;
    position: relative;
    height: 36px;
    border: 0;
    letter-spacing: 1px;
    border-radius: 5px;
  }
  .van-button:first-child{
    color: #4c4d47;
    background-color: #fff; 
  }
  .van-button:last-child{
    color: #fff;
    background-color: orange;
  }
  .van-button__content{
    width: 170px;
    position: absolute;
    top: 0;
    left: 0;
  }
  span.van-button__text{
    // width: 170px;
    display: block;
    display: flex;
     font-weight: 600;
  }
}
</style>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.search {
  position: relative;
  // background-color: orange;
  width: 100vw;
  height: 11vw;
  margin-bottom: 8vw;
}
input {
  width: 90vw;
  height: 11vw;
  margin: 4.8vw 2.13vw;
  background-color: #4c4d47;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 5px;
  padding-left: 4vw;
  color: #fff;
}
input::-webkit-input-placeholder {
  color: #8d8c86;
  font-size: 16px;
  font-weight: 400;
}
.ssk {
  display: flex;
  align-items: center;
  color: white;
  position: absolute;
  right: 6.4vw;
  top: 5.2vw;
  width: 22vw;
  height: 10.67vw;
}
.ssk span {
  margin-right: 4vw;
  font-size: 5vw;
  display: inline-block;
  position: absolute;
  top: 1.5vw;
}
.ssk img {
  width: 5vw;
  vertical-align: middle;
  display: inline-block;
  position: absolute;
  left: 6vw;
  top: 2.13vw;
}
.ssk b {
  display: inline-block;
  font-weight: 400;
  font-size: 4.26vw;
  position: absolute;
  right: 1vw;
  top: 1.46vw;
}
.tc {
  width: 100vw;
  height: auto;
  background-color: #333;
  color: white;
  // overflow: hidden;
}

.tc p {
  margin: 0;
  padding-left: 2.13vw;
  font-size: 4.26vw;
  // padding-bottom: 10px;
}
.lateral-sliding {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
}
.lateral-sliding-item {
  display: flex;
  margin: 2.67vw 2.13vw;

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
  font-size: 0.9375rem;
}
.each-space {
  border-radius: 1.33vw;
  padding: 2.67vw;
  background-color: #898884;
  margin-right: 2.67vw;
  color: white;
  font-size: 0.9375rem;
}
.active {
  color: orange;
  background-color: rgba(234, 186, 67, 0.3);
}
.btn {
  display: flex;
  justify-content: space-evenly;
}
button {
  padding: 2.67vw 18.67vw;
  margin: 4vw 1.33vw;
}
.sd-item {
  margin-top: 2vw;
  margin-bottom: 2.4vw;
}
</style>
