<template>
  <div class="ss-item">
    <div class="content">
      <!-- 上半部分 -->
      <div class="up_content">
        <img :src="`http://127.0.0.1:3000/gamehb/${item.gxhb}`" alt="">
        <div>
          <h4>{{item.gname}}</h4>
          <span>报名时间：{{item.gdate}}  {{item.gdatetime}}</span>
          <span>比赛地址：{{item.gaddress}}</span>
          <button>{{item.gstate}}</button>
        </div>
      </div>
      <!-- 下版部分 -->
      <div class="down_content">
        <span>赛事{{item.gstate}}</span>
        <span>竞赛时间：{{item.gmonth}}月{{item.gday}}日</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['item']
  }
</script>

<style lang="scss" scoped>
.content{
  width: 95vw;
  height: auto;
  margin:0 auto;
  margin-top: 2.67vw;
  border-radius: 2.13vw;
  background-color: #666;
.up_content{
  display: flex;
  align-items: center;
  margin:0 2.67vw;
  padding:2.67vw 0;
  border-bottom: 1px solid #ddd;
  >img{
    border-radius: 1.87vw;
    width: 26.67vw;
    height:26.67vw;
    margin-right: 2.67vw;
  }
  >div{
    display: flex;
    height: 26.67vw;
    flex-direction: column;
    justify-content: space-between;
     > h4{
    margin: 0;
    color: white;
    letter-spacing: 2px;
    font-weight: 500;
    font-family: '微软雅黑';
    font-size: 4.8vw;
    }
    >span{
    color: #aaa;
    width: 61.33vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 4.1vw;
    }
    >button{
      width: 60vw;
      height: 6.67vw;
      border-radius: 1.33vw;
      color: white;
      background-color: #999;
      border: none;
      font-size: 4.26vw;
      
    }
  }
 
}
.down_content{
  height: 10.66vw;
  // line-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2.67vw;
  font-size: 4vw;
  >span:first-child{
    color: #aaa;
  }
  >span:last-child{
    color: #eee;
    border: 1px solid #eee;
    border-radius:8vw;
    padding: 2px 2.67vw;
  }
}
}

</style>